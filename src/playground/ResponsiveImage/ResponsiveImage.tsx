import useResponsiveImage from "@voguex/hooks/useResponsiveImage";
import ImageOne from "../../assets/example-1.jpg";
import ImageTwo from "../../assets/example-2.jpg";
import ImageThree from "../../assets/example-3.jpg";

export const ResponsiveImage = () => {
  const imageSources = [
    { src: ImageOne, width: 320 },
    { src: ImageTwo, width: 640 },
    { src: ImageThree, width: 1024 },
  ];

  const selectedSrc = useResponsiveImage(imageSources);

  return (
    <section>
      <p
        aria-label="title of component"
        aria-describedby="here we change between differents images depends of breakpoints"
        style={{ textDecoration: "underline" }}
      >
        Change the size of screen to show differents images depends the
        following breakpoints: 320, 640, 1024
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectedSrc && (
          <img width={300} src={selectedSrc} alt="Imagen responsive" />
        )}
      </div>
    </section>
  );
};
