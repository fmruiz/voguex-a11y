import useReadImagesAlt from "@voguex/hooks/useReadImagesAlt";

export const ReadImagesAlt = () => {
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
