import { fireEvent, render } from "@testing-library/react";
import { AccessibleAltImages } from "./AccessibleAltImages";

describe("AccessibleAltImages", () => {
  const { getByTestId } = render(<AccessibleAltImages />);

  const imageOne = getByTestId("accessible-image-1");
  const imageTwo = getByTestId("accessible-image-2");
  const imageThree = getByTestId("accessible-image-3");
  const btnComponent = getByTestId("button-event");

  test("should be change the alternative text of image after event click", () => {
    fireEvent.click(btnComponent);
    expect(imageOne.getAttribute("alt")).toBe(
      "Accessible Image one after event",
    );
    expect(imageTwo.getAttribute("alt")).toBe(
      "Accessible Image two after event",
    );
    expect(imageThree.getAttribute("alt")).toBe(
      "Accessible Image three after event",
    );
  });
});
