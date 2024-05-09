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
declare const useResponsiveImage: (imageSources: ImageSource[]) => string | null;
export default useResponsiveImage;
