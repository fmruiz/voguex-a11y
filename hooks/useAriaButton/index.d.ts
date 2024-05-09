interface AriaButtonProps {
    ariaLabel: string;
    ariaPressed?: boolean;
    ariaDisabled?: boolean;
}
/**
 * Custom hook that provides quick way to implement the necessary
 * attributes to convert your current button in an accessible button
 * @param AriaButtonProps
 * @returns
 */
declare const useAriaButton: ({ ariaLabel, ariaPressed, ariaDisabled, }: AriaButtonProps) => {
    [key: string]: string | boolean;
};
export default useAriaButton;
