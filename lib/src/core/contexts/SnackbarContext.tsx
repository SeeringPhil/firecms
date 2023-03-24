import React, { PropsWithChildren } from "react";
import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";

export const SnackbarProvider: React.FC<PropsWithChildren<{maxSnack: number, autoHideDuration: number }>> = ({ children, maxSnack = 3, autoHideDuration = 3500 }) => {

    return (
        <NotistackSnackbarProvider maxSnack={maxSnack}
                                   autoHideDuration={autoHideDuration}>
            {children}
        </NotistackSnackbarProvider>
    );
};
