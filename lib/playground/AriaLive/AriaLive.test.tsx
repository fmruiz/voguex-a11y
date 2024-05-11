import { render } from "@testing-library/react";
import { AriaLive } from "./AriaLive";

describe("AriaLive", () => {
  test("should be add the aria-live attribute to polite", () => {
    const { getByTestId } = render(<AriaLive politeness="polite" />);
    const liveRegionComponent = getByTestId("live-region");
    expect(liveRegionComponent.getAttribute("aria-live")).toBe("polite");
  });

  test("should be add the aria-live attribute to assertive", () => {
    const { getByTestId } = render(<AriaLive politeness="assertive" />);
    const liveRegionComponent = getByTestId("live-region");
    expect(liveRegionComponent.getAttribute("aria-live")).toBe("assertive");
  });

  test("should be add the aria-live attribute to off", () => {
    const { getByTestId } = render(<AriaLive politeness="off" />);
    const liveRegionComponent = getByTestId("live-region");
    expect(liveRegionComponent.getAttribute("aria-live")).toBe("off");
  });
});
