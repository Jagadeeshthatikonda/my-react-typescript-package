declare const useSwitchTransition: () => {
    goToPreviousComponent: () => void;
    goToNextComponent: () => void;
    enterAnimation: string;
    existAnimation: string;
};
export default useSwitchTransition;
