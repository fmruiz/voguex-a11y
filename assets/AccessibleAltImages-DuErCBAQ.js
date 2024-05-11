import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as a}from"./index-BFF5gSLj.js";import i from"./AccessibleAltImages.stories-XqMe9D65.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./example-1-i47a3R_z.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(t.h1,{id:"useaccessiblealtimages",children:e.jsx(t.strong,{children:"useAccessibleAltImages"})}),`
`,e.jsx(t.p,{children:"This hook allows you to detect any event and update the alternative text of images."}),`
`,e.jsxs(t.h2,{id:"resources-",children:[e.jsx(t.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.semrush.com/blog/alt-text/",rel:"nofollow",children:"Alt Text: What Is It & Why It Matters for Accessibility & SEO"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://accessibility.huit.harvard.edu/describe-content-images/",rel:"nofollow",children:"Write helpful Alt Text to describe images "})}),`
`]}),`
`,e.jsxs(t.h2,{id:"example-",children:[e.jsx(t.strong,{children:"Example"})," :"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const [detectEvent, setDetectEvent] = useState(false);\r
\r
const images = [\r
  {\r
    id: "accessible-image-1",\r
    alt: \`\${detectEvent ? "Accessible Image one after event" : "Default Alt Image 1"}\`,\r
    image: "",\r
  },\r
  {\r
    id: "accessible-image-2",\r
    alt: \`\${detectEvent ? "Accessible Image two after event" : "Default Alt Image 2"}\`,\r
    image: ExampleImage,\r
  },\r
  {\r
    id: "accessible-image-3",\r
    alt: \`\${detectEvent ? "Accessible Image three after event" : "Default Alt Image 3"}\`,\r
    image: "",\r
  },\r
];\r
\r
const { updateAltImages } = useAccessibleAltImages();\r
\r
useEffect(() => {\r
  updateAltImages(images);\r
}, [updateAltImages]);\r
\r
return (\r
  <section style={{ display: "flex", flexDirection: "column" }}>\r
    <p\r
      aria-label="title of the component"\r
      aria-describedby="say that we have a list of images bellow"\r
      style={{ textDecoration: "underline", textAlign: "center" }}\r
    >\r
      List of images bellow to see the change in alt attribute:\r
    </p>\r
    <div\r
      style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}\r
    >\r
      {images.map((image) => (\r
        <img\r
          key={image.id}\r
          id={image.id}\r
          src={image.image}\r
          alt={"image.alt"}\r
          width={200}\r
        />\r
      ))}\r
    </div>\r
    <button\r
      aria-label="button to update alt images"\r
      style={{ width: "200px", margin: "0 auto" }}\r
      onClick={() => setDetectEvent(!detectEvent)}\r
    >\r
      Update Alt attribute of images\r
    </button>\r
  </section>\r
);
`})})]})}function j(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};
