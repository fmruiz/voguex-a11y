interface AccessibleImagesHook {
    updateAltImages: (imageData: {
        id: string;
        alt: string;
    }[]) => void;
}
/**
 * Custom hook to detect id of images and change the alternative text of them
 * @returns
 */
declare const useAccessibleAltImages: () => AccessibleImagesHook;
export default useAccessibleAltImages;
