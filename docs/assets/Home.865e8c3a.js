import{u as d,b as u,c as p,v as _,r as l,o as m,x as f,g as a,w as r,p as h,j as v,e as g,y as x,i as y,z as k}from"./vendor.4d7778a9.js";import{_ as b}from"./index.2f226dc7.js";const w=e=>(h("data-v-bf45e6ac"),e=e(),v(),e),I={id:"home"},N=w(()=>y("div",{class:"description common-width"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab blanditiis omnis, velit nostrum officiis aliquam? Possimus perspiciatis pariatur at quasi corporis quaerat eligendi illum ipsa reprehenderit quas. Adipisci, in! ",-1)),q=k("Next"),B={setup(e){const i=d(),o=u(),n=p(()=>o.state.auth.loggedin);return _(async()=>{if(n.value)return i.replace({name:"Home"});const[s,t]=await o.dispatch("getDCAuthorizeUrl");if(t)return console.error(t);location.href=s}),(s,t)=>{const c=l("router-link");return m(),f("div",I,[N,a(c,{to:{name:"Important"}},{default:r(()=>[a(g(x),{strong:"",secondary:"",round:"",type:"primary"},{default:r(()=>[q]),_:1})]),_:1})])}}};var A=b(B,[["__scopeId","data-v-bf45e6ac"]]);export{A as default};
