import type { Meta, StoryObj } from "@storybook/react";
import useScreenMessages from "@voguex/hooks/useScreenMessages";
import { useEffect } from "react";

const ScreenMessages = () => {
  const { screenReaderMessages, setScreenReaderMessages } = useScreenMessages();

  const handleClick = () => {
    setScreenReaderMessages({
      action: "¡Call To Action!",
    });
  };
  useEffect(() => {
    return () => {
      setScreenReaderMessages({});
    };
  }, [setScreenReaderMessages]);

  return (
    <section>
      <p
        aria-label="title of component"
        aria-describedby="description of the hook"
        style={{ textDecoration: "underline" }}
      >
        Click in the button to notify about some action:
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {Object.keys(screenReaderMessages).map((key) => (
          <p
            style={{ textAlign: "center" }}
            aria-label={screenReaderMessages[key]}
            key={key}
          >
            {screenReaderMessages[key]}
          </p>
        ))}
        {/* Botón para simular la llamada a la acción */}
        <button
          aria-label="call to action button"
          onClick={handleClick}
          style={{ width: "100px", margin: "0 auto" }}
        >
          Click Here
        </button>
      </div>
    </section>
  );
};

const meta = {
  title: "Hooks/useScreenMessages",
  component: ScreenMessages,
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
} satisfies Meta<typeof ScreenMessages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
