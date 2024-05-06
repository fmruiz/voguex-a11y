import type { Meta, StoryObj } from "@storybook/react";
import useSpeakDetectImages from "@voguex/hooks/useSpeakDetectImages";
import ImageOne from "../../assets/example-1.jpg";
import ImageTwo from "../../assets/example-2.jpg";
import ImageThree from "../../assets/example-3.jpg";

const SpeakDetectImages = () => {
  const { setImageDetection } = useSpeakDetectImages();

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        This hook is to tell us how many images we have in total.
      </p>

      <button
        aria-label="button to enable the image detection"
        onClick={() => setImageDetection(true)}
        style={{ width: "100px", margin: "0 auto" }}
      >
        Detect images
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <img
          width={200}
          height={150}
          src={ImageOne}
          alt="Accessible image one"
        />
        <img
          width={200}
          height={150}
          src={ImageTwo}
          alt="Accesible image two"
          style={{ marginLeft: "15px", marginRight: "15px" }}
        />
        <img
          width={200}
          height={150}
          src={ImageThree}
          alt="Accesible image two"
        />
      </div>
    </section>
  );
};

const meta = {
  title: "Hooks/useSpeakDetectImages",
  component: SpeakDetectImages,
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
} satisfies Meta<typeof SpeakDetectImages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
