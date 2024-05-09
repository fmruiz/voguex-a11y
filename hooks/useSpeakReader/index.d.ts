/**
 * Custom hook that we can use to read the content of components by id.
 * Or speak an specific message
 */
declare const useSpeakReader: () => {
    speakMessage: (message: string) => void;
    setSpeechRate: (rate: number) => void;
    speechRate: number;
    speakComponentContent: (elementId: string) => void;
};
export default useSpeakReader;
