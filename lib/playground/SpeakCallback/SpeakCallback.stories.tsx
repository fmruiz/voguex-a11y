import type { Meta, StoryObj } from "@storybook/react";
import { SpeakCallback } from "./SpeakCallback";

const meta = {
  title: "Hooks/useSpeakCallback",
  component: SpeakCallback,
  parameters: {
    layout: "centered",
    // these are to test the deprecated features of the Description block
    notes: "These are notes for the Button stories",
    info: "This is info for the Button stories",
    docs: {
      subtitle: "This is the subtitle for the Button stories",
    },
  },
} satisfies Meta<typeof SpeakCallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
