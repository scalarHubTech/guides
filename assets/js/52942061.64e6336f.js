(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[516],{2913:(e,r,t)=>{"use strict";t.r(r),t.d(r,{assets:()=>x,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>j});var n=t(74848),s=t(28453),d=(t(43905),t(51107)),i=t(23397),l=t.n(i),c=t(19365);t(69016);const o={id:"scalartax",title:"ScalarTax",description:"# ScalarTax API Documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},a="ScalarTax API Documentation",h={id:"Endpoints/scalartax",title:"ScalarTax",description:"# ScalarTax API Documentation",source:"@site/docs/Endpoints/scalartax.info.mdx",sourceDirName:"Endpoints",slug:"/Endpoints/scalartax",permalink:"/guides/reference/Endpoints/scalartax",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scalartax",title:"ScalarTax",description:"# ScalarTax API Documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null}},x={},j=[{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Status Codes",id:"status-codes",level:2},{value:"Detailed Status Code Descriptions",id:"detailed-status-code-descriptions",level:2},{value:"HTTP 200 OK",id:"http-200-ok",level:3},{value:"HTTP 201 Created",id:"http-201-created",level:3},{value:"HTTP 204 No Content",id:"http-204-no-content",level:3},{value:"HTTP 400 Bad Request",id:"http-400-bad-request",level:3},{value:"HTTP 404 Not Found",id:"http-404-not-found",level:3},{value:"HTTP 500 Internal Server Error",id:"http-500-internal-server-error",level:3},{value:"HTTP 503 Service Unavailable",id:"http-503-service-unavailable",level:3},{value:"Need Some Help?",id:"need-some-help",level:2},{value:"Additional Resources",id:"additional-resources",level:3}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0.0"}),"\n",(0,n.jsx)(d.default,{as:"h1",className:"openapi__heading",children:"ScalarTax"}),"\n",(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"scalartax-api-documentation",children:"ScalarTax API Documentation"})}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:"The ScalarTax API provides a comprehensive set of endpoints to manage customers, accounts, users, products, transactions, companies, and nexuses. This documentation outlines the available endpoints and the corresponding CRUD operations, helping developers integrate and interact with the service efficiently."}),"\n",(0,n.jsx)(r.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Resource"}),(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Endpoint"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Status Codes"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Customers"})}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/customers"})}),(0,n.jsx)(r.td,{children:"Retrieve a list of customers"}),(0,n.jsx)(r.td,{children:"200 OK, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"POST"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/customers"})}),(0,n.jsx)(r.td,{children:"Create a new customer"}),(0,n.jsx)(r.td,{children:"201 Created, 400 Bad Request, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/customers/:id"})}),(0,n.jsx)(r.td,{children:"Retrieve a single customer"}),(0,n.jsx)(r.td,{children:"200 OK, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"PUT"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/customers/:id"})}),(0,n.jsx)(r.td,{children:"Update an existing customer"}),(0,n.jsx)(r.td,{children:"200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"DELETE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/customers/:id"})}),(0,n.jsx)(r.td,{children:"Delete a customer"}),(0,n.jsx)(r.td,{children:"204 No Content, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Accounts"})}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/accounts"})}),(0,n.jsx)(r.td,{children:"Retrieve a list of accounts"}),(0,n.jsx)(r.td,{children:"200 OK, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"POST"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/accounts"})}),(0,n.jsx)(r.td,{children:"Create a new account"}),(0,n.jsx)(r.td,{children:"201 Created, 400 Bad Request, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/accounts/:id"})}),(0,n.jsx)(r.td,{children:"Retrieve a single account"}),(0,n.jsx)(r.td,{children:"200 OK, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"PUT"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/accounts/:id"})}),(0,n.jsx)(r.td,{children:"Update an existing account"}),(0,n.jsx)(r.td,{children:"200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"DELETE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/accounts/:id"})}),(0,n.jsx)(r.td,{children:"Delete an account"}),(0,n.jsx)(r.td,{children:"204 No Content, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Users"})}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/users"})}),(0,n.jsx)(r.td,{children:"Retrieve a list of users"}),(0,n.jsx)(r.td,{children:"200 OK, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"POST"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/users"})}),(0,n.jsx)(r.td,{children:"Create a new user"}),(0,n.jsx)(r.td,{children:"201 Created, 400 Bad Request, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/users/:id"})}),(0,n.jsx)(r.td,{children:"Retrieve a single user"}),(0,n.jsx)(r.td,{children:"200 OK, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"PUT"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/users/:id"})}),(0,n.jsx)(r.td,{children:"Update an existing user"}),(0,n.jsx)(r.td,{children:"200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"DELETE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/users/:id"})}),(0,n.jsx)(r.td,{children:"Delete a user"}),(0,n.jsx)(r.td,{children:"204 No Content, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Products"})}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/products"})}),(0,n.jsx)(r.td,{children:"Retrieve a list of products"}),(0,n.jsx)(r.td,{children:"200 OK, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"POST"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/products"})}),(0,n.jsx)(r.td,{children:"Create a new product"}),(0,n.jsx)(r.td,{children:"201 Created, 400 Bad Request, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/products/:id"})}),(0,n.jsx)(r.td,{children:"Retrieve a single product"}),(0,n.jsx)(r.td,{children:"200 OK, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"PUT"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/products/:id"})}),(0,n.jsx)(r.td,{children:"Update an existing product"}),(0,n.jsx)(r.td,{children:"200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"DELETE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/products/:id"})}),(0,n.jsx)(r.td,{children:"Delete a product"}),(0,n.jsx)(r.td,{children:"204 No Content, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Transactions"})}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/transactions"})}),(0,n.jsx)(r.td,{children:"Retrieve a list of transactions"}),(0,n.jsx)(r.td,{children:"200 OK, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"POST"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/transactions"})}),(0,n.jsx)(r.td,{children:"Create a new transaction"}),(0,n.jsx)(r.td,{children:"201 Created, 400 Bad Request, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/transactions/:id"})}),(0,n.jsx)(r.td,{children:"Retrieve a single transaction"}),(0,n.jsx)(r.td,{children:"200 OK, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"PUT"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/transactions/:id"})}),(0,n.jsx)(r.td,{children:"Update an existing transaction"}),(0,n.jsx)(r.td,{children:"200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"DELETE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/transactions/:id"})}),(0,n.jsx)(r.td,{children:"Delete a transaction"}),(0,n.jsx)(r.td,{children:"204 No Content, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Companies"})}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/companies"})}),(0,n.jsx)(r.td,{children:"Retrieve a list of companies"}),(0,n.jsx)(r.td,{children:"200 OK, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"POST"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/companies"})}),(0,n.jsx)(r.td,{children:"Create a new company"}),(0,n.jsx)(r.td,{children:"201 Created, 400 Bad Request, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/companies/:id"})}),(0,n.jsx)(r.td,{children:"Retrieve a single company"}),(0,n.jsx)(r.td,{children:"200 OK, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"PUT"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/companies/:id"})}),(0,n.jsx)(r.td,{children:"Update an existing company"}),(0,n.jsx)(r.td,{children:"200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"DELETE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/companies/:id"})}),(0,n.jsx)(r.td,{children:"Delete a company"}),(0,n.jsx)(r.td,{children:"204 No Content, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Nexuses"})}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/nexuses"})}),(0,n.jsx)(r.td,{children:"Retrieve a list of nexuses"}),(0,n.jsx)(r.td,{children:"200 OK, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"POST"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/nexuses"})}),(0,n.jsx)(r.td,{children:"Create a new nexus"}),(0,n.jsx)(r.td,{children:"201 Created, 400 Bad Request, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"GET"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/nexuses/:id"})}),(0,n.jsx)(r.td,{children:"Retrieve a single nexus"}),(0,n.jsx)(r.td,{children:"200 OK, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"PUT"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/nexuses/:id"})}),(0,n.jsx)(r.td,{children:"Update an existing nexus"}),(0,n.jsx)(r.td,{children:"200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"DELETE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/nexuses/:id"})}),(0,n.jsx)(r.td,{children:"Delete a nexus"}),(0,n.jsx)(r.td,{children:"204 No Content, 404 Not Found, 500 Internal Server Error"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"status-codes",children:"Status Codes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Status Code"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"200 OK"})}),(0,n.jsx)(r.td,{children:"The request was successful."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"201 Created"})}),(0,n.jsx)(r.td,{children:"The resource was created successfully."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"204 No Content"})}),(0,n.jsx)(r.td,{children:"The resource was deleted successfully."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"400 Bad Request"})}),(0,n.jsx)(r.td,{children:"The request was invalid or cannot be served."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"404 Not Found"})}),(0,n.jsx)(r.td,{children:"The requested resource could not be found."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"500 Internal Server Error"})}),(0,n.jsx)(r.td,{children:"An error occurred on the server."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"503 Service Unavailable"})}),(0,n.jsx)(r.td,{children:"The server is currently unavailable (overloaded or down)."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"detailed-status-code-descriptions",children:"Detailed Status Code Descriptions"}),"\n",(0,n.jsx)(r.h3,{id:"http-200-ok",children:"HTTP 200 OK"}),"\n",(0,n.jsx)(r.p,{children:"The request was successfully processed by the server. The response will contain the requested data."}),"\n",(0,n.jsx)(r.h3,{id:"http-201-created",children:"HTTP 201 Created"}),"\n",(0,n.jsx)(r.p,{children:"The request was successful and resulted in the creation of a new resource. The response will include a location header pointing to the new resource."}),"\n",(0,n.jsx)(r.h3,{id:"http-204-no-content",children:"HTTP 204 No Content"}),"\n",(0,n.jsx)(r.p,{children:"The request was successful, but there is no content to send in the response. This is typically used for successful deletions."}),"\n",(0,n.jsx)(r.h3,{id:"http-400-bad-request",children:"HTTP 400 Bad Request"}),"\n",(0,n.jsx)(r.p,{children:"The server could not understand the request due to invalid syntax. The client should not repeat the request without modifications."}),"\n",(0,n.jsx)(r.h3,{id:"http-404-not-found",children:"HTTP 404 Not Found"}),"\n",(0,n.jsx)(r.p,{children:"The server can not find the requested resource. This can also be returned when the server does not want to reveal exactly why the request has been refused, or no other response is applicable."}),"\n",(0,n.jsx)(r.h3,{id:"http-500-internal-server-error",children:"HTTP 500 Internal Server Error"}),"\n",(0,n.jsx)(r.p,{children:"The server encountered an unexpected condition that prevented it from fulfilling the request. This is a generic error message for unexpected conditions."}),"\n",(0,n.jsx)(r.h3,{id:"http-503-service-unavailable",children:"HTTP 503 Service Unavailable"}),"\n",(0,n.jsx)(r.p,{children:"An HTTP 503 response from our servers indicates there is an unexpected spike in API access traffic. The server is usually operational within the next five minutes. If the outage persists or you receive any other form of an HTTP 5XX error, contact support."}),"\n",(0,n.jsx)(r.h2,{id:"need-some-help",children:"Need Some Help?"}),"\n",(0,n.jsx)(r.p,{children:"If you have questions or need help, refer to the following resources:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tutorials"}),": ",(0,n.jsx)(r.a,{href:"https://www.youtube.com/@scalarhub",children:"ScalarHub YouTube Channel"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"FAQ Page"}),": ",(0,n.jsx)(r.a,{href:"https://scalarhub.ai/faqs/",children:"ScalarHub FAQ Page"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Help & Support"}),": ",(0,n.jsx)(r.a,{href:"https://scalarhub.ai/scalarhub-support-center/",children:"ScalarHub Help & Support Page"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Discussion Forum & Blogs"}),": ",(0,n.jsx)(r.a,{href:"https://scalarhub.ai/blogs/",children:"ScalarHub Blogs"})]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Developer Forum"}),": Visit our ",(0,n.jsx)(r.a,{href:"https://scalarhub.ai/blogs/",children:"developer forum"})," to review topics, ask questions, and learn from others."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Libraries and Code Examples"}),": [Link to libraries and code examples]"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Making a Request"}),": [Link to resources on making a request]"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"This documentation provides a clear and structured overview of the ScalarTax API, making it easier for developers to integrate and interact with the service."}),"\n",(0,n.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,n.jsx)(d.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,n.jsx)(l(),{className:"openapi-tabs__security-schemes",children:(0,n.jsx)(c.default,{label:"HTTP: Bearer Auth",value:"bearerAuth",children:(0,n.jsx)("div",{children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Security Scheme Type:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"http"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"HTTP Authorization Scheme:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"bearer"})})]})]})})})})})]}),"\n",(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,n.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,n.jsx)(r.p,{children:"Contact"})}),(0,n.jsx)("span",{children:(0,n.jsxs)(r.p,{children:["API Support: ",(0,n.jsx)(r.a,{href:"mailto:support@example.com",children:"support@example.com"})]})}),(0,n.jsx)("span",{children:(0,n.jsxs)(r.p,{children:["URL: ",(0,n.jsx)(r.a,{href:"mailto:http://example.com/supportt",children:"http://example.com/supportt"})]})})]}),"\n",(0,n.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,n.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,n.jsx)(r.p,{children:"Terms of Service"})}),(0,n.jsx)("a",{href:"http://example.com/terms/",children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"http://example.com/terms/",children:"http://example.com/terms/"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},69016:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const s=n(t(96540)),d=n(t(4213));r.default=function(e){let{url:r,proxy:t}=e;return s.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},s.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),s.default.createElement("ul",{className:"export-dropdown dropdown__menu"},s.default.createElement("li",null,s.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let r;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(r=e.substring(e.lastIndexOf("/")+1)),d.default.saveAs(e,r||"openapi.txt")})(`${r}`)},className:"dropdown__link",href:`${r}`},"OpenAPI Spec"))))}},43905:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const s=n(t(96540)),d=t(42214),i=n(t(86025)),l=n(t(15626));r.default=function(e){const{colorMode:r}=(0,d.useColorMode)(),{logo:t,darkLogo:n}=e,c=()=>"dark"===r?n?.altText??t?.altText:t?.altText,o=(0,i.default)(t?.url),a=(0,i.default)(n?.url);return t&&n?s.default.createElement(l.default,{alt:c(),sources:{light:o,dark:a},className:"openapi__logo"}):t||n?s.default.createElement(l.default,{alt:c(),sources:{light:o??a,dark:o??a},className:"openapi__logo"}):void 0}},4213:function(e,r,t){var n,s,d,i=t(96763);s=[],void 0===(d="function"==typeof(n=function(){"use strict";function r(e,r){return void 0===r?r={autoBom:!1}:"object"!=typeof r&&(i.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,r,t){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){o(n.response,r,t)},n.onerror=function(){i.error("could not download file")},n.send()}function s(e){var r=new XMLHttpRequest;r.open("HEAD",e,!1);try{r.send()}catch(e){}return 200<=r.status&&299>=r.status}function d(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(r)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t.g&&t.g.global===t.g?t.g:void 0,c=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,r,t){var i=l.URL||l.webkitURL,c=document.createElement("a");r=r||e.name||"download",c.download=r,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?d(c):s(c.href)?n(e,r,t):d(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){d(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,t,i){if(t=t||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(r(e,i),t);else if(s(e))n(e,t,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){d(l)}))}}:function(e,r,t,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof e)return n(e,r,t);var d="application/octet-stream"===e.type,i=/constructor/i.test(l.HTMLElement)||l.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||d&&i||c)&&"undefined"!=typeof FileReader){var a=new FileReader;a.onloadend=function(){var e=a.result;e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=e:location=e,s=null},a.readAsDataURL(e)}else{var h=l.URL||l.webkitURL,x=h.createObjectURL(e);s?s.location=x:location.href=x,s=null,setTimeout((function(){h.revokeObjectURL(x)}),4e4)}});l.saveAs=o.saveAs=o,e.exports=o})?n.apply(r,s):n)||(e.exports=d)}}]);