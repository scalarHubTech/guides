"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[3928],{41315:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>b,default:()=>L,frontMatter:()=>_,metadata:()=>N,toc:()=>C});var t=s(74848),n=s(28453),i=s(91366),c=s.n(i),r=(s(6050),s(57742)),l=s.n(r),d=(s(67792),s(27362)),o=s.n(d),m=s(36683),p=s.n(m),u=s(81124),h=s.n(u),x=s(60674),j=s.n(x),f=s(23397),v=s.n(f),y=s(51107),g=(s(77675),s(19365));const _={id:"fetch-account",title:"Fetch Account",description:"This endpoint retrieves the details of a specific scalartax account.",sidebar_label:"Fetch Account",hide_title:!0,hide_table_of_contents:!0,api:"eJytVkuP2zYQ/ivEnBJAsJwivejULZItti2aoN4iB8MwxtTYYiqRCjlybRj+78VQD0uxd5uk8cUS5+M37xmdgHEXIFvCndausRxglUBOQXtTs3EWMngsTFBk89oZy8oTe0N7CooLUjkxmjIot1WoQk3abI1WQWOJnvGgsGWdQQI1eqyIyYu6E1isCDIwOSRgRE2NXEACQRdUIWQn4GMtiMDe2B2cE/D0qTGecsjYN3ReyUmonQ0UBP/DfC5/U+Pf/Sa6tbNMlkWMdV0ajSJOPwbBnK51us1H0ixGe1eTZ9Nq0K6q0R7Xre2fW3gdN1KClOBIrLrb4kkXlnVg5CZ8GVWL7ck6BvWCZrtZou40mz0l6sFifHopWppA/stN7dFq6/xYhTBtjQ/8FW5H/MR5YRemEr+KSOA3eahCU97i2DpfIUPWIW6RRonCPPcUwpR4UmXLacKv0jaK8CREYy97S1cJHKoSsr7PIAE2XNLkhA5Y1WUMjcnHTnXNMryHZjM4tZ5CtSdkyteb42eCps5vC2i7pVg0awFABvLH5pbHT5jw3wZLA3rUvEatqWa0+pa2AcXkK2Njkz4He87yC8jmN8SB/N5oWsd2eUpRD3qC4iomG1OWxu7W+qhLuiXAKmY6g41zJaH9pnz1N2KVj+zpL0zPz/GXwOv56+vp+Idjde8am89UV4XqH8OF4gJZLfpx/vBG2QH4f6bpqL7Je+cvxa8ulkBn8I+3xvmDZem4Ui3I77FUb4VmFvu2Ii6cBGpHcXLLOskgHXZR2tVySE8mP3fZ7bdR46U3C+Y6ZGmKtZl1ts60q9L9q6s58t67vNHyoloeOCdjmixNT6cNBlo3vjyf0yuC353Gcri7EnN04w0foz0/E3ryd434sFyNxQuJbruOxqAh2KK8X6PyvokgqcH4cN+Px18/PMawGbt18Xo3jRYxXo94uLK4/0JQd+8f1Bunm4osx9RDAhLJFvZqNp/NuypBHaukmwZyb9HUtfOSoEmsxtEOLYSH2ZlBd/TTCCZLQMZEeLddtG16my1iUkHXLnCFdmTQPbEu1GX+Tvw9Xer8e30CdSliOnBal2hs3NI+7rG2XpcwXLxMX9k0mcllhxQusKDa2vpLSkuOPzXkpXBWCezRG9xIKpcnyE2Q5xyyLZaBnvHwxZ/d2nupnjK0O5RPGFFTNvIGCfxNx/ZD7rw6J1AQ5uSj9lZwFyf+6MrVzJDyHrr3l7dSl/8CXgyt4Q==",sidebar_class_name:"get api-method",info_path:"reference//Endpoints/Accounts/scalartax",custom_edit_url:null},b=void 0,N={id:"Endpoints/accounts/fetch-account",title:"Fetch Account",description:"This endpoint retrieves the details of a specific scalartax account.",source:"@site/docs/Endpoints/accounts/fetch-account.api.mdx",sourceDirName:"Endpoints/accounts",slug:"/Endpoints/accounts/fetch-account",permalink:"/reference/Endpoints/accounts/fetch-account",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"fetch-account",title:"Fetch Account",description:"This endpoint retrieves the details of a specific scalartax account.",sidebar_label:"Fetch Account",hide_title:!0,hide_table_of_contents:!0,api:"eJytVkuP2zYQ/ivEnBJAsJwivejULZItti2aoN4iB8MwxtTYYiqRCjlybRj+78VQD0uxd5uk8cUS5+M37xmdgHEXIFvCndausRxglUBOQXtTs3EWMngsTFBk89oZy8oTe0N7CooLUjkxmjIot1WoQk3abI1WQWOJnvGgsGWdQQI1eqyIyYu6E1isCDIwOSRgRE2NXEACQRdUIWQn4GMtiMDe2B2cE/D0qTGecsjYN3ReyUmonQ0UBP/DfC5/U+Pf/Sa6tbNMlkWMdV0ajSJOPwbBnK51us1H0ixGe1eTZ9Nq0K6q0R7Xre2fW3gdN1KClOBIrLrb4kkXlnVg5CZ8GVWL7ck6BvWCZrtZou40mz0l6sFifHopWppA/stN7dFq6/xYhTBtjQ/8FW5H/MR5YRemEr+KSOA3eahCU97i2DpfIUPWIW6RRonCPPcUwpR4UmXLacKv0jaK8CREYy97S1cJHKoSsr7PIAE2XNLkhA5Y1WUMjcnHTnXNMryHZjM4tZ5CtSdkyteb42eCps5vC2i7pVg0awFABvLH5pbHT5jw3wZLA3rUvEatqWa0+pa2AcXkK2Njkz4He87yC8jmN8SB/N5oWsd2eUpRD3qC4iomG1OWxu7W+qhLuiXAKmY6g41zJaH9pnz1N2KVj+zpL0zPz/GXwOv56+vp+Idjde8am89UV4XqH8OF4gJZLfpx/vBG2QH4f6bpqL7Je+cvxa8ulkBn8I+3xvmDZem4Ui3I77FUb4VmFvu2Ii6cBGpHcXLLOskgHXZR2tVySE8mP3fZ7bdR46U3C+Y6ZGmKtZl1ts60q9L9q6s58t67vNHyoloeOCdjmixNT6cNBlo3vjyf0yuC353Gcri7EnN04w0foz0/E3ryd434sFyNxQuJbruOxqAh2KK8X6PyvokgqcH4cN+Px18/PMawGbt18Xo3jRYxXo94uLK4/0JQd+8f1Bunm4osx9RDAhLJFvZqNp/NuypBHaukmwZyb9HUtfOSoEmsxtEOLYSH2ZlBd/TTCCZLQMZEeLddtG16my1iUkHXLnCFdmTQPbEu1GX+Tvw9Xer8e30CdSliOnBal2hs3NI+7rG2XpcwXLxMX9k0mcllhxQusKDa2vpLSkuOPzXkpXBWCezRG9xIKpcnyE2Q5xyyLZaBnvHwxZ/d2nupnjK0O5RPGFFTNvIGCfxNx/ZD7rw6J1AQ5uSj9lZwFyf+6MrVzJDyHrr3l7dSl/8CXgyt4Q==",sidebar_class_name:"get api-method",info_path:"reference//Endpoints/Accounts/scalartax",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"List Accounts",permalink:"/reference/Endpoints/accounts/list-accounts"},next:{title:"Users",permalink:"/reference/Endpoints/users/"}},k={},C=[];function E(e){const a={p:"p",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Fetch Account"}),"\n",(0,t.jsx)(l(),{method:"get",path:"/scalartax/accounts/{id}",context:"endpoint"}),"\n",(0,t.jsx)(a.p,{children:"This endpoint retrieves the details of a specific scalartax account."}),"\n",(0,t.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(p(),{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,enumDescriptions:[]}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(c(),{label:void 0,id:void 0,children:[(0,t.jsxs)(g.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"OK."})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(j(),{collapsible:!1,name:"company_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the company"}}),(0,t.jsx)(j(),{collapsible:!1,name:"account_status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The status of the account (e.g., Active, Inactive)"}}),(0,t.jsx)(j(),{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The username for the account"}}),(0,t.jsx)(j(),{collapsible:!1,name:"first_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The first name of the user"}}),(0,t.jsx)(j(),{collapsible:!1,name:"last_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The last name of the user"}}),(0,t.jsx)(j(),{collapsible:!1,name:"email",required:!0,schemaName:"email",qualifierMessage:void 0,schema:{type:"string",format:"email",description:"The email address of the user"}})]})]})}),(0,t.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:'{\n  "id": "string",\n  "name": "string",\n  "subscription_id": "string",\n  "created_by_id": "string",\n  "updated_by_id": "string",\n  "effective_date": "datetime",\n  "account_status": "string",\n  "subscription": {\n    "id": "string",\n    "name": "string",\n    "contract_acceptance_date": "datetime",\n    "contract_termination_date": "datetime",\n    "contract_effective_date": "datetime",\n    "contract_end_date": "datetime",\n    "service_activation_date": "datetime",\n    "service_end_date": "datetime",\n    "status": "string",\n    "billing_cycle": "string",\n    "billing_amount": "boolean",\n    "created_by_id": "string",\n    "updated_by_id": "string",\n    "created_at": "datetime",\n    "updated_at": "datetime"\n  }\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(g.default,{label:"404",value:"404",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Not Found. Account with that Specific ID not Found."})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(a.p,{children:"object"})})})]})}),(0,t.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:'{\n  "error": "Account Not Found."\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(g.default,{label:"500",value:"500",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Internal Serval Error."})}),(0,t.jsx)("div",{})]})]})})})]})}function L(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(E,{...e})}):E(e)}}}]);