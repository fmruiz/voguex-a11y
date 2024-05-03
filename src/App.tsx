import React from "react";
import useSpeakAnnouncer from "./hooks/useSpeakAnnouncer";

const App = () => {
  const { setSomethingChange, setMessage } = useSpeakAnnouncer();

  return (
    <div>
      <button
        onClick={() => {
          setSomethingChange(false), setMessage("button first");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setSomethingChange(true), setMessage("button second");
        }}
      >
        2
      </button>
    </div>
  );
};

export default App;
