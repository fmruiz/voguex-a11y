interface SupportedLanguages {
    [key: string]: string;
}
/**
 * Custom hook to detect the voice and execute functions
 * if we say the commands availables
 * @param voiceCommands
 * @returns
 */
declare const useSpeakCallback: (voiceCommands: Record<string, () => void>) => {
    language: string;
    languagesExampleValues: SupportedLanguages;
    activeVoiceCallback: boolean;
    speakCommandError: boolean;
    continuousRecognition: boolean;
    setLanguage: (language: string) => void;
    setActiveVoiceCallback: (permission: boolean) => void;
    setContinuousRecognition: (continuousRecognition: boolean) => void;
};
export default useSpeakCallback;
