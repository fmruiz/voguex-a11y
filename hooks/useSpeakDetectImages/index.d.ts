/// <reference types="react" />
/**
 * Custom hook that provide the lecture with voice enabled about
 * the alt text of the image of current component
 * @returns
 */
declare const useSpeakDetectImages: () => {
    readonly setImageDetection: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<boolean>>;
};
export default useSpeakDetectImages;
