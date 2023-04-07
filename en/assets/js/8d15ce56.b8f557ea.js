"use strict";(self.webpackChunkvolansdocs=self.webpackChunkvolansdocs||[]).push([[9450],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=c;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[m]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:5,id:"home",title:"Home System"},l=void 0,a={unversionedId:"Features/home",id:"Features/home",title:"Home System",description:"Beschreibung",source:"@site/docs/Features/home.md",sourceDirName:"Features",slug:"/Features/home",permalink:"/en/docs/next/Features/home",draft:!1,editUrl:"https://github.com/volans-plugin/documentation/tree/main/docs/Features/home.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"home",title:"Home System"},sidebar:"tutorialSidebar",previous:{title:"Brush It",permalink:"/en/docs/next/Features/brushit"},next:{title:"Skull / Skull History",permalink:"/en/docs/next/Features/skull"}},s={},u=[{value:"Beschreibung",id:"beschreibung",level:3},{value:"Konfiguration",id:"konfiguration",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Benutzung",id:"benutzung",level:3},{value:"Bilder",id:"bilder",level:3},{value:"Videos",id:"videos",level:3}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"beschreibung"},"Beschreibung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Homes sind Teleportationspunkte, zu denen sich Builder pro Welt zur\xfcck teleportieren k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},"Mit Volans ist es m\xf6glich, diese erstellen, zu l\xf6schen und von anderen Buildern zu verwalten.")),(0,i.kt)("h3",{id:"konfiguration"},"Konfiguration"),(0,i.kt)("p",null,"Trage in die Liste ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," in der Sektion ",(0,i.kt)("inlineCode",{parentName:"p"},"volans")," den String ",(0,i.kt)("inlineCode",{parentName:"p"},'"Home"')," ein."),(0,i.kt)("h3",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"Siehe ",(0,i.kt)("a",{parentName:"p",href:"/docs/Permissions/#home-system"},"hier")),(0,i.kt)("h3",{id:"benutzung"},"Benutzung"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Um ein Home zu setzen, nutze den Befehl ",(0,i.kt)("inlineCode",{parentName:"li"},"/sethome")," und dahinter einen Namen deiner Wahl, welcher nur aus alphanummerischen Symbolen bestehen darf, z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"/sethome test"),"."),(0,i.kt)("li",{parentName:"ol"},"Um sich zu einem Home Punkt zu teleportieren, gebe ",(0,i.kt)("inlineCode",{parentName:"li"},"/home")," und den gespeicherten Namen dahinter ein, ",(0,i.kt)("inlineCode",{parentName:"li"},"z.B. /home test")," und dr\xfccke Enter."),(0,i.kt)("li",{parentName:"ol"},"Wenn du deine Homes einsehen m\xf6chtest, die du bereits gesetzt hast, gebe ",(0,i.kt)("inlineCode",{parentName:"li"},"/homes")," ein und du kannst die Bl\xf6cke im Chat anklicken zum Teleportieren oder mit der Maus dar\xfcber fahren, um Koordinaten angezeigt zu bekommen."),(0,i.kt)("li",{parentName:"ol"},"Solltest du ein Home l\xf6schen wollen, gebe ",(0,i.kt)("inlineCode",{parentName:"li"},"/delhome")," und den Namen des Homes ein, z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"/delhome test"),"."),(0,i.kt)("li",{parentName:"ol"},"Um ein Home von anderen Buildern zu verwalten, gebe stets den Namen der Person mit an, z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"/home Seelenretterin:test")," um dich zu dem Home der Person zu teleportieren."),(0,i.kt)("li",{parentName:"ol"},"Man kann die Homes von anderen Buildern anschauen mit ",(0,i.kt)("inlineCode",{parentName:"li"},"/homes und Namen des Builders"),", z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"/homes Seelenretterin")),(0,i.kt)("li",{parentName:"ol"},"L\xf6schen von Homes von anderen Buildern funktioniert nach demselben Prinzip, aber diese Funktion sollten nur Administratoren oder verantwortliche Personen verwenden."),(0,i.kt)("li",{parentName:"ol"},"Wichtig: Es k\xf6nnen aktuell unbegrenzt viele Home Punkte erstellt werden, die aktuell pro UUID in einer Datei gespeichert werden.")),(0,i.kt)("h3",{id:"bilder"},"Bilder"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aktuell keine")),(0,i.kt)("h3",{id:"videos"},"Videos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aktuell keine")))}m.isMDXComponent=!0}}]);