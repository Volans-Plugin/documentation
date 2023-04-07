"use strict";(self.webpackChunkvolansdocs=self.webpackChunkvolansdocs||[]).push([[4554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?r.createElement(g,l(l({ref:n},d),{},{components:t})):r.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:4,id:"speed",title:"Speed Command"},l=void 0,a={unversionedId:"Features/speed",id:"version-1.5.0/Features/speed",title:"Speed Command",description:"Beschreibung",source:"@site/versioned_docs/version-1.5.0/Features/speed.md",sourceDirName:"Features",slug:"/Features/speed",permalink:"/en/docs/Features/speed",draft:!1,editUrl:"https://github.com/volans-plugin/documentation/tree/main/versioned_docs/version-1.5.0/Features/speed.md",tags:[],version:"1.5.0",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"speed",title:"Speed Command"},sidebar:"tutorialSidebar",previous:{title:"Toggle Edit Sign",permalink:"/en/docs/Features/toggleeditsign"},next:{title:"Brush It",permalink:"/en/docs/Features/brushit"}},s={},u=[{value:"Beschreibung",id:"beschreibung",level:3},{value:"Konfiguration",id:"konfiguration",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Benutzung",id:"benutzung",level:3},{value:"Bilder",id:"bilder",level:3},{value:"Videos",id:"videos",level:3}],d={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"beschreibung"},"Beschreibung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mit dem Speed Befehl l\xe4sst sich die Lauf- und Fluggeschwindigkeit im Stehen oder Fliegen einstellen.")),(0,i.kt)("h3",{id:"konfiguration"},"Konfiguration"),(0,i.kt)("p",null,"Trage in die Liste ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," in der Sektion ",(0,i.kt)("inlineCode",{parentName:"p"},"volans")," den String ",(0,i.kt)("inlineCode",{parentName:"p"},'"Speed"')," ein."),(0,i.kt)("h3",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"Siehe ",(0,i.kt)("a",{parentName:"p",href:"/docs/Permissions/#speed"},"hier")),(0,i.kt)("h3",{id:"benutzung"},"Benutzung"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Im Stehen gib ",(0,i.kt)("inlineCode",{parentName:"li"},"/speed")," und eine Zahl zwischen ",(0,i.kt)("inlineCode",{parentName:"li"},"1-10")," an, um deine Laufgeschwindigkeit zu \xe4ndern, z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"/speed 5")),(0,i.kt)("li",{parentName:"ol"},"Im Fliegen (im Kreativmodus oder mit einem Fly Befehl eines anderen Plugins) kannst du denselben Befehl eingeben, um deine Fluggeschwindigkeit zu \xe4ndern."),(0,i.kt)("li",{parentName:"ol"},"Solltest du deine Flug- oder Laufgeschwindigkeit resetten wollen auf normale Geschwindigkeit, gebe im Stehen oder im Flug/Schweben ",(0,i.kt)("inlineCode",{parentName:"li"},"/speed")," ohne eine Zahl ein.")),(0,i.kt)("h3",{id:"bilder"},"Bilder"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aktuell keine")),(0,i.kt)("h3",{id:"videos"},"Videos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aktuell keine")))}p.isMDXComponent=!0}}]);