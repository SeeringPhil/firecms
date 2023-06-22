import React, { useEffect } from "react";
import clsx from "clsx";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface SheetProps {
    children: React.ReactNode;
    open: boolean;
    side?: "top" | "bottom" | "left" | "right";
    transparent?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const Sheet: React.FC<SheetProps> = ({
                                                children,
                                                side = "right",
                                                open,
                                                onOpenChange,
                                                transparent,
                                                ...props
                                            }) => {

    const [displayed, setDisplayed] = React.useState(false);

    useEffect(() => {
        if (!open) {
            const timeout = setTimeout(() => {
                setDisplayed(false);
            }, 250);
            return () => clearTimeout(timeout);
        } else {
            setDisplayed(true);
            return () => {
            };
        }
    }, [open]);

    const transformValue: Record<string, string> = {
        top: "-translate-y-full",
        bottom: "translate-y-full",
        left: "-translate-x-full",
        right: "translate-x-full"
    };

    return (

        <DialogPrimitive.Root open={displayed || open}
                              onOpenChange={onOpenChange}>
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay
                    className={clsx("fixed inset-0 transition-opacity z-20 ease-in-out duration-200  backdrop-blur-sm",
                        transparent ? "bg-white bg-opacity-80" : "bg-black bg-opacity-50",
                        "dark:bg-black dark:bg-opacity-60",
                        displayed && open ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                        pointerEvents: displayed ? "auto" : "none",
                    }}
                />
                <DialogPrimitive.Content
                    {...props}
                    className={clsx("fixed transform z-20 transition-transform duration-[250ms] ease-in-out",
                        "outline-none focus:outline-none",
                        !transparent ? "shadow-md" : "",
                        side === "top" || side === "bottom" ? "w-full" : "h-full",
                        side === "left" || side === "top" ? "left-0 top-0" : "right-0 bottom-0",
                        !displayed || !open ? transformValue[side] : "")
                    }
                >
                    {children}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    );
};
