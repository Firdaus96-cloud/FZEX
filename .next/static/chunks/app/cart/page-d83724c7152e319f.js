(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{3921:function(e,t,n){Promise.resolve().then(n.bind(n,5229))},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext(null)},5229:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7437),s=n(6425);n(3550);var i=n(7998),a=n(2363),l=n(3479),c=n(8497);n(6648);var o=n(2265),d=n(8726);function u(){let{cartProducts:e,removeCartProduct:t}=(0,o.useContext)(s.A),[n,u]=(0,o.useState)({}),{data:h}=(0,c.U)();(0,o.useEffect)(()=>{window.location.href.includes("canceled=1")&&d.ZP.error("Payment failed \uD83D\uDE14")},[]),(0,o.useEffect)(()=>{if(null==h?void 0:h.city){let{phone:e,streetAddress:t,city:n,postalCode:r,country:s}=h;u({phone:e,streetAddress:t,city:n,postalCode:r,country:s})}},[h]);let x=0;for(let t of e)x+=(0,s.B)(t);async function f(t){t.preventDefault();let r=new Promise((t,r)=>{fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:n,cartProducts:e})}).then(async e=>{e.ok?(t(),window.location=await e.json()):r()})});await d.ZP.promise(r,{loading:"Preparing your order...",success:"Redirecting to payment...",error:"Something went wrong... Please try again later"})}return(null==e?void 0:e.length)===0?(0,r.jsxs)("section",{className:"mt-8 text-center",children:[(0,r.jsx)(a.Z,{mainHeader:"Cart"}),(0,r.jsx)("p",{className:"mt-4",children:"Your shopping cart is empty \uD83D\uDE14"})]}):(0,r.jsxs)("section",{className:"mt-8",children:[(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(a.Z,{mainHeader:"Cart"})}),(0,r.jsxs)("div",{className:"mt-8 grid gap-8 grid-cols-2",children:[(0,r.jsxs)("div",{children:[(null==e?void 0:e.length)===0&&(0,r.jsx)("div",{children:"No products in your shopping cart"}),(null==e?void 0:e.length)>0&&e.map((e,n)=>(0,r.jsx)(l.Z,{product:e,onRemove:t},n)),(0,r.jsxs)("div",{className:"py-2 pr-16 flex justify-end items-center",children:[(0,r.jsxs)("div",{className:"text-gray-500",children:["Subtotal:",(0,r.jsx)("br",{}),"Delivery:",(0,r.jsx)("br",{}),"Total:"]}),(0,r.jsxs)("div",{className:"font-semibold pl-2 text-right",children:["$",x,(0,r.jsx)("br",{}),"$5",(0,r.jsx)("br",{}),"$",x+5]})]})]}),(0,r.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg",children:[(0,r.jsx)("h2",{children:"Checkout"}),(0,r.jsxs)("form",{onSubmit:f,children:[(0,r.jsx)(i.Z,{addressProps:n,setAddressProp:function(e,t){u(n=>({...n,[e]:t}))}}),(0,r.jsxs)("button",{type:"submit",children:["Pay $",x+5]})]})]})]})]})}},6425:function(e,t,n){"use strict";n.d(t,{A:function(){return l},AppProvider:function(){return o},B:function(){return c}});var r=n(7437),s=n(998),i=n(2265),a=n(8726);let l=(0,i.createContext)({});function c(e){var t;let n=e.basePrice;if(e.size&&(n+=e.size.price),(null===(t=e.extras)||void 0===t?void 0:t.length)>0)for(let t of e.extras)n+=t.price;return n}function o(e){let{children:t}=e,[n,c]=(0,i.useState)([]),o=window.localStorage;function d(e){o&&o.setItem("cart",JSON.stringify(e))}return(0,i.useEffect)(()=>{o&&o.getItem("cart")&&c(JSON.parse(o.getItem("cart")))},[]),(0,r.jsx)(s.SessionProvider,{children:(0,r.jsx)(l.Provider,{value:{cartProducts:n,setCartProducts:c,addToCart:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];c(r=>{let s=[...r,{...e,size:t,extras:n}];return d(s),s})},removeCartProduct:function(e){c(t=>{let n=t.filter((t,n)=>n!==e);return d(n),n}),a.ZP.success("Product removed")},clearCart:function(){c([]),d([])}},children:t})})}},8497:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var r=n(2265);function s(){let[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{s(!0),fetch("/api/profile").then(e=>{e.json().then(e=>{t(e),s(!1)})})},[]),{loading:n,data:e}}},3550:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function s(e){let{className:t="w-6 h-6"}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}},7998:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function s(e){let{addressProps:t,setAddressProp:n,disabled:s=!1}=e,{phone:i,streetAddress:a,postalCode:l,city:c,country:o}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("label",{children:"Phone"}),(0,r.jsx)("input",{disabled:s,type:"tel",placeholder:"Phone number",value:i||"",onChange:e=>n("phone",e.target.value)}),(0,r.jsx)("label",{children:"Street address"}),(0,r.jsx)("input",{disabled:s,type:"text",placeholder:"Street address",value:a||"",onChange:e=>n("streetAddress",e.target.value)}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Postal code"}),(0,r.jsx)("input",{disabled:s,type:"text",placeholder:"Postal code",value:l||"",onChange:e=>n("postalCode",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"City"}),(0,r.jsx)("input",{disabled:s,type:"text",placeholder:"City",value:c||"",onChange:e=>n("city",e.target.value)})]})]}),(0,r.jsx)("label",{children:"Country"}),(0,r.jsx)("input",{disabled:s,type:"text",placeholder:"Country",value:o||"",onChange:e=>n("country",e.target.value)})]})}},2363:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function s(e){let{subHeader:t,mainHeader:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"uppercase text-gray-500 font-semibold leading-4",children:t}),(0,r.jsx)("h2",{className:"text-primary font-bold text-4xl italic",children:n})]})}},3479:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7437),s=n(6425),i=n(3550),a=n(6648);function l(e){var t;let{product:n,onRemove:l}=e;return(0,r.jsxs)("div",{className:"flex items-center gap-4 border-b py-4",children:[(0,r.jsx)("div",{className:"w-24",children:(0,r.jsx)(a.default,{width:240,height:240,src:n.image,alt:""})}),(0,r.jsxs)("div",{className:"grow",children:[(0,r.jsx)("h3",{className:"font-semibold",children:n.name}),n.size&&(0,r.jsxs)("div",{className:"text-sm",children:["Size: ",(0,r.jsx)("span",{children:n.size.name})]}),(null===(t=n.extras)||void 0===t?void 0:t.length)>0&&(0,r.jsx)("div",{className:"text-sm text-gray-500",children:n.extras.map(e=>(0,r.jsxs)("div",{children:[e.name," $",e.price]},e.name))})]}),(0,r.jsxs)("div",{className:"text-lg font-semibold",children:["$",(0,s.B)(n)]}),!!l&&(0,r.jsx)("div",{className:"ml-2",children:(0,r.jsx)("button",{type:"button",onClick:()=>l(index),className:"p-2",children:(0,r.jsx)(i.Z,{})})})]})}}},function(e){e.O(0,[648,726,998,971,23,744],function(){return e(e.s=3921)}),_N_E=e.O()}]);