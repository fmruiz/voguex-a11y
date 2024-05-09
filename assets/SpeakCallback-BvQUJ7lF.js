import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as i}from"./index-CNIo23I2.js";import s from"./SpeakCallback.stories-eGH13Bhx.js";import"./index-uubelm5h.js";import"./iframe-i35biHmJ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:s}),`
`,n.jsx(e.h1,{id:"usespeakcallback",children:n.jsx(e.strong,{children:"useSpeakCallback"})}),`
`,n.jsx(e.p,{children:'This hook allows to use recognition with your microphone to detect an specific function to do something, an example is, maybe say "go to home" and in your callback put the logic to navigate to /home, or anything else.'}),`
`,n.jsxs(e.h2,{id:"atention-",children:[n.jsx(e.strong,{children:"Atention!"})," :"]}),`
`,n.jsx(e.p,{children:"This hook can be used only for navigators that have webkitSpeechRecognition API, currently firefox navigator doesnt have this API available."}),`
`,n.jsxs(e.h2,{id:"resources-",children:[n.jsx(e.strong,{children:"Resources"})," :"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.w3schools.com/accessibility/accessibility_screen_readers.php",rel:"nofollow",children:"Accessibility Screen Readers"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://blog.hubspot.com/website/screen-reader-accessibility",rel:"nofollow",children:"How to Design Your Website for Screen Reader Accessibility"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.w3.org/WAI/perspective-videos/speech/",rel:"nofollow",children:"W3C: Text to Speech"})}),`
`]}),`
`,n.jsxs(e.h2,{id:"example-",children:[n.jsx(e.strong,{children:"Example"})," :"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`  const [firstOption, setFirstOption] = useState<boolean>(false);\r
  const [secondOption, setSecondOption] = useState<boolean>(false);\r
  const [thirdOption, setThirdOption] = useState<boolean>(false);\r
\r
  const voiceCommands = {\r
    "go to home": () => {\r
      setFirstOption(true);\r
    },\r
    "go to payments": () => {\r
      setSecondOption(true);\r
    },\r
    "go to contact": () => {\r
      setThirdOption(true);\r
    },\r
  };\r
\r
  const handleCleanListStatus = () => {\r
    setFirstOption(false);\r
    setSecondOption(false);\r
    setThirdOption(false);\r
  };\r
\r
  const {\r
    activeVoiceCallback,\r
    speakCommandError,\r
    continuousRecognition,\r
    setActiveVoiceCallback,\r
    setContinuousRecognition,\r
  } = useSpeakCallback(voiceCommands);\r
\r
  return (\r
    <section>\r
      <p\r
        aria-label="title component"\r
        aria-describedby="advice to use this component in chrome navigator instead other navigators"\r
        style={{ textDecoration: "underline", textAlign: "center" }}\r
      >\r
        The useSpeakCallback hook use webkitSpeechRecognition API and this is\r
        only available in chrome, if you are using another navigator, please\r
        test this component in chrome navigator:\r
      </p>\r
      <p style={{ textAlign: "center" }}>\r
        Voice Callback status: {activeVoiceCallback ? "ON" : "OFF"}\r
      </p>\r
      <p style={{ textAlign: "center" }}>\r
        Continuous Recognition status: {continuousRecognition ? "ON" : "OFF"}\r
      </p>\r
      <section\r
        style={{\r
          display: "flex",\r
          justifyContent: "center",\r
          alignItems: "center",\r
        }}\r
      >\r
        <p>Commands availables:</p>\r
        <ul>\r
          <li id="first-command">\r
            {firstOption\r
              ? "Go to home: we can use the command to navigate or for anything else"\r
              : "Go to home"}\r
          </li>\r
          <li>\r
            {secondOption\r
              ? "Go to payments: maybe you can use the callback to pay something, you need to be creative"\r
              : "Go to payments"}\r
          </li>\r
          <li>\r
            {thirdOption\r
              ? "Go to contact: you can use to show contact information if you want it"\r
              : "Go to contact"}\r
          </li>\r
        </ul>\r
      </section>\r
      <div style={{ display: "flex", justifyContent: "space-around" }}>\r
        <button\r
          aria-label="button to active voice callback"\r
          onClick={() => setActiveVoiceCallback(true)}\r
        >\r
          {activeVoiceCallback ? "Disable" : "Enable"} voice callback\r
        </button>\r
        <button\r
          aria-label="button clean the list command state"\r
          onClick={() => handleCleanListStatus()}\r
        >\r
          Clean command list status\r
        </button>\r
        <button\r
          aria-label="button to active continuous recognition"\r
          onClick={() => setContinuousRecognition(!continuousRecognition)}\r
        >\r
          {continuousRecognition ? "Disable" : "Enable"} continuous recognition\r
        </button>\r
      </div>\r
      {speakCommandError && (\r
        <p\r
          aria-label="error message"\r
          aria-describedby="error message if we say an incorrect command"\r
        >\r
          Error: Incorrect command voice\r
        </p>\r
      )}\r
    </section>\r
  );
`})})]})}function f(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{f as default};
