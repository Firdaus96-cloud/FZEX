(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{8541:function(e,t,n){Promise.resolve().then(n.bind(n,7015))},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return a}});let a=n(9920)._(n(2265)).default.createContext(null)},7015:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(7437),l=n(998),s=n(6648),i=n(2265);function r(){let[e,t]=(0,i.useState)(""),[n,r]=(0,i.useState)(""),[o,u]=(0,i.useState)(!1);async function c(t){t.preventDefault(),u(!0),await (0,l.signIn)("credentials",{email:e,password:n,callbackUrl:"/"}),u(!1)}return(0,a.jsxs)("section",{className:"mt-8",children:[(0,a.jsx)("h1",{className:"text-center text-primary text-4xl mb-4",children:"Login"}),(0,a.jsxs)("form",{className:"max-w-xs mx-auto",onSubmit:c,children:[(0,a.jsx)("input",{type:"email",name:"email",placeholder:"email",value:e,disabled:o,onChange:e=>t(e.target.value)}),(0,a.jsx)("input",{type:"password",name:"password",placeholder:"password",value:n,disabled:o,onChange:e=>r(e.target.value)}),(0,a.jsx)("button",{disabled:o,type:"submit",children:"Login"}),(0,a.jsx)("div",{className:"my-4 text-center text-gray-500",children:"or login with provider"}),(0,a.jsxs)("button",{type:"button",onClick:()=>(0,l.signIn)("google",{callbackUrl:"/"}),className:"flex gap-4 justify-center",children:[(0,a.jsx)(s.default,{src:"/google.png",alt:"",width:24,height:24}),"Login with google"]})]})]})}}},function(e){e.O(0,[648,998,971,23,744],function(){return e(e.s=8541)}),_N_E=e.O()}]);