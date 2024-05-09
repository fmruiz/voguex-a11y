import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as s}from"./index-CNIo23I2.js";import i from"./ComponentClicked.stories-DOcARFom.js";import"./index-uubelm5h.js";import"./iframe-i35biHmJ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
`,e.jsx(n.h1,{id:"usecomponentclicked",children:e.jsx(n.strong,{children:"useComponentClicked"})}),`
`,e.jsx(n.p,{children:"This hook allows you to detect if you click inside or outside the component, this is important because, maybe you can use this hook with speech synthesis to speak an advice about it."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",rel:"nofollow",children:"A Complete Guide To Accessible Front-End Components"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const elementRef = useRef(null);\r
\r
  const { statusClicked } = useComponentClicked(\r
    elementRef,\r
    "¡Click inside!",\r
    "¡Click outside!",\r
  );\r
\r
  return (\r
    <section>\r
      <p\r
        aria-label="click status"\r
        aria-describedby="here we show the status of the click, if we touch inside the component or outside the component"\r
        style={{ textAlign: "center", textDecoration: "underline" }}\r
      >\r
        Check here:{" "}\r
        {statusClicked.isClicked\r
          ? statusClicked.message\r
          : statusClicked.message}\r
      </p>\r
      <button\r
        aria-label="example button"\r
        ref={elementRef}\r
        style={{\r
          width: "200px",\r
          height: "100px",\r
          background: "orangered",\r
          border: "none",\r
          borderRadius: "10px",\r
          color: "white",\r
          padding: "20px",\r
        }}\r
      >\r
        Click inside or outside the element\r
      </button>\r
    </section>\r
  );
`})})]})}function g(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{g as default};
