import { useState, useEffect } from "react";
interface ImageSource {
  src: string;
  width: number;
}
/**
 * Custom hook that provide the possibility to change between diffents images
 * and this images are displayed depending of the breakpoint screen size
 * @param imageSources: []: Colletion of object with src and width of the images
 * @returns
 */
const useResponsiveImage = (imageSources: ImageSource[]): string | null => {
  /**
   * Src selected
   */
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Fn to handle the size of the window
     */
    const handleResize = () => {
      /**
       * Obtain the window width
       */
      const windowWidth = window.innerWidth;
      /**
       * Sort the sources by width
       */
      const sortedSources = imageSources.sort((a, b) => a.width - b.width);
      /**
       * If the window width in less than the width of the image source
       * select that image
       */
      for (let i = 0; i < sortedSources.length; i++) {
        if (windowWidth <= sortedSources[i].width) {
          setSelectedSrc(sortedSources[i].src);
          return;
        }
      }

      /**
       * If none of the sources match, select the largest one
       */
      setSelectedSrc(sortedSources[sortedSources.length - 1].src);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSources]);

  return selectedSrc;
};

export default useResponsiveImage;
