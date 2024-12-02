"use strict";(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[9298],{77353:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>_,contentTitle:()=>g,default:()=>j,frontMatter:()=>y,metadata:()=>i,toc:()=>f});const i=JSON.parse('{"id":"Endpoints/products/list-products","title":"List Products","description":"This endpoint retrieves the details of all products.","source":"@site/docs/Endpoints/products/list-products.api.mdx","sourceDirName":"Endpoints/products","slug":"/Endpoints/products/list-products","permalink":"/reference/Endpoints/products/list-products","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"list-products","title":"List Products","description":"This endpoint retrieves the details of all products.","sidebar_label":"List Products","hide_title":true,"hide_table_of_contents":true,"api":"eJy9VkuPGzcM/iuCTi0wsL1pe/Gpu80D2y6QoLtBDgvDoDW0R4lmNEtRGxuG/3tAzYw9HjtdtwHqi22K/PgQP4pbzbAKevqoP5DPo+GgZ5nOMRiyNVtf6al+KGxQWOW1txUrQiaLzxgUF6hyZLAuKL9U4JyqW5CRzjRhqH0VMOjpVr+aTOTrGPj9XzrTxleMFcsp1LWzBuR0/DmIylYHU2AJ8os3Neqp9ovPaFhnuiZfI7FtHHSee5pABBudactYhosR5sbn2NMOTLZa6dOioIqVfYqoxEAtPaWCtCh6NzB4Ce9aLcjiUvWkUtQBJMP60vhg3QQGIXhjgTFXXy0XQ8Qu6xX5WF+Wdmuikon6CUerUabQoWHylTUhU2AMhuDJYvhZnBhgXHnaXIbfaQ/y7zyVfmEdZspBzb5O+Fix5c3c5i87uH3dwTZGL9XHEMrZfPFv4WNAUl8Lr1qE41Sq6BwsHKbwY53/oA8HgVUL8w+OussGZrKLyPgDdNljzCsoLySMaA5vdY/T3e8f3nnK1A0wI23UnV02wR8cPoOLF3pMqkNynvq8cWC+ZOrqlSp8pDDwFyvLc7+clwgh0uXDgSXX1qjEivdx9Pz37kc+MjafoiXMZSYfjaRjJ71ZMCRxj299apy9/lnyyZadpNO+AWK2hrIW2eNWS08eMj0ek9+rwF58mFinEO3MORwc5sRB1uN2T/GYlYeDAZVOLYD1VIsO2xJ7BkP5Oap8txbH0iEzzp20LXzu6KTb/r+0d7PdrOnCX8+91zeQq7/xKWJIo/G3czq3FSNV4NQ90jOSekPkSQtkiVx4CW6FaZoAF3qqx8GAA2JYj7snfKwzHZJ1U/NITk91wVxPx2PnDbjCB57+MplctdZFXFh/0oN3oqoaJL2bCaiJZHlzLztFM8VuEAjpOkose1aLK4khqempXiQlnbU/3noqU93+/PSQMrPV0ifzlkb3KagHWJ+E1C1Z6vrDrXrtTZSxAC2hJeFG7Wo0GU3a3QhM2o3aVhK7+1jXnqSGR5VpKTsyvhyHRiUxuQQrWq3o955a2iiQyvB+KbdlDZ5HSzrj9ID4wCVUvYDubGC13x1Plp79dvdft8j2ShjXPK4d2Co9mJL3tm2hR71voQMlJRTZZKVTRGW7XUDAj+R2OxE/RZQp8zjL9DOQlQEs/3aZLhBypNR3X1AG0bUxWEshO8qebKnSWvvmfvdGeuIbNr74mg==","sidebar_class_name":"get api-method","info_path":"reference//Endpoints/Products/scalartax","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Create Product","permalink":"/reference/Endpoints/products/create-product"},"next":{"title":"Fetch Product","permalink":"/reference/Endpoints/products/fetch-product"}}');var o=r(74848),s=r(28453),d=r(57742),a=r.n(d),n=r(78178),p=r.n(n),c=r(19624),u=r.n(c),l=r(96226),h=r.n(l),b=(r(77675),r(19365),r(51107));const y={id:"list-products",title:"List Products",description:"This endpoint retrieves the details of all products.",sidebar_label:"List Products",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VkuPGzcM/iuCTi0wsL1pe/Gpu80D2y6QoLtBDgvDoDW0R4lmNEtRGxuG/3tAzYw9HjtdtwHqi22K/PgQP4pbzbAKevqoP5DPo+GgZ5nOMRiyNVtf6al+KGxQWOW1txUrQiaLzxgUF6hyZLAuKL9U4JyqW5CRzjRhqH0VMOjpVr+aTOTrGPj9XzrTxleMFcsp1LWzBuR0/DmIylYHU2AJ8os3Neqp9ovPaFhnuiZfI7FtHHSee5pABBudactYhosR5sbn2NMOTLZa6dOioIqVfYqoxEAtPaWCtCh6NzB4Ce9aLcjiUvWkUtQBJMP60vhg3QQGIXhjgTFXXy0XQ8Qu6xX5WF+Wdmuikon6CUerUabQoWHylTUhU2AMhuDJYvhZnBhgXHnaXIbfaQ/y7zyVfmEdZspBzb5O+Fix5c3c5i87uH3dwTZGL9XHEMrZfPFv4WNAUl8Lr1qE41Sq6BwsHKbwY53/oA8HgVUL8w+OussGZrKLyPgDdNljzCsoLySMaA5vdY/T3e8f3nnK1A0wI23UnV02wR8cPoOLF3pMqkNynvq8cWC+ZOrqlSp8pDDwFyvLc7+clwgh0uXDgSXX1qjEivdx9Pz37kc+MjafoiXMZSYfjaRjJ71ZMCRxj299apy9/lnyyZadpNO+AWK2hrIW2eNWS08eMj0ek9+rwF58mFinEO3MORwc5sRB1uN2T/GYlYeDAZVOLYD1VIsO2xJ7BkP5Oap8txbH0iEzzp20LXzu6KTb/r+0d7PdrOnCX8+91zeQq7/xKWJIo/G3czq3FSNV4NQ90jOSekPkSQtkiVx4CW6FaZoAF3qqx8GAA2JYj7snfKwzHZJ1U/NITk91wVxPx2PnDbjCB57+MplctdZFXFh/0oN3oqoaJL2bCaiJZHlzLztFM8VuEAjpOkose1aLK4khqempXiQlnbU/3noqU93+/PSQMrPV0ifzlkb3KagHWJ+E1C1Z6vrDrXrtTZSxAC2hJeFG7Wo0GU3a3QhM2o3aVhK7+1jXnqSGR5VpKTsyvhyHRiUxuQQrWq3o955a2iiQyvB+KbdlDZ5HSzrj9ID4wCVUvYDubGC13x1Plp79dvdft8j2ShjXPK4d2Co9mJL3tm2hR71voQMlJRTZZKVTRGW7XUDAj+R2OxE/RZQp8zjL9DOQlQEs/3aZLhBypNR3X1AG0bUxWEshO8qebKnSWvvmfvdGeuIbNr74mg==",sidebar_class_name:"get api-method",info_path:"reference//Endpoints/Products/scalartax",custom_edit_url:null},g=void 0,_={},f=[];function x(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"List Products"}),"\n",(0,o.jsx)(a(),{method:"get",path:"/scalartax/products/",context:"endpoint"}),"\n",(0,o.jsx)(e.p,{children:"This endpoint retrieves the details of all products."}),"\n",(0,o.jsx)(p(),{parameters:void 0}),"\n",(0,o.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{products:{type:"array",items:{type:"object",properties:{product_code:{type:"string",description:"The unique code for the product"},description:{type:"string",description:"A brief description of the product"},tax_code:{type:"string",description:"Tax code associated with the product"},product_group:{type:"string",description:"The product group (e.g., electronics, accessories)"},category:{type:"string",description:"The category of the product (e.g., mobile, laptop)"},entity_id:{type:"string",description:"ID of the entity associated with the product"},created_by_id:{type:"string",description:"ID of the user who created the product (nullable)"},updated_by_id:{type:"string",description:"ID of the user who last updated the product (nullable)"},product_attributes:{type:"array",items:{type:"object",properties:{attribute_name:{type:"string",description:"The name of the product attribute (e.g., Color, Battery Life)"},attribute_value:{type:"string",description:"The value for the product attribute (e.g., Black, 12 hours)"},attribute_unit_of_measure:{type:"string",description:"The unit of measurement for the attribute (nullable)"}}}}},required:["product_code","description","tax_code","product_group","category","entity_id","product_attributes"]}}},title:"Product",example:[{id:"string",product_code:"string",description:"string",tax_code:"string",product_group:"string",category:"string",entity_id:"string",created_by_id:"string",updated_by_id:"string",created_at:"datetime",updated_at:"datetime",product_attributes:[{id:"string",product_id:"string",attribute_name:"string",attribute_value:"string",attribute_unit_of_measure:"string",created_by_id:"string",updated_by_id:"string",created_at:"datetime",updated_at:"datetime"}]}]}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}}})]})}function j(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(x,{...t})}):x(t)}}}]);