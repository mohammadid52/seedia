(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[36],{422:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return j}));n(34),n(61);var s=n(428),a=n.n(s);var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?e.substring(0,t)+"...":e},r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return e.map((function(e){return e[t]})).join(n)},c=function(e){for(var t=e.target,n=t.value,s=t.cols,a=null===n||void 0===n?void 0:n.split("\n"),i=a.length,r=0;r<a.length;r++)i+=parseInt(a[r].length/s);t.rows=i>50?50:i},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t>1?"".concat(e,"s"):e},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e<=12?"".concat(e," ").concat(l("month",e)):e%12===0?"".concat(e/12," ").concat(l("year",e)):"".concat(12-e%12," ").concat(l("year",e)," ").concat(e%12," ").concat(l("month",e))},d=["a","an","the","and","but","or","for","nor","so","yet","at","by","from","in","into","of","on","to","with","am","are","be","been","can","could","did","do","does","had","has","have","is","may","might","must","ought to","shall","should","was","were","will","would"],u=function(e){if(e&&e.length>0)return e.split(" ").filter((function(e){return!d.includes(e)}))},j=function(e){return a()(e).fromNow()}},429:function(e,t,n){var s=n(227),a=n(120),i=n(437),r=n(48);e.exports=function(e,t){return(r(e)?s:i)(e,a(t,3))}},431:function(e,t,n){var s=n(433),a=n(121);e.exports=function(e,t){return e&&s(e,t,a)}},433:function(e,t,n){var s=n(434)();e.exports=s},434:function(e,t){e.exports=function(e){return function(t,n,s){for(var a=-1,i=Object(t),r=s(t),c=r.length;c--;){var l=r[e?c:++a];if(!1===n(i[l],l,i))break}return t}}},436:function(e,t,n){"use strict";var s=n(153),a=n(6),i=n(35);t.a=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=t&&Object(a.d)(e)===(null===t||void 0===t?void 0:t._id),c=Object(i.useQuery)("user",(function(){return Object(s.t)(e)}),{enabled:!r&&n}),l=c.isFetched,o=c.isLoading,d=c.data,u=c.refetch,j=l&&!o&&d.data.data;return{otherUserData:j,isFetched:l,isLoading:o,iAmOwnerOfThisProfile:r,refetch:u}}},437:function(e,t,n){var s=n(438),a=n(155);e.exports=function(e,t){var n=-1,i=a(e)?Array(e.length):[];return s(e,(function(e,s,a){i[++n]=t(e,s,a)})),i}},438:function(e,t,n){var s=n(431),a=n(439)(s);e.exports=a},439:function(e,t,n){var s=n(155);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!s(n))return e(n,a);for(var i=n.length,r=t?i:-1,c=Object(n);(t?r--:++r<i)&&!1!==a(c[r],r,c););return n}}},858:function(e,t,n){"use strict";n.r(t);var s=n(153),a=n(32),i=n(152),r=n(62),c=n(87),l=n(157),o=n(161),d=n(436),u=n(429),j=n.n(u),x=n(35),m=n(15),b=n(11),h=n(18),f=n(422),v=n(2),g=function(e){var t=e.title,n=e.content;return Object(v.jsxs)("div",{className:"my-8",children:[t&&Object(v.jsx)("h4",{className:"mb-4 font-semibold tracking-tight text-lg text-gray-900 dark:text-white",children:t}),Object(v.jsx)("p",{className:"font-medium whitespace-pre-line tracking-tight text-base text-gray-600 dark:text-gray-400",children:n})]})},O=function(e){var t=e.name,n=e.value,s=e.valueClassName,a=e.nameClassName;return Object(v.jsxs)("div",{className:"py-4 border-b border-gray-200 dark:border-gray-700 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 ",children:[Object(v.jsx)("dt",{className:Object(h.a)(a,"text-sm uppercase font-medium gradient-text text-left"),children:t}),Object(v.jsx)("dd",{className:Object(h.a)(s,"mt-1 text-sm dark:text-white text-right text-gray-900 sm:mt-0 sm:col-span-1"),children:n})]})},p=function(e){var t=e.userData,n=e.iAmOwnerOfThisProfile,s=e.websiteUrl,r=e.views,c=void 0===r?0:r,l=e.followingList,d=Object(o.a)(l,t._id),u=d.following,j=d.addFollow,x=d.removeFollow;return Object(v.jsx)("div",{children:Object(v.jsx)(i.a,{className:"p-6 ",content:Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"flex relative items-center justify-between",children:[n&&Object(v.jsxs)("span",{className:"dark:text-gray-400 text-gray-400 italic text-sm absolute top-0 right-0 ",children:["View count: ",c]}),Object(v.jsxs)("div",{className:"flex items-center space-x-12",children:[Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("span",{className:"sr-only",children:"13RMS"}),Object(v.jsx)("img",{className:"h-36 w-36 sm:h-36 sm:w-36 cursor-pointer rounded-full shadow-xl",src:(null===t||void 0===t?void 0:t.profilePicture)?null===t||void 0===t?void 0:t.profilePicture:b.s,alt:""})]}),Object(v.jsxs)("div",{className:"space-y-1",children:[Object(v.jsx)("h1",{className:"text-2xl leading-6 font-semibold dark:text-white text-gray-900",children:null===t||void 0===t?void 0:t.business.name}),Object(v.jsxs)("h5",{className:"text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900",children:[null===t||void 0===t?void 0:t.location.address,", ",null===t||void 0===t?void 0:t.location.city,","," ",null===t||void 0===t?void 0:t.location.country]}),Object(v.jsx)("h5",{className:"text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900",children:null===t||void 0===t?void 0:t.business.email})]})]}),Object(v.jsx)("div",{className:"absolute bottom-0 right-0",children:n?Object(v.jsx)("span",{className:"text-base leading-6 font-light  dark:text-gray-400 text-gray-600",children:"Others will see buttons here"}):Object(v.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[Object(v.jsx)(a.a,{onClick:function(){return u?x.mutate(t._id):j.mutate(t._id)},label:"Follow",gradient:!0,size:"lg",className:"px-6"}),Object(v.jsx)(a.a,{label:"Apply",link:s,gradient:!0,className:"px-6",size:"lg"})]})})]})})})})};t.default=function(e){var t,n=e.userData,a=Object(m.i)().projectId,o=Object(x.useQuery)("project",(function(){return Object(s.l)(a)})),u=o.isLoading,h=o.data,y=o.isFetched&&!u?h.data.data:{},w=Object(d.a)(null===y||void 0===y||null===(t=y.company)||void 0===t?void 0:t.profileUrl,n,!1).iAmOwnerOfThisProfile;if(u)return Object(v.jsx)(c.a,{});var N=y.company,k=y.salary,D=y.location,P=N.business,F=N.background;return Object(v.jsxs)(l.a,{userData:n,customMaxWidth:"max-w-7xl",children:[Object(v.jsx)(r.a,{pageUrl:window.location.href,imageUrl:N&&N.profilePicture,pageTitle:"".concat(P.name," | ").concat(P.typeOfBusiness," | Jobs | 13RMS "),title:P.name,description:y.briefDescription,keywords:Object(f.d)(y.briefDescription)}),Object(v.jsxs)("div",{className:"flex flex-col gap-y-12",children:[Object(v.jsx)(p,{followingList:n.following,views:y.views,websiteUrl:y.website,iAmOwnerOfThisProfile:w,userData:N}),Object(v.jsx)(i.a,{content:Object(v.jsxs)("div",{className:"dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900",children:[Object(v.jsxs)("div",{className:"sm:col-span-2",children:[Object(v.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"Description"}),Object(v.jsx)("div",{className:"whitespace-pre-line",children:y.briefDescription}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"flex flex-col gap-y-4",children:[j()(y.sections,(function(e){return Object(v.jsx)(g,{title:e.title,content:e.content})})),Object(v.jsx)(g,{title:"",content:y.closure})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl mb-4 font-semibold",children:"Function Description"}),Object(v.jsxs)("dl",{className:"",children:[Object(v.jsx)(O,{name:"Function Type",value:Object(f.e)(y.functionType,"name")}),Object(v.jsx)(O,{name:"Salary",value:"".concat(k.min," - ").concat(k.max," / ").concat(k.duration)}),Object(v.jsx)(O,{name:"Location",value:"".concat((null===D||void 0===D?void 0:D.city)||"--",", ").concat((null===D||void 0===D?void 0:D.country)||"--")}),Object(v.jsx)(O,{name:"Posted",value:Object(f.c)(y.postedOn)})]})]})]})}),Object(v.jsx)(i.a,{content:Object(v.jsxs)("div",{className:"dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900",children:[Object(v.jsxs)("div",{className:"sm:col-span-2",children:[Object(v.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"About the company"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"sm:flex items-center",children:[Object(v.jsx)("div",{className:"mb-4 flex-shrink-0 sm:mb-0 sm:mr-4",children:Object(v.jsx)("img",{className:"h-12 w-12  cursor-pointer  shadow-xl",src:(null===N||void 0===N?void 0:N.profilePicture)?null===N||void 0===N?void 0:N.profilePicture:b.s,alt:""})}),Object(v.jsx)("h4",{className:"text-lg font-bold",children:null===P||void 0===P?void 0:P.name})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("p",{className:"dark:text-gray-400 text-gray-600",children:(null===F||void 0===F?void 0:F.summary)||"Test summary"}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{className:"dark:text-gray-400 text-gray-600",children:(null===P||void 0===P?void 0:P.additionalInfo)||"Additional Info"})]})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"Company Details"}),Object(v.jsx)(O,{name:"Company Size",value:"100"}),Object(v.jsx)(O,{name:"Type of business",value:P.typeOfBusiness}),Object(v.jsx)(O,{name:"Year of foundation",value:"2007"}),Object(v.jsx)(O,{valueClassName:"underline cursor-pointer tracking-wider",name:"Website",value:y.website})]})]})})]})]})}}}]);
//# sourceMappingURL=36.7920c06c.chunk.js.map