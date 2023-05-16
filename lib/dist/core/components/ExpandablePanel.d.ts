import { PropsWithChildren } from "react";
export declare function ExpandablePanel({ title, children, invisible, initiallyExpanded, padding, darken, onExpandedChange }: PropsWithChildren<{
    title: React.ReactNode;
    invisible?: boolean;
    initiallyExpanded?: boolean;
    padding?: number | string;
    darken?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
}>): import("@emotion/react/jsx-runtime").JSX.Element;
