import { RefObject, useEffect, useState } from 'react';

interface IStatusClicked {
  component: JSX.Element | JSX.Element[] | HTMLElement | HTMLElement[] | null;
  isClicked: boolean | null;
  message: string | null;
}
/**
 * Custom hook that detect if you click inside or outside of an element.
 *
 * @param ref - Ref is the reference element
 * @param messageInside - Message to show if I touch the element
 * @param messageOutside - Message to show if I touch outside the element
 */
const useComponentClicked = (
  ref: RefObject<HTMLElement>,
  messageInside?: string,
  messageOutside?: string
): { statusClicked: IStatusClicked } => {
  /**
   * Status about the element
   */
  const [statusClicked, setStatusClicked] = useState<IStatusClicked>({
    component: null,
    isClicked: null,
    message: null,
  });
  useEffect(() => {
    const handleDetectElement = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        setStatusClicked({
          component: ref.current!,
          isClicked: true,
          message: messageInside || 'Element has been clicked',
        });
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setStatusClicked({
          component: ref.current!,
          isClicked: false,
          message: messageOutside || 'Clicked outside the element',
        });
      }
    };
    document.addEventListener('mousedown', handleDetectElement);
    return () => {
      document.removeEventListener('mousedown', handleDetectElement);
    };
  }, [ref, messageInside, messageOutside]);

  return { statusClicked } as const;
};

export default useComponentClicked;
