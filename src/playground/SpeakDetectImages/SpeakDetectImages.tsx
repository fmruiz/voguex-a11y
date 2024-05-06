import useSpeakDetectImages from "@voguex/hooks/useSpeakDetectImages";
import ImageOne from "../../assets/example-1.jpg";
import ImageTwo from "../../assets/example-2.jpg";
import ImageThree from "../../assets/example-3.jpg";

export const SpeakDetectImages = () => {
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
