(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[1924],{15280:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var o=n(74848),a=n(28453),r=(n(43905),n(51107)),s=n(23397),i=n.n(s),l=n(19365);n(69016);const c={id:"scalartax",title:"ScalarTax",description:"Products API Documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},d=void 0,u={id:"Endpoints/products/scalartax",title:"ScalarTax",description:"Products API Documentation",source:"@site/docs/Endpoints/products/scalartax.info.mdx",sourceDirName:"Endpoints/products",slug:"/Endpoints/products/scalartax",permalink:"/reference/Endpoints/products/scalartax",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scalartax",title:"ScalarTax",description:"Products API Documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null}},p={},h=[];function f(e){const t={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0.0"}),"\n",(0,o.jsx)(r.default,{as:"h1",className:"openapi__heading",children:"ScalarTax"}),"\n",(0,o.jsx)(t.p,{children:"Products API Documentation"}),"\n",(0,o.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,o.jsx)(r.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,o.jsx)(i(),{className:"openapi-tabs__security-schemes",children:(0,o.jsx)(l.default,{label:"HTTP: Bearer Auth",value:"BearerAuth",children:(0,o.jsx)("div",{children:(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"http"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"HTTP Authorization Scheme:"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"bearer"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Bearer format:"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"JWT"})})]})]})})})})})]}),"\n",(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,o.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,o.jsx)(t.p,{children:"Contact"})}),(0,o.jsx)("span",{children:(0,o.jsxs)(t.p,{children:["API Support: ",(0,o.jsx)(t.a,{href:"mailto:support@example.com",children:"support@example.com"})]})}),(0,o.jsx)("span",{children:(0,o.jsxs)(t.p,{children:["URL: ",(0,o.jsx)(t.a,{href:"mailto:http://example.com/supportt",children:"http://example.com/supportt"})]})})]}),"\n",(0,o.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,o.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,o.jsx)(t.p,{children:"Terms of Service"})}),(0,o.jsx)("a",{href:"http://example.com/terms/",children:(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"http://example.com/terms/",children:"http://example.com/terms/"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},69016:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(96540)),r=o(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return a.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.default.createElement("ul",{className:"export-dropdown dropdown__menu"},a.default.createElement("li",null,a.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),r.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(96540)),r=n(42214),s=o(n(86025)),i=o(n(15626));t.default=function(e){const{colorMode:t}=(0,r.useColorMode)(),{logo:n,darkLogo:o}=e,l=()=>"dark"===t?o?.altText??n?.altText:n?.altText,c=(0,s.default)(n?.url),d=(0,s.default)(o?.url);return n&&o?a.default.createElement(i.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):n||o?a.default.createElement(i.default,{alt:l(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var o,a,r,s=n(96763);a=[],void 0===(r="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){s.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):a(l.href)?o(e,t,n):r(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(a(e))o(e,n,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&s||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=i.URL||i.webkitURL,p=u.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,a):o)||(e.exports=r)}}]);