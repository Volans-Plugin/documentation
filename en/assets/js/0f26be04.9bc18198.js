"use strict";(self.webpackChunkvolansdocs=self.webpackChunkvolansdocs||[]).push([[6168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,c=p["".concat(o,".").concat(k)]||p[k]||m[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,id:"configuration",title:"Konfiguration"},l=void 0,d={unversionedId:"Setup/configuration",id:"version-1.5.0/Setup/configuration",title:"Konfiguration",description:"Der Server muss nach jeder \xc4nderung der Konfiguration komplett neu gestartet werden. Der Reload wird nicht unterst\xfctzt",source:"@site/versioned_docs/version-1.5.0/Setup/configuration.md",sourceDirName:"Setup",slug:"/Setup/configuration",permalink:"/en/docs/Setup/configuration",draft:!1,editUrl:"https://github.com/volans-plugin/documentation/tree/main/versioned_docs/version-1.5.0/Setup/configuration.md",tags:[],version:"1.5.0",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"configuration",title:"Konfiguration"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/en/docs/Setup/installation"},next:{title:"S3 Minio Konfiguration",permalink:"/en/docs/Setup/s3-minio"}},o={},u=[{value:"Konfiguration",id:"konfiguration",level:2},{value:"Volans Sektion",id:"volans-sektion",level:3},{value:"Features Liste",id:"features-liste",level:4},{value:"S3 Sektion",id:"s3-sektion",level:3},{value:"Schema Upload Sektion",id:"schema-upload-sektion",level:3},{value:"Redis Sektion",id:"redis-sektion",level:3},{value:"BrushIt Sektion",id:"brushit-sektion",level:3},{value:"PaintIt Sektion",id:"paintit-sektion",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Der Server muss nach jeder \xc4nderung der Konfiguration komplett neu gestartet werden. Der Reload wird nicht unterst\xfctzt\nund kann Fehler verursachen!")),(0,r.kt)("h2",{id:"konfiguration"},"Konfiguration"),(0,r.kt)("p",null,"Sobald du deinen Server zum ersten Mal gestartet hast, sollte in dem Pfad ",(0,r.kt)("inlineCode",{parentName:"p"},"<DEIN_SERVER>/plugins/Volans"),"\neine ",(0,r.kt)("inlineCode",{parentName:"p"},"config.conf")," erscheinen.\nIn dieser Datei gibt es viele Einstellungsm\xf6glichkeiten f\xfcr Volans."),(0,r.kt)("p",null,"Details stehen auch in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.conf")),(0,r.kt)("h3",{id:"volans-sektion"},"Volans Sektion"),(0,r.kt)("p",null,"In der Volans Sektion, kannst du bestimmen, welche Funktionen von Volans aktiv sind und welche Sprache Volans verwenden\nsoll."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feld"),(0,r.kt)("th",{parentName:"tr",align:null},"M\xf6gliche werte"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locale"),(0,r.kt)("td",{parentName:"tr",align:null},"en_US,en-US,de-DE,de_DE"),(0,r.kt)("td",{parentName:"tr",align:null},"Erlaubt es dir die Sprache f\xfcr Commands und Inventare umzustellen")))),(0,r.kt)("h4",{id:"features-liste"},"Features Liste"),(0,r.kt)("p",null,"Standardm\xe4\xdfig sind alle Funktionen aktiv bis au\xdfer ",(0,r.kt)("inlineCode",{parentName:"p"},"ClipboardSync")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaUpload"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Features k\xf6nnen mit einem ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," deaktiviert werden wie in einer YML Datei. Zum Reaktivieren einfach das ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),"\nwieder entfernen."),(0,r.kt)("h3",{id:"s3-sektion"},"S3 Sektion"),(0,r.kt)("p",null,"Getestet wurde die Funktion mit einem ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"Minio Server"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"AccessKey"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Secretkey"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Region"),",",(0,r.kt)("inlineCode",{parentName:"p"},"EndPoint")," bekommt ihr von eurem jeweiligen Provider.\nDer ",(0,r.kt)("inlineCode",{parentName:"p"},"pathStyleAccess")," wird nur ben\xf6tigt wenn man ein Minio Server verwendet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"s3-minio"},"S3 Minio Konfiguration"))),(0,r.kt)("h3",{id:"schema-upload-sektion"},"Schema Upload Sektion"),(0,r.kt)("p",null,"In dieser Sektion ist es dir m\xf6glich einzustellen, in welchem Ordner/Bucket die Schematic Dateien von FAWE abgelegt\nwerden.\nDazu kann auch die zeitliche G\xfcltigkeit des Links eingestellt werden."),(0,r.kt)("p",null,"Das Feld ",(0,r.kt)("inlineCode",{parentName:"p"},"expirationTime")," hat als Standardwert ",(0,r.kt)("inlineCode",{parentName:"p"},"P6D")," und kann nach\nfolgender ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html#parse-java.lang.CharSequence-"},"Dokumentation"),"\nver\xe4ndert werden."),(0,r.kt)("p",null,"Beispiel:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Ausdruck"),(0,r.kt)("th",{parentName:"tr",align:null},"Wert nach Dokumentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P7D"),(0,r.kt)("td",{parentName:"tr",align:null},"7 Tage G\xfcltigkeit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PT24H"),(0,r.kt)("td",{parentName:"tr",align:null},"24 Stunden G\xfcltigkeit")))),(0,r.kt)("h3",{id:"redis-sektion"},"Redis Sektion"),(0,r.kt)("p",null,"In dieser Sektion gibt es nur ein Feld, welches eingestellt werden kann.\nDieses Feld nimmt nur Sekunden als Wert an."),(0,r.kt)("p",null,"Der Wert f\xfcr das SyncTimeout bestimmt, wie lange das Clipboard auch ",(0,r.kt)("strong",{parentName:"p"},"nach dem Offline")," gehen im Redis bleibt."),(0,r.kt)("h3",{id:"brushit-sektion"},"BrushIt Sektion"),(0,r.kt)("p",null,"Diese Standardwerte werden nur gesetzt, wenn man BrushIt zum ersten Mal (Serverneustarts und Server wiederbetreten\neingenommen) verwendet."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feld"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brushItem"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard Item, um die Brush zu bedienen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"Beeinflusst die Standard Gr\xf6\xdfe der Brush")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intensity"),(0,r.kt)("td",{parentName:"tr",align:null},"Beeinflusst die Standard St\xe4rke der Brush")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"additionMode"),(0,r.kt)("td",{parentName:"tr",align:null},"Sagt aus, ob Bl\xf6cke mit der Brush standardm\xe4\xdfig hinzugef\xfcgt werden oder Bl\xf6cke entfernt werden sollen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3dMode"),(0,r.kt)("td",{parentName:"tr",align:null},"Sagt aus, ob die Brush als 3D Modus bei der ersten Verwendung aktiviert/deaktiviert wird")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flatMode"),(0,r.kt)("td",{parentName:"tr",align:null},"Sagt aus, ob die Brush standardm\xe4\xdfig f\xfcr den Fl\xe4chenmodus (2D) gesetzt werden soll")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autorotation"),(0,r.kt)("td",{parentName:"tr",align:null},"Sagt aus, ob die Brush sich immer norden soll oder nicht")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brushenabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Sagt aus ob die Brush direkt aktiviert/deaktiviert ist, sobald ein Spieler das Item in der Hand hat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brushname"),(0,r.kt)("td",{parentName:"tr",align:null},"Sagt aus, was die Standard Brush ist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Definiert die maximale Gr\xf6\xdfe, kann aber mit einer Permission \xfcberschritten werden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxIntensity"),(0,r.kt)("td",{parentName:"tr",align:null},"Definiert die maximal St\xe4rke, kann aber mit einer Permission \xfcberschritten werden")))),(0,r.kt)("h3",{id:"paintit-sektion"},"PaintIt Sektion"),(0,r.kt)("p",null,"Diese Standardwerte werden wie bei BrushIt verwendet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feld"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brushItem"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard Item, um die Brush zu bedienen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Definiert die maximale Gr\xf6\xdfe, kann aber mit einer Permission \xfcberschritten werden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Beeinflusst die Standard Gr\xf6\xdfe der Brush")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxHistory"),(0,r.kt)("td",{parentName:"tr",align:null},"Nicht in gebrauch")))))}p.isMDXComponent=!0}}]);