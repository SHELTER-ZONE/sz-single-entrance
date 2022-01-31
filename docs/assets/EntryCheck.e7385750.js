import{K as H,o as h,d as b,g as r,v as g,O as M,x as R,w as s,e as a,P as B,Q as w,R as A,i as _,z as E,S as q,T as j,U as $,A as S,B as O,y as D,E as J,D as C,F as Y,t as N,V as G,W as I,X as W,M as Z,Y as Q}from"./vendor.f6106948.js";import{a as T,_ as X}from"./index.3c1c8bae.js";import{C as aa}from"./CooldownButton.93ea59bf.js";const ea={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},ta=r("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z",fill:"currentColor"},null,-1),na=r("path",{d:"M4 18H2V4a2 2 0 0 1 2-2h14v2H4z",fill:"currentColor"},null,-1);var ra=H({name:"Copy",render:function(e,t){return h(),b("svg",ea,[ta,na])}});const oa=async()=>await T({url:"https://api.ipify.org?format=json",method:"GET"}),la=async({ip:n})=>await T({url:`https://ipapi.co/${n}/json/`,method:"GET"}),sa=async({country:n,id:e,source:t,ip:l})=>await T({url:"https://sz-entry-check.deta.dev/encode",method:"POST",data:{country:n,id:e,source:t,ip:l}});var ia=["Afghanistan","\xC5land Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of the","Cook Islands","Costa Rica","Cote D'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic Of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Democratic People's Republic of Korea","Korea, Republic of","Kosovo","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];const ua={class:"text-right"},ca=S("\u78BA\u8A8D"),da={emits:["close","change"],setup(n,{emit:e}){const t=g([]),l=g(!0),c=g(null),p=M({country:null}),m={country:{required:!0,trigger:"blur"}},o=()=>{c.value.validate(v=>{v||(e("change",p.country),d())})},d=()=>{l.value=!1,setTimeout(()=>{e("close")},300)};return R(()=>{t.value=ia.map(v=>({label:v,value:v}))}),(v,i)=>(h(),b(a($),{show:l.value,"onUpdate:show":i[1]||(i[1]=y=>l.value=y),"mask-closable":!1,onClose:d},{default:s(()=>[r(a(j),{style:{width:"600px"},title:"\u624B\u52D5\u9078\u64C7",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:s(()=>[r(a(B),{ref_key:"formRef",ref:c,model:a(p),rules:m,"show-require-mark":!1},{default:s(()=>[r(a(w),{path:"country",label:"Country"},{default:s(()=>[r(a(A),{value:a(p).country,"onUpdate:value":i[0]||(i[0]=y=>a(p).country=y),options:t.value},null,8,["value","options"])]),_:1})]),_:1},8,["model"]),_("div",ua,[r(a(E),{secondary:"",round:"",type:"primary",onClick:q(o,["prevent"])},{default:s(()=>[ca]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["show"]))}};var ma=function(){var n=document.getSelection();if(!n.rangeCount)return function(){};for(var e=document.activeElement,t=[],l=0;l<n.rangeCount;l++)t.push(n.getRangeAt(l));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return n.removeAllRanges(),function(){n.type==="Caret"&&n.removeAllRanges(),n.rangeCount||t.forEach(function(c){n.addRange(c)}),e&&e.focus()}},fa=ma,P={"text/plain":"Text","text/html":"Url",default:"Text"},pa="Copy to clipboard: #{key}, Enter";function ga(n){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return n.replace(/#{\s*key\s*}/g,e)}function ya(n,e){var t,l,c,p,m,o,d=!1;e||(e={}),t=e.debug||!1;try{c=fa(),p=document.createRange(),m=document.getSelection(),o=document.createElement("span"),o.textContent=n,o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(i){if(i.stopPropagation(),e.format)if(i.preventDefault(),typeof i.clipboardData=="undefined"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=P[e.format]||P.default;window.clipboardData.setData(y,n)}else i.clipboardData.clearData(),i.clipboardData.setData(e.format,n);e.onCopy&&(i.preventDefault(),e.onCopy(i.clipboardData))}),document.body.appendChild(o),p.selectNodeContents(o),m.addRange(p);var v=document.execCommand("copy");if(!v)throw new Error("copy command was unsuccessful");d=!0}catch(i){t&&console.error("unable to copy using execCommand: ",i),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",n),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(y){t&&console.error("unable to copy using clipboardData: ",y),t&&console.error("falling back to prompt"),l=ga("message"in e?e.message:pa),window.prompt(l,n)}}finally{m&&(typeof m.removeRange=="function"?m.removeRange(p):m.removeAllRanges()),o&&document.body.removeChild(o),c()}return d}var va=ya;const ha={id:"entry-check"},ba={key:0,class:"text-md"},Ca={key:0,class:"text-md"},wa={class:"common-width"},_a=S(" \u8907\u88FD\u9A57\u8B49\u78BC "),Sa={class:"grid justify-center gap-[20px] mb-[40px]"},Ia=S("\u52A0\u5165\u4F3A\u670D\u5668"),ka={setup(n){const e=O(),t=g(null),l=g(null),c=g(!1),p=g(0),m=g(""),o=g(!0),d=M({source:null,userID:null}),v=M({source:{required:!0,trigger:"blur",message:"\u8ACB\u9078\u64C7"},userID:{required:!0,trigger:"blur",message:"\u8ACB\u586B\u5BEB\u6B63\u78BAID",validator:(f,u)=>u?u.length===18&&/^\d+$/.test(u):!1}}),i=g(null),y=g(!1),z=[{label:"\u5DF4\u54C8\u6587\u7AE0",value:"\u5DF4\u54C8\u6587\u7AE0"},{label:"Youtube",value:"Youtube"},{label:"\u670B\u53CB\u4ECB\u7D39",value:"\u670B\u53CB\u4ECB\u7D39"},{label:"Google",value:"Google"}],U=()=>{va(m.value),e.success("\u5DF2\u8907\u88FD\u9A57\u8B49\u78BC !")},F=async f=>{f.value=f,t.value||(t.value="0.0.0.0"),await x()},V=async()=>{const[f,u]=await oa();return u?(console.log(u),!1):(t.value=f.ip,!0)},L=async()=>{const[f,u]=await la({ip:t.value});return u?(e.error(u),!1):(l.value=f.country_name,!0)},K=async()=>{const[f,u]=await sa({country:l.value,id:d.userID,source:d.source,ip:t.value});if(u){e.error(u),c.value=!1;return}m.value=f.data},x=async()=>{if(c.value=!0,!l.value){y.value=!0,c.value=!1;return}i.value.validate(async f=>{if(f){c.value=!1;return}f||await K()||(c.value=!1)})};return R(async()=>{await V(),await L()}),(f,u)=>(h(),D(Y,null,[_("div",ha,[r(a(B),{ref_key:"formRef",ref:i,model:a(d),rules:a(v),class:"client-info common-width","show-label":!1,"show-require-mark":!1,"show-feedback":!0},{default:s(()=>[r(a(w),null,{default:s(()=>[r(a(I),{label:"IP"},{default:s(()=>[t.value?(h(),D("span",ba,N(t.value),1)):C("",!0),t.value?C("",!0):(h(),b(a(G),{key:1,size:"small"}))]),_:1})]),_:1}),r(a(w),null,{default:s(()=>[r(a(I),{label:"Country"},{default:s(()=>[l.value?(h(),D("span",Ca,N(l.value),1)):C("",!0),l.value?C("",!0):(h(),b(a(G),{key:1,size:"small"}))]),_:1})]),_:1}),r(a(I),{label:"Source"},{default:s(()=>[r(a(w),{path:"source"},{default:s(()=>[r(a(A),{value:a(d).source,"onUpdate:value":u[0]||(u[0]=k=>a(d).source=k),options:z},null,8,["value"])]),_:1})]),_:1}),r(a(I),{label:"Discord ID"},{default:s(()=>[r(a(w),{path:"userID"},{default:s(()=>[r(a(W),{value:a(d).userID,"onUpdate:value":u[1]||(u[1]=k=>a(d).userID=k),maxlength:"18"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model","rules"]),_("div",wa,[r(a(J),{type:"success","show-icon":!1,class:"code-show"},{default:s(()=>[S(N(m.value||"\u8ACB\u751F\u6210\u9A57\u8B49\u78BC")+" ",1),m.value?(h(),b(a(Q),{key:0},{trigger:s(()=>[r(a(Z),{class:"cursor-pointer",onClick:U},{default:s(()=>[r(a(ra))]),_:1})]),default:s(()=>[_a]),_:1})):C("",!0)]),_:1})]),_("div",Sa,[r(aa,{loading:c.value,btnText:"\u751F\u6210\u9A57\u8B49\u78BC",active:o.value,seconds:p.value,onClick:x},null,8,["loading","active","seconds"]),r(a(E),{quaternary:"",type:"primary",class:"underline"},{default:s(()=>[Ia]),_:1})])]),y.value?(h(),b(da,{key:0,onChange:F})):C("",!0)],64))}};var Ta=X(ka,[["__scopeId","data-v-360defa4"]]);export{Ta as default};
