import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as s}from"./index-CNIo23I2.js";import a from"./SpeakReader.stories-DTf_W2jD.js";import"./index-uubelm5h.js";import"./iframe-i35biHmJ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"usespeakreader",children:e.jsx(n.strong,{children:"useSpeakReader"})}),`
`,e.jsx(n.p,{children:"This hook is use speech synthesis to read short messages, or any element content, and with this make more accessible your application!"}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3schools.com/accessibility/accessibility_screen_readers.php",rel:"nofollow",children:"Accessibility Screen Readers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://blog.hubspot.com/website/screen-reader-accessibility",rel:"nofollow",children:"How to Design Your Website for Screen Reader Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://accessibility.its.uconn.edu/2018/08/22/what-is-a-screen-reader-and-how-does-it-work/",rel:"nofollow",children:"What is a screen reader and how does it work?"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const { speakMessage, setSpeechRate, speakComponentContent } =\r
    useSpeakReader();\r
\r
  const handleSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {\r
    const rate = parseFloat(event.target.value);\r
    setSpeechRate(rate);\r
  };\r
\r
  return (\r
    <section>\r
      <div style={{ display: "flex", justifyContent: "space-around" }}>\r
        <button\r
          aria-label="button to read default message"\r
          onClick={() => speakMessage("¡Hello world!")}\r
        >\r
          Default message\r
        </button>\r
\r
        <select\r
          aria-label="select your voice velocity"\r
          onChange={handleSpeedChange}\r
        >\r
          <option value="1.0">Normal</option>\r
          <option value="0.5">Slow</option>\r
          <option value="1.5">Fast</option>\r
        </select>\r
\r
        <button\r
          aria-label="button to read the element content"\r
          onClick={() => speakComponentContent("myElementId")}\r
        >\r
          Read the content\r
        </button>\r
      </div>\r
\r
      <p\r
        aria-label="element content"\r
        aria-describedby="example paragraph"\r
        style={{ textAlign: "center" }}\r
        id="myElementId"\r
      >\r
        Element content to read, you can use this hook to read short messages,\r
        or any content, and with this make more accessible your application!\r
      </p>\r
    </section>\r
  );
`})})]})}function j(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
