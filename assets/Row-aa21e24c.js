import{r as m,j as B,c as d,u as h,q as N,s as w}from"./index-8f82ad2f.js";function x({as:p,bsPrefix:e,className:u,...o}){e=h(e,"col");const i=N(),c=w(),n=[],$=[];return i.forEach(r=>{const l=o[r];delete o[r];let s,t,a;typeof l=="object"&&l!=null?{span:s,offset:t,order:a}=l:s=l;const f=r!==c?`-${r}`:"";s&&n.push(s===!0?`${e}${f}`:`${e}${f}-${s}`),a!=null&&$.push(`order${f}-${a}`),t!=null&&$.push(`offset${f}-${t}`)}),[{...o,className:d(u,...n,...$)},{as:p,bsPrefix:e,spans:n}]}const C=m.forwardRef((p,e)=>{const[{className:u,...o},{as:i="div",bsPrefix:c,spans:n}]=x(p);return B(i,{...o,ref:e,className:d(u,!n.length&&c)})});C.displayName="Col";const y=C,R=m.forwardRef(({bsPrefix:p,className:e,as:u="div",...o},i)=>{const c=h(p,"row"),n=N(),$=w(),r=`${c}-cols`,l=[];return n.forEach(s=>{const t=o[s];delete o[s];let a;t!=null&&typeof t=="object"?{cols:a}=t:a=t;const f=s!==$?`-${s}`:"";a!=null&&l.push(`${r}${f}-${a}`)}),B(u,{ref:i,...o,className:d(e,c,...l)})});R.displayName="Row";const E=R;export{y as C,E as R};
