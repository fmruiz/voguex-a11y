import useSpeakFeedback from "@voguex/hooks/useSpeakFeedback";

export const SpeakFeedback = () => {
  const { somethingChange, setSomethingChange, setMessage } =
    useSpeakFeedback();

  const handleButtonClick = () => {
    setMessage("¡This is an important feedback to know!");
    setSomethingChange(true);
  };

  const handleChangeStatus = () => {
    setSomethingChange(false);
  };

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        This hook is to give feedback if you need to tell something important to
        know. Please, check it out!
      </p>

      <p
        aria-label="feedback is enabled or not"
        aria-describedby="description of feedback"
        style={{ textAlign: "center" }}
      >
        Feedback: {somethingChange ? "ON" : "OFF"}
      </p>
      <button
        aria-label="button to simulate a change"
        onClick={handleButtonClick}
        style={{ width: "100px", margin: "0 auto" }}
      >
        Call to action
      </button>

      <button
        aria-label="button to change status of hook"
        onClick={handleChangeStatus}
        style={{ width: "100px", margin: "0 auto", marginTop: "15px" }}
      >
        Disabled feedback
      </button>
    </section>
  );
};
