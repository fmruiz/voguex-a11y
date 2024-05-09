import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as o}from"./index-CNIo23I2.js";import i from"./SpeakClickInside.stories-CT2NEaYN.js";import"./index-uubelm5h.js";import"./iframe-i35biHmJ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./speakMessage-v6n5pkuV.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(n.h1,{id:"usespeakclickinside",children:e.jsx(n.strong,{children:"useSpeakClickInside"})}),`
`,e.jsx(n.p,{children:"This hook use speech synthesis to speak a message if you clicked inside of a reference component."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3schools.com/accessibility/accessibility_screen_readers.php",rel:"nofollow",children:"Accessibility Screen Readers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://blog.hubspot.com/website/screen-reader-accessibility",rel:"nofollow",children:"How to Design Your Website for Screen Reader Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/perspective-videos/speech/",rel:"nofollow",children:"W3C: Text to Speech"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const buttonRef = useRef(null);\r
\r
  useSpeakClickInside(buttonRef, "¡You clicked inside the button!");\r
\r
  return (\r
    <section\r
      style={{\r
        display: "flex",\r
        justifyContent: "center",\r
        flexDirection: "column",\r
      }}\r
    >\r
      <p\r
        aria-label="title of the component"\r
        aria-describedby="description of the hook"\r
        style={{ textAlign: "center", textDecoration: "underline" }}\r
      >\r
        The useSpeakClickInside hook provides the functionality to speak a\r
        message when you click on the component, please check it out!\r
      </p>\r
      <button\r
        aria-label="button to click"\r
        ref={buttonRef}\r
        style={{ width: "100px", margin: "0 auto" }}\r
      >\r
        Click here\r
      </button>\r
    </section>\r
  );
`})})]})}function k(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{k as default};
