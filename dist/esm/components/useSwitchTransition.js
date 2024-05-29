import { useState } from "react";
var useSwitchTransition = function () {
    var _a = useState("default"), enterAnimation = _a[0], setEnterAnimation = _a[1];
    var _b = useState(""), existAnimation = _b[0], setExistAnimation = _b[1];
    var goToPreviousComponent = function () {
        setEnterAnimation("fromLeftToCenter");
        setExistAnimation("fromCenterToRight");
    };
    var goToNextComponent = function () {
        setEnterAnimation("fromRightToCenter");
        setExistAnimation("fromCenterToLeft");
    };
    return {
        goToPreviousComponent: goToPreviousComponent,
        goToNextComponent: goToNextComponent,
        enterAnimation: enterAnimation,
        existAnimation: existAnimation
    };
};
export default useSwitchTransition;
//# sourceMappingURL=useSwitchTransition.js.map