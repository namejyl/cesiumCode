import{h as c,k as u,r as s,ai as m,aj as d,o as p,g as y,w as i,a as e,c as h,F as v,d as f,am as w}from"../app.3c87db1b.js";const S=c({__name:"basic",setup(g){const a=u(!0),n=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}];return(_,r)=>{const t=s("el-table-column"),o=s("el-table"),l=m("loading");return d((p(),y(o,{data:n,style:{width:"100%"}},{default:i(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1},512)),[[l,a.value]])}}});var N=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const b=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,j=c({__name:"customization",setup(g){const a=u(!0),n=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}];return(_,r)=>{const t=s("el-table-column"),o=s("el-table"),l=m("loading");return p(),h(v,null,[d(e(o,{"element-loading-text":"Loading...","element-loading-spinner":b,"element-loading-svg-view-box":"-10, -10, 50, 50","element-loading-background":"rgba(122, 122, 122, 0.8)",data:n,style:{width:"100%"}},{default:i(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1},512),[[l,a.value]]),d(e(o,{"element-loading-svg":b,class:"custom-loading-svg","element-loading-svg-view-box":"-10, -10, 50, 50",data:n,style:{width:"100%"}},{default:i(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1},512),[[l,a.value]])],64)}}});var P=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const x=f(" As a directive "),D=f(" As a service "),J=c({__name:"fullscreen",setup(g){const a=u(!1),n=()=>{a.value=!0,setTimeout(()=>{a.value=!1},2e3)},_=()=>{const r=w.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{r.close()},2e3)};return(r,t)=>{const o=s("el-button"),l=m("loading");return p(),h(v,null,[d(e(o,{type:"primary",onClick:n},{default:i(()=>[x]),_:1},512),[[l,a.value,void 0,{fullscreen:!0,lock:!0}]]),e(o,{type:"primary",onClick:_},{default:i(()=>[D]),_:1})],64)}}});var A=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{N as _,P as a,A as b};
