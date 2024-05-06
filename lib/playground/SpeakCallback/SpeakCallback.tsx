import { useState } from "react";
import useSpeakCallback from "@voguex/hooks/useSpeakCallback";

export const SpeakCallback = () => {
  const [firstOption, setFirstOption] = useState<boolean>(false);
  const [secondOption, setSecondOption] = useState<boolean>(false);
  const [thirdOption, setThirdOption] = useState<boolean>(false);

  const voiceCommands = {
    "go to home": () => {
      setFirstOption(true);
    },
    "go to payments": () => {
      setSecondOption(true);
    },
    "go to contact": () => {
      setThirdOption(true);
    },
  };

  const handleCleanListStatus = () => {
    setFirstOption(false);
    setSecondOption(false);
    setThirdOption(false);
  };

  const {
    activeVoiceCallback,
    speakCommandError,
    continuousRecognition,
    setActiveVoiceCallback,
    setContinuousRecognition,
  } = useSpeakCallback(voiceCommands);

  return (
    <section>
      <p
        aria-label="title component"
        aria-describedby="advice to use this component in chrome navigator instead other navigators"
        style={{ textDecoration: "underline", textAlign: "center" }}
      >
        The useSpeakCallback hook use webkitSpeechRecognition API and this is
        only available in chrome, if you are using another navigator, please
        test this component in chrome navigator:
      </p>
      <p style={{ textAlign: "center" }}>
        Voice Callback status: {activeVoiceCallback ? "ON" : "OFF"}
      </p>
      <p style={{ textAlign: "center" }}>
        Continuous Recognition status: {continuousRecognition ? "ON" : "OFF"}
      </p>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Commands availables:</p>
        <ul>
          <li id="first-command">
            {firstOption
              ? "Go to home: we can use the command to navigate or for anything else"
              : "Go to home"}
          </li>
          <li>
            {secondOption
              ? "Go to payments: maybe you can use the callback to pay something, you need to be creative"
              : "Go to payments"}
          </li>
          <li>
            {thirdOption
              ? "Go to contact: you can use to show contact information if you want it"
              : "Go to contact"}
          </li>
        </ul>
      </section>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          aria-label="button to active voice callback"
          onClick={() => setActiveVoiceCallback(true)}
        >
          {activeVoiceCallback ? "Disable" : "Enable"} voice callback
        </button>
        <button
          aria-label="button clean the list command state"
          onClick={() => handleCleanListStatus()}
        >
          Clean command list status
        </button>
        <button
          aria-label="button to active continuous recognition"
          onClick={() => setContinuousRecognition(!continuousRecognition)}
        >
          {continuousRecognition ? "Disable" : "Enable"} continuous recognition
        </button>
      </div>
      {speakCommandError && (
        <p
          aria-label="error message"
          aria-describedby="error message if we say an incorrect command"
        >
          Error: Incorrect command voice
        </p>
      )}
    </section>
  );
};
