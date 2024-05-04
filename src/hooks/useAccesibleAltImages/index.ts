import { useState, useEffect } from "react";
interface AccessibleImagesHook {
  updateAltImages: (imageData: { id: string; alt: string }[]) => void;
}
/**
 * Custom hook to detect id of images and change the alternative text of them
 * @returns
 */
const useAccessibleAltImages = (): AccessibleImagesHook => {
  const [imageData, setImageData] = useState<{ id: string; alt: string }[]>([]);
  /**
   * Update the alternative text checking first the id of the image
   */
  useEffect(() => {
    imageData.forEach((image) => {
      const imgElement = document.querySelector(`img[id="${image.id}"]`);
      if (imgElement) {
        imgElement.setAttribute("alt", image.alt);
      }
    });
  }, [imageData]);
  /**
   * Fn to set the new images collection
   * @param newImageData
   */
  const updateAltImages = (newImageData: { id: string; alt: string }[]) => {
    setImageData(newImageData);
  };
  return {
    updateAltImages,
  };
};

export default useAccessibleAltImages;
