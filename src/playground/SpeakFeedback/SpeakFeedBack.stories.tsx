import type { Meta, StoryObj } from "@storybook/react";
import useSpeakFeedback from "@voguex/hooks/useSpeakFeedback";

const SpeakFeedback = () => {
  const { somethingChange, setSomethingChange, setMessage } =
    useSpeakFeedback();

  const handleButtonClick = () => {
    setMessage("¡This is an important feedback to know!");
    setSomethingChange(true);
  };

  const handleChangeStatus = () => {
    setSomethingChange(false);
  };

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        This hook is to give feedback if you need to tell something important to
        know. Please, check it out!
      </p>

      <p
        aria-label="feedback is enabled or not"
        aria-describedby="description of feedback"
        style={{ textAlign: "center" }}
      >
        Feedback: {somethingChange ? "ON" : "OFF"}
      </p>
      <button
        aria-label="button to simulate a change"
        onClick={handleButtonClick}
        style={{ width: "100px", margin: "0 auto" }}
      >
        Call to action
      </button>

      <button
        aria-label="button to change status of hook"
        onClick={handleChangeStatus}
        style={{ width: "100px", margin: "0 auto", marginTop: "15px" }}
      >
        Disabled feedback
      </button>
    </section>
  );
};

const meta = {
  title: "Hooks/useSpeakFeedback",
  component: SpeakFeedback,
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
} satisfies Meta<typeof SpeakFeedback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
