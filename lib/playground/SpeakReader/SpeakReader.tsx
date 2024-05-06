import useSpeakReader from "@voguex/hooks/useSpeakReader";

export const SpeakReader = () => {
  const { speakMessage, setSpeechRate, speakComponentContent } =
    useSpeakReader();

  const handleSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rate = parseFloat(event.target.value);
    setSpeechRate(rate);
  };

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          aria-label="button to read default message"
          onClick={() => speakMessage("¡Hello world!")}
        >
          Default message
        </button>

        <select
          aria-label="select your voice velocity"
          onChange={handleSpeedChange}
        >
          <option value="1.0">Normal</option>
          <option value="0.5">Slow</option>
          <option value="1.5">Fast</option>
        </select>

        <button
          aria-label="button to read the element content"
          onClick={() => speakComponentContent("myElementId")}
        >
          Read the content
        </button>
      </div>

      <p
        aria-label="element content"
        aria-describedby="example paragraph"
        style={{ textAlign: "center" }}
        id="myElementId"
      >
        Element content to read, you can use this hook to read short messages,
        or any content, and with this make more accessible your application!
      </p>
    </section>
  );
};
