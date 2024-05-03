import { speakMessage } from "@voguex/utils/speakMessage";
import { useState, useEffect } from "react";
/**
 * Custom hook that provide the lecture with voice enabled about
 * the alt text of the image of current component
 * @returns
 */
const useImageAltText = () => {
  /**
   * Set the fn to read the alt images
   */
  const [readAltImages, setReadAltImages] = useState<boolean>(false);
  useEffect(() => {
    /**
     * If readAltImages is true execute the follow instruction
     */
    if (readAltImages) {
      const images = document.querySelectorAll("img");
      /**
       * We obtain the alt text of the collection and read it
       */
      images.forEach((image, index) => {
        const altText = image.alt;
        speakMessage(`The image number ${index} is about ${altText}`);
      });
    } else {
      speakMessage("We dont have any image here");
    }
    return () => {
      speechSynthesis.cancel();
    };
  }, [readAltImages]);

  return { setReadAltImages } as const;
};

export default useImageAltText;
