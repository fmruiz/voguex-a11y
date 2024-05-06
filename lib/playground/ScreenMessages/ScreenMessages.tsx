import { useEffect } from "react";
import useScreenMessages from "@voguex/hooks/useScreenMessages";

export const ScreenMessages = () => {
  const { screenReaderMessages, setScreenReaderMessages } = useScreenMessages();

  const handleClick = () => {
    setScreenReaderMessages({
      action: "¡Call To Action!",
    });
  };
  useEffect(() => {
    return () => {
      setScreenReaderMessages({});
    };
  }, [setScreenReaderMessages]);

  return (
    <section>
      <p
        aria-label="title of component"
        aria-describedby="description of the hook"
        style={{ textDecoration: "underline" }}
      >
        Click in the button to notify about some action:
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {Object.keys(screenReaderMessages).map((key) => (
          <p
            style={{ textAlign: "center" }}
            aria-label={screenReaderMessages[key]}
            key={key}
          >
            {screenReaderMessages[key]}
          </p>
        ))}
        <button
          aria-label="call to action button"
          onClick={handleClick}
          style={{ width: "100px", margin: "0 auto" }}
        >
          Click Here
        </button>
      </div>
    </section>
  );
};
