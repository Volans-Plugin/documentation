"use strict";(self.webpackChunkvolansdocs=self.webpackChunkvolansdocs||[]).push([[2032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7815:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1,id:"requirements",title:"Anforderungen"},l=void 0,o={unversionedId:"Setup/requirements",id:"Setup/requirements",title:"Anforderungen",description:"Minecraft Server",source:"@site/docs/Setup/requirements.md",sourceDirName:"Setup",slug:"/Setup/requirements",permalink:"/en/docs/next/Setup/requirements",draft:!1,editUrl:"https://github.com/volans-plugin/documentation/tree/main/docs/Setup/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"requirements",title:"Anforderungen"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/en/docs/next/Setup/"},next:{title:"Installation",permalink:"/en/docs/next/Setup/installation"}},u={},p=[{value:"Minecraft Server",id:"minecraft-server",level:2},{value:"Minimale Anforderungen",id:"minimale-anforderungen",level:3},{value:"Empfohlen",id:"empfohlen",level:3},{value:"Tempor\xe4re Daten",id:"tempor\xe4re-daten",level:3},{value:"Speicher",id:"speicher",level:2},{value:"Persistente Daten",id:"persistente-daten",level:3}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"minecraft-server"},"Minecraft Server"),(0,i.kt)("h3",{id:"minimale-anforderungen"},"Minimale Anforderungen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2 GB Arbeitsspeicher"),(0,i.kt)("li",{parentName:"ul"},"4 (Virtuelle-)Kerne"),(0,i.kt)("li",{parentName:"ul"},"1.19 ",(0,i.kt)("a",{parentName:"li",href:"https://papermc.io/"},"Paper Server")),(0,i.kt)("li",{parentName:"ul"},"Java 17")),(0,i.kt)("h3",{id:"empfohlen"},"Empfohlen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4-8 GB Arbeitsspeicher"),(0,i.kt)("li",{parentName:"ul"},"8 (Virtuelle-)Kerne"),(0,i.kt)("li",{parentName:"ul"},"1.19.3 ",(0,i.kt)("a",{parentName:"li",href:"https://papermc.io/"},"Paper Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FastAsyncWorldEdit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ProtocolLib"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Volans kann auch ohne FAWE (FastAsyncWorldEdit) und ProtocolLib arbeiten. Dadurch werden folgende Funktionen deaktiviert:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"PaintIt"),(0,i.kt)("li",{parentName:"ul"},"BrushIt"),(0,i.kt)("li",{parentName:"ul"},"Brush History"),(0,i.kt)("li",{parentName:"ul"},"Schematic Upload"),(0,i.kt)("li",{parentName:"ul"},"Clipboard Sync"),(0,i.kt)("li",{parentName:"ul"},"Toggle Sign Editor"))),(0,i.kt)("h3",{id:"tempor\xe4re-daten"},"Tempor\xe4re Daten"),(0,i.kt)("p",null,"Zum Verwalten des Clipboard Sync wird folgende Datenbank ben\xf6tigt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redis/KeyDB")),(0,i.kt)("h2",{id:"speicher"},"Speicher"),(0,i.kt)("h3",{id:"persistente-daten"},"Persistente Daten"),(0,i.kt)("p",null,'Zum Speichern von Schematic Dateien in der "Cloud" wird folgende Technologie ben\xf6tigt'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"S3")))}s.isMDXComponent=!0}}]);