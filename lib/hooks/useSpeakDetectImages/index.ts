import { speakMessage } from "@voguex/utils/speakMessage";
import { useEffect, useState } from "react";
/**
 * Custom hook that provide the lecture with voice enabled about
 * the alt text of the image of current component
 * @returns
 */
const useSpeakDetectImages = () => {
  const [detectImages, setImageDetection] = useState<boolean>(false);
  useEffect(() => {
    /**
     * If readAltImages is true execute the follow instruction
     */
    if (detectImages) {
      const images = document.querySelectorAll("img");
      if (images.length) {
        /**
         * We obtain the alt text of the collection and read it
         */
        speakMessage(`We have ${images.length} images here`);
      } else {
        speakMessage("We dont have any image here");
      }
    }
    return () => {
      speechSynthesis.cancel();
    };
  }, [detectImages]);

  return { setImageDetection } as const;
};

export default useSpeakDetectImages;
