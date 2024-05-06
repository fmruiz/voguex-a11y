import { useRef } from "react";
import useSpeakClickInside from "@voguex/hooks/useSpeakClickInside";

export const SpeakClickInside = () => {
  const buttonRef = useRef(null);

  useSpeakClickInside(buttonRef, "¡You clicked inside the button!");

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        The useSpeakClickInside hook provides the functionality to speak a
        message when you click on the component, please check it out!
      </p>
      <button
        aria-label="button to click"
        ref={buttonRef}
        style={{ width: "100px", margin: "0 auto" }}
      >
        Click here
      </button>
    </section>
  );
};
