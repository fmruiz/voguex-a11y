interface ScreenReaderInfo {
    [key: string]: string;
}
/**
 * Custom hook that offer messages to notify about some call to action.
 */
declare const useScreenMessages: () => {
    screenReaderMessages: ScreenReaderInfo;
    setScreenReaderMessages: (messages: ScreenReaderInfo) => void;
};
export default useScreenMessages;
