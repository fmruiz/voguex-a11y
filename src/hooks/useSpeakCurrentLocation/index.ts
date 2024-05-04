import { speakMessage } from "@voguex/utils/speakMessage";
import { useState, useEffect } from "react";
/**
 * Custom hook that we use to, with voice, say the entire path and
 * if you want it say an alternative message after the route, or
 * only say the alternative message
 * @returns
 */
const useSpeakCurrentLocation = (): {
  alternativeMessage: string;
  enabledVoice: boolean;
  setEnabledVoice: (enabled: boolean) => void;
  setAlternativeMessage: (message: string) => void;
} => {
  /**
   * Enable the voice when the component is mounted
   */
  const [enabledVoice, setEnabledVoice] = useState<boolean>(false);
  /**
   * Set an alternative message to say after the path
   */
  const [alternativeMessage, setAlternativeMessage] = useState<string>(
    "Alternative Default Message",
  );

  useEffect(() => {
    /**
     * If you enable the voice
     */
    if (enabledVoice) {
      speakMessage(window.location.href!);
    }
    /**
     * If you change the default message
     */
    if (alternativeMessage !== "Alternative Default Message") {
      speakMessage(alternativeMessage!);
    }
    return () => {
      speechSynthesis.cancel();
    };
  }, [enabledVoice, alternativeMessage]);
  return {
    enabledVoice,
    setEnabledVoice,
    alternativeMessage,
    setAlternativeMessage,
  } as const;
};

export default useSpeakCurrentLocation;
