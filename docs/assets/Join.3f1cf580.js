import{J as d,o as i,d as c,g as t,u as f,A as x,v as y,x as g,i as r,e as a,D as p,K as u,w as n,y as k,L as _,z as j,t as C,p as z,j as V}from"./vendor.4d7778a9.js";import{a as m}from"./anime.es.729cdde2.js";import{_ as B}from"./index.2f226dc7.js";const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},$=t("path",{d:"M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z",fill:"currentColor"},null,-1);var N=d({name:"Home",render:function(l,e){return i(),c("svg",L,[$])}});const I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},M=t("path",{d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z",fill:"currentColor"},null,-1),J=t("path",{d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z",fill:"currentColor"},null,-1);var S=d({name:"Time",render:function(l,e){return i(),c("svg",I,[M,J])}});const v=s=>(z("data-v-74cd5544"),s=s(),V(),s),T={id:"join",class:"page-padding"},b={class:"join-type-wrapper common-width"},A=v(()=>r("div",null,"\u53EA\u662F\u60F3\u8A62\u554F\u4E00\u4E9B\u554F\u984C\uFF0C\u4E26\u7121\u5728\u4F3A\u670D\u5668\u9577\u4E45\u5C45\u4F4F\u7684\u6253\u7B97",-1)),D=v(()=>r("div",null,"\u6253\u7B97\u5728\u4F3A\u670D\u5668\u9577\u4E45\u5C45\u4F4F\u7684\u6253\u7B97",-1)),H={class:"mt-[40px]"},E={setup(s){const l=f(),e=x(""),h=async()=>{if(e.value==="temporary"){alert("TODO \u52A0\u5165\u4F3A\u670D\u5668");return}if(e.value==="permanent")return l.push({name:"EntryCheck"})};return y(()=>{m({targets:".join-type",translateY:[20,0],opacity:[0,1],duration:1e3,delay:m.stagger(150,{start:300})})}),(O,o)=>(i(),g("div",T,[r("div",b,[t(a(p),{title:"\u66AB\u6642\u505C\u7559",class:u(["join-type",{selected:e.value==="temporary"}]),onClick:o[0]||(o[0]=w=>e.value="temporary")},{icon:n(()=>[t(a(_),null,{default:n(()=>[t(a(S))]),_:1})]),default:n(()=>[A]),_:1},8,["class"]),t(a(p),{title:"\u9577\u4E45\u5C45\u7559",class:u(["join-type",{selected:e.value==="permanent"}]),onClick:o[1]||(o[1]=w=>e.value="permanent")},{icon:n(()=>[t(a(_),null,{default:n(()=>[t(a(N))]),_:1})]),default:n(()=>[D]),_:1},8,["class"])]),r("div",H,[t(a(k),{class:"join-btn",secondary:"",round:"",type:"primary",disabled:!e.value,onClick:h},{default:n(()=>[j(C(e.value==="permanent"?"\u524D\u5F80\u8A8D\u8B49":"\u52A0\u5165\u4F3A\u670D\u5668"),1)]),_:1},8,["disabled"])])]))}};var q=B(E,[["__scopeId","data-v-74cd5544"]]);export{q as default};
