(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[6113],{78753:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(74848),i=n(28453),a=(n(43905),n(51107));n(23397),n(19365),n(69016);const r={description:"Entities API Documentation",hide_title:!0,custom_edit_url:null},s=void 0,l={id:"Endpoints/entities/Entities",title:"Entities",description:"Entities API Documentation",source:"@site/docs/Endpoints/entities/Entities.mdx",sourceDirName:"Endpoints/entities",slug:"/Endpoints/entities/",permalink:"/guides/reference/Endpoints/entities/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{description:"Entities API Documentation",hide_title:!0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Delete Customer",permalink:"/guides/reference/Endpoints/customers/delete-customer"},next:{title:"Create Entity",permalink:"/guides/reference/Endpoints/entities/create-entity"}},u={},c=[];function d(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0"}),"\n",(0,o.jsx)(a.default,{as:"h1",className:"openapi__heading",children:"Entities"})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},69016:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(96540)),a=o(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return i.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},i.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),i.default.createElement("ul",{className:"export-dropdown dropdown__menu"},i.default.createElement("li",null,i.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(96540)),a=n(42214),r=o(n(86025)),s=o(n(15626));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:n,darkLogo:o}=e,l=()=>"dark"===t?o?.altText??n?.altText:n?.altText,u=(0,r.default)(n?.url),c=(0,r.default)(o?.url);return n&&o?i.default.createElement(s.default,{alt:l(),sources:{light:u,dark:c},className:"openapi__logo"}):n||o?i.default.createElement(s.default,{alt:l(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var o,i,a,r=n(96763);i=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,n)},o.onerror=function(){r.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var r=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):i(l.href)?o(e,t,n):a(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(i(e))o(e,n,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var a="application/octet-stream"===e.type,r=/constructor/i.test(s.HTMLElement)||s.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&r||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},c.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,f=d.createObjectURL(e);i?i.location=f:location.href=f,i=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});s.saveAs=u.saveAs=u,e.exports=u})?o.apply(t,i):o)||(e.exports=a)}}]);