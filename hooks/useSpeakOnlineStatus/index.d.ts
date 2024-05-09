/**
 * Custom hook that offer a voice to notice if you are online or offline
 */
declare const useSpeakOnlineStatus: () => {
    onlineStatus: boolean;
    speakOnlineStatus: (isOnline: boolean) => void;
};
export default useSpeakOnlineStatus;
