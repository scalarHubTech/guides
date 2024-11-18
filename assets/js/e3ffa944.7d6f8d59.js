(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[9121],{89823:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(74848),i=n(28453),a=(n(43905),n(51107));n(23397),n(19365),n(69016);const r={description:"Exemption certificates API Documentation",hide_title:!0,custom_edit_url:null},s=void 0,c={id:"Endpoints/exemption certificates/Exemption-Certificate",title:"Exemption-Certificate",description:"Exemption certificates API Documentation",source:"@site/docs/Endpoints/exemption certificates/Exemption-Certificate.mdx",sourceDirName:"Endpoints/exemption certificates",slug:"/Endpoints/exemption certificates/Exemption-Certificate",permalink:"/reference/Endpoints/exemption certificates/Exemption-Certificate",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{description:"Exemption certificates API Documentation",hide_title:!0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Delete Location",permalink:"/reference/Endpoints/locations/delete-location"},next:{title:"Create Exemption Certificate",permalink:"/reference/Endpoints/exemption certificates/create-exemption-certificate"}},l={},u=[];function d(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0"}),"\n",(0,o.jsx)(a.default,{as:"h1",className:"openapi__heading",children:"Exemption Certificates"})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},69016:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(96540)),a=o(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return i.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},i.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),i.default.createElement("ul",{className:"export-dropdown dropdown__menu"},i.default.createElement("li",null,i.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(96540)),a=n(42214),r=o(n(86025)),s=o(n(15626));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:n,darkLogo:o}=e,c=()=>"dark"===t?o?.altText??n?.altText:n?.altText,l=(0,r.default)(n?.url),u=(0,r.default)(o?.url);return n&&o?i.default.createElement(s.default,{alt:c(),sources:{light:l,dark:u},className:"openapi__logo"}):n||o?i.default.createElement(s.default,{alt:c(),sources:{light:l??u,dark:l??u},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var o,i,a,r=n(96763);i=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,n)},o.onerror=function(){r.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,c=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var r=s.URL||s.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):i(c.href)?o(e,t,n):a(c,c.target="_blank")):(c.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(i(e))o(e,n,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var a="application/octet-stream"===e.type,r=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&r||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,f=d.createObjectURL(e);i?i.location=f:location.href=f,i=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});s.saveAs=l.saveAs=l,e.exports=l})?o.apply(t,i):o)||(e.exports=a)}}]);