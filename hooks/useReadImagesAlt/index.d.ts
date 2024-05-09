/// <reference types="react" />
/**
 * Custom hook that provide the lecture with voice enabled about
 * the alt text of the image of current component
 * @returns
 */
declare const useReadImagesAlt: () => {
    readonly setReadAltImages: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<boolean>>;
};
export default useReadImagesAlt;
