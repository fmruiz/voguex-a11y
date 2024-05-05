import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useComponentClicked from "@voguex/hooks/useComponentClicked";

const ComponentClicked = () => {
  const elementRef = useRef(null);

  const { statusClicked } = useComponentClicked(
    elementRef,
    "¡Click inside!",
    "¡Click outside!",
  );

  return (
    <section>
      <p
        aria-label="click status"
        aria-describedby="here we show the status of the click, if we touch inside the component or outside the component"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        Check here:{" "}
        {statusClicked.isClicked
          ? statusClicked.message
          : statusClicked.message}
      </p>
      <button
        aria-label="example button"
        ref={elementRef}
        style={{
          width: "200px",
          height: "100px",
          background: "orangered",
          border: "none",
          borderRadius: "10px",
          color: "white",
          padding: "20px",
        }}
      >
        Haz clic dentro o fuera de este cuadro
      </button>
    </section>
  );
};

const meta = {
  title: "Hooks/useComponentClicked",
  component: ComponentClicked,
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
} satisfies Meta<typeof ComponentClicked>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
