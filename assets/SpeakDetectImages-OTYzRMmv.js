import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as s}from"./index-BFF5gSLj.js";import o from"./SpeakDetectImages.stories-CYq95k06.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./speakMessage-v6n5pkuV.js";import"./example-1-i47a3R_z.js";import"./example-3-Id5rSYQO.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
`,e.jsx(n.h1,{id:"usespeakdetectimages",children:e.jsx(n.strong,{children:"useSpeakDetectImages"})}),`
`,e.jsx(n.p,{children:"This hook use speech synthesis to speak how many images we have in total."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.accessibilitychecking.com/blog/image-accessibility/",rel:"nofollow",children:"Why image accessibility is a must-have for your website"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.ncl.ac.uk/design-system/ux/images/accessibility/",rel:"nofollow",children:"How to Describe Images for Accessibility and Findability"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const { setImageDetection } = useSpeakDetectImages();\r
\r
  return (\r
    <section style={{ display: "flex", flexDirection: "column" }}>\r
      <p\r
        aria-label="title of the component"\r
        aria-describedby="description of the hook"\r
        style={{ textAlign: "center", textDecoration: "underline" }}\r
      >\r
        This hook is to tell us how many images we have in total.\r
      </p>\r
\r
      <button\r
        aria-label="button to enable the image detection"\r
        onClick={() => setImageDetection(true)}\r
        style={{ width: "100px", margin: "0 auto" }}\r
      >\r
        Detect images\r
      </button>\r
      <div\r
        style={{\r
          display: "flex",\r
          justifyContent: "space-around",\r
          marginTop: "20px",\r
        }}\r
      >\r
        <img\r
          width={200}\r
          height={150}\r
          src={ImageOne}\r
          alt="Accessible image one"\r
        />\r
        <img\r
          width={200}\r
          height={150}\r
          src={ImageTwo}\r
          alt="Accesible image two"\r
          style={{ marginLeft: "15px", marginRight: "15px" }}\r
        />\r
        <img\r
          width={200}\r
          height={150}\r
          src={ImageThree}\r
          alt="Accesible image two"\r
        />\r
      </div>\r
    </section>\r
  );
`})})]})}function b(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{b as default};
