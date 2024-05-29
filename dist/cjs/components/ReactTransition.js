"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var CSSAnimationTransitionWrapper_1 = tslib_1.__importDefault(require("./CSSAnimationTransitionWrapper"));
require("./styles.css");
var useSwitchTransition_1 = tslib_1.__importDefault(require("./useSwitchTransition"));
var Component1 = function (_a) {
    var navigateToNextComponent = _a.navigateToNextComponent;
    return (react_1["default"].createElement("div", { className: "component" },
        react_1["default"].createElement("h2", null, "Where Are You Going?"),
        react_1["default"].createElement("button", { className: 'nav-btn', onClick: function () { return navigateToNextComponent('C2'); } }, "Next")));
};
var Component2 = function (_a) {
    var navigateToPreviousComponent = _a.navigateToPreviousComponent, navigateToNextComponent = _a.navigateToNextComponent;
    return (react_1["default"].createElement("div", { className: "component" },
        react_1["default"].createElement("h2", null, "Check-in & Check-out"),
        react_1["default"].createElement("div", { className: 'date-picker' },
            react_1["default"].createElement("input", { type: 'date', className: 'date-input' }),
            react_1["default"].createElement("input", { type: 'date', className: 'date-input' })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { className: 'nav-btn', onClick: function () { return navigateToPreviousComponent('C1'); } }, "Prev"),
            react_1["default"].createElement("button", { className: 'nav-btn', onClick: function () { return navigateToNextComponent('C3'); } }, "Next"))));
};
var Component3 = function (_a) {
    var navigateToPreviousComponent = _a.navigateToPreviousComponent;
    return (react_1["default"].createElement("div", { className: "component" },
        react_1["default"].createElement("h2", null, "Number of People"),
        react_1["default"].createElement("div", { className: 'people-select' },
            react_1["default"].createElement("select", { className: 'select-input' },
                react_1["default"].createElement("option", null, "1 Adult"),
                react_1["default"].createElement("option", null, "2 Adults"),
                react_1["default"].createElement("option", null, "1 Adult, 1 Child"),
                react_1["default"].createElement("option", null, "2 Adults, 1 Child")),
            react_1["default"].createElement("select", { className: 'select-input' },
                react_1["default"].createElement("option", null, "1 Room"),
                react_1["default"].createElement("option", null, "2 Rooms"),
                react_1["default"].createElement("option", null, "3 Rooms"))),
        react_1["default"].createElement("button", { className: 'nav-btn', onClick: function () { return navigateToPreviousComponent('C2'); } }, "Prev")));
};
var ReactTransition = function () {
    var _a = (0, react_1.useState)('C1'), activeComponentId = _a[0], setActiveComponentId = _a[1];
    var _b = (0, useSwitchTransition_1["default"])(), enterAnimation = _b.enterAnimation, existAnimation = _b.existAnimation, goToPreviousComponent = _b.goToPreviousComponent, goToNextComponent = _b.goToNextComponent;
    var prevComponent = function (activeComponentId) {
        goToPreviousComponent();
        setActiveComponentId(activeComponentId);
    };
    var nextComponent = function (activeComponentId) {
        goToNextComponent();
        setActiveComponentId(activeComponentId);
    };
    var renderComponent = function (Component, existingComponentId) { return (react_1["default"].createElement(CSSAnimationTransitionWrapper_1["default"], { key: existingComponentId, show: activeComponentId === existingComponentId, customClassName: activeComponentId === existingComponentId ? enterAnimation : existAnimation, timeout: 500, unmountOnExit: true },
        react_1["default"].createElement(Component, { navigateToPreviousComponent: prevComponent, navigateToNextComponent: nextComponent }))); };
    return (react_1["default"].createElement("div", { className: 'transition-container' },
        renderComponent(Component1, 'C1'),
        renderComponent(Component2, 'C2'),
        renderComponent(Component3, 'C3')));
};
exports["default"] = ReactTransition;
//# sourceMappingURL=ReactTransition.js.map