import { useRef } from "react";
import useComponentClicked from "@voguex/hooks/useComponentClicked";

export const ComponentClicked = () => {
  const elementRef = useRef(null);

  const { statusClicked } = useComponentClicked(
    elementRef,
    "¡Click inside!",
    "¡Click outside!",
  );

  return (
    <section>
      <p
        aria-label="click status"
        aria-describedby="here we show the status of the click, if we touch inside the component or outside the component"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        Check here:{" "}
        {statusClicked.isClicked
          ? statusClicked.message
          : statusClicked.message}
      </p>
      <button
        aria-label="example button"
        ref={elementRef}
        style={{
          width: "200px",
          height: "100px",
          background: "orangered",
          border: "none",
          borderRadius: "10px",
          color: "white",
          padding: "20px",
        }}
      >
        Click inside or outside the element
      </button>
    </section>
  );
};
