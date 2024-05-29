"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("./styles.css");
var CSSAnimationTransitionWrapper = function (props) {
    var timeout = props.timeout, customClassName = props.customClassName, show = props.show, unmountOnExit = props.unmountOnExit;
    var _a = (0, react_1.useState)(show), showComponent = _a[0], setShowComponent = _a[1];
    (0, react_1.useEffect)(function () {
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
    return showComponent ? react_1["default"].createElement("div", { className: "css-animation-transition ".concat(customClassName) }, props.children) : null;
};
exports["default"] = CSSAnimationTransitionWrapper;
//# sourceMappingURL=CSSAnimationTransitionWrapper.js.map