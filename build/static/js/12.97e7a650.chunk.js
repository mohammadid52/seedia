(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[12],{394:function(e,a,t){"use strict";t.r(a);var s=t(16),r=t(15),l=t(1),c=t(28),n=t(94),i=t(27),o=t(6),m=t(97),d=t(98),x=t(2);a.default=function(){var e=Object(o.f)(),a=Object(l.useState)(!0),t=Object(r.a)(a,2),j=t[0],b=t[1],u=Object(m.a)({email:"",password:"",firstName:"",lastName:""},{email:"",password:""}),h=u.fields,f=u.onChange,p=u.errors,g=u.setErrors;setTimeout((function(){b(!0)}),1e3);var O=function(){(function(){var e=!0,a=function(e){return h[e].trim().length};return a("email")<=0?(e=!1,p.email="Please add email field"):(e=!0,p.email=""),/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(h.email)?(e=!0,p.email=""):(e=!1,p.email="Please enter a valid email address"),a("password")<6?(e=!1,p.password="Password must be atleast six characters long"):(e=!0,p.password=""),g(Object(s.a)({},p)),e})()&&e.push("/account/personal/edit-profile/company")};return j?Object(x.jsxs)("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8",children:[Object(x.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col ",children:[Object(x.jsx)("img",{className:"mx-auto h-32 w-auto",src:"/logo.png",alt:"Workflow"}),Object(x.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create new account"}),Object(x.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Discover the benefits of selling and ",Object(x.jsx)("br",{}),"networking with your profile"]})]}),Object(x.jsxs)("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(x.jsx)("div",{className:"bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10",children:Object(x.jsxs)("form",{onSubmit:O,className:"space-y-6",children:[Object(x.jsxs)("div",{className:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",children:[Object(x.jsx)(d.a,{gridClass:"sm:col-span-3",label:"First name",id:"firstName",name:"firstName",onChange:f,value:h.firstName}),Object(x.jsx)(d.a,{gridClass:"sm:col-span-3",label:"Last name",id:"lastName",name:"lastName",onChange:f,value:h.lastName})]}),Object(x.jsx)(d.a,{label:"Email",id:"email",name:"email",onChange:f,required:!0,type:"email",error:p.email,value:h.email}),Object(x.jsx)(d.a,{label:"Password",id:"password",name:"password",onChange:f,type:"password",error:p.password,required:!0,value:h.password}),Object(x.jsxs)("p",{className:"my-4 text-left text-xs text-gray-600",children:["By clicking Agree and Join, you agree to 13RMS"," ",Object(x.jsx)("a",{href:"#/",className:"font-medium text-xs text-blue-600 hover:text-blue-500",children:"User Agreement, Privacy Policy"})," ","and"," ",Object(x.jsx)("a",{href:"#/",className:"font-medium text-xs text-blue-600 hover:text-blue-500",children:"Cookie Policy"})]}),Object(x.jsx)("div",{children:Object(x.jsx)(i.a,{onClick:O,fullWidth:!0,rounded:"rounded-lg",gradient:!0,label:"Agree and become a member"})})]})}),Object(x.jsxs)("div",{className:"mt-4 text-center",children:["Already on 13RMS?",Object(x.jsxs)("a",{href:"/login",className:"link-hover",children:[" ","Login now"]})]})]}),Object(x.jsx)(n.a,{})]}):Object(x.jsx)(c.a,{})}},94:function(e,a,t){"use strict";var s=t(2),r=[{name:"Accessibility",href:"#/"},{name:"User Agreement",href:"#/"},{name:"Privacy & Policy",href:"#/"},{name:"Cookies",href:"#/"}];a.a=function(){var e=(new Date).getFullYear();return Object(s.jsx)("footer",{className:"",children:Object(s.jsxs)("div",{className:"max-w-7xl mx-auto pt-16 px-4 overflow-hidden sm:px-6 lg:px-8",children:[Object(s.jsx)("nav",{className:"-mx-5 lg:flex md:flex sm:grid sm:place-content-center sm:grid-cols-1 flex-wrap justify-center","aria-label":"Footer",children:r.map((function(e){return Object(s.jsx)("div",{className:"text-center px-5 py-2",children:Object(s.jsx)("a",{href:e.href,className:"text-base text-gray-500 hover:text-gray-900",children:e.name})},e.name)}))}),Object(s.jsxs)("p",{className:"mt-8 text-center text-base text-gray-400",children:["\xa9 ",e," Workflow, Inc. All rights reserved."]})]})})}},97:function(e,a,t){"use strict";var s=t(44),r=t(16),l=t(15),c=t(1);a.a=function(e,a){var t=Object(c.useState)(e),n=Object(l.a)(t,2),i=n[0],o=n[1],m=Object(c.useState)(a),d=Object(l.a)(m,2),x=d[0],j=d[1];return{fields:i,setFields:o,onChange:function(e){var a=e.target,t=a.id,l=a.value;o(Object(r.a)(Object(r.a)({},i),{},Object(s.a)({},t,l))),j(Object(r.a)(Object(r.a)({},x),{},Object(s.a)({},t,"")))},errors:x,setErrors:j}}},98:function(e,a,t){"use strict";t(1);var s=t(95),r=t(2);a.a=function(e){var a=e.label,t=e.id,l=e.name,c=e.type,n=void 0===c?"text":c,i=e.placeholder,o=e.error,m=e.value,d=e.onChange,x=e.gridClass,j=e.required;return Object(r.jsxs)("div",{className:x,children:[Object(r.jsxs)("label",{htmlFor:l,className:"block text-sm font-medium text-gray-700",children:[a," ",j&&Object(r.jsx)("span",{className:"text-red-500 font-medium text-base",children:"*"})]}),Object(r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(r.jsx)("input",{type:n,name:l,id:t,className:"block border w-full pr-10 ".concat(o?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"focus:ring-yellow-500 focus:border-yellow-500 border-gray-300"," sm:text-sm rounded-md"),placeholder:i,value:m,required:j,onChange:d,"aria-invalid":"true","aria-describedby":"email-error"}),o&&Object(r.jsx)("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:Object(r.jsx)(s.c,{className:"h-5 w-5 text-red-500","aria-hidden":"true"})})]}),o&&Object(r.jsx)("p",{className:"mt-2 text-sm text-red-600",id:"".concat(l||t,"-error"),children:o})]})}}}]);
//# sourceMappingURL=12.97e7a650.chunk.js.map