(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[14],{553:function(e,t,a){"use strict";a.r(t);var c=a(9),s=a(7),n=a(18),i=a(16),o=a(59),l=a(37),r=a(45),d=a(44),u=a(1),j=a(11),m=a(31),b=a(25),x=a(17),O=a(27),h=a(58),p=a(32),f=a(2);t.default=function(){var e=Object(u.useState)(!1),t=Object(s.a)(e,2),a=t[0],g=t[1],w=Object(j.f)(),y=Object(p.b)(),S=y.values,v=y.setValues,N=Object(u.useState)(!1),_=Object(s.a)(N,2),k=_[0],q=_[1],C=x.a({country:x.c().required("Please add country"),pincode:x.c().required("Please add pincode")});setTimeout((function(){g(!0)}),1e3);var I=Object(u.useState)({location_within_area:""}),J=Object(s.a)(I,2),P=J[0],T=J[1];return a?Object(f.jsxs)("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8",children:[Object(f.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col ",children:[Object(f.jsx)("img",{className:"mx-auto h-32 w-auto",src:"/logo.png",alt:"Workflow"}),Object(f.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Welcome, Mohammad!"}),Object(f.jsx)("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Create a profile, connect with acquaintances and discuss topics that interest you."})]}),Object(f.jsxs)("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(f.jsx)("div",{className:"bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10",children:Object(f.jsx)(b.c,{initialValues:h.f,validationSchema:C,onSubmit:function(e){q(!0),Object(m.a)(3e3).then((function(){return q(!1),v(Object(c.a)(Object(c.a)({},S),{},{student:Object(c.a)(Object(c.a)({},S.student),{},{location:Object(c.a)(Object(c.a)({},S.location),{},{country:e.country,pincode:e.pincode,location:P.location_within_area})})})),window.localStorage.setItem("student",JSON.stringify(S.student)),window.localStorage.setItem("accountType",S.accountType),console.log("Successfully added student account to local storage"),w.push(O.a.DASHBAORD)}))},children:Object(f.jsxs)(b.b,{className:"space-y-6",children:[Object(f.jsx)(i.a,{label:"Country / region",id:"country",name:"country",required:!0}),Object(f.jsx)(i.a,{label:"Postal Code",id:"pincode",name:"pincode",required:!0}),Object(f.jsx)("div",{className:"mt-6",children:Object(f.jsx)(o.a,{label:"Location within this area",list:[{id:1,name:"India"}],placeholder:"Select location",selectedItem:P.location_within_area,onSelect:function(e){return T(Object(c.a)(Object(c.a)({},P),{},{location_within_area:e.name}))}})}),Object(f.jsx)("div",{children:Object(f.jsx)(n.a,{fullWidth:!0,rounded:"rounded-lg",type:"submit",gradient:!0,loading:k,label:"Finish Submit"})})]})})}),Object(f.jsx)(l.a,{onClick:w.goBack,text:"Go back",className:"inline-block mt-4"})]}),Object(f.jsx)(r.a,{})]}):Object(f.jsx)(d.a,{})}}}]);
//# sourceMappingURL=14.af423a30.chunk.js.map