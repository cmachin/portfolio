import{r,u,j as d,n as O,c as A,f as S}from"./index-8f82ad2f.js";function N(e,o){return Array.isArray(e)?e.includes(o):e===o}const x=r.createContext({});x.displayName="AccordionContext";const y=x,v=r.forwardRef(({as:e="div",bsPrefix:o,className:c,children:t,eventKey:a,...s},n)=>{const{activeEventKey:i}=r.useContext(y);return o=u(o,"accordion-collapse"),d(O,{ref:n,in:N(i,a),...s,className:A(c,o),children:d(e,{children:r.Children.only(t)})})});v.displayName="AccordionCollapse";const h=v,B=r.createContext({eventKey:""});B.displayName="AccordionItemContext";const C=B,E=r.forwardRef(({as:e="div",bsPrefix:o,className:c,onEnter:t,onEntering:a,onEntered:s,onExit:n,onExiting:i,onExited:l,...p},m)=>{o=u(o,"accordion-body");const{eventKey:f}=r.useContext(C);return d(h,{eventKey:f,onEnter:t,onEntering:a,onEntered:s,onExit:n,onExiting:i,onExited:l,children:d(e,{ref:m,...p,className:A(c,o)})})});E.displayName="AccordionBody";const g=E;function j(e,o){const{activeEventKey:c,onSelect:t,alwaysOpen:a}=r.useContext(y);return s=>{let n=e===c?null:e;a&&(Array.isArray(c)?c.includes(e)?n=c.filter(i=>i!==e):n=[...c,e]:n=[e]),t==null||t(n,s),o==null||o(s)}}const w=r.forwardRef(({as:e="button",bsPrefix:o,className:c,onClick:t,...a},s)=>{o=u(o,"accordion-button");const{eventKey:n}=r.useContext(C),i=j(n,t),{activeEventKey:l}=r.useContext(y);return e==="button"&&(a.type="button"),d(e,{ref:s,onClick:i,...a,"aria-expanded":Array.isArray(l)?l.includes(n):n===l,className:A(c,o,!N(l,n)&&"collapsed")})});w.displayName="AccordionButton";const $=w,I=r.forwardRef(({as:e="h2",bsPrefix:o,className:c,children:t,onClick:a,...s},n)=>(o=u(o,"accordion-header"),d(e,{ref:n,...s,className:A(c,o),children:d($,{onClick:a,children:t})})));I.displayName="AccordionHeader";const k=I,R=r.forwardRef(({as:e="div",bsPrefix:o,className:c,eventKey:t,...a},s)=>{o=u(o,"accordion-item");const n=r.useMemo(()=>({eventKey:t}),[t]);return d(C.Provider,{value:n,children:d(e,{ref:s,...a,className:A(c,o)})})});R.displayName="AccordionItem";const K=R,H=r.forwardRef((e,o)=>{const{as:c="div",activeKey:t,bsPrefix:a,className:s,onSelect:n,flush:i,alwaysOpen:l,...p}=S(e,{activeKey:"onSelect"}),m=u(a,"accordion"),f=r.useMemo(()=>({activeEventKey:t,onSelect:n,alwaysOpen:l}),[t,n,l]);return d(y.Provider,{value:f,children:d(c,{ref:o,...p,className:A(s,m,i&&`${m}-flush`)})})});H.displayName="Accordion";const V=Object.assign(H,{Button:$,Collapse:h,Item:K,Header:k,Body:g});export{V as A};
