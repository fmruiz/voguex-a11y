import { useState } from 'react';

interface ScreenReaderInfo {
    [key: string]: string;
}
/**
 * Custom hook that offer messages to notify about some call to action.
 */
const useScreenMessages = (): {
    screenReaderMessages: ScreenReaderInfo;
    setScreenReaderMessages: (messages: ScreenReaderInfo) => void;
} => {
    /**
     * State to save the info of screen reader
     */
    const [screenReaderMessages, setScreenReaderMessages] =
        useState<ScreenReaderInfo>({});
    /**
     * State to save the velocity of voice
     */
    return {
        screenReaderMessages,
        setScreenReaderMessages,
    } as const;
};

export default useScreenMessages;
