import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useSpeakClickInside from "@voguex/hooks/useSpeakClickInside";

const SpeakClickInside = () => {
  const buttonRef = useRef(null);

  useSpeakClickInside(buttonRef, "¡You clicked inside the button!");

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        The useSpeakClickInside hook provides the functionality to speak a
        message when you click on the component, please check it out!
      </p>
      <button
        aria-label="button to click"
        ref={buttonRef}
        style={{ width: "100px", margin: "0 auto" }}
      >
        Click here
      </button>
    </section>
  );
};

const meta = {
  title: "Hooks/useSpeakClickInside",
  component: SpeakClickInside,
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
} satisfies Meta<typeof SpeakClickInside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
