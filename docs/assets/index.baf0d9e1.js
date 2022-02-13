import{u as E,a as v,b as g,c as p,r as y,o as k,d as R,w as _,e as u,f as T,N as S,g as m,h as A,i as f,t as C,p as b,j as O,k as L,l as D,m as I,n as P,q as w,s as N}from"./vendor.1e53e828.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};j();var V=(e,t)=>{const s=e.__vccOpts||e;for(const[o,r]of t)s[o]=r;return s};const z=e=>(b("data-v-19feb707"),e=e(),O(),e),$=z(()=>f("h1",{class:"static-title"},"SHELTER ZONE",-1)),x={class:"page-title"},H={setup(e){const t=E(),s=v(),o=g(),r=p(()=>o.state.pageReaded);t.beforeEach((n,i)=>{n.name==="Rules"&&!r.value.important&&t.replace({name:"Home"}),n.name==="Join"&&!r.value.rules&&t.replace({name:"Home"})});const a=p(()=>{let n=s.name;const i=s.name;return i==="Home"&&(n="About"),i==="EntryCheck"&&(n="\u{1F6A7} Entry Check"),n});return(n,i)=>{const d=y("router-view");return k(),R(u(S),{theme:u(T),class:"w-full h-full overflow-y-auto"},{default:_(()=>[m(u(A),null,{default:_(()=>[$,f("h3",x,C(u(a)),1),m(d)]),_:1})]),_:1},8,["theme"])}}};var U=V(H,[["__scopeId","data-v-19feb707"]]);const G="modulepreload",h={},q="/sz-single-entrance/",c=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${q}${o}`,o in h)return;h[o]=!0;const r=o.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":G,r||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),r)return new Promise((i,d)=>{n.addEventListener("load",i),n.addEventListener("error",d)})})).then(()=>t())},B=[{path:"/",name:"Home",component:()=>c(()=>import("./Home.41da9a12.js"),["assets/Home.41da9a12.js","assets/Home.13bfad7c.css","assets/vendor.1e53e828.js"])},{path:"/callback",name:"Callback",component:()=>c(()=>import("./Callback.f7e875d7.js"),["assets/Callback.f7e875d7.js","assets/vendor.1e53e828.js"])},{path:"/important",name:"Important",component:()=>c(()=>import("./Important.0fb93dd5.js"),["assets/Important.0fb93dd5.js","assets/Important.9b52a430.css","assets/vendor.1e53e828.js","assets/CooldownButton.45cbe7b1.js","assets/CooldownButton.60397204.css","assets/anime.es.729cdde2.js"])},{path:"/rules",name:"Rules",component:()=>c(()=>import("./Rules.c8ff9903.js"),["assets/Rules.c8ff9903.js","assets/vendor.1e53e828.js","assets/CooldownButton.45cbe7b1.js","assets/CooldownButton.60397204.css","assets/anime.es.729cdde2.js"])},{path:"/links",name:"Links",component:()=>c(()=>import("./Links.4cbd7d31.js"),["assets/Links.4cbd7d31.js","assets/Links.fe21ae5b.css","assets/vendor.1e53e828.js","assets/CooldownButton.45cbe7b1.js","assets/CooldownButton.60397204.css"])},{path:"/join",name:"Join",component:()=>c(()=>import("./JoinServer.f76e6b27.js"),["assets/JoinServer.f76e6b27.js","assets/JoinServer.6a951278.css","assets/vendor.1e53e828.js","assets/anime.es.729cdde2.js"])},{path:"/entry-check",name:"EntryCheck",component:()=>c(()=>import("./EntryCheck.9c2ac58d.js"),["assets/EntryCheck.9c2ac58d.js","assets/EntryCheck.f3792b4e.css","assets/vendor.1e53e828.js","assets/CooldownButton.45cbe7b1.js","assets/CooldownButton.60397204.css"])},{path:"/welcome",name:"Welcome",component:()=>c(()=>import("./Welcome.8b321e54.js"),["assets/Welcome.8b321e54.js","assets/vendor.1e53e828.js"])}],M=L({routes:B,history:D()}),l=I.create();l.interceptors.request.use(async e=>e);const W=e=>[e.data,null],J=e=>{var s,o;const t=(o=(s=e.response.data)==null?void 0:s.error)==null?void 0:o.message;return[null,t||e.response.data]};l.interceptors.response.use(W,J);const K=async({redirectUri:e})=>await l({method:"POST",url:"https://sz-bot.deta.dev/oauth/getDCAuthorizeUrl",data:{redirectUri:e}}),F=async({code:e,redirectUri:t})=>await l({method:"POST",url:"https://sz-bot.deta.dev/oauth/getDCAccessToken",data:{code:e,redirectUri:t}}),Z=async e=>await l({method:"get",url:"https://discord.com/api/v9/users/@me",headers:{Authorization:`Bearer ${e}`}}),Q={state:{loggedIn:!1,user:null,accessToken:null},mutations:{SET_USER:(e,t)=>{e.user=t},SET_ACCESS_TOKEN:(e,t)=>{e.accessToken=t},SET_LOGGEDIN:(e,t)=>{e.loggedIn=t}},actions:{async getDCAuthorizeUrl(){const[e,t]=await K({redirectUri:`${location.protocol}//${location.host}/sz-single-entrance/#/callback`});return t?[null,t]:[e,null]},async getDCAccessToken({commit:e},{code:t}){const[s,o]=await F({code:t,redirectUri:`${location.protocol}//${location.host}/sz-single-entrance/#/callback`});return o?[null,o]:(e("SET_ACCESS_TOKEN",s.access_token),[s,null])},async findMe({state:e,commit:t}){const[s,o]=await Z(e.accessToken);return o?[null,o]:(t("SET_USER",s),[s,null])}}},X=P({state:{pageReaded:{important:!1,rules:!1}},mutations:{SET_PAGE_READED:(e,t)=>{e.pageReaded[t]=!0}},actions:{},modules:{auth:Q},getters:{haveNoReaded:e=>w(e.pageReaded,!1)}});N(U).use(X).use(M).mount("#app");export{V as _,l as a};
