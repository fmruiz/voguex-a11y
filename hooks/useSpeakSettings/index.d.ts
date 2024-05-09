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
declare const useSpeakSettings: () => {
    settings: SpeechSettings;
    message: string;
    speakEnabled: boolean;
    setRate: (newRate: number) => void;
    setPitch: (newPitch: number) => void;
    setVolume: (newVolume: number) => void;
    setMessage: (message: string) => void;
    setSpeakEnabled: (enabled: boolean) => void;
};
export default useSpeakSettings;
