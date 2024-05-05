import type { Meta, StoryObj } from "@storybook/react";
import useReadImagesAlt from "@voguex/hooks/useReadImagesAlt";

const ReadImagesAlt = () => {
  const { setReadAltImages } = useReadImagesAlt();

  return (
    <section>
      <button
        aria-label="button to read the alternative text of the images"
        onClick={() => setReadAltImages(true)}
      >
        Read alternative text of the images
      </button>
      <img src="image1.jpg" alt="Image one - Alternative Text" />
      <img src="image2.jpg" alt="Image second - Alternative Text" />
      <img src="image3.jpg" alt="Image third - Alternative Text" />
    </section>
  );
};

const meta = {
  title: "Hooks/useReadImagesAlt",
  component: ReadImagesAlt,
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
} satisfies Meta<typeof ReadImagesAlt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
