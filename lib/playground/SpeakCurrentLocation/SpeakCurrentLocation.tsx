import useSpeakCurrentLocation from "@voguex/hooks/useSpeakCurrentLocation";
import { useState } from "react";

export const SpeakCurrentLocation = () => {
  const [message, setMessage] = useState<string>("");
  const { enabledVoice, setEnabledVoice, setAlternativeMessage } =
    useSpeakCurrentLocation();

  const sendMessage = () => {
    if (message !== "") {
      setAlternativeMessage(message);
    }
  };

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        You can speak your current location in the application with this hook
        and ,if you want it, speak another message after that. Please check it
        out!
      </p>
      <button
        aria-label="button to enable the voice"
        onClick={() => setEnabledVoice(!enabledVoice)}
        style={{ width: "177px", margin: "0 auto" }}
      >
        {enabledVoice ? "Disable" : "Enable"} voice
      </button>
      <input
        aria-label="input to put your alternative message of the hook"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "170px", margin: "15px auto" }}
      />
      <button
        aria-label="button to change alternative text"
        style={{ width: "177px", margin: "0 auto" }}
        onClick={sendMessage}
      >
        Modify alternative text
      </button>
    </section>
  );
};
