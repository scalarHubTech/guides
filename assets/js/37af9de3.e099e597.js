"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[4767],{41236:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>y,default:()=>E,frontMatter:()=>v,metadata:()=>b,toc:()=>M});var i=a(74848),t=a(28453),r=a(91366),n=a.n(r),d=(a(6050),a(57742)),c=a.n(d),m=(a(67792),a(27362)),l=a.n(m),o=a(36683),p=a.n(o),h=a(81124),u=a.n(h),x=a(60674),g=a.n(x),f=a(23397),j=a.n(f),q=a(51107),_=(a(77675),a(19365));const v={id:"update-customer",title:"Update Customer",description:"This endpoint allows you to update the details of a specific customer.",sidebar_label:"Update Customer",hide_title:!0,hide_table_of_contents:!0,api:"eJztWm1v2zYQ/isEP7WAYydGi27+tLRJgWBDGzTJPjQIjLN0jtlJpEpSiV3D/304ibKoF7+sibMB074spU4P7468u+fOWnIL94aPbvmH1FgVozb8rsdDNIEWiRVK8hG/ngnDUIaJEtIyiCL1aNhCpcwqliYhWGR2hixECyIyTE0ZMJNgIKYiYIHD7fMe1/g9RWPfq3DBR0seKGlRWvoTkiQSAdCGg2+Gdl1yE8wwBvrLLhLkI64m3zCwvMcTrRLUVqChpyL0ZIzVQt7zugk3UnxPkYkQpRVTgZpNlc60LvTjqx4v/h5LiHE36PUMGUmSxXUonFvUEqLxGnMfNc/dWzsVVdJCYPfC3GJ6jkKAEIYajXkioEMhQAvzMc4xzl4aGws2NR70RKkIQTawL2RI1wANE1WfshkYBszCnK1hK0cWqHCPI7uQzsEk3upaiDIJi3v54rSQ3nViFuYJLPa8BtdO2AMljAiMHVsN0kCQSzaBpkrHYPmIU1geWRFjA/2M1AUZMnpa3F3CZj6279sIJhiZ3Xr/kckxMEYFAiyG7FHYWUtsJMqkGsc/lMQ9YM+dPCP5tmALNNJu48liL/denBUgqUHNHmeKOYQGcp7enoKcOdbBbFQc7E+e5bWI0ViIE/Y4Q1mNmEcwhV2+KQfby7e0kgKLtHDgTO5lnyKdRULiyW7Mj0Iby0i4OL4NWMPdWFcYKBm2gbFXKhOC6HV29sIudsN9EHaxRSn31m4L0yha6+FkVj1OeXmPrHlFYi1a/BDJnnn368VlnnKbIIFKpdX7uCIXbIM4QBgVznqBKPK3qgbRqqz1B+dBJRnYj/188pnPzzGJU2d4mTYdEHsVgGQTZDKN8mjBGES01eW5RKN20Oraw011k5mSexh7SWJMpvEEdQvKFObj/OEeoQjzzUAFscshdvKERZIdwdpr2L/v9xiRqAcRphD12PvUCInGvD5YuXF7v0S18bZqxkmFcR46Wjbz0H9GE9YFtI0zNTbB6RQDKx5wHG7I23s49rwAYaGX1Zt7rcm7RjDtZLMK/CWT2+KiA9y+yiYvcQebG9Zv4irvc4XGkPpqEfJ6Y7mhO6y0dZVEuqGdqnc/teal2nS0tA9Nht/g5nVuXWfElVOteLyF/5W1rB6tdzW3WZ0iJWfQEKOlocTodunqUu5RQeeTgJ3xXnNQUBKcGuQdrZhESZMngeHxMf2veuqff++zYhrCbhxzv0qDAI2ZplG06DtLutlFN7voZhfd7KKbXXSzi2520c0uutlFN7voZhfd7KKbXXSzi2528b+ZXZA0xEmUXepaG14eWXtTXT732+Jy1a9I5Wp7g+o1prXO0sOrdIgVxLLFK5ebXVt249yFa/RYvrXVNsmzs9rvlA9q7Ur5oOYnLxJ9ZfyA8dfbmHyNYjfd7fiyt2tGeJuCBYctnzhaWi6URNM/bMcbn8fKKtOq37zKHSJSwpRm5Unl5KQUd6zCSzYeQWje13pqeqIdjUq4IVzq5aR65PX0/0zqrfIU+aZtavgeQvYl/76JZzJvmjKflGUfVSrD/nq+6AomWHZVfDF1ccbkWvApo0YvLaHWio5vvW+pCi+sGg6bGt/IRCsafMIkQnYurbCLPvsTIhFmWrAM2DAVBKnWGLIwJdfmY4TMic9qQf6lmqNSic9rhWFCPpBe2TCZDHrbdkzrIdoV6geI2HnmGBKP0c4U3Y4kzRgXzZZHfGACiEBbmA+Km2gGSxGuKNRRPxSz6VRTEM2sTcxoMIBE9J3u/UDFg4eTJivXKkyzpMpyHL7q+TCjwWC5nIDBcaqj1WrQHFipAKL1u3c9Tu78Un5hd176rnbp/70SRUP4g1an4fHwzdHxu6Phr9cnb0dvT0bDX/rH706+vly1qqSULepUUswWubb61X4A/6Vq9rxeqNa3qvVbq12jytFo8zcvMp9e757d0kYF3BC9O+rh1iu1uT4+szkr+qVuqrLcLixlI36VJdRrmDeHZEWCZaeXF+xMBWmM0oLj+5Rqc7mT/nH/mLdxHnrvKk0SpTNG7ydTPx2bXMT69CdfqtwNOgzUsfk8pWIhAmxHy2QG2UBGGRuD9BTKfz5c/5xYN9n7Bvr5vrJ2N9Ti3A6SCETWwGa+WLqqdsvXVc27UdTkjKh+9vhMGUtieQW6oQJEy99TpDC/vevxB9CCOEFW/EKR8YOQj6YQGdxi5Ksvrr18zTZp6hZBLujQIUrpX7zH/8JF/uPv6m7V4zOEkAL0dukefMj3OKK5kvdig29Qlc3fOA0CTOxW2TuPFlzeXPMen7hv1+M8B2p4pO/a4THXMR+SZzk6W1vyCOR9Cvckm0PSf38Dysqa9g==",sidebar_class_name:"put api-method",info_path:"reference/api-reference/Endpoints/Customers/scalartax",custom_edit_url:null},y=void 0,b={id:"Endpoints/customers/update-customer",title:"Update Customer",description:"This endpoint allows you to update the details of a specific customer.",source:"@site/docs/Endpoints/customers/update-customer.api.mdx",sourceDirName:"Endpoints/customers",slug:"/Endpoints/customers/update-customer",permalink:"/reference/Endpoints/customers/update-customer",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-customer",title:"Update Customer",description:"This endpoint allows you to update the details of a specific customer.",sidebar_label:"Update Customer",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"put api-method",info_path:"reference/api-reference/Endpoints/Customers/scalartax",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Fetch Customer",permalink:"/reference/Endpoints/customers/fetch-customer"},next:{title:"Delete Customer",permalink:"/reference/Endpoints/customers/delete-customer"}},N={},M=[];function I(e){const s={p:"p",...(0,t.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(q.default,{as:"h1",className:"openapi__heading",children:"Update Customer"}),"\n",(0,i.jsx)(c(),{method:"put",path:"/scalartax/customers/{id}",context:"endpoint"}),"\n",(0,i.jsx)(s.p,{children:"This endpoint allows you to update the details of a specific customer."}),"\n",(0,i.jsx)(q.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,enumDescriptions:[]}})})})]}),"\n",(0,i.jsx)(l(),{className:"openapi-tabs__mime",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"customer_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"external_customer_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"External identifier for the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"contact_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"tax_exemption_status",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Indicates if the customer has a tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"customer_code",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Internal code for the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"alternate_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Alternate identifier for the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"taxpayer_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Taxpayer identifier"}}),(0,i.jsx)(g(),{collapsible:!1,name:"last_transaction",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Date and time of the last transaction"}}),(0,i.jsx)(g(),{collapsible:!1,name:"customer_labels",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Labels associated with the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"exposure_zones",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Exposure zone of the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_by_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the user who created the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_by_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the user who last updated the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the customer was created"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the customer was last updated"}}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"external_address"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_line1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First line of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_line2",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Second line of the address (optional)"}}),(0,i.jsx)(g(),{collapsible:!1,name:"city",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"City of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_string",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Full address string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"State of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"zip_code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ZIP code of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"country",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Country of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the address was created"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the address was last updated"}})]})]})}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"contact"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Address ID of the contact (can be null)"}}),(0,i.jsx)(g(),{collapsible:!1,name:"email",required:!1,schemaName:"email",qualifierMessage:void 0,schema:{type:"string",format:"email",description:"Email address of the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"phone",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Phone number of the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"fax_number",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fax number of the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"contact_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Type of contact (e.g., Individual, Business)"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the contact was created"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the contact was last updated"}})]})]})}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"tax_exemption"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"customer_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the customer associated with the tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"effective_date",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Effective date of the tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"exemption_reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Reason for the tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the tax exemption was created"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the tax exemption was last updated"}})]})]})})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(_.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK. Customer Updated Successfully."})}),(0,i.jsx)("div",{children:(0,i.jsx)(l(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"customer_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"external_customer_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"External identifier for the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"contact_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"tax_exemption_status",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Indicates if the customer has a tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"customer_code",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Internal code for the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"alternate_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Alternate identifier for the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"taxpayer_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Taxpayer identifier"}}),(0,i.jsx)(g(),{collapsible:!1,name:"last_transaction",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Date and time of the last transaction"}}),(0,i.jsx)(g(),{collapsible:!1,name:"customer_labels",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Labels associated with the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"exposure_zones",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Exposure zone of the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_by_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the user who created the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_by_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the user who last updated the customer"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the customer was created"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the customer was last updated"}}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"external_address"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_line1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First line of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_line2",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Second line of the address (optional)"}}),(0,i.jsx)(g(),{collapsible:!1,name:"city",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"City of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_string",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Full address string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"State of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"zip_code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ZIP code of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"country",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Country of the address"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the address was created"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the address was last updated"}})]})]})}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"contact"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"address_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Address ID of the contact (can be null)"}}),(0,i.jsx)(g(),{collapsible:!1,name:"email",required:!1,schemaName:"email",qualifierMessage:void 0,schema:{type:"string",format:"email",description:"Email address of the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"phone",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Phone number of the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"fax_number",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fax number of the contact"}}),(0,i.jsx)(g(),{collapsible:!1,name:"contact_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Type of contact (e.g., Individual, Business)"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the contact was created"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the contact was last updated"}})]})]})}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"tax_exemption"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"customer_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the customer associated with the tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"effective_date",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Effective date of the tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"exemption_reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Reason for the tax exemption"}}),(0,i.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the tax exemption was created"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp when the tax exemption was last updated"}})]})]})})]})]})}),(0,i.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "customer_name": "string",\n  "external_customer_id": "string",\n  "contact_id": "string",\n  "address_id": "string",\n  "tax_exemption_status": "boolean",\n  "customer_code": "string",\n  "alternate_id": "string",\n  "taxpayer_id": "string",\n  "last_transaction": "datetime",\n  "customer_labels": "string",\n  "exposure_zones": "string",\n  "created_by_id": "string",\n  "updated_by_id": "string",\n  "id": "string",\n  "created_at": "datetime",\n  "updated_at": "datetime",\n  "external_address": {\n    "address_line1": "string",\n    "address_line2": "string",\n    "city": "string",\n    "address_string": "string",\n    "state": "string",\n    "zip_code": "string",\n    "country": "string",\n    "id": "string",\n    "created_at": "datetime",\n    "updated_at": "datetime"\n  },\n  "contact": {\n    "name": "string",\n    "address_id": "null or string",\n    "email": "string",\n    "phone": "string",\n    "fax_number": "string",\n    "contact_type": "string",\n    "id": "string",\n    "created_at": "datetime",\n    "updated_at": "datetime"\n  },\n  "tax_exemption": {\n    "customer_id": "string",\n    "effective_date": "datetime",\n    "exemption_reason": "string",\n    "id": "string",\n    "created_at": "datetime",\n    "updated_at": "datetime"\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(_.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(_.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Not Found.Customer with that Specific ID not Found."})}),(0,i.jsx)("div",{children:(0,i.jsx)(l(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"object"})})})]})}),(0,i.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "error": "Customer Not Found."\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(_.default,{label:"422",value:"422",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unprocessable Entity. Validation errors occurred during the update."})}),(0,i.jsx)("div",{children:(0,i.jsx)(l(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"object"})})})]})}),(0,i.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "errors": [\n    "Contact phone number is invalid"\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(_.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Serval Error"})}),(0,i.jsx)("div",{})]})]})})})]})}function E(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(I,{...e})}):I(e)}}}]);