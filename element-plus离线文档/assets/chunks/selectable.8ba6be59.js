import{h as f,r as b,o as p,g as y,u as h,f as S,w as j,b as $,L as O,t as N,k as g,c as P,a as K,a$ as z,F as T}from"../app.3c87db1b.js";const w=f({__name:"basic",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let r=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),a=u(n,++r);return{id:a,label:a,children:c?s(e,t,c,l+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=b("el-tree-v2");return p(),y(o,{data:h(d),props:_,height:208},null,8,["data"])}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));const x=f({__name:"custom-node",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let r=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),a=u(n,++r);return{id:a,label:a,children:c?s(e,t,c,l+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=b("el-tree-v2");return p(),y(o,{data:h(d),props:_,height:208},{default:j(({node:l})=>[$("span",{class:O(["prefix",{"is-leaf":l.isLeaf}])},"[ElementPlus]",2),$("span",null,N(l.label),1)]),_:1},8,["data"])}}});var A=S(x,[["__scopeId","data-v-612282da"]]),R=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const V=f({__name:"default-state",setup(m){const u=(n,r)=>`${n}-${r}`,s=(n,r,c,a=1,M="node")=>{let k=0;return Array.from({length:c}).fill(a).map(()=>{const v=a===n?0:Math.round(Math.random()*r),i=u(M,++k);return{id:i,label:i,children:v?s(n,r,v,a+1,i):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40),e=[],t=[];for(const n of d){const r=n.children;if(r){t.push(n.id),e.push(r[0].id);break}}const o=g(e),l=g(t);return(n,r)=>{const c=b("el-tree-v2");return p(),y(c,{data:h(d),height:208,props:_,"show-checkbox":"","default-checked-keys":o.value,"default-expanded-keys":l.value},null,8,["data","default-checked-keys","default-expanded-keys"])}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const B=f({__name:"disabled",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let r=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),a=u(n,++r);return{id:a,label:a,children:c?s(e,t,c,l+1,a):void 0}})},_={value:"id",label:"label",children:"children",disabled:"disabled"},d=s(4,30,40);return(e,t)=>{const o=b("el-tree-v2");return p(),y(o,{data:h(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var D=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const E=f({__name:"filter",setup(m){const u=(n,r)=>`${n}-${r}`,s=(n,r,c,a=1,M="node")=>{let k=0;return Array.from({length:c}).fill(a).map(()=>{const v=a===n?0:Math.round(Math.random()*r),i=u(M,++k);return{id:i,label:i,children:v?s(n,r,v,a+1,i):void 0}})},_=g(""),d=g(),e=s(4,30,5),t={value:"id",label:"label",children:"children"},o=n=>{d.value.filter(n)},l=(n,r)=>r.label.includes(n);return(n,r)=>{const c=b("el-input");return p(),P(T,null,[K(c,{modelValue:_.value,"onUpdate:modelValue":r[0]||(r[0]=a=>_.value=a),placeholder:"Please enter keyword",onInput:o},null,8,["modelValue"]),K(h(z),{ref_key:"treeRef",ref:d,data:h(e),props:t,"filter-method":l,height:208},null,8,["data"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const F=f({__name:"selectable",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let r=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),a=u(n,++r);return{id:a,label:a,children:c?s(e,t,c,l+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=b("el-tree-v2");return p(),y(o,{data:h(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{L as _,R as a,q as b,D as c,Q as d,U as e};
