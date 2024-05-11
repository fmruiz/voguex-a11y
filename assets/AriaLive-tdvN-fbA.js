import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as a}from"./index-BFF5gSLj.js";import s from"./AriaLive.stories-Kfwfh9ce.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-v5k60XZD.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s}),`
`,e.jsx(n.h1,{id:"usearialive",children:e.jsx(n.strong,{children:"useAriaLive"})}),`
`,e.jsx(n.p,{children:"This hook seeks to promote the use of aria live attribute to indicate that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",rel:"nofollow",children:"aria-live mdn web docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.to/abbeyperini/live-regions-in-react-4dmd",rel:"nofollow",children:"Live Regions in React"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`    const { content, updateContent, liveRegionRef } = useAriaLive({\r
        politeness: "polite",\r
    });\r
\r
    const ariaAttributes = useAriaButton({\r
        ariaLabel: "Example Button",\r
        ariaPressed: false,\r
        ariaDisabled: false,\r
    });\r
    const [newChanges, setNewChanges] = useState("");\r
\r
    const simulateUpdate = (message: string) => {\r
        setNewChanges(message);\r
    };\r
\r
    const handleSimulateUpdate = () => {\r
        updateContent(newChanges);\r
    };\r
\r
    return (\r
        <section style={{ width: "700px" }}>\r
            <p\r
                aria-label="title of the component"\r
                aria-describedby="title of aria live component"\r
                style={{ textDecoration: "underline", textAlign: "center" }}\r
            >\r
                Here we use an input to update the content bellow and this content are\r
                tracking using useAriaLive hook and the button are using useAriaButton\r
                hook\r
            </p>\r
            <p\r
                style={{ textAlign: "center" }}\r
                aria-label="paragraph using aria live"\r
                ref={liveRegionRef}\r
            >\r
                {content}\r
            </p>\r
            <section style={{ display: "flex", justifyContent: "center" }}>\r
                <input\r
                aria-describedby="write new dinamic content"\r
                aria-label="dinamic input content"\r
                type="text"\r
                value={newChanges}\r
                onChange={(e) => simulateUpdate(e.target.value)}\r
                />\r
                <button {...ariaAttributes} onClick={handleSimulateUpdate}>\r
                Update Content\r
                </button>\r
            </section>\r
        </section>\r
    );
`})})]})}function j(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{j as default};
