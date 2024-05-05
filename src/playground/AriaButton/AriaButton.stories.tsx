import type { Meta, StoryObj } from "@storybook/react";
import useAriaButton from "@voguex/hooks/useAriaButton";

const AriaButton = () => {
  const ariaAttributes = useAriaButton({
    ariaLabel: "Example Button",
    ariaPressed: false,
    ariaDisabled: false,
  });

  const handleClick = () => {};

  return (
    <>
      <p
        aria-label="title of the component"
        aria-describedby="title say that we have a button bellow with aria attributes"
        style={{ textDecoration: "underline", textAlign: "center" }}
      >
        Button with aria attributes using useAriaButton:
      </p>
      <button {...ariaAttributes} onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

const meta = {
  title: "Hooks/useAriaButton",
  component: AriaButton,
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
} satisfies Meta<typeof AriaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
