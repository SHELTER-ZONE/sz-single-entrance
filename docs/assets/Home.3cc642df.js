import{u as l,b as _,c as m,v as h,r as g,o as f,x as v,i as a,y as r,t as x,e as n,g as c,w as d,p as y,j as k,z as I}from"./vendor.62ccb75e.js";import{_ as b}from"./index.fb9e5d23.js";const w=e=>(y("data-v-dce0c57e"),e=e(),k(),e),N={id:"home"},S=w(()=>a("div",{class:"description common-width"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab blanditiis omnis, velit nostrum officiis aliquam? Possimus perspiciatis pariatur at quasi corporis quaerat eligendi illum ipsa reprehenderit quas. Adipisci, in! ",-1)),q=r("Next"),B={setup(e){l();const t=_(),s=m(()=>t.state.auth.loggedIn),u=async()=>{if(s.value)return;const[i,o]=await t.dispatch("getDCAuthorizeUrl");if(o)return console.error(o);location.href=i};return h(async()=>{console.log("home")}),(i,o)=>{const p=g("router-link");return f(),v("div",N,[S,a("div",{onClick:u},"login"),r(" "+x(n(s))+" ",1),c(p,{to:{name:"Important"}},{default:d(()=>[c(n(I),{strong:"",secondary:"",round:"",type:"primary"},{default:d(()=>[q]),_:1})]),_:1})])}}};var A=b(B,[["__scopeId","data-v-dce0c57e"]]);export{A as default};