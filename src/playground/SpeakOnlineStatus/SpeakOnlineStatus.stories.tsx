import type { Meta, StoryObj } from "@storybook/react";
import useSpeakOnlineStatus from "@voguex/hooks/useSpeakOnlineStatus";

const SpeakOnlineStatus = () => {
  const { onlineStatus } = useSpeakOnlineStatus();

  return (
    <section>
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        This hook is used to recognise by voice whether we are connected or not.
      </p>
      <p
        aria-label="online status"
        aria-describedby="description of online status"
        style={{ textAlign: "center" }}
      >
        {onlineStatus ? "You are online" : "You are offline"}
      </p>
    </section>
  );
};

const meta = {
  title: "Hooks/useSpeakOnlineStatus",
  component: SpeakOnlineStatus,
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
} satisfies Meta<typeof SpeakOnlineStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
