(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[840],{85557:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"Endpoints/subscriptions/Subscriptions","title":"Subscriptions","description":"Subscriptions API Documentation","source":"@site/docs/Endpoints/subscriptions/Subscriptions.mdx","sourceDirName":"Endpoints/subscriptions","slug":"/Endpoints/subscriptions/","permalink":"/reference/Endpoints/subscriptions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"description":"Subscriptions API Documentation","hide_title":true,"custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Delete Product","permalink":"/reference/Endpoints/products/delete-product"},"next":{"title":"Create Subscription","permalink":"/reference/Endpoints/subscriptions/create-subscription"}}');var i=n(74848),s=n(28453),r=(n(43905),n(51107));n(23397),n(19365),n(69016);const a={description:"Subscriptions API Documentation",hide_title:!0,custom_edit_url:null},c=void 0,l={},u=[];function d(e){const t={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0"}),"\n",(0,i.jsx)(r.default,{as:"h1",className:"openapi__heading",children:"Subscriptions"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"SubscriptionAPI"})," manages the lifecycle of customer subscriptions, providing functionality for creating, viewing, updating, and deleting subscription records. Subscriptions represent a customer\u2019s engagement with a plan and track details such as billing cycles, activation dates, and service periods."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Lifecycle Management"}),": Includes creation, retrieval, modification, and deletion of subscriptions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Billing and Activation"}),": Supports billing cycle alignment, contract dates, and activation or termination dates."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Flexible Configuration"}),": Tracks critical attributes such as status, billing amount, and account association."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This controller ensures robust handling of subscription records through secure parameter handling and integrates business logic via a dedicated ",(0,i.jsx)(t.code,{children:"SubscriptionService"})," class."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69016:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(96540)),s=o(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return i.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},i.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),i.default.createElement("ul",{className:"export-dropdown dropdown__menu"},i.default.createElement("li",null,i.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),s.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(96540)),s=n(20239),r=o(n(86025)),a=o(n(15626));t.default=function(e){const{colorMode:t}=(0,s.useColorMode)(),{logo:n,darkLogo:o}=e,c=()=>"dark"===t?o?.altText??n?.altText:n?.altText,l=(0,r.default)(n?.url),u=(0,r.default)(o?.url);return n&&o?i.default.createElement(a.default,{alt:c(),sources:{light:l,dark:u},className:"openapi__logo"}):n||o?i.default.createElement(a.default,{alt:c(),sources:{light:l??u,dark:l??u},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var o,i,s,r=n(96763);i=[],void 0===(s="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,n)},o.onerror=function(){r.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,c=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var r=a.URL||a.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?s(c):i(c.href)?o(e,t,n):s(c,c.target="_blank")):(c.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(i(e))o(e,n,r);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){s(a)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var s="application/octet-stream"===e.type,r=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&r||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var d=a.URL||a.webkitURL,p=d.createObjectURL(e);i?i.location=p:location.href=p,i=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});a.saveAs=l.saveAs=l,e.exports=l})?o.apply(t,i):o)||(e.exports=s)}}]);