import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useAccessibleAltImages from "@voguex/hooks/useAccessibleAltImages";
import ExampleImage from "../../assets/example-1.jpg";

const AccessibleAltImages = () => {
  const images = [
    { id: "accessible-image-1", alt: "Accessible Image 1", image: "" },
    {
      id: "accessible-image-2",
      alt: "Accessible Image 2",
      image: ExampleImage,
    },
    { id: "accessible-image-3", alt: "Accessible Image 3", image: "" },
  ];

  const { updateAltImages } = useAccessibleAltImages();

  useEffect(() => {
    updateAltImages(images);
  }, [updateAltImages]);

  return (
    <>
      <p
        aria-label="title of the component"
        aria-describedby="say that we have a list of images bellow"
        style={{ textDecoration: "underline", textAlign: "center" }}
      >
        List of images bellow to see the change in alt attribute:
      </p>
      {images.map((image) => (
        <img
          key={image.id}
          id={image.id}
          src={image.image}
          alt={"image.alt"}
          width={200}
        />
      ))}
    </>
  );
};

const meta = {
  title: "Hooks/useAccessibleAltImages",
  component: AccessibleAltImages,
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
} satisfies Meta<typeof AccessibleAltImages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
