import { useEffect, useState } from "react";

interface SupportedLanguages {
  [key: string]: string;
}
/**
 * Language supported example
 */
const languagesExampleValues: SupportedLanguages = {
  english: "en",
  spanish: "es",
  french: "fr",
  german: "de",
  italian: "it",
  portuguese: "pt",
  russian: "ru",
  chinese_mandarin: "zh-CN",
  japanese: "ja",
  korean: "ko",
  arabic: "ar",
  hindi: "hi",
  bengali: "bn",
  urdu: "ur",
  turkish: "tr",
};
/**
 * Custom hook to detect the voice and execute functions
 * if we say the commands availables
 * @param voiceCommands
 * @returns
 */
const useSpeakCallback = (
  voiceCommands: Record<string, () => void>,
): {
  language: string;
  languagesExampleValues: SupportedLanguages;
  activeVoiceCallback: boolean;
  speakCommandError: boolean;
  continuousRecognition: boolean;
  webkitSpeechRecognitionExist: boolean;
  setLanguage: (language: string) => void;
  setActiveVoiceCallback: (permission: boolean) => void;
  setContinuousRecognition: (continuousRecognition: boolean) => void;
} => {
  /**
   * This is to manage the permission of microphone
   */
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
  /**
   * This is to activate or deactivate the voice navigation
   */
  const [activeVoiceCallback, setActiveVoiceCallback] =
    useState<boolean>(false);
  /**
   * This is to set the language to detect our commands
   */
  const [language, setLanguage] = useState<string>(
    languagesExampleValues.english,
  );
  /**
   * This is to detect if we say incorrectly the command
   */
  const [speakCommandError, setSpeakCommandError] = useState<boolean>(false);
  /**
   * This is to say that the continuous recognition is enabled or not
   */
  const [continuousRecognition, setContinuousRecognition] =
    useState<boolean>(true);
  /**
   * This is to recognize if webkitSpeechRecognition API exist
   */
  const [webkitSpeechRecognitionExist, setWebkitSpeechRecognitionExist] =
    useState<boolean>(true);
  useEffect(() => {
    /**
     * Function to request microphone permission
     */
    const requestMicrophonePermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setPermissionGranted(true);
        stream.getTracks().forEach((track) => track.stop());
      } catch (error) {
        console.error(
          "Error requesting permission to access microphone:",
          error,
        );
      }
    };
    /**
     * Here is the initial point to access to
     * the microphone permission
     */
    if (activeVoiceCallback) {
      if (!permissionGranted) {
        requestMicrophonePermission();
      }
    }
    return () => {};
  }, [permissionGranted, activeVoiceCallback]);
  useEffect(() => {
    if (activeVoiceCallback) {
      if (permissionGranted) {
        const handleVoiceCommand = (event: SpeechRecognitionEvent) => {
          const command = event.results[event.results.length - 1][0].transcript
            .toLowerCase()
            .trim();
          if (Object.prototype.hasOwnProperty.call(voiceCommands, command)) {
            setSpeakCommandError(false);
            voiceCommands[command]();
          } else {
            setSpeakCommandError(true);
          }
        };

        if ("webkitSpeechRecognition" in window) {
          setWebkitSpeechRecognitionExist(true);
          /**
           * We use here the webkitSpeechRecognition API
           * this is important to know
           */
          const recognition = new webkitSpeechRecognition();
          /**
           * Here you put the language to voice recognition
           */
          recognition.lang = language;
          recognition.onresult = handleVoiceCommand;
          recognition.continuous = continuousRecognition;
          recognition.start();

          return () => {
            recognition.stop();
          };
        } else {
          setWebkitSpeechRecognitionExist(false);
          console.error(
            `webkitSpeechRecognition doesnt exist in this navigator, 
            please check this availability: 
            https://developer.mozilla.org/es/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#compatibilidad_de_navegadores`,
          );
        }
      }
    }
  }, [
    permissionGranted,
    voiceCommands,
    language,
    activeVoiceCallback,
    continuousRecognition,
  ]);

  return {
    language,
    languagesExampleValues,
    activeVoiceCallback,
    speakCommandError,
    continuousRecognition,
    webkitSpeechRecognitionExist,
    setLanguage,
    setActiveVoiceCallback,
    setContinuousRecognition,
  };
};

export default useSpeakCallback;
