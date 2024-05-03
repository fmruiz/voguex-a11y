import { MutableRefObject, RefObject, useEffect, useState } from "react";
/**
 * Custom hook that provide a solution to navigate between components
 * Using the arrow keys and, if you want it, speak the text content
 * @param elementRefs: []: collection of elements
 */
const useArrowsNavigation = <T extends HTMLElement>(
  elementRefs: MutableRefObject<T>[] | RefObject<T>[],
) => {
  /**
   * Enable the fn to speak about the navigation
   */
  const [speakNavigationStatus, setSpeakNavigationStatus] =
    useState<boolean>(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      /**
       * Collection of arrow keys
       */
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        /**
         * To prevent default behavior
         */
        event.preventDefault();
        /**
         * Obtain index of the focus element
         */
        const currentIndex = elementRefs.findIndex(
          (ref) => ref.current === document.activeElement,
        );
        /**
         * Speak fn to read text content of the element
         * @param message : string or null because an element can have a null text content
         */
        const speakMessage = (message: string | null | undefined) => {
          if (speakNavigationStatus) {
            const utterance = new SpeechSynthesisUtterance(message!);
            speechSynthesis.speak(utterance);
          }
        };
        /**
         * Calculate index of the next element
         */
        let nextIndex: number;
        switch (event.key) {
          case "ArrowUp":
            nextIndex = currentIndex - 1;
            speakMessage(elementRefs[nextIndex].current?.textContent);
            break;
          case "ArrowDown":
            nextIndex = currentIndex + 1;
            speakMessage(elementRefs[nextIndex].current?.textContent);
            break;
          case "ArrowLeft":
            nextIndex = currentIndex - 1;
            speakMessage(elementRefs[nextIndex].current?.textContent);
            break;
          case "ArrowRight":
            nextIndex = currentIndex + 1;
            speakMessage(elementRefs[nextIndex].current?.textContent);
            break;
          default:
            break;
        }
        /**
         * Focus the following element if exist
         */
        if (elementRefs[nextIndex!] && elementRefs[nextIndex!].current) {
          elementRefs[nextIndex!].current!.focus();
        }
      }
    };
    /**
     * Add the event if you press the arrow key
     */
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      /**
       * Clean the event after you press the arrow key
       */
      window.removeEventListener("keydown", handleKeyDown);
      speechSynthesis.cancel();
    };
  }, [elementRefs, speakNavigationStatus]);

  return { speakNavigationStatus, setSpeakNavigationStatus };
};

export default useArrowsNavigation;
