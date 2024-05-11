import { render } from "@testing-library/react";
import { AriaButton } from "./AriaButton";

describe("AriaButton", () => {
  const { getByTestId } = render(<AriaButton />);

  const btnComponent = getByTestId("button-aria");

  test("should be add the aria attributes using useAriaButton", () => {
    expect(btnComponent.getAttribute("aria-label")).toBe("Example Button");
    expect(btnComponent.getAttribute("aria-pressed")).toBe("false");
    expect(btnComponent.getAttribute("aria-disabled")).toBe("false");
  });
});
