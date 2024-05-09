import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as a}from"./index-CNIo23I2.js";import o from"./SpeakSettings.stories-DMFBfnE-.js";import"./index-uubelm5h.js";import"./iframe-i35biHmJ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o}),`
`,e.jsx(n.h1,{id:"usespeaksettings",children:e.jsx(n.strong,{children:"useSpeakSettings"})}),`
`,e.jsx(n.p,{children:`This hook is great to apply or customize your own preference about the\r
settings of speech synthesis`}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3schools.com/accessibility/accessibility_screen_readers.php",rel:"nofollow",children:"Accessibility Screen Readers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://blog.hubspot.com/website/screen-reader-accessibility",rel:"nofollow",children:"How to Design Your Website for Screen Reader Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://accessibility.its.uconn.edu/2018/08/22/what-is-a-screen-reader-and-how-does-it-work/",rel:"nofollow",children:"What is a screen reader and how does it work?"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const {\r
    settings,\r
    setRate,\r
    setPitch,\r
    setVolume,\r
    setMessage,\r
    setSpeakEnabled,\r
  } = useSpeakSettings();\r
\r
  const [customMessage, setCustomMessage] = useState("");\r
\r
  const handleCustomMessageChange = (\r
    event: React.ChangeEvent<HTMLInputElement>,\r
  ) => {\r
    setCustomMessage(event.target.value);\r
  };\r
\r
  const handleSettingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {\r
    const { name, value } = event.target;\r
    if (name === "rate") {\r
      setRate(parseFloat(value));\r
    } else if (name === "pitch") {\r
      setPitch(parseFloat(value));\r
    } else if (name === "volume") {\r
      setVolume(parseFloat(value));\r
    }\r
  };\r
\r
  const handleStartReading = (event: React.FormEvent) => {\r
    event.preventDefault();\r
    setMessage(customMessage || "Default message");\r
    setSpeakEnabled(true);\r
  };\r
\r
  return (\r
    <section>\r
      <p\r
        aria-label="title of the component"\r
        aria-describedby="description of the hook"\r
        style={{ textAlign: "center", textDecoration: "underline" }}\r
      >\r
        This hook is great to apply or customize your own preference about the\r
        settings of Speech Synthesis\r
      </p>\r
      <form\r
        style={{\r
          display: "flex",\r
          flexDirection: "column",\r
          textAlign: "center",\r
          width: "300px",\r
          margin: "0 auto",\r
        }}\r
        aria-label="hook settings"\r
      >\r
        <label htmlFor="velocity">Velocity:</label>\r
        <input\r
          type="range"\r
          min="0.1"\r
          max="10"\r
          step="0.1"\r
          name="rate"\r
          value={settings.rate}\r
          onChange={handleSettingsChange}\r
          id="velocity"\r
          style={{ marginLeft: "10px" }}\r
        />\r
\r
        <label htmlFor="volume">Volumen:</label>\r
        <input\r
          type="range"\r
          min="0"\r
          max="1"\r
          step="0.1"\r
          name="volume"\r
          value={settings.volume}\r
          onChange={handleSettingsChange}\r
          id="pitch"\r
          style={{ marginLeft: "10px" }}\r
        />\r
\r
        <label htmlFor="pitch">Pitch:</label>\r
        <input\r
          type="range"\r
          min="0"\r
          max="2"\r
          step="0.1"\r
          name="pitch"\r
          value={settings.pitch}\r
          onChange={handleSettingsChange}\r
          id="pitch"\r
          style={{ marginLeft: "10px" }}\r
        />\r
\r
        <div\r
          style={{ display: "flex", flexDirection: "column", margin: "10px 0" }}\r
        >\r
          <label htmlFor="custom-message">Custom Message:</label>\r
          <input\r
            type="text"\r
            value={customMessage}\r
            onChange={handleCustomMessageChange}\r
            id="custom-message"\r
            style={{ marginTop: "10px", marginBottom: "10px" }}\r
          />\r
        </div>\r
\r
        <button\r
          aria-label="button to read message"\r
          onClick={(event) => handleStartReading(event)}\r
          style={{ margin: "0 auto" }}\r
        >\r
          Click here to speak\r
        </button>\r
      </form>\r
    </section>\r
  );
`})})]})}function y(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{y as default};
