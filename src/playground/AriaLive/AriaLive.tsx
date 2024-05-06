import { useState } from "react";
import useAriaButton from "@voguex/hooks/useAriaButton";
import useAriaLive from "@voguex/hooks/useAriaLive";

export const AriaLive = () => {
  const { content, updateContent, liveRegionRef } = useAriaLive({
    politeness: "polite",
  });
  const ariaAttributes = useAriaButton({
    ariaLabel: "Example Button",
    ariaPressed: false,
    ariaDisabled: false,
  });
  const [newChanges, setNewChanges] = useState("");

  const simulateUpdate = (message: string) => {
    setNewChanges(message);
  };

  const handleSimulateUpdate = () => {
    updateContent(newChanges);
  };

  return (
    <section style={{ width: "700px" }}>
      <p
        aria-label="title of the component"
        aria-describedby="title of aria live component"
        style={{ textDecoration: "underline", textAlign: "center" }}
      >
        Here we use an input to update the content bellow and this content are
        tracking using useAriaLive hook and the button are using useAriaButton
        hook
      </p>
      <p
        style={{ textAlign: "center" }}
        aria-label="paragraph using aria live"
        ref={liveRegionRef}
      >
        {content}
      </p>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <input
          aria-describedby="write new dinamic content"
          aria-label="dinamic input content"
          type="text"
          value={newChanges}
          onChange={(e) => simulateUpdate(e.target.value)}
        />
        <button {...ariaAttributes} onClick={handleSimulateUpdate}>
          Update Content
        </button>
      </section>
    </section>
  );
};
