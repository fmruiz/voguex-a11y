import type { Meta, StoryObj } from "@storybook/react";
import useReducedMotionStatus from "@voguex/hooks/useReducedMotionStatus";

const ReducedMotionStatus = () => {
  const reduceMotionEnabled = useReducedMotionStatus();

  return (
    <section>
      <p
        aria-label="title of component"
        aria-describedby="title to say the functionality of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        This hook is to detect if the user have the preference of reduced
        movement in their device enabled or not:
      </p>
      {reduceMotionEnabled ? (
        <p
          aria-label="reduced motion enabled"
          aria-describedby="description if we have the preference of reduced movement enabled"
          style={{ textAlign: "center" }}
        >
          The user have the preference of reduced movement enabled.
        </p>
      ) : (
        <p
          aria-label="reduced motion disabled"
          aria-describedby="description if we have the preference of reduced movement disabled"
          style={{ textAlign: "center" }}
        >
          The user have the preference of reduced movement disabled.
        </p>
      )}
    </section>
  );
};

const meta = {
  title: "Hooks/useReducedMotionStatus",
  component: ReducedMotionStatus,
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
} satisfies Meta<typeof ReducedMotionStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
