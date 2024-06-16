import{h as p,r as s,o as u,g as A,w as l,a as e,b as y,u as N,aG as G,t as h,d as g,k as v,i as x,c as C,F as w,af as F,aB as D,aT as z}from"../app.3c87db1b.js";const $=p({__name:"basic",setup(b){const r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(d,i)=>{const a=s("el-table-column"),t=s("el-table");return u(),A(t,{data:r,style:{width:"100%"}},{default:l(()=>[e(a,{prop:"date",label:"Date",width:"180"}),e(a,{prop:"name",label:"Name",width:"180"}),e(a,{prop:"address",label:"Address"})]),_:1})}}});var ze=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const O={style:{display:"flex","align-items":"center"}},k={style:{"margin-left":"10px"}},j=g("Edit"),M=g("Delete"),P=p({__name:"custom-column",setup(b){const r=(a,t)=>{console.log(a,t)},d=(a,t)=>{console.log(a,t)},i=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(a,t)=>{const o=s("el-icon"),n=s("el-table-column"),c=s("el-tag"),_=s("el-popover"),m=s("el-button"),S=s("el-table");return u(),A(S,{data:i,style:{width:"100%"}},{default:l(()=>[e(n,{label:"Date",width:"180"},{default:l(f=>[y("div",O,[e(o,null,{default:l(()=>[e(N(G))]),_:1}),y("span",k,h(f.row.date),1)])]),_:1}),e(n,{label:"Name",width:"180"},{default:l(f=>[e(_,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:l(()=>[y("div",null,"name: "+h(f.row.name),1),y("div",null,"address: "+h(f.row.address),1)]),reference:l(()=>[e(c,null,{default:l(()=>[g(h(f.row.name),1)]),_:2},1024)]),_:2},1024)]),_:1}),e(n,{label:"Operations"},{default:l(f=>[e(m,{size:"small",onClick:T=>r(f.$index,f.row)},{default:l(()=>[j]),_:2},1032,["onClick"]),e(m,{size:"small",type:"danger",onClick:T=>d(f.$index,f.row)},{default:l(()=>[M]),_:2},1032,["onClick"])]),_:1})]),_:1})}}});var Ge=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const V=g("Edit"),R=g("Delete"),H=p({__name:"custom-header",setup(b){const r=v(""),d=x(()=>t.filter(o=>!r.value||o.name.toLowerCase().includes(r.value.toLowerCase()))),i=(o,n)=>{console.log(o,n)},a=(o,n)=>{console.log(o,n)},t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"John",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Morgan",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Jessy",address:"No. 189, Grove St, Los Angeles"}];return(o,n)=>{const c=s("el-table-column"),_=s("el-input"),m=s("el-button"),S=s("el-table");return u(),A(S,{data:N(d),style:{width:"100%"}},{default:l(()=>[e(c,{label:"Date",prop:"date"}),e(c,{label:"Name",prop:"name"}),e(c,{align:"right"},{header:l(()=>[e(_,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=f=>r.value=f),size:"small",placeholder:"Type to search"},null,8,["modelValue"])]),default:l(f=>[e(m,{size:"small",onClick:T=>i(f.$index,f.row)},{default:l(()=>[V]),_:2},1032,["onClick"]),e(m,{size:"small",type:"danger",onClick:T=>a(f.$index,f.row)},{default:l(()=>[R]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}}});var xe=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const E=p({__name:"custom-index",setup(b){const r=i=>i*2,d=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}];return(i,a)=>{const t=s("el-table-column"),o=s("el-table");return u(),A(o,{data:d,style:{width:"100%"}},{default:l(()=>[e(t,{type:"index",index:r}),e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1})}}});var Fe=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const J=g(" switch parent border: "),B=g(" switch child border: "),I={m:"4"},Z={m:"t-0 b-2"},U={m:"t-0 b-2"},Y={m:"t-0 b-2"},q={m:"t-0 b-2"},K=y("h3",null,"Family",-1),Q=p({__name:"expandable-row",setup(b){const r=v(!1),d=v(!1),i=[{date:"2016-05-03",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-02",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-04",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-01",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-08",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-06",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-07",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]}];return(a,t)=>{const o=s("el-switch"),n=s("el-table-column"),c=s("el-table");return u(),C(w,null,[J,e(o,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=_=>r.value=_)},null,8,["modelValue"]),B,e(o,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=_=>d.value=_)},null,8,["modelValue"]),e(c,{data:i,border:r.value,style:{width:"100%"}},{default:l(()=>[e(n,{type:"expand"},{default:l(_=>[y("div",I,[y("p",Z,"State: "+h(_.row.state),1),y("p",U,"City: "+h(_.row.city),1),y("p",Y,"Address: "+h(_.row.address),1),y("p",q,"Zip: "+h(_.row.zip),1),K,e(c,{data:_.row.family,border:d.value},{default:l(()=>[e(n,{label:"Name",prop:"name"}),e(n,{label:"State",prop:"state"}),e(n,{label:"City",prop:"city"}),e(n,{label:"Address",prop:"address"}),e(n,{label:"Zip",prop:"zip"})]),_:2},1032,["data","border"])])]),_:1}),e(n,{label:"Date",prop:"date"}),e(n,{label:"Name",prop:"name"})]),_:1},8,["border"])],64)}}});var De=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));const W=g("reset date filter"),X=g("reset all filters"),ee=p({__name:"filter",setup(b){const r=v(),d=()=>{r.value.clearFilter(["date"])},i=()=>{r.value.clearFilter()},a=(c,_)=>c.address,t=(c,_)=>_.tag===c,o=(c,_,m)=>{const S=m.property;return _[S]===c},n=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"}];return(c,_)=>{const m=s("el-button"),S=s("el-table-column"),f=s("el-tag"),T=s("el-table");return u(),C(w,null,[e(m,{onClick:d},{default:l(()=>[W]),_:1}),e(m,{onClick:i},{default:l(()=>[X]),_:1}),e(T,{ref_key:"tableRef",ref:r,"row-key":"date",data:n,style:{width:"100%"}},{default:l(()=>[e(S,{prop:"date",label:"Date",sortable:"",width:"180","column-key":"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":o}),e(S,{prop:"name",label:"Name",width:"180"}),e(S,{prop:"address",label:"Address",formatter:a}),e(S,{prop:"tag",label:"Tag",width:"100",filters:[{text:"Home",value:"Home"},{text:"Office",value:"Office"}],"filter-method":t,"filter-placement":"bottom-end"},{default:l(L=>[e(f,{type:L.row.tag==="Home"?"":"success","disable-transitions":""},{default:l(()=>[g(h(L.row.tag),1)]),_:2},1032,["type"])]),_:1})]),_:1},512)],64)}}});var $e=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));const te=p({__name:"fixed-column-and-group-header",setup(b){const r=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(d,i)=>{const a=s("el-table-column"),t=s("el-table");return u(),A(t,{data:r,style:{width:"100%"},height:"250"},{default:l(()=>[e(a,{prop:"date",label:"Date",width:"150"}),e(a,{prop:"name",label:"Name",width:"150"}),e(a,{prop:"zip",label:"Zip",width:"150"}),e(a,{label:"Address Info",fixed:"right"},{default:l(()=>[e(a,{prop:"state",label:"State",width:"100"}),e(a,{prop:"city",label:"City",width:"120"}),e(a,{prop:"address",label:"Address",width:"250"})]),_:1})]),_:1})}}});var Oe=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));const ae=p({__name:"fixed-column-and-header",setup(b){const r=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(d,i)=>{const a=s("el-table-column"),t=s("el-table");return u(),A(t,{data:r,style:{width:"100%"},height:"250"},{default:l(()=>[e(a,{fixed:"",prop:"date",label:"Date",width:"150"}),e(a,{prop:"name",label:"Name",width:"120"}),e(a,{prop:"state",label:"State",width:"120"}),e(a,{prop:"city",label:"City",width:"320"}),e(a,{prop:"address",label:"Address",width:"600"}),e(a,{prop:"zip",label:"Zip",width:"120"})]),_:1})}}});var ke=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));const oe=g("Detail"),ne=g("Edit"),le=p({__name:"fixed-column",setup(b){const r=()=>{console.log("click")},d=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}];return(i,a)=>{const t=s("el-table-column"),o=s("el-button"),n=s("el-table");return u(),A(n,{data:d,style:{width:"100%"}},{default:l(()=>[e(t,{fixed:"",prop:"date",label:"Date",width:"150"}),e(t,{prop:"name",label:"Name",width:"120"}),e(t,{prop:"state",label:"State",width:"120"}),e(t,{prop:"city",label:"City",width:"120"}),e(t,{prop:"address",label:"Address",width:"600"}),e(t,{prop:"zip",label:"Zip",width:"120"}),e(t,{fixed:"right",label:"Operations",width:"120"},{default:l(()=>[e(o,{link:"",type:"primary",size:"small",onClick:r},{default:l(()=>[oe]),_:1}),e(o,{link:"",type:"primary",size:"small"},{default:l(()=>[ne]),_:1})]),_:1})]),_:1})}}});var je=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));const se=g(" Remove "),re=g("Add Item"),de=p({__name:"fixed-header-with-fluid-header",setup(b){const r=new Date,d=v([{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),i=t=>{d.value.splice(t,1)},a=()=>{r.setDate(r.getDate()+1),d.value.push({date:D(r).format("YYYY-MM-DD"),name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"})};return(t,o)=>{const n=s("el-table-column"),c=s("el-button"),_=s("el-table");return u(),C(w,null,[e(_,{data:d.value,style:{width:"100%"},"max-height":"250"},{default:l(()=>[e(n,{fixed:"",prop:"date",label:"Date",width:"150"}),e(n,{prop:"name",label:"Name",width:"120"}),e(n,{prop:"state",label:"State",width:"120"}),e(n,{prop:"city",label:"City",width:"120"}),e(n,{prop:"address",label:"Address",width:"600"}),e(n,{prop:"zip",label:"Zip",width:"120"}),e(n,{fixed:"right",label:"Operations",width:"120"},{default:l(m=>[e(c,{link:"",type:"primary",size:"small",onClick:F(S=>i(m.$index),["prevent"])},{default:l(()=>[se]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(c,{class:"mt-4",style:{width:"100%"},onClick:a},{default:l(()=>[re]),_:1})],64)}}});var Me=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));const ie=p({__name:"fixed-header",setup(b){const r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(d,i)=>{const a=s("el-table-column"),t=s("el-table");return u(),A(t,{data:r,height:"250",style:{width:"100%"}},{default:l(()=>[e(a,{prop:"date",label:"Date",width:"180"}),e(a,{prop:"name",label:"Name",width:"180"}),e(a,{prop:"address",label:"Address"})]),_:1})}}});var Pe=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"}));const ce=p({__name:"grouping-header",setup(b){const r=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(d,i)=>{const a=s("el-table-column"),t=s("el-table");return u(),A(t,{data:r,style:{width:"100%"}},{default:l(()=>[e(a,{prop:"date",label:"Date",width:"150"}),e(a,{label:"Delivery Info"},{default:l(()=>[e(a,{prop:"name",label:"Name",width:"120"}),e(a,{label:"Address Info"},{default:l(()=>[e(a,{prop:"state",label:"State",width:"120"}),e(a,{prop:"city",label:"City",width:"120"}),e(a,{prop:"address",label:"Address"}),e(a,{prop:"zip",label:"Zip",width:"120"})]),_:1})]),_:1})]),_:1})}}});var Ve=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const _e={style:{"margin-top":"20px"}},me=g("Toggle selection status of second and third rows"),pe=g("Clear selection"),ue=p({__name:"multi-select",setup(b){const r=v(),d=v([]),i=o=>{o?o.forEach(n=>{r.value.toggleRowSelection(n,void 0)}):r.value.clearSelection()},a=o=>{d.value=o},t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(o,n)=>{const c=s("el-table-column"),_=s("el-button");return u(),C(w,null,[e(N(z),{ref_key:"multipleTableRef",ref:r,data:t,style:{width:"100%"},onSelectionChange:a},{default:l(()=>[e(c,{type:"selection",width:"55"}),e(c,{label:"Date",width:"120"},{default:l(m=>[g(h(m.row.date),1)]),_:1}),e(c,{property:"name",label:"Name",width:"120"}),e(c,{property:"address",label:"Address","show-overflow-tooltip":""})]),_:1},512),y("div",_e,[e(_,{onClick:n[0]||(n[0]=m=>i([t[1],t[2]]))},{default:l(()=>[me]),_:1}),e(_,{onClick:n[1]||(n[1]=m=>i())},{default:l(()=>[pe]),_:1})])],64)}}});var Re=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));const be=p({__name:"rowspan-and-colspan",setup(b){const r=({row:a,column:t,rowIndex:o,columnIndex:n})=>{if(o%2===0){if(n===0)return[1,2];if(n===1)return[0,0]}},d=({row:a,column:t,rowIndex:o,columnIndex:n})=>{if(n===0)return o%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},i=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}];return(a,t)=>{const o=s("el-table-column"),n=s("el-table");return u(),C("div",null,[e(n,{data:i,"span-method":r,border:"",style:{width:"100%"}},{default:l(()=>[e(o,{prop:"id",label:"ID",width:"180"}),e(o,{prop:"name",label:"Name"}),e(o,{prop:"amount1",sortable:"",label:"Amount 1"}),e(o,{prop:"amount2",sortable:"",label:"Amount 2"}),e(o,{prop:"amount3",sortable:"",label:"Amount 3"})]),_:1}),e(n,{data:i,"span-method":d,border:"",style:{width:"100%","margin-top":"20px"}},{default:l(()=>[e(o,{prop:"id",label:"ID",width:"180"}),e(o,{prop:"name",label:"Name"}),e(o,{prop:"amount1",label:"Amount 1"}),e(o,{prop:"amount2",label:"Amount 2"}),e(o,{prop:"amount3",label:"Amount 3"})]),_:1})])}}});var He=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"}));const fe={style:{"margin-top":"20px"}},ge=g("Select second row"),Se=g("Clear selection"),Ae=p({__name:"single-select",setup(b){const r=v(),d=v(),i=o=>{d.value.setCurrentRow(o)},a=o=>{r.value=o},t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(o,n)=>{const c=s("el-table-column"),_=s("el-button");return u(),C(w,null,[e(N(z),{ref_key:"singleTableRef",ref:d,data:t,"highlight-current-row":"",style:{width:"100%"},onCurrentChange:a},{default:l(()=>[e(c,{type:"index",width:"50"}),e(c,{property:"date",label:"Date",width:"120"}),e(c,{property:"name",label:"Name",width:"120"}),e(c,{property:"address",label:"Address"})]),_:1},512),y("div",fe,[e(_,{onClick:n[0]||(n[0]=m=>i(t[1]))},{default:l(()=>[ge]),_:1}),e(_,{onClick:n[1]||(n[1]=m=>i())},{default:l(()=>[Se]),_:1})])],64)}}});var Ee=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"}));const ye=p({__name:"sort",setup(b){const r=(i,a)=>i.address,d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(i,a)=>{const t=s("el-table-column"),o=s("el-table");return u(),A(o,{data:d,"default-sort":{prop:"date",order:"descending"},style:{width:"100%"}},{default:l(()=>[e(t,{prop:"date",label:"Date",sortable:"",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address",formatter:r})]),_:1})}}});var Je=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));const he=p({__name:"striped",setup(b){const r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(d,i)=>{const a=s("el-table-column"),t=s("el-table");return u(),A(t,{data:r,stripe:"",style:{width:"100%"}},{default:l(()=>[e(a,{prop:"date",label:"Date",width:"180"}),e(a,{prop:"name",label:"Name",width:"180"}),e(a,{prop:"address",label:"Address"})]),_:1})}}});var Be=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));const ve=p({__name:"summary",setup(b){const r=i=>{const{columns:a,data:t}=i,o=[];return a.forEach((n,c)=>{if(c===0){o[c]="Total Cost";return}const _=t.map(m=>Number(m[n.property]));_.every(m=>Number.isNaN(m))?o[c]="N/A":o[c]=`$ ${_.reduce((m,S)=>{const f=Number(S);return Number.isNaN(f)?m:m+S},0)}`}),o},d=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}];return(i,a)=>{const t=s("el-table-column"),o=s("el-table");return u(),C(w,null,[e(o,{data:d,border:"","show-summary":"",style:{width:"100%"}},{default:l(()=>[e(t,{prop:"id",label:"ID",width:"180"}),e(t,{prop:"name",label:"Name"}),e(t,{prop:"amount1",sortable:"",label:"Amount 1"}),e(t,{prop:"amount2",sortable:"",label:"Amount 2"}),e(t,{prop:"amount3",sortable:"",label:"Amount 3"})]),_:1}),e(o,{data:d,border:"",height:"200","summary-method":r,"show-summary":"",style:{width:"100%","margin-top":"20px"}},{default:l(()=>[e(t,{prop:"id",label:"ID",width:"180"}),e(t,{prop:"name",label:"Name"}),e(t,{prop:"amount1",label:"Cost 1 ($)"}),e(t,{prop:"amount2",label:"Cost 2 ($)"}),e(t,{prop:"amount3",label:"Cost 3 ($)"})]),_:1})],64)}}});var Ie=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));const Ce=p({__name:"table-layout",setup(b){const r=v("fixed"),d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(i,a)=>{const t=s("el-radio-button"),o=s("el-radio-group"),n=s("el-table-column"),c=s("el-table");return u(),C(w,null,[e(o,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=_=>r.value=_)},{default:l(()=>[e(t,{label:"fixed"}),e(t,{label:"auto"})]),_:1},8,["modelValue"]),e(c,{data:d,"table-layout":r.value},{default:l(()=>[e(n,{prop:"date",label:"Date"}),e(n,{prop:"name",label:"Name"}),e(n,{prop:"address",label:"Address"})]),_:1},8,["table-layout"])],64)}}});var Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"}));const we=p({__name:"tree-and-lazy",setup(b){const r=(a,t,o)=>{setTimeout(()=>{o([{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])},1e3)},d=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}],i=[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0,address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}];return(a,t)=>{const o=s("el-table-column"),n=s("el-table");return u(),C("div",null,[e(n,{data:d,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"","default-expand-all":""},{default:l(()=>[e(o,{prop:"date",label:"Date",sortable:""}),e(o,{prop:"name",label:"Name",sortable:""}),e(o,{prop:"address",label:"Address",sortable:""})]),_:1}),e(n,{data:i,style:{width:"100%"},"row-key":"id",border:"",lazy:"",load:r,"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:l(()=>[e(o,{prop:"date",label:"Date"}),e(o,{prop:"name",label:"Name"}),e(o,{prop:"address",label:"Address"})]),_:1})])}}});var Ue=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));const Te=p({__name:"with-border",setup(b){const r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(d,i)=>{const a=s("el-table-column"),t=s("el-table");return u(),A(t,{data:r,border:"",style:{width:"100%"}},{default:l(()=>[e(a,{prop:"date",label:"Date",width:"180"}),e(a,{prop:"name",label:"Name",width:"180"}),e(a,{prop:"address",label:"Address"})]),_:1})}}});var Ye=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"}));const Ne=p({__name:"with-status",setup(b){const r=({row:i,rowIndex:a})=>a===1?"warning-row":a===3?"success-row":"",d=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(i,a)=>{const t=s("el-table-column"),o=s("el-table");return u(),A(o,{data:d,style:{width:"100%"},"row-class-name":r},{default:l(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1})}}});var qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));export{ze as _,Ge as a,xe as b,Fe as c,De as d,$e as e,Oe as f,ke as g,je as h,Me as i,Pe as j,Ve as k,Re as l,He as m,Ee as n,Je as o,Be as p,Ie as q,Ze as r,Ue as s,Ye as t,qe as u};
