(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[52],{512:function(e,t,r){"use strict";var a=r(28),i=r(2);t.a=function(e){var t=e.text,r=e.color,n=void 0===r?"blue":r,c=e.className,s=void 0===c?"":c;return Object(i.jsx)("div",{className:"rounded-md dark:bg-transparent dark:border-gray-700 border border-gray-50 bg-".concat(n,"-50 p-4 ").concat(s),children:Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("div",{className:"flex-shrink-0",children:Object(i.jsx)(a.e,{className:"h-5 w-5 dark:text-".concat(n,"-300 text-").concat(n,"-400"),"aria-hidden":"true"})}),Object(i.jsx)("div",{className:"ml-3 flex-1 md:flex md:justify-between",children:Object(i.jsx)("p",{className:"text-sm pb-0 mb-0 dark:text-".concat(n,"-300 text-").concat(n,"-700"),children:t})})]})})}},855:function(e,t,r){"use strict";r.r(t);var a=r(33),i=r.n(a),n=r(3),c=r(55),s=r(12),l=r(10),o=r(60),d=r(190),u=r(512),b=r(34),j=r(104),m=r(166),p=r(69),x=r(118),f=r(191),h=r(8),O=r(119),y=r(61),g=r(44),v=r(189),q=r(25),w=r(57),D=r(1),S=r(35),k=r(17),N=r(90),P=r(2);t.default=function(e){var t=e.userData,r=Object(v.a)(t).isBusiness;Object(D.useEffect)((function(){if(!r)return A.push(h.a.FEED)}),[r]);var a=N.a({title:N.c().required("Title is required").min(10).max(150),salary:N.a({min:N.c().required("Minimum Salary is required").matches(/^[0-9]+$/,"Must be only digits"),max:N.c().required("Maximum Salary is required").matches(/^[0-9]+$/,"Must be only digits")}),briefDescription:N.c().required("Brief Description is required"),website:N.c().required("Website Url is required").url("Invalid Url format"),closure:N.c().required("Closure is required")}),T=Object(y.b)().setNotification,A=Object(k.g)(),M=Object(S.useMutation)(o.b,{onSuccess:function(){A.push(h.a.FEED)}}),C=Object(S.useMutation)(o.d,{onSuccess:function(e){if(e){var r=e.data.data,a=r.name,i=r.id;T({show:!0,title:"You have successfully posted the project: ".concat(a),buttonText:"View",buttonUrl:h.a.viewProject(i)}),M.mutate({postData:{text:"".concat(t.fullName," added new project."),postType:"project",customInId:i}})}}}),E=C.mutate,z=C.isLoading,B=C.isError,J=C.error,F=[{name:"Full-time",id:"1"},{name:"Part-time",id:"2"}],I=[{title:"Responsibilities",content:"\u2022 Developing new user-facing features using React.js",id:Object(w.a)(9)},{title:"Skills",content:"\u2022 Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",id:Object(w.a)(9)}],U=Object(D.useState)(I),W=Object(l.a)(U,2),L=W[0],R=W[1],Y=Object(D.useState)(""),V=Object(l.a)(Y,2),$=V[0],G=V[1],H=function(e,t,r){Object(q.update)(L[r],e,(function(){return t})),R((function(e){return Object(s.a)(e)}))},K=function(){var e=Object(c.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.length<2?G("Atleast sections are required"):(G(""),r=Object(n.a)(Object(n.a)({},t),{},{salary:Object(n.a)(Object(n.a)({},t.salary),{},{duration:t.salary.duration[0].name}),sections:L}),E(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(O.a,{userData:t,children:[Object(P.jsx)(p.a,{pageTitle:"Add Project"}),Object(P.jsx)(f.a,{fontWeight:"font-bold mb-8",children:"Add Project"}),Object(P.jsx)(g.b,{initialValues:{title:"",functionType:[{name:"Part-time",id:"1"}],salary:{min:"",max:"",duration:""},briefDescription:"",website:"",closure:""},validationSchema:a,onSubmit:K,children:Object(P.jsxs)(g.a,{className:"space-y-8",children:[Object(P.jsx)(f.a,{size:"gradient-border border-b pb-2 text-lg",children:"Basic information"}),Object(P.jsx)(u.a,{text:"Project Title and Brief Description is very important for more views and recruitments. Try to add more keywords related to the project in it. Like Javascript Developer, etc."}),Object(P.jsx)(j.a,{label:"Project Title",id:"title",name:"title",required:!0,placeholder:"Add project title"}),Object(P.jsx)(j.a,{label:"Brief Description",id:"briefDescription",name:"briefDescription",placeholder:"Give a little information about the job",required:!0,textarea:!0,rows:5,cols:255}),Object(P.jsx)(m.a,{label:"Function Type",required:!0,name:"functionType",defaultItem:F[0].name,placeholder:"Select type",list:F}),Object(P.jsxs)("div",{className:"w-full grid gap-x-4 grid-cols-1 sm:grid-cols-2",children:[Object(P.jsx)(j.a,{label:"Minimum Salary",id:"salary[min]",name:"salary[min]",required:!0,type:"number",placeholder:"Add min salary"}),Object(P.jsx)(j.a,{label:"Maximum Salary",id:"salary[max]",type:"number",name:"salary[max]",required:!0,placeholder:"Add max salary"})]}),Object(P.jsx)(m.a,{label:"Salary Duration",required:!0,name:"salary[duration]",placeholder:"Select duration",list:[{name:"Per hour",id:"1"},{name:"Per day",id:"2"},{name:"Per week",id:"3"},{name:"Per month",id:"4"}]}),Object(P.jsx)(f.a,{size:"gradient-border border-b pb-2 text-lg",children:"Detail information about the job"}),Object(P.jsx)("div",{className:"flex flex-col gap-y-16",children:Object(q.map)(L,(function(e,t){return Object(P.jsxs)("div",{className:"flex relative flex-col gap-y-4",children:[Object(P.jsx)(x.a,{onChange:function(e){return H("title",e.target.value,t)},value:e.title,label:"Title",id:e.id+"-title",name:"title",required:!0,placeholder:"Perks"}),Object(P.jsx)(x.a,{label:"Content",onChange:function(e){return H("content",e.target.value,t)},value:e.content,id:e.id+"-briefDescription",name:"briefDescription",placeholder:"\u2022 5 Days Working",required:!0,textarea:!0,rows:5,cols:255}),0!==t&&1!==t&&Object(P.jsx)("span",{onClick:function(){return t=e.id,Object(q.remove)(L,(function(e){return e.id===t})),void R((function(e){return Object(s.a)(e)}));var t},className:"xl:absolute xl:bottom-0 static on-hover-item  xl:-right-10  hover:bg-gray-800 transition-all cursor-pointer p-2 rounded-md text-red-500 xl:translate-x-full transform ",children:"Delete section"})]},e.id)}))}),$&&Object(P.jsx)(d.a,{errors:[$]}),Object(P.jsx)("div",{className:"flex items-center justify-end",children:Object(P.jsx)(b.a,{rounded:"rounded-lg",fullWidth:!0,gradient:!0,size:"lg",onClick:function(){L.length<=10?(L.push({title:"",content:"",id:Object(w.a)(9)}),R((function(e){return Object(s.a)(e)})),G("")):G("You cannot add more than 10 sections")},label:"Add new section"})}),Object(P.jsx)(j.a,{label:"Apply URL",id:"website",name:"website",required:!0,placeholder:"Your company website url"}),Object(P.jsx)(f.a,{size:"gradient-border border-b pb-2 text-lg",children:"Closure"}),Object(P.jsx)(j.a,{label:"Closure",id:"closure",name:"closure",required:!0,placeholder:"Add closure"}),Object(P.jsx)("div",{className:"flex items-center justify-end",children:Object(P.jsx)(b.a,{type:"submit",rounded:"rounded-lg",loading:z,gradient:!0,size:"lg",label:"Submit"})}),B&&Object(P.jsx)(d.a,{errors:[J.toString()]})]})})]})}}}]);
//# sourceMappingURL=52.59f8801d.chunk.js.map