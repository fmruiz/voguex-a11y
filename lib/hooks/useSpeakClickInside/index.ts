import { RefObject, useEffect } from "react";
import { speakMessage } from "@voguex/utils/speakMessage";
/**
 * Custom hook that detect if you click inside of an specific component.
 *
 * @param ref - Ref is the reference element
 * @param message - An specific message to reproduce with voice
 */
const useSpeakClickInside = (
  ref: RefObject<HTMLElement>,
  message: string = "INSIDE",
) => {
  useEffect(() => {
    const handleDetectClickInside = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        speakMessage(message);
      }
    };
    document.addEventListener("mousedown", handleDetectClickInside);
    return () => {
      document.removeEventListener("mousedown", handleDetectClickInside);
    };
  }, [ref, message]);
};

export default useSpeakClickInside;
