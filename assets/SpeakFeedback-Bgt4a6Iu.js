import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as i}from"./index-CNIo23I2.js";import s from"./SpeakFeedback.stories-CWeVDTIr.js";import"./index-uubelm5h.js";import"./iframe-i35biHmJ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./speakMessage-v6n5pkuV.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(n.h1,{id:"usespeakfeedback",children:e.jsx(n.strong,{children:"useSpeakFeedback"})}),`
`,e.jsx(n.p,{children:`This hook use speech synthesis to give feedback if you need to tell something important to\r
know. Please, check it out!`}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/perspective-videos/notifications/",rel:"nofollow",children:"Notifications and Feedback"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG2/supplemental/patterns/o4p10-status-feedback/",rel:"nofollow",children:"Cognitive Accessibility Design Pattern: Provide Feedback"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const { somethingChange, setSomethingChange, setMessage } =\r
    useSpeakFeedback();\r
\r
  const handleButtonClick = () => {\r
    setMessage("¡This is an important feedback to know!");\r
    setSomethingChange(true);\r
  };\r
\r
  const handleChangeStatus = () => {\r
    setSomethingChange(false);\r
  };\r
\r
  return (\r
    <section style={{ display: "flex", flexDirection: "column" }}>\r
      <p\r
        aria-label="title of the component"\r
        aria-describedby="description of the hook"\r
        style={{ textAlign: "center", textDecoration: "underline" }}\r
      >\r
        This hook is to give feedback if you need to tell something important to\r
        know. Please, check it out!\r
      </p>\r
\r
      <p\r
        aria-label="feedback is enabled or not"\r
        aria-describedby="description of feedback"\r
        style={{ textAlign: "center" }}\r
      >\r
        Feedback: {somethingChange ? "ON" : "OFF"}\r
      </p>\r
      <button\r
        aria-label="button to simulate a change"\r
        onClick={handleButtonClick}\r
        style={{ width: "100px", margin: "0 auto" }}\r
      >\r
        Call to action\r
      </button>\r
\r
      <button\r
        aria-label="button to change status of hook"\r
        onClick={handleChangeStatus}\r
        style={{ width: "100px", margin: "0 auto", marginTop: "15px" }}\r
      >\r
        Disabled feedback\r
      </button>\r
    </section>\r
  );
`})})]})}function k(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{k as default};
