import{b as c,u as n,B as i,x as u,o as l,y as p}from"./vendor.f6106948.js";const m={class:"signin"},g={setup(_){const s=c(),r=n(),a=i();return u(async()=>{await r.isReady();let e=location.href.split("/")[3].split("=")[1];e=e.replace("#","");const[t,o]=await s.dispatch("getDCAccessToken",{code:e});if(o)return a.error(o.message);console.log(t),s.commit("SET_LOGGEDIN",!0)}),(e,t)=>(l(),p("main",m))}};export{g as default};
