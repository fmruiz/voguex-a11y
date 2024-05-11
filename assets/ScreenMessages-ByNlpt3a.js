import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as t}from"./index-FeUjBnvO.js";import{M as o}from"./index-BFF5gSLj.js";import i from"./ScreenMessages.stories-BBbef_RZ.js";import"./index-uubelm5h.js";import"./iframe-Bbu8d_s-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(n.h1,{id:"usescreenmessages",children:e.jsx(n.strong,{children:"useScreenMessages"})}),`
`,e.jsx(n.p,{children:"This hook allows to detect quickly that something happen in your application, you can use this with another hook to speak a message using speech synthesis."}),`
`,e.jsxs(n.h2,{id:"resources-",children:[e.jsx(n.strong,{children:"Resources"})," :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3schools.com/accessibility/accessibility_screen_readers.php",rel:"nofollow",children:"Accessibility Screen Readers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://blog.hubspot.com/website/screen-reader-accessibility",rel:"nofollow",children:"How to Design Your Website for Screen Reader Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/perspective-videos/speech/",rel:"nofollow",children:"W3C: Text to Speech"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"example-",children:[e.jsx(n.strong,{children:"Example"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`  const { screenReaderMessages, setScreenReaderMessages } = useScreenMessages();\r
\r
  const handleClick = () => {\r
    setScreenReaderMessages({\r
      action: "¡Call To Action!",\r
    });\r
  };\r
  useEffect(() => {\r
    return () => {\r
      setScreenReaderMessages({});\r
    };\r
  }, [setScreenReaderMessages]);\r
\r
  return (\r
    <section>\r
      <p\r
        aria-label="title of component"\r
        aria-describedby="description of the hook"\r
        style={{ textDecoration: "underline" }}\r
      >\r
        Click in the button to notify about some action:\r
      </p>\r
      <div\r
        style={{\r
          display: "flex",\r
          justifyContent: "center",\r
          flexDirection: "column",\r
        }}\r
      >\r
        {Object.keys(screenReaderMessages).map((key) => (\r
          <p\r
            style={{ textAlign: "center" }}\r
            aria-label={screenReaderMessages[key]}\r
            key={key}\r
          >\r
            {screenReaderMessages[key]}\r
          </p>\r
        ))}\r
        <button\r
          aria-label="call to action button"\r
          onClick={handleClick}\r
          style={{ width: "100px", margin: "0 auto" }}\r
        >\r
          Click Here\r
        </button>\r
      </div>\r
    </section>\r
  );
`})})]})}function y(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{y as default};
