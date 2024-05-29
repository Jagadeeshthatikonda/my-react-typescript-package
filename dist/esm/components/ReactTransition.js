import React, { useState } from "react";
import CSSAnimationTransitionWrapper from "./CSSAnimationTransitionWrapper";
import "./styles.css";
import useSwitchTransition from "./useSwitchTransition";
var Component1 = function (_a) {
    var navigateToNextComponent = _a.navigateToNextComponent;
    return (React.createElement("div", { className: "component" },
        React.createElement("h2", null, "Where Are You Going?"),
        React.createElement("button", { className: "nav-btn", onClick: function () { return navigateToNextComponent("C2"); } }, "Next")));
};
var Component2 = function (_a) {
    var navigateToPreviousComponent = _a.navigateToPreviousComponent, navigateToNextComponent = _a.navigateToNextComponent;
    return (React.createElement("div", { className: "component" },
        React.createElement("h2", null, "Check-in & Check-out"),
        React.createElement("div", { className: "date-picker" },
            React.createElement("input", { type: "date", className: "date-input" }),
            React.createElement("input", { type: "date", className: "date-input" })),
        React.createElement("div", null,
            React.createElement("button", { className: "nav-btn", onClick: function () { return navigateToPreviousComponent("C1"); } }, "Prev"),
            React.createElement("button", { className: "nav-btn", onClick: function () { return navigateToNextComponent("C3"); } }, "Next"))));
};
var Component3 = function (_a) {
    var navigateToPreviousComponent = _a.navigateToPreviousComponent;
    return (React.createElement("div", { className: "component" },
        React.createElement("h2", null, "Number of People"),
        React.createElement("div", { className: "people-select" },
            React.createElement("select", { className: "select-input" },
                React.createElement("option", null, "1 Adult"),
                React.createElement("option", null, "2 Adults"),
                React.createElement("option", null, "1 Adult, 1 Child"),
                React.createElement("option", null, "2 Adults, 1 Child")),
            React.createElement("select", { className: "select-input" },
                React.createElement("option", null, "1 Room"),
                React.createElement("option", null, "2 Rooms"),
                React.createElement("option", null, "3 Rooms"))),
        React.createElement("button", { className: "nav-btn", onClick: function () { return navigateToPreviousComponent("C2"); } }, "Prev")));
};
var ReactTransition = function () {
    var _a = useState("C1"), activeComponentId = _a[0], setActiveComponentId = _a[1];
    var _b = useSwitchTransition(), enterAnimation = _b.enterAnimation, existAnimation = _b.existAnimation, goToPreviousComponent = _b.goToPreviousComponent, goToNextComponent = _b.goToNextComponent;
    var prevComponent = function (activeComponentId) {
        goToPreviousComponent();
        setActiveComponentId(activeComponentId);
    };
    var nextComponent = function (activeComponentId) {
        goToNextComponent();
        setActiveComponentId(activeComponentId);
    };
    var renderComponent = function (Component, existingComponentId) { return (React.createElement(CSSAnimationTransitionWrapper, { key: existingComponentId, show: activeComponentId === existingComponentId, customClassName: activeComponentId === existingComponentId
            ? enterAnimation
            : existAnimation, timeout: 500, unmountOnExit: true },
        React.createElement(Component, { navigateToPreviousComponent: prevComponent, navigateToNextComponent: nextComponent }))); };
    return (React.createElement("div", { className: "transition-container" },
        renderComponent(Component1, "C1"),
        renderComponent(Component2, "C2"),
        renderComponent(Component3, "C3")));
};
export default ReactTransition;
//# sourceMappingURL=ReactTransition.js.map