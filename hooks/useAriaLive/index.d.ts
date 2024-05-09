/// <reference types="react" />
interface AriaLiveHook {
    content: string;
    updateContent: (newContent: string) => void;
    liveRegionRef: React.MutableRefObject<any>;
}
/**
 * Aria live options
 */
interface AriaLiveOptions {
    politeness?: "polite" | "assertive" | "off";
}
/**
 * Custom hook that help to use aria-live attribute
 * A live region is explicitly denoted using the aria-live attribute
 * @param options
 * @returns
 */
declare const useAriaLive: (options?: AriaLiveOptions) => AriaLiveHook;
export default useAriaLive;
