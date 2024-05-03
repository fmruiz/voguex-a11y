/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
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
const useAriaLive = (options: AriaLiveOptions = {}): AriaLiveHook => {
  /**
   * Content that is updated
   */
  const [content, setContent] = useState<string>("");
  /**
   * Set default options
   */
  const { politeness = "polite" } = options;
  /**
   * Reference to live region container that change the status
   */
  const liveRegionRef = useRef<any>(null);

  const updateContent = (newContent: string) => {
    setContent(newContent);
  };
  useEffect(() => {
    /**
     * Only if you set a container to set the attribute aria live
     */
    if (liveRegionRef.current) {
      liveRegionRef.current.innerText = content;
      liveRegionRef.current.setAttribute("aria-live", politeness);
    }
  }, [content, politeness]);
  return {
    content,
    updateContent,
    liveRegionRef,
  };
};

export default useAriaLive;
