import { useState } from "react";
import useSpeakSettings from "@voguex/hooks/useSpeakSettings";

export const SpeakSettings = () => {
  const {
    settings,
    setRate,
    setPitch,
    setVolume,
    setMessage,
    setSpeakEnabled,
  } = useSpeakSettings();

  const [customMessage, setCustomMessage] = useState("");

  const handleCustomMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCustomMessage(event.target.value);
  };

  const handleSettingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "rate") {
      setRate(parseFloat(value));
    } else if (name === "pitch") {
      setPitch(parseFloat(value));
    } else if (name === "volume") {
      setVolume(parseFloat(value));
    }
  };

  const handleStartReading = (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(customMessage || "Default message");
    setSpeakEnabled(true);
  };

  return (
    <section>
      <p
        aria-label="title of the component"
        aria-describedby="description of the hook"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        This hook is great to apply or customize your own preference about the
        settings of Speech Synthesis
      </p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "300px",
          margin: "0 auto",
        }}
        aria-label="hook settings"
      >
        <label htmlFor="velocity">Velocity:</label>
        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          name="rate"
          value={settings.rate}
          onChange={handleSettingsChange}
          id="velocity"
          style={{ marginLeft: "10px" }}
        />

        <label htmlFor="volume">Volumen:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          name="volume"
          value={settings.volume}
          onChange={handleSettingsChange}
          id="pitch"
          style={{ marginLeft: "10px" }}
        />

        <label htmlFor="pitch">Pitch:</label>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          name="pitch"
          value={settings.pitch}
          onChange={handleSettingsChange}
          id="pitch"
          style={{ marginLeft: "10px" }}
        />

        <div
          style={{ display: "flex", flexDirection: "column", margin: "10px 0" }}
        >
          <label htmlFor="custom-message">Custom Message:</label>
          <input
            type="text"
            value={customMessage}
            onChange={handleCustomMessageChange}
            id="custom-message"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
        </div>

        <button
          aria-label="button to read message"
          onClick={(event) => handleStartReading(event)}
          style={{ margin: "0 auto" }}
        >
          Click here to speak
        </button>
      </form>
    </section>
  );
};
