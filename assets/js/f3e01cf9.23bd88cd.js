"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[3714],{40469:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(74848),i=s(28453);const r={sidebar_position:2,id:"Request idempotency"},a="Request Idempotency",o={id:"Request idempotency",title:"Request Idempotency",description:"ScalarHub's API supports idempotency to allow safe request retries without causing unintended duplication of actions. For example, an Idempotency-Key ensures that creating a subscription will not accidentally create duplicate subscriptions if the request is retried. Idempotency is strongly recommended for POST and PATCH operations.GET, PUT, and DELETE operations are idempotent and do not require an explicit key.",source:"@site/docs/Request idempotency.md",sourceDirName:".",slug:"/Request idempotency",permalink:"/reference/Request idempotency",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Request idempotency"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/reference/Introduction"},next:{title:"Pagination",permalink:"/reference/Pagination"}},c={},d=[{value:"Response Format",id:"response-format",level:2},{value:"Generating Idempotency Keys",id:"generating-idempotency-keys",level:2},{value:"Error Cases",id:"error-cases",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"request-idempotency",children:"Request Idempotency"})}),"\n",(0,t.jsxs)(n.p,{children:["ScalarHub's API supports idempotency to allow safe request retries without causing unintended duplication of actions. For example, an ",(0,t.jsx)(n.code,{children:"Idempotency-Key"})," ensures that creating a subscription will not accidentally create duplicate subscriptions if the request is retried. Idempotency is strongly recommended for ",(0,t.jsx)(n.code,{children:"POST"})," and ",(0,t.jsx)(n.code,{children:"PATCH"})," operations.",(0,t.jsx)(n.code,{children:"GET"}),", ",(0,t.jsx)(n.code,{children:"PUT"}),", and ",(0,t.jsx)(n.code,{children:"DELETE"})," operations are idempotent and do not require an explicit key."]}),"\n",(0,t.jsxs)(n.p,{children:["Users can safely retry requests containing an ",(0,t.jsx)(n.code,{children:"Idempotency-Key"})," within 48 hours. Once expired, retries with the same key may result in re-execution of side effects."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"POST /customers\r\nContent-Type: application/json\r\nIdempotency-Key: abc123\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n\xa0 \xa0 "name": "John Doe",\r\n\xa0 \xa0 "email": "john.doe@example.com"\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"response-format",children:"Response Format"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"HTTP/1.1 201 Created\r\nContent-Type: application/json\r\nIdempotency-Key: abc123\r\nIdempotent-Replayed: false\r\nLocation: /customers/12345\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n\xa0 \xa0 "id": "12345",\r\n\xa0 \xa0 "name": "John Doe",\r\n\xa0 \xa0 "email": "john.doe@example.com",\r\n\xa0 \xa0 "created_at": "2024-10-04T13:06:48.000Z",\r\n\xa0 \xa0 "updated_at": "2024-10-04T13:06:48.000Z",\r\n\xa0 \xa0 "status": "active"\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Idempotency-Key"})," header reflects the key provided in the original request. The ",(0,t.jsx)(n.code,{children:"Idempotent-Replayed"})," header is set to ",(0,t.jsx)(n.code,{children:"false"}),", which indicates that the response is new and not a repeat of a previous one. This format allows the client to verify the successful creation of the customer, even if the original request is sent again with the same idempotency key."]}),"\n",(0,t.jsx)(n.h2,{id:"generating-idempotency-keys",children:"Generating Idempotency Keys"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"UUID (Universally Unique Identifier):"})," Use libraries or built-in functions in programming languages to generate a UUID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timestamp + Random String:"})," Combine the current timestamp with a random string to create a unique key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client-Specific Key:"})," If applicable, concatenate a user-specific identifier (like a user ID) with a timestamp to create a key unique to that user's action."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"error-cases",children:"Error Cases"}),"\n",(0,t.jsx)(n.p,{children:"When using idempotency keys, several error scenarios may arise:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Missing Idempotency Key"})," If a request is made without an ",(0,t.jsx)(n.code,{children:"Idempotency-Key"}),", the server will process it usually, but subsequent requests with the same parameters will not be idempotent"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'400 Bad Request: "Idempotency-Key header is missing."\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Duplicate Idempotency Key"}),"If the same ",(0,t.jsx)(n.code,{children:"Idempotency-Key"})," is used for different operations, the server will respond based on the first request made with that key."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'409 Conflict: "This idempotency key has already been used." \n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Expired Idempotency Key"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Server settings may set a specific expiration time for keys. Reusing a key after it has expired will be considered a new request."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'410 Gone: "The provided idempotency key has expired."\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);