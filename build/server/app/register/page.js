(()=>{var e={};e.id=11,e.ids=[11],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},61575:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(59775),r(2590),r(35866);var s=r(23191),a=r(88716),n=r(37922),i=r.n(n),l=r(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,59775)),"/home/uumparcelcentre.com.my/firdausfauzi/src/app/register/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2590)),"/home/uumparcelcentre.com.my/firdausfauzi/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/uumparcelcentre.com.my/firdausfauzi/src/app/register/page.js"],u="/register/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},17113:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},59936:(e,t,r)=>{Promise.resolve().then(r.bind(r,40381)),Promise.resolve().then(r.bind(r,49620)),Promise.resolve().then(r.bind(r,87145))},87870:(e,t,r)=>{Promise.resolve().then(r.bind(r,6477))},6477:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(10326),a=r(77109),n=r(46226),i=r(90434),l=r(17577);function o(){let[e,t]=(0,l.useState)(""),[r,o]=(0,l.useState)(""),[c,d]=(0,l.useState)(!1),[u,m]=(0,l.useState)(!1),[x,p]=(0,l.useState)(!1);async function h(t){t.preventDefault(),d(!0),p(!1),m(!1),(await fetch("/api/register",{method:"POST",body:JSON.stringify({email:e,password:r}),headers:{"Content-Type":"application/json"}})).ok?m(!0):p(!0),d(!1)}return(0,s.jsxs)("section",{className:"mt-8",children:[s.jsx("h1",{className:"text-center text-primary text-4xl mb-4",children:"Register"}),u&&(0,s.jsxs)("div",{className:"my-4 text-center",children:["User created.",s.jsx("br",{}),"Now you can"," ",s.jsx(i.default,{className:"underline",href:"/login",children:"Login \xbb"})]}),x&&(0,s.jsxs)("div",{className:"my-4 text-center",children:["An error has occurred.",s.jsx("br",{}),"Please try again later"]}),(0,s.jsxs)("form",{className:"block max-w-xs mx-auto",onSubmit:h,children:[s.jsx("input",{type:"email",placeholder:"email",value:e,disabled:c,onChange:e=>t(e.target.value)}),s.jsx("input",{type:"password",placeholder:"password",value:r,disabled:c,onChange:e=>o(e.target.value)}),s.jsx("button",{type:"submit",disabled:c,children:"Register"}),s.jsx("div",{className:"my-4 text-center text-gray-500",children:"or login with provider"}),(0,s.jsxs)("button",{onClick:()=>(0,a.signIn)("google",{callbackUrl:"/"}),className:"flex gap-4 justify-center",children:[s.jsx(n.default,{src:"/google.png",alt:"",width:24,height:24}),"Login with google"]}),(0,s.jsxs)("div",{className:"text-center my-4 text-gray-500 border-t pt-4",children:["Existing account?"," ",s.jsx(i.default,{className:"underline",href:"/login",children:"Login here \xbb"})]})]})]})}},49620:(e,t,r)=>{"use strict";r.d(t,{A:()=>l,AppProvider:()=>c,B:()=>o});var s=r(10326),a=r(77109),n=r(17577),i=r(40381);let l=(0,n.createContext)({});function o(e){let t=e.basePrice;if(e.size&&(t+=e.size.price),e.extras?.length>0)for(let r of e.extras)t+=r.price;return t}function c({children:e}){let[t,r]=(0,n.useState)([]);return s.jsx(a.SessionProvider,{children:s.jsx(l.Provider,{value:{cartProducts:t,setCartProducts:r,addToCart:function(e,t=null,s=[]){r(r=>[...r,{...e,size:t,extras:s}])},removeCartProduct:function(e){r(t=>t.filter((t,r)=>r!==e)),i.ZP.success("Product removed")},clearCart:function(){r([])}},children:e})})}},87145:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(10326),a=r(49620);function n({className:e="w-6 h-6"}){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"})})}function i({className:e="w-6 h-6"}){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})})}var l=r(77109),o=r(90434),c=r(17577);function d({status:e,userName:t}){return"authenticated"===e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.default,{href:"/profile",className:"whitespace-nowrap",children:["Hello, ",t]}),s.jsx("button",{onClick:()=>(0,l.signOut)(),className:"bg-primary rounded-full text-white px-8 py-2",children:"Logout"})]}):"unauthenticated"===e?(0,s.jsxs)(s.Fragment,{children:[s.jsx(o.default,{href:"/login",children:"Login"}),s.jsx(o.default,{href:"/register",className:"bg-primary rounded-full text-white px-8 py-2",children:"Register"})]}):void 0}function u(){let e=(0,l.useSession)(),t=e?.status,r=e.data?.user,u=r?.name||r?.email,{cartProducts:m}=(0,c.useContext)(a.A),[x,p]=(0,c.useState)(!1);return u&&u.includes(" ")&&(u=u.split(" ")[0]),(0,s.jsxs)("header",{children:[(0,s.jsxs)("div",{className:"flex items-center md:hidden justify-between",children:[s.jsx(o.default,{className:"text-primary font-semibold text-2xl",href:"/",children:"ST PIZZA"}),(0,s.jsxs)("div",{className:"flex gap-8 items-center",children:[(0,s.jsxs)(o.default,{href:"/cart",className:"relative",children:[s.jsx(i,{}),m?.length>0&&s.jsx("span",{className:"absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3",children:m.length})]}),s.jsx("button",{className:"p-1 border",onClick:()=>p(e=>!e),children:s.jsx(n,{})})]})]}),x&&(0,s.jsxs)("div",{onClick:()=>p(!1),className:"md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center",children:[s.jsx(o.default,{href:"/",children:"Home"}),s.jsx(o.default,{href:"/menu",children:"Menu"}),s.jsx(o.default,{href:"/#about",children:"About"}),s.jsx(o.default,{href:"/#contact",children:"Contact"}),s.jsx(d,{status:t,userName:u})]}),(0,s.jsxs)("div",{className:"hidden md:flex items-center justify-between",children:[(0,s.jsxs)("nav",{className:"flex items-center gap-8 text-gray-500 font-semibold",children:[s.jsx(o.default,{className:"text-primary font-semibold text-2xl",href:"/",children:"ST PIZZA"}),s.jsx(o.default,{href:"/",children:"Home"}),s.jsx(o.default,{href:"/menu",children:"Menu"}),s.jsx(o.default,{href:"/#about",children:"About"}),s.jsx(o.default,{href:"/#contact",children:"Contact"})]}),(0,s.jsxs)("nav",{className:"flex items-center gap-4 text-gray-500 font-semibold",children:[s.jsx(d,{status:t,userName:u}),(0,s.jsxs)(o.default,{href:"/cart",className:"relative",children:[s.jsx(i,{}),m?.length>0&&s.jsx("span",{className:"absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3",children:m.length})]})]})]})]})}},2590:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,metadata:()=>x});var s=r(19510),a=r(1269),n=r.n(a),i=r(68570);let l=(0,i.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/components/AppContext.js`),{__esModule:o,$$typeof:c}=l;l.default,(0,i.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/components/AppContext.js#CartContext`),(0,i.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/components/AppContext.js#cartProductPrice`);let d=(0,i.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/components/AppContext.js#AppProvider`);var u=r(49407);r(5023);var m=r(19125);let x={title:"Create Next App",description:"Generated by create next app"};function p({children:e}){return s.jsx("html",{lang:"en",className:"scroll-smooth",children:s.jsx("body",{className:n().className,children:s.jsx("main",{className:"max-w-4xl mx-auto p-4",children:(0,s.jsxs)(d,{children:[s.jsx(m.x7,{}),s.jsx(u.ZP,{}),e,s.jsx("footer",{className:"border-t p-8 text-center text-gray-500 mt-16",children:"\xa9 2023 All rights reserved"})]})})})})}},59775:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var s=r(68570);let a=(0,s.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/app/register/page.js`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,s.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/app/register/page.js#default`)},49407:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>l});var s=r(68570);let a=(0,s.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/components/layout/Header.js`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,s.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/components/layout/Header.js#default`)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,109,621,226],()=>r(61575));module.exports=s})();