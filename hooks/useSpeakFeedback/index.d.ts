/**
 *  Custom hook that provide the possibility to make an announcement
 * @returns
 */
declare const useSpeakFeedback: () => {
    somethingChange: boolean;
    setSomethingChange: (status: boolean) => void;
    setMessage: (message: string) => void;
};
export default useSpeakFeedback;
