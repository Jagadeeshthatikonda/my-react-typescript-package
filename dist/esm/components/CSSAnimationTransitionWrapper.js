import React, { useState, useEffect } from "react";
import "./styles.css";
var CSSAnimationTransitionWrapper = function (props) {
    var timeout = props.timeout, customClassName = props.customClassName, show = props.show, unmountOnExit = props.unmountOnExit;
    var _a = useState(show), showComponent = _a[0], setShowComponent = _a[1];
    useEffect(function () {
        if (show) {
            setShowComponent(true);
            return;
        }
        if (!unmountOnExit) {
            return;
        }
        var timeoutId = setTimeout(function () {
            setShowComponent(false);
        }, timeout);
        return function () {
            clearTimeout(timeoutId);
        };
        // eslint-disable-next-line
    }, [show]);
    return showComponent ? (React.createElement("div", { className: "css-animation-transition ".concat(customClassName) }, props.children)) : null;
};
export default CSSAnimationTransitionWrapper;
//# sourceMappingURL=CSSAnimationTransitionWrapper.js.map