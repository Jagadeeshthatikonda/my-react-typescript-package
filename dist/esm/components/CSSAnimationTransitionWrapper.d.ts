import React from "react";
import "./styles.css";
interface CSSAnimationTransitionWrapperProps {
    timeout: number;
    show: boolean;
    customClassName: string;
    unmountOnExit: boolean;
    children: React.ReactElement;
}
declare const CSSAnimationTransitionWrapper: (props: CSSAnimationTransitionWrapperProps) => React.ReactElement | null;
export default CSSAnimationTransitionWrapper;
