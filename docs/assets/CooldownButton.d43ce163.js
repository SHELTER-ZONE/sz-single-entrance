import{v as u,o as c,d as p,w as v,g as f,e as a,G as y,z as _,H as s}from"./vendor.f6106948.js";import{_ as b}from"./index.512ea5eb.js";const x={props:{btnText:{type:String,default:"Next"},active:{type:Boolean,default:!0},seconds:{type:[Number,String],default:10}},emits:["next","done"],setup(t,{emit:r}){const d=t,e=u(!1),i=({seconds:n})=>{if(e.value)return[s("span",{style:"display: inline-block;"},[d.btnText])];if(!e.value)return[s("span",{style:"display: inline-block;"},[String(n).padStart(2,"0")," ","s"])]},l=()=>{e.value=!0,r("done")};return(n,o)=>(c(),p(a(_),{class:"cooldown-btn",strong:"",secondary:"",round:"",type:"primary",disabled:!e.value,onClick:o[0]||(o[0]=m=>n.$emit("next"))},{default:v(()=>[f(a(y),{"on-finish":l,render:i,duration:1e3*t.seconds,active:t.active},null,8,["duration","active"])]),_:1},8,["disabled"]))}};var g=b(x,[["__scopeId","data-v-4be7d543"]]);export{g as C};