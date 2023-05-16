import React from "react";
export type InputType = "text" | "number";
export declare function TextInput<T extends string | number>({ value, setValue, label, inputType, multiline, disabled, error, endAdornment, autoFocus, placeholder }: {
    inputType?: InputType;
    value: T;
    setValue: (value: T | null) => void;
    label?: React.ReactNode;
    multiline?: boolean;
    disabled?: boolean;
    error?: boolean;
    endAdornment?: React.ReactNode;
    autoFocus?: boolean;
    placeholder?: string;
}): import("@emotion/react/jsx-runtime").JSX.Element;
