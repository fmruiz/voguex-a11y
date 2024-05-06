import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useSpeakClickOutside from "@voguex/hooks/useSpeakClickOutside";

const SpeakClickOutside = () => {
  const menuRef = useRef(null);

  useSpeakClickOutside(menuRef, "¡You clicked outside the menu component!");

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
        The useSpeakClickOutside hook provides the functionality to speak a
        message if you click outside the component you referenced, please check
        it out.
      </p>
      <div
        ref={menuRef}
        style={{
          border: "1px solid black",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Example of menu component
      </div>
    </section>
  );
};

const meta = {
  title: "Hooks/useSpeakClickOutside",
  component: SpeakClickOutside,
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
} satisfies Meta<typeof SpeakClickOutside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
