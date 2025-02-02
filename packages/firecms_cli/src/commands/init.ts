import arg from "arg";
import inquirer from "inquirer";
import chalk from "chalk";
import path from "path";
import fs from "fs";

import { promisify } from "util";
import execa from "execa";
import Listr from "listr";

import JSON5 from "json5";
import axios from "axios";
import { DEFAULT_SERVER, DEFAULT_SERVER_DEV } from "../common";
import { getCurrentUser, getTokens, login, refreshCredentials } from "./auth";
import ora from "ora";

import ncp from "ncp";

const access = promisify(fs.access);
const copy = promisify(ncp);

export type InitOptions = Partial<{
    // skipPrompts: boolean;
    git: boolean;
    dir_name: string;

    targetDirectory: string;
    templateDirectory: string;

    // skipInstall: boolean;

    authToken?: string;
    firebaseProjectId?: string;

    v2: boolean;
    pro: boolean;

    env: "prod" | "dev";
    debug: boolean;
}>

export async function createFireCMSApp(rawArgs) {

    console.log(`
${chalk.green.bold(" ___ _          ___ __  __ ___")}
${chalk.green.bold("| __(_)_ _ ___ / __|  \\/  / __|")}
${chalk.green.bold("| _|| | '_/ -_) (__| |\\/| \\__ \\")}
${chalk.green.bold("|_| |_|_| \\___|\\___|_|  |_|___/")}

${chalk.red.bold("Welcome to the FireCMS CLI")} 🔥
`);

    let options = parseArgumentsIntoOptions(rawArgs);

    let currentUser = await getCurrentUser(options.env, options.debug);
    const shouldLogin = !options.v2 && !currentUser;
    if (shouldLogin) {
        console.log("You need to be logged in to create a project");
        await inquirer.prompt([
            {
                type: "confirm",
                name: "login",
                message: "Do you want to log in?",
                default: true,
            }
        ]).then(async answers => {
            if (answers.login) {
                return login(options.env, options.debug);
            }
        });

        let currentUser = await getCurrentUser(options.env, options.debug);
        if (!currentUser) {
            console.log("The login process was not completed. Exiting...");
            return;
        }
    } else if (currentUser) {
        console.log("You are logged in as", currentUser["email"]);
    }

    options = await promptForMissingOptions(options);
    // console.log({ options });

    await createProject(options);
}

