import path from "path";
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import ViteFonts from "vite-plugin-fonts"

import dns from "dns"

dns.setDefaultResultOrder("verbatim")

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        logOverride: { "this-is-undefined-in-esm": "silent" }
    },
    server: {
        port: 9999,
        open: true
    },
    build: {
        outDir: "./build",
        target: "esnext",
        sourcemap: true
    },
    optimizeDeps: { include: ["react/jsx-runtime"] },
    plugins: [
        react({
            jsxImportSource: "@emotion/react"
        }),
        ViteFonts({
            google: {
                families: ["Rubik", "Roboto", "Helvetica"]
            }
        })],
    resolve: {
        alias: {
            firecms: path.resolve(__dirname, "../lib/src")
        }
    }
})
