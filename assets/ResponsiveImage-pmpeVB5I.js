import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as t}from"./index-BFF5gSLj.js";import o from"./ResponsiveImage.stories-pNVrZq9o.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./example-1-i47a3R_z.js";import"./example-3-Id5rSYQO.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(n.h1,{id:"useresponsiveimage",children:e.jsx(n.strong,{children:"useResponsiveImage"})}),`
`,e.jsx(n.p,{children:"This hook allows to detect the size of the window and depending that you can change between different images."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://kevinsguides.com/guides/webdev/best-practices/responsive-accessible-images",rel:"nofollow",children:"Responsive, Accessible Images"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web.dev/learn/design/responsive-images?hl=es-419",rel:"nofollow",children:"Responsive images"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const imageSources = [\r
    { src: ImageOne, width: 320 },\r
    { src: ImageTwo, width: 640 },\r
    { src: ImageThree, width: 1024 },\r
  ];\r
\r
  const selectedSrc = useResponsiveImage(imageSources);\r
\r
  return (\r
    <section>\r
      <p\r
        aria-label="title of component"\r
        aria-describedby="here we change between differents images depends of breakpoints"\r
        style={{ textDecoration: "underline" }}\r
      >\r
        Change the size of screen to show differents images depends the\r
        following breakpoints: 320, 640, 1024\r
      </p>\r
      <div style={{ display: "flex", justifyContent: "center" }}>\r
        {selectedSrc && (\r
          <img width={300} src={selectedSrc} alt="Imagen responsive" />\r
        )}\r
      </div>\r
    </section>\r
  );
`})})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{v as default};
