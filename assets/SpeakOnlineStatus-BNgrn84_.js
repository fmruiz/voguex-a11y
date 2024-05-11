import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as s}from"./index-BFF5gSLj.js";import i from"./SpeakOnlineStatus.stories-DQFv_m0y.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
`,e.jsx(n.h1,{id:"usespeakonlinestatus",children:e.jsx(n.strong,{children:"useSpeakOnlineStatus"})}),`
`,e.jsx(n.p,{children:"This hook is used to recognise by voice whether we are connected or not."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://medium.com/front-end-weekly/accessibility-a11y-b4c6afcb5f",rel:"nofollow",children:"Accessibility A11Y"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const { onlineStatus } = useSpeakOnlineStatus();\r
\r
  return (\r
    <section>\r
      <p\r
        aria-label="title of the component"\r
        aria-describedby="description of the hook"\r
        style={{ textAlign: "center", textDecoration: "underline" }}\r
      >\r
        This hook is used to recognise by voice whether we are connected or not.\r
      </p>\r
      <p\r
        aria-label="online status"\r
        aria-describedby="description of online status"\r
        style={{ textAlign: "center" }}\r
      >\r
        {onlineStatus ? "You are online" : "You are offline"}\r
      </p>\r
    </section>\r
  );
`})})]})}function b(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{b as default};
