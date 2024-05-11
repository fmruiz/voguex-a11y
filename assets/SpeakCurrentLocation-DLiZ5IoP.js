import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as o}from"./index-BFF5gSLj.js";import i from"./SpeakCurrentLocation.stories-nKZcCgEE.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./speakMessage-v6n5pkuV.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(n.h1,{id:"usespeakcurrentlocation",children:e.jsx(n.strong,{children:"useSpeakCurrentLocation"})}),`
`,e.jsx(n.p,{children:"This hook use speech synthesis to speak your current location in the application and ,if you want it, speak another message after that. Please check it out!"}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://techhub.iodigital.com/articles/how-to-build-accessible-main-navigation",rel:"nofollow",children:"How to build accessible main navigation?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3schools.com/accessibility/accessibility_screen_readers.php",rel:"nofollow",children:"Accessibility Screen Readers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://blog.hubspot.com/website/screen-reader-accessibility",rel:"nofollow",children:"How to Design Your Website for Screen Reader Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/perspective-videos/speech/",rel:"nofollow",children:"W3C: Text to Speech"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const [message, setMessage] = useState<string>("");\r
  const { enabledVoice, setEnabledVoice, setAlternativeMessage } =\r
    useSpeakCurrentLocation();\r
\r
  const sendMessage = () => {\r
    if (message !== "") {\r
      setAlternativeMessage(message);\r
    }\r
  };\r
\r
  return (\r
    <section style={{ display: "flex", flexDirection: "column" }}>\r
      <p\r
        aria-label="title of the component"\r
        aria-describedby="description of the hook"\r
        style={{ textAlign: "center", textDecoration: "underline" }}\r
      >\r
        You can speak your current location in the application with this hook\r
        and ,if you want it, speak another message after that. Please check it\r
        out!\r
      </p>\r
      <button\r
        aria-label="button to enable the voice"\r
        onClick={() => setEnabledVoice(!enabledVoice)}\r
        style={{ width: "177px", margin: "0 auto" }}\r
      >\r
        {enabledVoice ? "Disable" : "Enable"} voice\r
      </button>\r
      <input\r
        aria-label="input to put your alternative message of the hook"\r
        type="text"\r
        value={message}\r
        onChange={(e) => setMessage(e.target.value)}\r
        style={{ width: "170px", margin: "15px auto" }}\r
      />\r
      <button\r
        aria-label="button to change alternative text"\r
        style={{ width: "177px", margin: "0 auto" }}\r
        onClick={sendMessage}\r
      >\r
        Modify alternative text\r
      </button>\r
    </section>\r
  );
`})})]})}function j(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{j as default};
