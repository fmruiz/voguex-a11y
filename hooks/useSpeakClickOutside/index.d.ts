import { RefObject } from '../../../node_modules/react';

/**
 * Custom hook that detect if you click outside of an specific component.
 *
 * @param ref - Ref is the reference element
 * @param message - An specific message to reproduce with voice
 */
declare const useSpeakClickOutside: (ref: RefObject<HTMLElement>, message?: string) => void;
export default useSpeakClickOutside;
