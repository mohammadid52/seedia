(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[8],{442:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a.n(r),c=a(3),o=a(19),s=a(7),i=a(1),b=a(10),u=a(48),j=a(69),p=a(74),l=a(18),d=a(55),m=a(26),y=a(52),O=a(37),h=a(109),x=a(13),T=a(56),f=a(11),v=a(30),C=a(2);t.default=function(e){var t=e.user,a=Object(i.useState)(!0),r=Object(s.a)(a,1)[0],w=Object(m.g)(),S=Object(i.useState)(h.d),g=Object(s.a)(S,2),k=g[0],N=g[1],q=(null===t||void 0===t?void 0:t.company)||"";Object(i.useEffect)((function(){!Object(f.isEmpty)(q)&&q.jobTitle&&N({jobTitle:q.jobTitle,jobType:q.jobType,currentCompany:q.currentCompany})}),[q]);var E=Object(v.b)().setValues,P=function(){var e=Object(o.a)(n.a.mark((function e(a){var r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,r=Object(x.a)(),o=Object(c.a)(Object(c.a)({},t),{},{company:Object(c.a)(Object(c.a)({},t.company),{},{jobTitle:a.jobTitle,jobType:a.jobType,currentCompany:a.currentCompany,companyName:a.currentCompany}),other:Object(c.a)(Object(c.a)({},t.other),{},{accountFinishedStep:"company"})}),e.next=6,x.d.post("/user/update",Object(c.a)({},o),{headers:{Authorization:r}});case 6:delete o.password,E(Object(c.a)({},o)),w.push(l.a.PERSONAL_STEP_2),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:return e.prev=14,R(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),_=O.a({jobTitle:O.c().required("Please add your job title"),jobType:O.c().required("Please add your job type"),currentCompany:O.c().required("Please add your current company name")}),J=Object(i.useState)(!1),z=Object(s.a)(J,2),A=z[0],R=z[1];return r?Object(C.jsx)(d.a,{title:"Company Information",withButton:Object(C.jsx)(j.a,{text:"or create a student account",onClick:function(){return w.push(l.a.STUDENT_STEP_1)}}),subtitle:Object(C.jsxs)("p",{children:["Your profile helps you find new people and ",Object(C.jsx)("br",{})," oppurtunites"]}),children:Object(C.jsx)(T.a,{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:Object(C.jsx)("div",{className:"bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700  py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(C.jsx)(y.c,{initialValues:k,validationSchema:_,onSubmit:P,enableReinitialize:!0,children:Object(C.jsxs)(y.b,{className:"space-y-6",children:[Object(C.jsx)(u.a,{label:"Most recent job title",id:"jobTitle",name:"jobTitle",required:!0}),Object(C.jsx)(u.a,{label:"Job Type",id:"jobType",name:"jobType",required:!0}),Object(C.jsx)(u.a,{label:"Current Company",id:"currentCompany",name:"currentCompany",required:!0}),Object(C.jsx)("div",{children:Object(C.jsx)(b.a,{type:"submit",fullWidth:!0,rounded:"rounded-lg",gradient:!0,loading:A,label:"Next Step"})})]})})})})}):Object(C.jsx)(p.a,{})}}}]);
//# sourceMappingURL=8.1541e01e.chunk.js.map