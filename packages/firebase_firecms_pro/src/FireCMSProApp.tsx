import React from "react";
import { GoogleAuthProvider } from "firebase/auth";

import {
    CircularProgressCenter,
    FireCMS,
    ModeControllerProvider,
    NavigationRoutes,
    PropertyConfig,
    Scaffold,
    SideDialogs,
    SnackbarProvider,
    useBrowserTitleAndIcon,
    useBuildLocalConfigurationPersistence,
    useBuildModeController,
    useBuildNavigationController
} from "@firecms/core";

import { FireCMSProAppProps } from "./FireCMSProAppProps";
import { FirebaseLoginView } from "./components/FirebaseLoginView";
import {
    FirebaseAuthController,
    useFirebaseAuthController,
    useFirebaseStorageSource,
    useFirestoreDelegate,
    useInitialiseFirebase,
    useInitializeAppCheck,
    useValidateAuthenticator
} from "@firecms/firebase";
import { CenteredView } from "@firecms/ui";

const DEFAULT_SIGN_IN_OPTIONS = [
    GoogleAuthProvider.PROVIDER_ID
];

/**
 * This is the default implementation of a FireCMS app using the Firebase services
 * as a backend.
 * You can use this component as a full app, by specifying collections and
 * entity collections.
 *
 * This component is in charge of initialising Firebase, with the given
 * configuration object.
 *
 * If you are building a larger app and need finer control, you can use
 * {@link FireCMS}, {@link Scaffold}, {@link SideDialogs}
 * and {@link NavigationRoutes} instead.
 *
 * @param props
 * @constructor
 * @category Firebase
 */
export function FireCMSProApp({
                                  name,
                                  logo,
                                  logoDark,
                                  toolbarExtraWidget,
                                  authentication,
                                  collections,
                                  views,
                                  textSearchControllerBuilder,
                                  allowSkipLogin,
                                  signInOptions = DEFAULT_SIGN_IN_OPTIONS,
                                  firebaseConfig,
                                  onFirebaseInit,
                                  appCheckOptions,
                                  dateTimeFormat,
                                  locale,
                                  basePath,
                                  baseCollectionPath,
                                  onAnalyticsEvent,
                                  propertyConfigs: propertyConfigsProp,
                                  plugins,
                                  autoOpenDrawer,
                                  firestoreIndexesBuilder,
                                  components,
                                  localTextSearchEnabled = false,
                              }: FireCMSProAppProps) {

    /**
     * Update the browser title and icon
     */
    useBrowserTitleAndIcon(name, logo);

    const propertyConfigs: Record<string, PropertyConfig> = (propertyConfigsProp ?? [])
        .map(pc => ({
            [pc.key]: pc
        }))
        .reduce((a, b) => ({ ...a, ...b }), {});

    const {
        firebaseApp,
        firebaseConfigLoading,
        configError
    } = useInitialiseFirebase({
        onFirebaseInit,
        firebaseConfig
    });

    /**
     * Controller used to manage the dark or light color mode
     */
    const modeController = useBuildModeController();

    const {
        appCheckLoading,
        getAppCheckToken
    } = useInitializeAppCheck({
        firebaseApp,
        options: appCheckOptions
    });

    /**
     * Controller for managing authentication
     */
    const authController: FirebaseAuthController = useFirebaseAuthController({
        firebaseApp,
        signInOptions
    });

    /**
     * Controller for saving some user preferences locally.
     */
    const userConfigPersistence = useBuildLocalConfigurationPersistence();

    const firestoreDelegate = useFirestoreDelegate({
        firebaseApp,
        textSearchControllerBuilder: textSearchControllerBuilder,
        firestoreIndexesBuilder: firestoreIndexesBuilder,
        localTextSearchEnabled
    })

    /**
     * Controller used for saving and fetching files in storage
     */
    const storageSource = useFirebaseStorageSource({
        firebaseApp
    });

    /**
     * Validate authenticator
     */
    const {
        authLoading,
        canAccessMainView,
        notAllowedError
    } = useValidateAuthenticator({
        authController,
        authentication,
        getAppCheckToken,
        appCheckForceRefresh: (appCheckOptions && appCheckOptions.forceRefresh) ? appCheckOptions.forceRefresh! : false,
        dataSourceDelegate: firestoreDelegate,
        storageSource
    });

    const navigationController = useBuildNavigationController({
        collections,
        views,
        basePath,
        baseCollectionPath,
        authController,
        dataSourceDelegate: firestoreDelegate
    });

    if (firebaseConfigLoading || !firebaseApp || appCheckLoading) {
        return <>
            <CircularProgressCenter/>
        </>;
    }

    if (configError) {
        return <CenteredView>{configError}</CenteredView>;
    }

    return (
        <SnackbarProvider>
            <ModeControllerProvider value={modeController}>

                <FireCMS
                    authController={authController}
                    navigationController={navigationController}
                    userConfigPersistence={userConfigPersistence}
                    dateTimeFormat={dateTimeFormat}
                    dataSourceDelegate={firestoreDelegate}
                    storageSource={storageSource}
                    entityLinkBuilder={({ entity }) => `https://console.firebase.google.com/project/${firebaseApp.options.projectId}/firestore/data/${entity.path}/${entity.id}`}
                    locale={locale}
                    onAnalyticsEvent={onAnalyticsEvent}
                    plugins={plugins}
                    propertyConfigs={propertyConfigs}>
                    {({
                          context,
                          loading
                      }) => {

                        let component;
                        if (loading || authLoading) {
                            component = <CircularProgressCenter size={"large"}/>;
                        } else {
                            const usedLogo = modeController.mode === "dark" && logoDark ? logoDark : logo;
                            if (!canAccessMainView) {
                                const LoginViewUsed = components?.LoginView ?? FirebaseLoginView;
                                component = (
                                    <LoginViewUsed
                                        logo={usedLogo}
                                        allowSkipLogin={allowSkipLogin}
                                        signInOptions={signInOptions ?? DEFAULT_SIGN_IN_OPTIONS}
                                        firebaseApp={firebaseApp}
                                        authController={authController}
                                        notAllowedError={notAllowedError}/>
                                );
                            } else {
                                component = (
                                    <Scaffold
                                        name={name}
                                        logo={usedLogo}
                                        fireCMSAppBarProps={{
                                            endAdornment: toolbarExtraWidget
                                        }}
                                        autoOpenDrawer={autoOpenDrawer}>
                                        <NavigationRoutes
                                            HomePage={components?.HomePage}/>
                                        <SideDialogs/>
                                    </Scaffold>
                                );
                            }
                        }

                        return component;
                    }}
                </FireCMS>
            </ModeControllerProvider>
        </SnackbarProvider>
    );
}
