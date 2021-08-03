(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[6],{291:function(e,t,a){"use strict";var c=a(363),n=a(52),s=a(2);t.a=function(e){var t=e.enabled,a=e.setEnabled,r=e.text,i=e.subText,l=e.className;return Object(s.jsxs)(c.a.Group,{as:"div",className:"flex items-center justify-between ".concat(l),children:[Object(s.jsxs)("span",{className:"flex-grow flex flex-col items-start",children:[Object(s.jsx)(c.a.Label,{as:"span",className:"text-sm font-medium text-white",passive:!0,children:r}),Object(s.jsx)(c.a.Description,{as:"span",className:"text-sm text-gray-500",children:i})]}),Object(s.jsx)(c.a,{checked:t,onChange:function(){var e=document.querySelector("html");t?(a(!1),null===e||void 0===e||e.classList.remove("dark"),localStorage.setItem("theme","light")):(a(!0),null===e||void 0===e||e.classList.add("dark"),localStorage.setItem("theme","dark"))},className:Object(n.a)(t?"bg-gradient-to-r from-pink-500 to-yellow-500":"bg-gray-800","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:Object(s.jsx)("span",{"aria-hidden":"true",className:Object(n.a)(t?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200")})})]})}},363:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var c=a(3),n=a(1),s=a.n(n),r=a(4),i=a(6),l=a(53),d=a(14),o=a(67),u=a(66),b=Object(n.createContext)(null);b.displayName="GroupContext";var j=n.Fragment;function O(e){var t=e.checked,a=e.onChange,s=Object(c.c)(e,["checked","onChange"]),o="headlessui-switch-"+Object(d.a)(),u=Object(n.useContext)(b),j=Object(n.useCallback)((function(){return a(!t)}),[a,t]),O=Object(n.useCallback)((function(e){if(Object(l.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),j()}),[j]),m=Object(n.useCallback)((function(e){e.key!==i.a.Tab&&e.preventDefault(),e.key===i.a.Space&&j()}),[j]),x=Object(n.useCallback)((function(e){return e.preventDefault()}),[]),h=Object(n.useMemo)((function(){return{checked:t}}),[t]),f={id:o,ref:null===u?void 0:u.setSwitch,role:"switch",tabIndex:0,"aria-checked":t,"aria-labelledby":null==u?void 0:u.labelledby,"aria-describedby":null==u?void 0:u.describedby,onClick:O,onKeyUp:m,onKeyPress:x};return"button"===s.as&&Object.assign(f,{type:"button"}),Object(r.d)({props:Object(c.b)({},s,f),slot:h,defaultTag:"button",name:"Switch"})}O.Group=function(e){var t=Object(n.useState)(null),a=t[0],c=t[1],i=Object(u.b)(),l=i[0],d=i[1],O=Object(o.b)(),m=O[0],x=O[1],h=Object(n.useMemo)((function(){return{switch:a,setSwitch:c,labelledby:l,describedby:m}}),[a,c,l,m]);return s.a.createElement(x,{name:"Switch.Description"},s.a.createElement(d,{name:"Switch.Label",props:{onClick:function(){a&&(a.click(),a.focus({preventScroll:!0}))}}},s.a.createElement(b.Provider,{value:h},Object(r.d)({props:e,defaultTag:j,name:"Switch.Group"}))))},O.Label=u.a,O.Description=o.a},532:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a(7),s=a(16),r=a(23),i=a(59),l=a(37),d=a(291),o=a(44),u=a(28),b=a(97),j=a(1),O=a(11),m=a(32),x=a(75),h=a(26),f=a(24),p=a(58),g=a(25),v=a(2);t.default=function(){var e=Object(j.useState)(!1),t=Object(n.a)(e,2),a=t[0],y=t[1],k=Object(O.f)(),w=Object(g.b)(),S=w.values,_=w.setValues;setTimeout((function(){y(!0)}),1e3);var N=Object(j.useState)(!1),C=Object(n.a)(N,2),E=C[0],T=C[1],D=f.a({education:f.c().required("Please add education"),grade:f.c().required("Please add grade"),grade_subject:f.c().required("Please add grade subject")}),I=Object(j.useState)({start_year:"",end_year:"",above_sixteen:!1}),q=Object(n.a)(I,2),G=q[0],P=q[1];return a?Object(v.jsx)(b.a,{title:"Education Information",subtitle:Object(v.jsxs)("p",{children:["Your profile helps you find new people and ",Object(v.jsx)("br",{})," oppurtunites"]}),children:Object(v.jsxs)("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(v.jsx)("div",{className:"bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(v.jsx)(h.c,{initialValues:p.e,validationSchema:D,onSubmit:function(e){T(!0),Object(m.a)(3e3).then((function(){T(!1),_(Object(c.a)(Object(c.a)({},S),{},{student:Object(c.a)(Object(c.a)({},S.student),{},{education:Object(c.a)(Object(c.a)({},S.education),{},{education:e.education,grade:e.grade,grade_subject:e.grade_subject,start_year:G.start_year,end_year:G.end_year})})})),k.push(u.a.STUDENT_STEP_2)}))},children:Object(v.jsxs)(h.b,{className:"space-y-6",children:[Object(v.jsx)(r.a,{label:"Education",id:"education",name:"education",required:!0}),Object(v.jsx)(r.a,{label:"Grade / title",id:"grade",name:"grade",required:!0}),Object(v.jsx)(r.a,{label:"Graduation subject",id:"grade_subject",name:"grade_subject",required:!0}),Object(v.jsxs)("div",{className:"grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2",children:[Object(v.jsx)("div",{className:"",children:Object(v.jsx)(i.a,{label:"Start year",list:x.f,selectedItem:G.start_year,placeholder:"-",onSelect:function(e){return P(Object(c.a)(Object(c.a)({},G),{},{start_year:e.name}))}})}),Object(v.jsx)("div",{className:"",children:Object(v.jsx)(i.a,{label:"End year (or expected)",placeholder:"-",list:x.g,selectedItem:G.end_year,onSelect:function(e){return P(Object(c.a)(Object(c.a)({},G),{},{end_year:e.name}))}})})]}),Object(v.jsx)("div",{children:Object(v.jsx)(d.a,{className:"mt-2",enabled:G.above_sixteen,text:"I'm over 16 years old",setEnabled:function(){return P(Object(c.a)(Object(c.a)({},G),{},{above_sixteen:!G.above_sixteen}))}})}),Object(v.jsx)("div",{children:Object(v.jsx)(l.a,{color:"gray",onClick:function(){return k.push(u.a.CHOOSE_ACCOUNT)},text:"I'm not a student",className:"text-center py-2"})}),Object(v.jsx)("div",{children:Object(v.jsx)(s.a,{fullWidth:!0,rounded:"rounded-lg",gradient:!0,type:"submit",loading:E,label:"Next Step"})})]})})}),Object(v.jsx)(l.a,{onClick:k.goBack,text:"Go back",className:"inline-block mt-4"})]})}):Object(v.jsx)(o.a,{})}}}]);
//# sourceMappingURL=6.def20adb.chunk.js.map