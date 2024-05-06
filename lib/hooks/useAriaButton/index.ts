import { useState, useEffect } from "react";

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
const useAriaButton = ({
  ariaLabel,
  ariaPressed = false,
  ariaDisabled = false,
}: AriaButtonProps) => {
  /**
   * Set your aria attributes
   */
  const [ariaAttributes, setAriaAttributes] = useState<{
    [key: string]: string | boolean;
  }>({});
  useEffect(() => {
    const attributes: { [key: string]: string | boolean } = {
      "aria-label": ariaLabel,
      "aria-pressed": ariaPressed,
      "aria-disabled": ariaDisabled,
    };

    setAriaAttributes(attributes);

    return () => {};
  }, [ariaLabel, ariaPressed, ariaDisabled]);

  return ariaAttributes;
};

export default useAriaButton;
