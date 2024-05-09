import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as a}from"./index-CNIo23I2.js";import i from"./ArrowsNavigation.stories-BHRcsiH1.js";import"./index-uubelm5h.js";import"./iframe-i35biHmJ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(n.h1,{id:"usearrowsnavigation",children:e.jsx(n.strong,{children:"useArrowsNavigation"})}),`
`,e.jsx(n.p,{children:"This hook allows you to use arrows keys and, if you want it, use speech synthesis to read the content of elements."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://aally.app/en/blog/test-the-accessibility-of-your-website-keyboard-navigation/",rel:"nofollow",children:"Test the accessibility of your website: keyboard navigation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.chhs.colostate.edu/accessibility/best-practices-how-tos/keyboard-navigation/",rel:"nofollow",children:"Keyboard Navigation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.reddit.com/r/accessibility/comments/1620orz/are_arrow_keys_necessary_to_meet_wcag_a_and_aa/",rel:"nofollow",children:"Are arrow keys necessary to meet WCAG A and AA standards"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://a11y-guidelines.orange.com/en/web/toolbox/methods-and-test-tools/keyboard-navigation/",rel:"nofollow",children:"Keyboard navigation - Orange digital accessibility guidelines"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`    const ref1 = useRef(null);\r
    const ref2 = useRef(null);\r
    const ref3 = useRef(null);\r
\r
    const { speakNavigationStatus, setSpeakNavigationStatus } =\r
        useArrowsNavigation([ref1, ref2, ref3]);\r
\r
    return (\r
        <section>\r
        <p\r
            aria-label="title of the component"\r
            aria-describedby="title of arrow navigation component"\r
            style={{ textDecoration: "underline", textAlign: "center" }}\r
        >\r
            We can navigate using arrows keys and if you want it, we can activate\r
            voice to read the content of the elements\r
        </p>\r
        <section style={{ display: "flex", justifyContent: "space-around" }}>\r
            <button\r
            aria-label="button to enable or disable voice"\r
            onClick={() => setSpeakNavigationStatus(!speakNavigationStatus)}\r
            >\r
            {speakNavigationStatus ? "Disabled" : "Enabled"} voice\r
            </button>\r
            <button aria-label="first element to navigate" ref={ref1}>\r
            Element 1\r
            </button>\r
            <button aria-label="second element to navigate" ref={ref2}>\r
            Element 2\r
            </button>\r
            <button aria-label="third element to navigate" ref={ref3}>\r
            Element 3\r
            </button>\r
        </section>\r
        <section/>\r
    );
`})})]})}function x(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{x as default};
