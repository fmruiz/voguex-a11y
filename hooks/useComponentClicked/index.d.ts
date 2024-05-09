import { RefObject } from '../../../node_modules/react';

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
declare const useComponentClicked: (ref: RefObject<HTMLElement>, messageInside?: string, messageOutside?: string) => {
    statusClicked: IStatusClicked;
};
export default useComponentClicked;
