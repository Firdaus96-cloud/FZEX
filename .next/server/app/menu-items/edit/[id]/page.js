(()=>{var e={};e.id=394,e.ids=[394],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},10180:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>l}),s(86289),s(2590),s(35866);var i=s(23191),r=s(88716),n=s(37922),a=s.n(n),o=s(95231),u={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);s.d(t,u);let l=["",{children:["menu-items",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,86289)),"/home/uumparcelcentre.com.my/firdausfauzi/src/app/menu-items/edit/[id]/page.js"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2590)),"/home/uumparcelcentre.com.my/firdausfauzi/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/uumparcelcentre.com.my/firdausfauzi/src/app/menu-items/edit/[id]/page.js"],c="/menu-items/edit/[id]/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/menu-items/edit/[id]/page",pathname:"/menu-items/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},14485:(e,t,s)=>{Promise.resolve().then(s.bind(s,11480))},11480:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var i=s(10326),r=s(78842),n=s(17552);s(23355);var a=s(63558),o=s(4749),u=s(60515),l=s(90434),d=s(35047),c=s(17577),m=s(40381);function p(){let{id:e}=(0,d.useParams)(),[t,s]=(0,c.useState)(null),[p,x]=(0,c.useState)(!1),{loading:h,data:f}=(0,u.U)();async function g(t,s){t.preventDefault(),s={...s,_id:e};let i=new Promise(async(e,t)=>{(await fetch("/api/menu-items",{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})).ok?e():t()});await m.ZP.promise(i,{loading:"Saving this tasty item",success:"Saved",error:"Error"}),x(!0)}async function y(){let t=new Promise(async(t,s)=>{(await fetch("/api/menu-items?_id="+e,{method:"DELETE"})).ok?t():s()});await m.ZP.promise(t,{loading:"Deleting...",success:"Deleted",error:"Error"}),x(!0)}return p?(0,d.redirect)("/menu-items"):h?"Loading user info...":f.admin?(0,i.jsxs)("section",{className:"mt-8",children:[i.jsx(o.Z,{isAdmin:!0}),i.jsx("div",{className:"max-w-2xl mx-auto mt-8",children:(0,i.jsxs)(l.default,{href:"/menu-items",className:"button",children:[i.jsx(n.Z,{}),i.jsx("span",{children:"Show all menu items"})]})}),i.jsx(a.Z,{menuItem:t,onSubmit:g}),i.jsx("div",{className:"max-w-md mx-auto mt-2",children:i.jsx("div",{className:"max-w-xs ml-auto pl-4",children:i.jsx(r.Z,{label:"Delete this menu item",onDelete:y})})})]}):"Not an admin."}},78842:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var i=s(10326),r=s(17577);function n({label:e,onDelete:t}){let[s,n]=(0,r.useState)(!1);return s?i.jsx("div",{className:"fixed bg-black/80 inset-0 flex items-center h-full justify-center",children:(0,i.jsxs)("div",{className:"bg-white p-4 rounded-lg",children:[i.jsx("div",{children:"Are you sure you want to delete?"}),(0,i.jsxs)("div",{className:"flex gap-2 mt-1",children:[i.jsx("button",{type:"button",onClick:()=>n(!1),children:"Cancel"}),i.jsx("button",{onClick:()=>{t(),n(!1)},type:"button",className:"primary",children:"Yes,\xa0delete!"})]})]})}):i.jsx("button",{type:"button",onClick:()=>n(!0),children:e})}},86289:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>o});var i=s(68570);let r=(0,i.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/app/menu-items/edit/[id]/page.js`),{__esModule:n,$$typeof:a}=r;r.default;let o=(0,i.createProxy)(String.raw`/home/uumparcelcentre.com.my/firdausfauzi/src/app/menu-items/edit/[id]/page.js#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[948,109,621,226,867],()=>s(10180));module.exports=i})();