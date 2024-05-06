import { useEffect, useState } from "react";
/**
 * Custom hook that offer the possibility to know if the user have the reduced
 * movement preference enabled
 * @returns boolean: if the user have the slow movement enabled or not
 */
const useReducedMotionStatus = (): boolean => {
  /**
   * Reduce motion status
   */
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };
    /**
     * Comprobe if the user have the config with slow movement enabled
     */
    setReduceMotion(mediaQuery.matches);
    /**
     * Listen the event change if the user have the slow movement enabled
     */
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return reduceMotion;
};

export default useReducedMotionStatus;
