import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as i}from"./index-BFF5gSLj.js";import s from"./AriaButton.stories-BtzdtAq-.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-v5k60XZD.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:s}),`
`,t.jsx(e.h1,{id:"useariabutton",children:t.jsx(e.strong,{children:"useAriaButton"})}),`
`,t.jsx(e.p,{children:"This hook seeks to promote the use of aria attributes in button components to make your application a little bit more accessible for everyone."}),`
`,t.jsxs(e.h2,{id:"resources-",children:[t.jsx(e.strong,{children:"Resources"})," :"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://www.deque.com/blog/accessible-aria-buttons/",rel:"nofollow",children:"Building Accessible Buttons with ARIA: A11y Support Series"})}),`
`]}),`
`,t.jsxs(e.h2,{id:"example-",children:[t.jsx(e.strong,{children:"Example"})," :"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`const ariaAttributes = useAriaButton({\r
    ariaLabel: "Example Button",\r
    ariaPressed: false,\r
    ariaDisabled: false,\r
  });\r
\r
  const handleClick = () => {\r
    console.log('Hello world!');\r
  };\r
\r
  return (\r
    <section>\r
      <p\r
        aria-label="title of the component"\r
        aria-describedby="title say that we have a button bellow with aria attributes"\r
        style={{ textDecoration: "underline", textAlign: "center" }}\r
      >\r
        Button with aria attributes using useAriaButton:\r
      </p>\r
      <button {...ariaAttributes} onClick={handleClick}>\r
        Click Me\r
      </button>\r
    </section>\r
  );
`})})]})}function g(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{g as default};
