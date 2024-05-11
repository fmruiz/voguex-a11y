import useAccessibleAltImages from "@voguex/hooks/useAccessibleAltImages";
import ExampleImage from "../../assets/example-1.jpg";

export const AccessibleAltImages = () => {
  const images = [
    {
      id: "accessible-image-1",
      alt: "Accessible Image one after event",
      image: "",
    },
    {
      id: "accessible-image-2",
      alt: "Accessible Image two after event",
      image: ExampleImage,
    },
    {
      id: "accessible-image-3",
      alt: "Accessible Image three after event",
      image: "",
    },
  ];

  const { updateAltImages } = useAccessibleAltImages();

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
            alt="default alt image"
            width={200}
            data-testid={image.id}
          />
        ))}
      </div>
      <button
        aria-label="button to update alt images"
        style={{ width: "200px", margin: "0 auto" }}
        onClick={() => updateAltImages(images)}
        data-testid="button-event"
      >
        Update Alt attribute of images
      </button>
    </section>
  );
};
