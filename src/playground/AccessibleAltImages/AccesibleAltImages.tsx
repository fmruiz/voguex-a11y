import { useEffect, useState } from "react";
import useAccessibleAltImages from "@voguex/hooks/useAccessibleAltImages";
import ExampleImage from "../../assets/example-1.jpg";

export const AccessibleAltImages = () => {
  const [detectEvent, setDetectEvent] = useState(false);

  const images = [
    {
      id: "accessible-image-1",
      alt: `${detectEvent ? "Accessible Image one after event" : "Default Alt Image 1"}`,
      image: "",
    },
    {
      id: "accessible-image-2",
      alt: `${detectEvent ? "Accessible Image two after event" : "Default Alt Image 2"}`,
      image: ExampleImage,
    },
    {
      id: "accessible-image-3",
      alt: `${detectEvent ? "Accessible Image three after event" : "Default Alt Image 3"}`,
      image: "",
    },
  ];

  const { updateAltImages } = useAccessibleAltImages();

  useEffect(() => {
    updateAltImages(images);
  }, [updateAltImages]);

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <p
        aria-label="title of the component"
        aria-describedby="say that we have a list of images bellow"
        style={{ textDecoration: "underline", textAlign: "center" }}
      >
        List of images bellow to see the change in alt attribute:
      </p>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            id={image.id}
            src={image.image}
            alt={"image.alt"}
            width={200}
          />
        ))}
      </div>
      <button
        aria-label="button to update alt images"
        style={{ width: "200px", margin: "0 auto" }}
        onClick={() => setDetectEvent(!detectEvent)}
      >
        Update Alt attribute of images
      </button>
    </section>
  );
};
