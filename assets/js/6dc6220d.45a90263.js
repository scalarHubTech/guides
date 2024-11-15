"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[8994],{87007:(e,r,t)=>{t.r(r),t.d(r,{ToggleErrorTable:()=>l,assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=t(74848),i=t(28453),n=t(96540);const o={sidebar_position:6,id:"Error response format"},d="Errors",a={id:"Error response format",title:"Errors",description:"How the Scalarhub.ai API handles error responses",source:"@site/docs/Error response format.mdx",sourceDirName:".",slug:"/Error response format",permalink:"/reference/Error response format",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Error response format.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"Error response format"},sidebar:"tutorialSidebar",previous:{title:"Dry run requests",permalink:"/reference/Dry run requests"},next:{title:"Reliability and scaling",permalink:"/reference/Reliability and scaling"}},c={};function l(){const e={button:"button",div:"div",pre:"pre",...(0,i.R)()},[r,t]=(0,n.useState)(null),o={401:{title:"Unauthorized",status:401,detail:"Invalid authentication for resource."},403:{type:"about:blank",title:"Forbidden",status:403,detail:"Missing required permissions",instance:"<attempted_path>",permissions:[{identifier:13,name:"View customers"}],identifier:"018d3157-0ec8-73ba-a684-865e5e2ff1ed",timestamp:"2024-01-22T13:23:25.512206Z"},"404 - URL not found":{title:"Not Found",status:404,detail:"This resource could not be found",instance:"<attempted_path>"},"404- Resource bot found":{type:"about:blank",title:"Conflict",status:409,detail:"<formatted SQL detailMessage>",instance:"<attempted_path>",properties:{field_name:"duplicated"},identifier:"018d3157-0ec8-73ba-a684-865e5e2ff1ed",timestamp:"2024-01-22T13:23:25.512206Z"},409:{type:"about:blank",title:"Conflict",status:409,detail:"<formatted SQL detailMessage>",instance:"<attempted_path>",properties:{field_name:"duplicated"},identifier:"018d3157-0ec8-73ba-a684-865e5e2ff1ed",timestamp:"2024-01-22T13:23:25.512206Z"},429:{message:"API rate limit exceeded"},500:{type:"about:blank",title:"Generic Error",status:500,identifier:"018d3157-0ec8-73ba-a684-865e5e2ff1ed",timestamp:"2024-01-22T13:23:25.512206Z"}};return(0,s.jsxs)(e.div,{children:[(0,s.jsx)(e.div,{style:{display:"flex",gap:"1em",marginBottom:"1em"},children:Object.keys(o).map((i=>(0,s.jsx)(e.button,{onClick:()=>t(i),style:{padding:"0.5em 1em",cursor:"pointer",backgroundColor:r===i?"#ccc":"#f0f0f0",border:"1px solid #ddd",borderRadius:"4px"},children:i},i)))}),r&&(0,s.jsx)(e.div,{style:{padding:"1em",backgroundColor:"#f9f9f9",border:"1px solid #ddd"},children:(0,s.jsx)(e.pre,{style:{whiteSpace:"pre-wrap",wordWrap:"break-word",backgroundColor:"#f0f0f0",padding:"1em",borderRadius:"4px",display:"block",fontFamily:"monospace",fontSize:"14px"},children:JSON.stringify(o[r],null,2)})})]})}const u=[{value:"Error codes",id:"error-codes",level:2},{value:"Error structures",id:"error-structures",level:2}];function h(e){const r={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"errors",children:"Errors"})}),"\n",(0,s.jsx)(r.p,{children:"How the Scalarhub.ai API handles error responses"}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(r.p,{children:"Our APIs utilize HTTP status codes for error management. In the event of a failed API call, we will return a 4xx or 5xx status code."}),"\n",(0,s.jsx)(r.h2,{id:"error-codes",children:"Error codes"}),"\n",(0,s.jsx)(r.p,{children:"These are the status codes returned from all endpoints. Some endpoints may have additional errors which are detailed within the respective endpoint documentation."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Status"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"401"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Unauthorized"})," - Please ensure your authentication token is correct"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"403"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Permissions error"})," - You do not have the correct permissions to access the resource"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"404"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Not found"})," - The requested resource could not be found"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"409"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Conflict"})," - The request conflicts with another request"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"429"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Too many requests"})," - Too many requests in a given amount of time (rate limiting)."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"500"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Internal server error"})," - The server has encountered an error. If this persists, please contact support."]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"error-structures",children:"Error structures"}),"\n",(0,s.jsx)(r.p,{children:"These are the typical error structures you will receive for each error code."}),"\n",(0,s.jsx)(l,{})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);