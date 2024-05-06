import { useEffect, useState } from "react";
/**
 * Rate: Voice velocity (0.1 - 10)
 * Pitch: Type of voice (0 - 2)
 * Volume: Voice volume (0 - 1)
 */
interface SpeechSettings {
  rate: number;
  pitch: number;
  volume: number;
}
/**
 * Custom hook that provide the posibility to modify easely
 * the settings of voice, provide the posibility to set the
 * message, and total control to speak or not
 * @returns
 */
const useSpeakSettings = (): {
  settings: SpeechSettings;
  message: string;
  speakEnabled: boolean;
  setRate: (newRate: number) => void;
  setPitch: (newPitch: number) => void;
  setVolume: (newVolume: number) => void;
  setMessage: (message: string) => void;
  setSpeakEnabled: (enabled: boolean) => void;
} => {
  const [settings, setSettings] = useState<SpeechSettings>({
    rate: 1,
    pitch: 1,
    volume: 1,
  });
  const [message, setMessage] = useState<string>(
    "Please, change the default message using setMessage function",
  );
  const [speakEnabled, setSpeakEnabled] = useState<boolean>(false);
  /**
   * Function to update the speech velocity
   * @param newRate: number
   */
  const setRate = (newRate: number) => {
    setSettings({ ...settings, rate: newRate });
  };
  /**
   * Function to update the type of voice
   * @param newPitch: number
   */
  const setPitch = (newPitch: number) => {
    setSettings({ ...settings, pitch: newPitch });
  };
  /**
   * Function to update the voice volume
   * @param newVolume
   */
  const setVolume = (newVolume: number) => {
    setSettings({ ...settings, volume: newVolume });
  };
  useEffect(() => {
    const speak = () => {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = settings.rate;
      utterance.pitch = settings.pitch;
      utterance.volume = settings.volume;
      speechSynthesis.speak(utterance);
      /**
       * This is for dismount the voice
       */
      utterance.onend = () => {
        setSpeakEnabled(false);
      };
    };

    if (speakEnabled) {
      speak();
    }

    return () => {
      speechSynthesis.cancel();
    };
  }, [settings, message, speakEnabled]);
  return {
    settings,
    setRate,
    setPitch,
    setVolume,
    message,
    setMessage,
    speakEnabled,
    setSpeakEnabled,
  };
};

export default useSpeakSettings;
