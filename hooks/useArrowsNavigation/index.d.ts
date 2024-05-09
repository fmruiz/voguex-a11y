import { MutableRefObject, RefObject } from '../../../node_modules/react';

/**
 * Custom hook that provide a solution to navigate between components
 * Using the arrow keys and, if you want it, speak the text content
 * @param elementRefs: []: collection of elements
 */
declare const useArrowsNavigation: <T extends HTMLElement>(elementRefs: MutableRefObject<T>[] | RefObject<T>[]) => {
    speakNavigationStatus: boolean;
    setSpeakNavigationStatus: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<boolean>>;
};
export default useArrowsNavigation;
