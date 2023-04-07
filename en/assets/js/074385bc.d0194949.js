"use strict";(self.webpackChunkvolansdocs=self.webpackChunkvolansdocs||[]).push([[3917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,id:"toggleeditsign",title:"Toggle Edit Sign"},l=void 0,a={unversionedId:"Features/toggleeditsign",id:"version-1.5.0/Features/toggleeditsign",title:"Toggle Edit Sign",description:"Beschreibung",source:"@site/versioned_docs/version-1.5.0/Features/togglesigneditor.md",sourceDirName:"Features",slug:"/Features/toggleeditsign",permalink:"/en/docs/Features/toggleeditsign",draft:!1,editUrl:"https://github.com/volans-plugin/documentation/tree/main/versioned_docs/version-1.5.0/Features/togglesigneditor.md",tags:[],version:"1.5.0",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"toggleeditsign",title:"Toggle Edit Sign"},sidebar:"tutorialSidebar",previous:{title:"Schema Upload",permalink:"/en/docs/Features/schemaupload"},next:{title:"Speed Command",permalink:"/en/docs/Features/speed"}},s={},d=[{value:"Beschreibung",id:"beschreibung",level:3},{value:"Konfiguration",id:"konfiguration",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Benutzung",id:"benutzung",level:3},{value:"Bilder",id:"bilder",level:3},{value:"Videos",id:"videos",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"beschreibung"},"Beschreibung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dieses Feature erm\xf6glicht dir, ohne NBT Daten zu speichern, mit einem Befehl Schilder als Dekoration ohne Schildermen\xfc zu setzen. "),(0,r.kt)("li",{parentName:"ul"},"Achte darauf, dass die Aktivierung von dem Befehl das Volans Feature EditSign blockiert. Du kannst also nicht gleichzeitig Schilder ohne Schildermen\xfc setzen und dann wieder beschreiben.")),(0,r.kt)("h3",{id:"konfiguration"},"Konfiguration"),(0,r.kt)("p",null,"Trage in die Liste ",(0,r.kt)("inlineCode",{parentName:"p"},"features")," in der Sektion ",(0,r.kt)("inlineCode",{parentName:"p"},"volans")," den String ",(0,r.kt)("inlineCode",{parentName:"p"},'"ToggleSignEditor"')," ein."),(0,r.kt)("h3",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"Siehe ",(0,r.kt)("a",{parentName:"p",href:"/docs/Permissions/#toggle-edit-sign"},"hier")),(0,r.kt)("h3",{id:"benutzung"},"Benutzung"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wenn du die Schilder ohne das Schildmen\xfc setzen m\xf6chtest, gebe ",(0,r.kt)("inlineCode",{parentName:"li"},"/toggleeditsign")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},"/tes")," ein."),(0,r.kt)("li",{parentName:"ol"},"Wenn du denselben Befehl noch einmal eingibst, kannst du diese Funktion wieder deaktivieren.")),(0,r.kt)("h3",{id:"bilder"},"Bilder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aktuell keine")),(0,r.kt)("h3",{id:"videos"},"Videos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aktuell keine")))}c.isMDXComponent=!0}}]);