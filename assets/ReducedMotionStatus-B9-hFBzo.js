import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as i}from"./index-BFF5gSLj.js";import s from"./ReducedMotionStatus.stories-ppb3lMFV.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(n.h1,{id:"usereducedmotionstatus",children:e.jsx(n.strong,{children:"useReducedMotionStatus"})}),`
`,e.jsx(n.p,{children:`This hook allows to detect if the user have the preference of reduced\r
movement in their device enabled or not.`}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Techniques/css/C39",rel:"nofollow",children:"Using the CSS reduce-motion query to prevent motion"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/",rel:"nofollow",children:"Designing With Reduced Motion For Motion Sensitivities"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://a11y-101.com/development/reduced-motion",rel:"nofollow",children:"Reduced motion | Introduction to Accessibility"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const reduceMotionEnabled = useReducedMotionStatus();\r
\r
  return (\r
    <section>\r
      <p\r
        aria-label="title of component"\r
        aria-describedby="title to say the functionality of the hook"\r
        style={{ textAlign: "center", textDecoration: "underline" }}\r
      >\r
        This hook is to detect if the user have the preference of reduced\r
        movement in their device enabled or not:\r
      </p>\r
      {reduceMotionEnabled ? (\r
        <p\r
          aria-label="reduced motion enabled"\r
          aria-describedby="description if we have the preference of reduced movement enabled"\r
          style={{ textAlign: "center" }}\r
        >\r
          The user have the preference of reduced movement enabled.\r
        </p>\r
      ) : (\r
        <p\r
          aria-label="reduced motion disabled"\r
          aria-describedby="description if we have the preference of reduced movement disabled"\r
          style={{ textAlign: "center" }}\r
        >\r
          The user have the preference of reduced movement disabled.\r
        </p>\r
      )}\r
    </section>\r
  );
`})})]})}function b(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{b as default};
