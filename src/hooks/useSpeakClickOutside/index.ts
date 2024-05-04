import { RefObject, useEffect } from "react";
import { speakMessage } from "@voguex/utils/speakMessage";

/**
 * Custom hook that detect if you click outside of an specific component.
 *
 * @param ref - Ref is the reference element
 * @param message - An specific message to reproduce with voice
 */
const useSpeakClickOutside = (
  ref: RefObject<HTMLElement>,
  message: string = "OUTSIDE",
) => {
  useEffect(() => {
    const handleDetectClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        speakMessage(message);
      }
    };
    document.addEventListener("mousedown", handleDetectClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleDetectClickOutside);
    };
  }, [ref, message]);
};

export default useSpeakClickOutside;
