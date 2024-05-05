import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useArrowsNavigation from "@voguex/hooks/useArrowsNavigation";

const ArrowsNavigation = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const { speakNavigationStatus, setSpeakNavigationStatus } =
    useArrowsNavigation([ref1, ref2, ref3]);

  return (
    <>
      <p
        aria-label="title of the component"
        aria-describedby="title of arrow navigation component"
        style={{ textDecoration: "underline", textAlign: "center" }}
      >
        We can navigate using arrows keys and if you want it, we can activate
        voice to read the content of the elements
      </p>
      <section style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          aria-label="button to enable or disable voice"
          onClick={() => setSpeakNavigationStatus(!speakNavigationStatus)}
        >
          {speakNavigationStatus ? "Disabled" : "Enabled"} voice
        </button>
        <button aria-label="first element to navigate" ref={ref1}>
          Element 1
        </button>
        <button aria-label="second element to navigate" ref={ref2}>
          Element 2
        </button>
        <button aria-label="third element to navigate" ref={ref3}>
          Element 3
        </button>
      </section>
    </>
  );
};

const meta = {
  title: "Hooks/useArrowsNavigation",
  component: ArrowsNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    // these are to test the deprecated features of the Description block
    notes: "These are notes for the Button stories",
    info: "This is info for the Button stories",
    docs: {
      subtitle: "This is the subtitle for the Button stories",
    },
  },
} satisfies Meta<typeof ArrowsNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
