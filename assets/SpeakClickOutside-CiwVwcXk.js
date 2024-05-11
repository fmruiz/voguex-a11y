import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as t}from"./index-FeUjBnvO.js";import{M as o}from"./index-BFF5gSLj.js";import i from"./SpeakClickOutside.stories-CiTCBuyJ.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./speakMessage-v6n5pkuV.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(n.h1,{id:"usespeakclickoutside",children:e.jsx(n.strong,{children:"useSpeakClickOutside"})}),`
`,e.jsx(n.p,{children:"This hook use speech synthesis to speak a message if you clicked outside of a reference component."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3schools.com/accessibility/accessibility_screen_readers.php",rel:"nofollow",children:"Accessibility Screen Readers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://blog.hubspot.com/website/screen-reader-accessibility",rel:"nofollow",children:"How to Design Your Website for Screen Reader Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/perspective-videos/speech/",rel:"nofollow",children:"W3C: Text to Speech"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const menuRef = useRef(null);\r
\r
  useSpeakClickOutside(menuRef, "¡You clicked outside the menu component!");\r
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
        The useSpeakClickOutside hook provides the functionality to speak a\r
        message if you click outside the component you referenced, please check\r
        it out.\r
      </p>\r
      <div\r
        ref={menuRef}\r
        style={{\r
          border: "1px solid black",\r
          padding: "20px",\r
          display: "flex",\r
          alignItems: "center",\r
          justifyContent: "center",\r
        }}\r
      >\r
        Example of menu component\r
      </div>\r
    </section>\r
  );
`})})]})}function k(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{k as default};
