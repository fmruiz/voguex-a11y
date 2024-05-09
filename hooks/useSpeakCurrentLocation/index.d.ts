/**
 * Custom hook that we use to, with voice, say the entire path and
 * if you want it say an alternative message after the route, or
 * only say the alternative message
 * @returns
 */
declare const useSpeakCurrentLocation: () => {
    alternativeMessage: string;
    enabledVoice: boolean;
    setEnabledVoice: (enabled: boolean) => void;
    setAlternativeMessage: (message: string) => void;
};
export default useSpeakCurrentLocation;
