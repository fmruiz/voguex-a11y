import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as n}from"./index-FeUjBnvO.js";import{M as i}from"./index-BFF5gSLj.js";import o from"./ReadImagesAlt.stories-Ce6IWo4g.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./speakMessage-v6n5pkuV.js";function s(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(t.h1,{id:"usereadimagesalt",children:e.jsx(t.strong,{children:"useReadImagesAlt"})}),`
`,e.jsx(t.p,{children:"This hook allows to read using speech synthesis the alternative text of the images."}),`
`,e.jsxs(t.h2,{id:"resources-",children:[e.jsx(t.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://help.siteimprove.com/support/solutions/articles/80000863904-accessibility-image-alt-text-best-practices",rel:"nofollow",children:"Accessibility: Image Alt text best practices"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.chhs.colostate.edu/accessibility/best-practices-how-tos/alternative-text/",rel:"nofollow",children:"Colorado State University: Alternative Text"})}),`
`]}),`
`,e.jsxs(t.h2,{id:"example-",children:[e.jsx(t.strong,{children:"Example"})," :"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`    const { setReadAltImages } = useReadImagesAlt();\r
\r
    return (\r
        <section>\r
            <button\r
                aria-label="button to read the alternative text of the images"\r
                onClick={() => setReadAltImages(true)}\r
            >\r
                Read alternative text of the images\r
            </button>\r
            <img src="image1.jpg" alt="Image one - Alternative Text" />\r
            <img src="image2.jpg" alt="Image second - Alternative Text" />\r
            <img src="image3.jpg" alt="Image third - Alternative Text" />\r
        </section>\r
    );
`})})]})}function b(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{b as default};
