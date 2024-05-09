import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as i}from"./index-uubelm5h.js";const h=()=>{const[o,n]=i.useState(!1);return i.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),s=l=>{n(l.matches)};return n(r.matches),r.addEventListener("change",s),()=>{r.removeEventListener("change",s)}},[]),o},u=()=>{const o=h();return e.jsxs("section",{children:[e.jsx("p",{"aria-label":"title of component","aria-describedby":"title to say the functionality of the hook",style:{textAlign:"center",textDecoration:"underline"},children:"This hook is to detect if the user have the preference of reduced movement in their device enabled or not:"}),o?e.jsx("p",{"aria-label":"reduced motion enabled","aria-describedby":"description if we have the preference of reduced movement enabled",style:{textAlign:"center"},children:"The user have the preference of reduced movement enabled."}):e.jsx("p",{"aria-label":"reduced motion disabled","aria-describedby":"description if we have the preference of reduced movement disabled",style:{textAlign:"center"},children:"The user have the preference of reduced movement disabled."})]})};u.__docgenInfo={description:"",methods:[],displayName:"ReducedMotionStatus"};const p={title:"Hooks/useReducedMotionStatus",component:u,parameters:{layout:"centered",notes:"These are notes for the Button stories",info:"This is info for the Button stories",docs:{subtitle:"This is the subtitle for the Button stories"}}},t={};var d,a,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const b=["Example"];export{t as Example,b as __namedExportsOrder,p as default};