function parseArgumentsIntoOptions(rawArgs): InitOptions {
    const args = arg(
        {
            "--git": Boolean,
            "--yes": Boolean,
            "--skipInstall": Boolean,
            "--projectId": String,
            "--v2": Boolean,
            "--pro": Boolean,
            "--debug": Boolean,
            "--env": String
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    const env = args["--env"] || "prod";
    if (env !== "prod" && env !== "dev") {
        console.log("Please specify a valid environment: dev or prod");
        console.log("create-firecms-app --env=prod");
        return;
    }

    return {
        git: args["--git"] || false,
        dir_name: args._[0],
        v2: args["--v2"] || false,
        pro: args["--pro"] || false,
        debug: args["--debug"] || false,
        firebaseProjectId: args["--projectId"],
        env
    };
}

async function promptForMissingOptions(options: InitOptions): Promise<InitOptions> {
    const defaultName = "my-cms";
    // if (options.skipPrompts) {
    //     return {
    //         ...options,
    //         dir_name: options.dir_name || defaultName,
    //     };
    // }

    const questions = [];
    if (!options.v2) {
        questions.push({
            type: "confirm",
            name: "existing_firecms_project",
            message: "Do you already have a FireCMS project?",
            default: true,
        });

        const spinner = ora("Loading your projects").start();
        const projects = await getProjects(options.env, options.debug, onErr => {
            spinner.fail("Error loading projects");
        })
            .then((res) => {
                if (!res) {
                    if (spinner.isSpinning)
                        spinner.fail("Error loading projects");
                    process.exit(1);
                }
                spinner.succeed();
                return res;
            })
            .catch((e) => {
                if (spinner.isSpinning)
                    spinner.fail("Error loading projects");
            });

        const fireCMSProjects = projects.filter(project => project["fireCMSProject"]);
        if (!fireCMSProjects.length) {
            console.log("No FireCMS projects found");
            process.exit(1);
        }
        // console.log({ projects });
        questions.push({
            type: "list",
            name: "firebaseProjectId",
            message: "Select your project",
            when: (answers) => Boolean(answers.existing_firecms_project),
            choices: projects.map(project => project.projectId)
        });
    }

    if (!options.dir_name) {
        questions.push({
            type: "input",
            name: "dir_name",
            message: "Please choose which folder to create the project in",
            default: defaultName,
        });
    }

    if (!options.git) {
        questions.push({
            type: "confirm",
            name: "git",
            message: "Initialize a git repository?",
            when: (answers) => Boolean(answers.firebaseProjectId),
            default: false,
        });
    }

    const answers = await inquirer.prompt(questions);

    if (!options.v2 && !answers.existing_firecms_project) {
        console.log("Please create a FireCMS project first. Head to https://app.firecms.co to get started and then run this command again!");
        process.exit(1);
    }

    return {
        ...options,
        dir_name: options.dir_name || answers.dir_name,
        git: options.git || answers.git,
        firebaseProjectId: answers.firebaseProjectId,
    };
}

export async function createProject(options: InitOptions) {

    const dir = "./" + options.dir_name;
    if (fs.existsSync(dir)) {
        if (fs.readdirSync(dir).length !== 0) {
            console.error("%s Directory is not empty", chalk.red.bold("ERROR"));
            process.exit(1);
        }
    } else {
        fs.mkdirSync(dir);
    }

    const targetDirectory = path.resolve(
        process.cwd(),
        dir
    );

    options = {
        ...options,
        targetDirectory: targetDirectory,
    };

    let templateFolder: string;
    if (options.v2) {
        templateFolder = "template_v2";
    } else if (options.pro) {
        templateFolder = "template_pro";
    } else {
        templateFolder = "template_v3";
    }
    const templateDir = path.resolve(
        __dirname,
        "../../templates/" + templateFolder
    );
    options.templateDirectory = templateDir;

    try {
        await access(templateDir, fs.constants.R_OK);
    } catch (err) {
        console.error("%s Invalid template name " + templateDir, chalk.red.bold("ERROR"));
        process.exit(1);
    }

    const tasks = new Listr([
        {
            title: "Copy project files",
            task: (ctx) => copyTemplateFiles(options, ctx.webappConfig),
        },
        {
            title: "Initialize git",
            task: () => initGit(options),
            enabled: () => options.git,
        }
    ]);

    await tasks.run();

    console.log("");
    console.log("%s Your project is ready!", chalk.green.bold("DONE"));
    console.log("");

    if (options.v2) {
        console.log("First update your firebase config in");
        console.log(chalk.bgYellow.black.bold("src/firebase-config.ts"));
        console.log("");
        console.log("Then run:");
        console.log(chalk.cyan.bold("cd " + options.dir_name));
        console.log(chalk.cyan.bold("yarn"));
        console.log(chalk.cyan.bold("yarn dev"));
        console.log("");
    } else if (options.pro) {
        console.log("Run:");
        console.log(chalk.cyan.bold("cd " + options.dir_name));
        console.log(chalk.cyan.bold("yarn"));
        console.log(chalk.cyan.bold("yarn dev"));
        console.log("");
    } else {
        console.log("If you want to run your project locally, run:");
        console.log(chalk.bgYellow.black.bold("cd " + options.dir_name));
        console.log(chalk.bgYellow.black.bold("yarn install"));
        console.log(chalk.bgYellow.black.bold("yarn dev"));
        console.log("");
        console.log("If you want to deploy your project, run:");
        console.log(chalk.bgYellow.black.bold("yarn deploy"));
        console.log("and see it running in https://app.firecms.co");
    }

    return true;
}

async function copyTemplateFiles(options: InitOptions, webappConfig?: object) {
    return copy(options.templateDirectory, options.targetDirectory, {
        clobber: false,
        dot: true,
    }).then(async _ => {
        if (options.v2 && webappConfig) {
            writeWebAppConfig(options, webappConfig);
        }
        if (!options.v2) {
            if (options.pro) {

                const firebaseConfig = await getProjectWebappConfig(options.env, options.firebaseProjectId, options.debug);
                await copyWebAppConfig(options, firebaseConfig);

                return replaceProjectIdInTemplateFiles(options, [
                    "./src/App.tsx",
                    "./firebase.json",
                    "./package.json",
                    "./.firebaserc",
                ]);
            } else {

                return replaceProjectIdInTemplateFiles(options, [
                    "./src/App.tsx",
                    "./package.json",
                ]);
            }
        }
    });
}

async function copyWebAppConfig(options: InitOptions, firebaseConfig: object) {

    const fullFileName = path.resolve(options.targetDirectory, "src/firebase-config.ts");
    fs.writeFile(fullFileName, "export const firebaseConfig = " + JSON.stringify(firebaseConfig, null, 4), err => {
        if (err) {
            console.error("Failed to write file:", err);
        } else {
            console.log("File written successfully");
        }
    });
}

async function replaceProjectIdInTemplateFiles(options: InitOptions, files: string[] = []) {
    const fs = require("fs");

    for (const file of files) {
        const fullFileName = path.resolve(options.targetDirectory, file);
        await fs.readFile(fullFileName, "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }
            const result = data.replace(/\[REPLACE_WITH_PROJECT_ID]/g, options.firebaseProjectId);

            fs.writeFile(fullFileName, result, "utf8", function (err) {
                if (err) return console.log(err);
            });
        });
    }

}

async function initGit(options: InitOptions) {
    const result = await execa("git", ["init"], {
        cwd: options.targetDirectory,
    });
    if (result.failed) {
        return Promise.reject(new Error("Failed to initialize git"));
    }
    return;
}

function writeWebAppConfig(options: InitOptions, webappConfig: object) {
    fs.writeFile(options.targetDirectory + "/src/firebase_config.ts",
        `export const firebaseConfig = ${JSON5.stringify(webappConfig, null, "\t")};`,
        function (err) {
            if (err) return console.log(err);
        });
}

async function getProjects(env: "prod" | "dev", debug: boolean, onErr?: (e: any) => void) {

    try {
        const credentials = await getTokens(env, debug);
        const tokens = await refreshCredentials(env, credentials, onErr);
        if (!tokens) {
            return null;
        }
        const server = env === "prod" ? DEFAULT_SERVER : DEFAULT_SERVER_DEV;
        const response = await axios.get(server + "/gcp_projects", {
            headers: {
                ["x-admin-authorization"]: `Bearer ${tokens["access_token"]}`
            },
        });

        if (response.status >= 400) {
            console.log(response.data.data?.message);
            return null;
        }
        return response.data.data;
    } catch (e) {
        if (onErr) {
            onErr(e);
        }
        console.error("Error getting projects", e.response?.data);
    }
}

async function getProjectWebappConfig(env: "prod" | "dev", projectId: string, debug: boolean, onErr?: (e: any) => void) {

    try {
        const credentials = await getTokens(env, debug);
        const tokens = await refreshCredentials(env, credentials, onErr);
        if (!tokens) {
            return null;
        }
        const server = env === "prod" ? DEFAULT_SERVER : DEFAULT_SERVER_DEV;
        const response = await axios.get(server + `/projects/${projectId}/webapp_config`, {
            headers: {
                ["x-admin-authorization"]: `Bearer ${tokens["access_token"]}`
            },
        });

        if (response.status >= 400) {
            console.log(response.data.data?.message);
            return null;
        }
        return response.data.data;
    } catch (e) {
        if (onErr) {
            onErr(e);
        }
        console.error("Error getting projects", e.response?.data);
    }
}
