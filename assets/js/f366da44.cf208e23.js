"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[4499],{80225:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>S,contentTitle:()=>b,default:()=>g,frontMatter:()=>v,metadata:()=>E,toc:()=>I});var a=t(74848),n=t(28453),i=t(91366),l=t.n(i),r=(t(6050),t(57742)),d=t.n(r),o=(t(67792),t(27362)),c=t.n(o),p=t(36683),u=t.n(p),m=t(81124),x=t.n(m),h=(t(60674),t(23397)),j=t.n(h),f=t(51107),_=(t(77675),t(19365));const v={id:"delete-s-l-nexus",title:"Delete S_l_Nexus",description:"This endpoint is used to delete a specific nexus for a tenant.",sidebar_label:"Delete S_l_Nexus",hide_title:!0,hide_table_of_contents:!0,api:"eJylVEFu2zAQ/AqxpxYQLKdILzw1qF0gaJAEdXoyDIOh1hFTimTIpWtD0N+LlVTbidteqpNEDYezO7NsgdRTArmExdqub3GXEyZYFVBh0tEEMt6BhIfaJIGuCt44EiaJnLAS5EWFFgmFEimgNhujhWMOsfFRKEHolKMJFBBUVA0SRj6rBacaBAmmggIMHxAU1VBA0jU2CmQLtA+MSBSNe4KugIgv2USsQFLM2K14JQXvWK9s4cN0CvJUtbz7OhGfcyLfYBx1ViJlrTGlTbZ2DwVcTi958+tibz2JLz67aiIOTRE/DdWCahSL34Vez4Q7IKEA7R2hI+ZTIVijFfOVz4lJ2/PS/OMzaoICcKeaYJF/YYw+gjyaIY5ioOOngI9c6VvN144wOmXFAuMWo5j3RAxvkGpf9b3hFvReUA0SyqSVVZHUrkxru3aD92Vrqo6d6HkGt3K0IKEmCkmWpQpmMkqeaN+U2wt4G5f76Kus+UMMPNAVpzSyLNv2USVc52i7rjwjuPFa2cPeFYdk4/veGeJOwaLX/qB2Z1tPciyu7q/FzOvcoKPeDSiAqxqQF5PpZDoap3Rv3JhL3rfIIfjI/rzSfVp5GiC9h40yjBqXPp3AOLyEsUl3GzbHaPwzW48pGR18oka5E0GzYcwOtb2tuj2m7/9ndcwn4Y7KYJVxrKlvQjtmZwmH7HBUjumBAqSp+P6ofSIGDj5/Z5t5+SVj3INcrgrYqmjUI7u5bKEyid8rkBtlE/6jvHffxovgvfib1nFROR7xrbKZv6CAH7gfLp1u1RVQo6ow9qcPP660xkAnW87GmJN4mKfZ/Gb+MIeu+wWV0c83",sidebar_class_name:"delete api-method",info_path:"reference/api-reference/Endpoints/S_l_Nexuses/scalartax",custom_edit_url:null},b=void 0,E={id:"Endpoints/s_l_nexuses/delete-s-l-nexus",title:"Delete S_l_Nexus",description:"This endpoint is used to delete a specific nexus for a tenant.",source:"@site/docs/Endpoints/s_l_nexuses/delete-s-l-nexus.api.mdx",sourceDirName:"Endpoints/s_l_nexuses",slug:"/Endpoints/s_l_nexuses/delete-s-l-nexus",permalink:"/guides/reference/Endpoints/s_l_nexuses/delete-s-l-nexus",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-s-l-nexus",title:"Delete S_l_Nexus",description:"This endpoint is used to delete a specific nexus for a tenant.",sidebar_label:"Delete S_l_Nexus",hide_title:!0,hide_table_of_contents:!0,api:"eJylVEFu2zAQ/AqxpxYQLKdILzw1qF0gaJAEdXoyDIOh1hFTimTIpWtD0N+LlVTbidteqpNEDYezO7NsgdRTArmExdqub3GXEyZYFVBh0tEEMt6BhIfaJIGuCt44EiaJnLAS5EWFFgmFEimgNhujhWMOsfFRKEHolKMJFBBUVA0SRj6rBacaBAmmggIMHxAU1VBA0jU2CmQLtA+MSBSNe4KugIgv2USsQFLM2K14JQXvWK9s4cN0CvJUtbz7OhGfcyLfYBx1ViJlrTGlTbZ2DwVcTi958+tibz2JLz67aiIOTRE/DdWCahSL34Vez4Q7IKEA7R2hI+ZTIVijFfOVz4lJ2/PS/OMzaoICcKeaYJF/YYw+gjyaIY5ioOOngI9c6VvN144wOmXFAuMWo5j3RAxvkGpf9b3hFvReUA0SyqSVVZHUrkxru3aD92Vrqo6d6HkGt3K0IKEmCkmWpQpmMkqeaN+U2wt4G5f76Kus+UMMPNAVpzSyLNv2USVc52i7rjwjuPFa2cPeFYdk4/veGeJOwaLX/qB2Z1tPciyu7q/FzOvcoKPeDSiAqxqQF5PpZDoap3Rv3JhL3rfIIfjI/rzSfVp5GiC9h40yjBqXPp3AOLyEsUl3GzbHaPwzW48pGR18oka5E0GzYcwOtb2tuj2m7/9ndcwn4Y7KYJVxrKlvQjtmZwmH7HBUjumBAqSp+P6ofSIGDj5/Z5t5+SVj3INcrgrYqmjUI7u5bKEyid8rkBtlE/6jvHffxovgvfib1nFROR7xrbKZv6CAH7gfLp1u1RVQo6ow9qcPP660xkAnW87GmJN4mKfZ/Gb+MIeu+wWV0c83",sidebar_class_name:"delete api-method",info_path:"reference/api-reference/Endpoints/S_l_Nexuses/scalartax",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Update S_l_Nexus",permalink:"/guides/reference/Endpoints/s_l_nexuses/update-s-l-nexus"},next:{title:"Products",permalink:"/guides/reference/Endpoints/products/"}},S={},I=[];function N(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Delete S_l_Nexus"}),"\n",(0,a.jsx)(d(),{method:"delete",path:"/scalartax/s_l_nexuses/{id}",context:"endpoint"}),"\n",(0,a.jsx)(s.p,{children:"This endpoint is used to delete a specific nexus for a tenant."}),"\n",(0,a.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsxs)(t,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(u(),{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,enumDescriptions:[]}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsxs)(l(),{label:void 0,id:void 0,children:[(0,a.jsxs)(_.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}),(0,a.jsxs)(_.default,{label:"404",value:"404",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Not Found. S_l_Nexus with the Specific ID not Found."})}),(0,a.jsx)("div",{children:(0,a.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(t,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"object"})})})]})}),(0,a.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(x(),{responseExample:'{\n  "error": "S_l_Nexus Not Found."\n}',language:"json"})})]})})})})]}),(0,a.jsxs)(_.default,{label:"500",value:"500",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Internal Server Error"})}),(0,a.jsx)("div",{})]})]})})})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(N,{...e})}):N(e)}}}]);