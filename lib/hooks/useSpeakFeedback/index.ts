import { useEffect, useState } from "react";
import { speakMessage } from "@voguex/utils/speakMessage";
/**
 *  Custom hook that provide the possibility to make an announcement
 * @returns
 */
const useSpeakFeedback = (): {
  somethingChange: boolean;
  setSomethingChange: (status: boolean) => void;
  setMessage: (message: string) => void;
} => {
  /**
   * Check if you need something to say about your status application
   */
  const [somethingChange, setSomethingChange] = useState<boolean>(false);
  /**
   * Set the message that you need to say
   */
  const [message, setMessage] = useState<string>("Put the message");
  useEffect(() => {
    if (somethingChange) {
      setMessage(message);
      speakMessage(message);
    }
    return () => {
      speechSynthesis.cancel();
      // setSomethingChange(false);
    };
  }, [somethingChange, message]);

  return { somethingChange, setSomethingChange, setMessage } as const;
};

export default useSpeakFeedback;
