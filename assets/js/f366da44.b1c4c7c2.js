"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[4499],{20071:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>h,frontMatter:()=>b,metadata:()=>n,toc:()=>k});const n=JSON.parse('{"id":"Endpoints/s_l_nexuses/delete-s-l-nexus","title":"Delete S_l_Nexus","description":"This endpoint is used to delete a specific nexus for a tenant.","source":"@site/docs/Endpoints/s_l_nexuses/delete-s-l-nexus.api.mdx","sourceDirName":"Endpoints/s_l_nexuses","slug":"/Endpoints/s_l_nexuses/delete-s-l-nexus","permalink":"/reference/Endpoints/s_l_nexuses/delete-s-l-nexus","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-s-l-nexus","title":"Delete S_l_Nexus","description":"This endpoint is used to delete a specific nexus for a tenant.","sidebar_label":"Delete S_l_Nexus","hide_title":true,"hide_table_of_contents":true,"api":"eJylVMFuEzEQ/RVrTiCtsimUi08UkkqFqiASxKGqIsc76bp4bdcel0Sr/Xc0u9skbYELe/Laz89v5j27BVK3CeQ1LFZ2dYXbnDDBTQEVJh1NIOMdSFjWJgl0VfDGkTBJ5ISVIC8qtEgolEgBtdkYLRxziI2PQglCpxxNoICgomqQMPJZLTjVIEgwFRRg+ICgqIYCkq6xUSBboF1gRKJo3C10BUS8zyZiBZJixu6GZ1LwjvXKFt5MpyCPVcsvnyfiY07kG4yjzkqkrDWmtMnW7qCA0+kpb35a7JUnce6zqyZi3xTxy1AtqEaxeCz0YibcHgkFaO8IHTGfCsEarZivvEtM2r4sza/vUBMUgFvVBIu8hDH6CPJghjiIgY6/At5xpc81XzjC6JQVC4wPGMW8J2J4g1T7qu8Nt6D3gmqQUCatrIqktmVa2ZUbvC9bU3XsRM8zuJWjBQk1UZBlab1WtvaJ5Nvp9GQkqfPaeHiemkuGioEJ2LGEOkdDuwX3YvDtA6qI8SyzpH1r+KjHNPD/ugdBMQ7OfWwUgYRPP5Z9jcZtfL/dEPcRFr2opdq+kHSUcnH29ULMvM4NOuq9ggK45gF5MplOpqOtSve2jqnlfYscgo/s3pPmjFZOtG/KNEB6hxtlGDVOvT+CcbQJY5O+bNg6o/HPbD2mZHTwiRrljgTNhku4r+151e0hm/9/k0eLCLdUBquMY019E9oxWdewTxabeMgWFCBNxa8L54eBbbtWCb9H23U8fZ8x7kBe3xTwoKJRa3bzuoXKJB5XIDfKJvxHea++jc/Ea/E3reOkcvwAPCib+Q8K+Im74UnqbroCalQVxv70YeFMawx0tOXFJeeE72/bbH45X86h634DcSvYUw==","sidebar_class_name":"delete api-method","info_path":"reference//Endpoints/S_l_Nexuses/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Update S_l_Nexus","permalink":"/reference/Endpoints/s_l_nexuses/update-s-l-nexus"},"next":{"title":"Products","permalink":"/reference/Endpoints/products/"}}');var i=s(74848),a=s(28453),l=s(57742),d=s.n(l),o=s(78178),r=s.n(o),u=s(19624),c=s.n(u),p=s(96226),x=s.n(p),_=(s(77675),s(19365),s(51107));const b={id:"delete-s-l-nexus",title:"Delete S_l_Nexus",description:"This endpoint is used to delete a specific nexus for a tenant.",sidebar_label:"Delete S_l_Nexus",hide_title:!0,hide_table_of_contents:!0,api:"eJylVMFuEzEQ/RVrTiCtsimUi08UkkqFqiASxKGqIsc76bp4bdcel0Sr/Xc0u9skbYELe/Laz89v5j27BVK3CeQ1LFZ2dYXbnDDBTQEVJh1NIOMdSFjWJgl0VfDGkTBJ5ISVIC8qtEgolEgBtdkYLRxziI2PQglCpxxNoICgomqQMPJZLTjVIEgwFRRg+ICgqIYCkq6xUSBboF1gRKJo3C10BUS8zyZiBZJixu6GZ1LwjvXKFt5MpyCPVcsvnyfiY07kG4yjzkqkrDWmtMnW7qCA0+kpb35a7JUnce6zqyZi3xTxy1AtqEaxeCz0YibcHgkFaO8IHTGfCsEarZivvEtM2r4sza/vUBMUgFvVBIu8hDH6CPJghjiIgY6/At5xpc81XzjC6JQVC4wPGMW8J2J4g1T7qu8Nt6D3gmqQUCatrIqktmVa2ZUbvC9bU3XsRM8zuJWjBQk1UZBlab1WtvaJ5Nvp9GQkqfPaeHiemkuGioEJ2LGEOkdDuwX3YvDtA6qI8SyzpH1r+KjHNPD/ugdBMQ7OfWwUgYRPP5Z9jcZtfL/dEPcRFr2opdq+kHSUcnH29ULMvM4NOuq9ggK45gF5MplOpqOtSve2jqnlfYscgo/s3pPmjFZOtG/KNEB6hxtlGDVOvT+CcbQJY5O+bNg6o/HPbD2mZHTwiRrljgTNhku4r+151e0hm/9/k0eLCLdUBquMY019E9oxWdewTxabeMgWFCBNxa8L54eBbbtWCb9H23U8fZ8x7kBe3xTwoKJRa3bzuoXKJB5XIDfKJvxHea++jc/Ea/E3reOkcvwAPCib+Q8K+Im74UnqbroCalQVxv70YeFMawx0tOXFJeeE72/bbH45X86h634DcSvYUw==",sidebar_class_name:"delete api-method",info_path:"reference//Endpoints/S_l_Nexuses/scalartax",custom_edit_url:null},g=void 0,f={},k=[];function C(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default,{as:"h1",className:"openapi__heading",children:"Delete S_l_Nexus"}),"\n",(0,i.jsx)(d(),{method:"delete",path:"/scalartax/s_l_nexuses/{id}",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"This endpoint is used to delete a specific nexus for a tenant."}),"\n",(0,i.jsx)(_.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(r(),{parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0}]}),"\n",(0,i.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(x(),{id:void 0,label:void 0,responses:{200:"description:OK. Customer deleted successfully",404:{description:"Not Found. S_l_Nexus with the Specific ID not Found.",content:{"application/json":{schema:{type:"object",example:{error:"S_l_Nexus Not Found."}}}}},500:{description:"Internal Server Error"}}})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}}}]);