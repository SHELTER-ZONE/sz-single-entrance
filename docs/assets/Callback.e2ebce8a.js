import{b as r,u as n,B as c,x as i,o as p,y as u}from"./vendor.f6106948.js";const l={class:"signin"},_={setup(m){const s=r(),a=n(),o=c();return i(async()=>{await a.isReady();let e=location.href.split("/")[4].split("=")[1];e=e.replace("#","");const[,t]=await s.dispatch("getDCAccessToken",{code:e});if(t)return o.error(t.message);await s.dispatch("findMe"),a.replace({name:"Important"}),s.commit("SET_LOGGEDIN",!0)}),(e,t)=>(p(),u("main",l))}};export{_ as default};
