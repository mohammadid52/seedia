(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[34],{414:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"e",(function(){return r})),s.d(t,"a",(function(){return c})),s.d(t,"d",(function(){return o})),s.d(t,"c",(function(){return d}));s(35),s(61);var i=s(421),n=s.n(i);var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?e.substring(0,t)+"...":e},r=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return e.map((function(e){return e[t]})).join(s)},c=function(e){for(var t=e.target,s=t.value,i=t.cols,n=null===s||void 0===s?void 0:s.split("\n"),a=n.length,r=0;r<n.length;r++)a+=parseInt(n[r].length/i);t.rows=a>50?50:a},l=["a","an","the","and","but","or","for","nor","so","yet","at","by","from","in","into","of","on","to","with","am","are","be","been","can","could","did","do","does","had","has","have","is","may","might","must","ought to","shall","should","was","were","will","would"],o=function(e){if(e&&e.length>0)return e.split(" ").filter((function(e){return!l.includes(e)}))},d=function(e){return n()(e).fromNow()}},420:function(e,t,s){var i=s(225),n=s(119),a=s(427),r=s(47);e.exports=function(e,t){return(r(e)?i:a)(e,n(t,3))}},422:function(e,t,s){var i=s(424),n=s(120);e.exports=function(e,t){return e&&i(e,t,n)}},424:function(e,t,s){var i=s(425)();e.exports=i},425:function(e,t){e.exports=function(e){return function(t,s,i){for(var n=-1,a=Object(t),r=i(t),c=r.length;c--;){var l=r[e?c:++n];if(!1===s(a[l],l,a))break}return t}}},427:function(e,t,s){var i=s(428),n=s(155);e.exports=function(e,t){var s=-1,a=n(e)?Array(e.length):[];return i(e,(function(e,i,n){a[++s]=t(e,i,n)})),a}},428:function(e,t,s){var i=s(422),n=s(429)(i);e.exports=n},429:function(e,t,s){var i=s(155);e.exports=function(e,t){return function(s,n){if(null==s)return s;if(!i(s))return e(s,n);for(var a=s.length,r=t?a:-1,c=Object(s);(t?r--:++r<a)&&!1!==n(c[r],r,c););return s}}},430:function(e,t,s){"use strict";var i=s(154),n=s(6),a=s(34);t.a=function(e,t){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=t&&Object(n.d)(e)===(null===t||void 0===t?void 0:t._id),c=Object(a.useQuery)("user",(function(){return Object(i.t)(e)}),{enabled:!r&&s}),l=c.isFetched,o=c.isLoading,d=c.data,u=c.refetch,j=l&&!o&&d.data.data;return{otherUserData:j,isFetched:l,isLoading:o,iAmOwnerOfThisProfile:r,refetch:u}}},680:function(e,t,s){"use strict";s.r(t);var i=s(154),n=s(32),a=s(152),r=s(62),c=s(86),l=s(157),o=s(161),d=s(430),u=s(420),j=s.n(u),x=s(34),m=s(14),b=s(11),h=s(18),f=s(414),v=s(2),g=function(e){var t=e.title,s=e.content;return Object(v.jsxs)("div",{className:"my-8",children:[t&&Object(v.jsx)("h4",{className:"mb-4 font-semibold tracking-tight text-lg text-gray-900 dark:text-white",children:t}),Object(v.jsx)("p",{className:"font-medium whitespace-pre-line tracking-tight text-base text-gray-600 dark:text-gray-400",children:s})]})},O=function(e){var t=e.name,s=e.value,i=e.valueClassName,n=e.nameClassName;return Object(v.jsxs)("div",{className:"py-4 border-b border-gray-200 dark:border-gray-700 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 ",children:[Object(v.jsx)("dt",{className:Object(h.a)(n,"text-sm uppercase font-medium gradient-text text-left"),children:t}),Object(v.jsx)("dd",{className:Object(h.a)(i,"mt-1 text-sm dark:text-white text-right text-gray-900 sm:mt-0 sm:col-span-1"),children:s})]})},p=function(e){var t=e.userData,s=e.iAmOwnerOfThisProfile,i=e.websiteUrl,r=e.views,c=void 0===r?0:r,l=e.followingList,d=Object(o.a)(l,t._id),u=d.following,j=d.addFollow,x=d.removeFollow;return Object(v.jsx)("div",{children:Object(v.jsx)(a.a,{className:"p-6 ",content:Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"flex relative items-center justify-between",children:[s&&Object(v.jsxs)("span",{className:"dark:text-gray-400 text-gray-400 italic text-sm absolute top-0 right-0 ",children:["View count: ",c]}),Object(v.jsxs)("div",{className:"flex items-center space-x-12",children:[Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("span",{className:"sr-only",children:"13RMS"}),Object(v.jsx)("img",{className:"h-36 w-36 sm:h-36 sm:w-36 cursor-pointer rounded-full shadow-xl",src:(null===t||void 0===t?void 0:t.profilePicture)?null===t||void 0===t?void 0:t.profilePicture:b.s,alt:""})]}),Object(v.jsxs)("div",{className:"space-y-1",children:[Object(v.jsx)("h1",{className:"text-2xl leading-6 font-semibold dark:text-white text-gray-900",children:null===t||void 0===t?void 0:t.business.name}),Object(v.jsxs)("h5",{className:"text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900",children:[null===t||void 0===t?void 0:t.location.address,", ",null===t||void 0===t?void 0:t.location.city,","," ",null===t||void 0===t?void 0:t.location.country]}),Object(v.jsx)("h5",{className:"text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900",children:null===t||void 0===t?void 0:t.business.email})]})]}),Object(v.jsx)("div",{className:"absolute bottom-0 right-0",children:s?Object(v.jsx)("span",{className:"text-base leading-6 font-light  dark:text-gray-400 text-gray-600",children:"Others will see buttons here"}):Object(v.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[Object(v.jsx)(n.a,{onClick:function(){return u?x.mutate(t._id):j.mutate(t._id)},label:"Follow",gradient:!0,size:"lg",className:"px-6"}),Object(v.jsx)(n.a,{label:"Apply",link:i,gradient:!0,className:"px-6",size:"lg"})]})})]})})})})};t.default=function(e){var t,s=e.userData,n=Object(m.i)().projectId,o=Object(x.useQuery)("project",(function(){return Object(i.l)(n)})),u=o.isLoading,h=o.data,y=o.isFetched&&!u?h.data.data:{},w=Object(d.a)(null===y||void 0===y||null===(t=y.company)||void 0===t?void 0:t.profileUrl,s,!1).iAmOwnerOfThisProfile;if(u)return Object(v.jsx)(c.a,{});var N=y.company,k=y.salary,D=y.location,P=N.business,F=N.background;return Object(v.jsxs)(l.a,{userData:s,customMaxWidth:"max-w-7xl",children:[Object(v.jsx)(r.a,{pageUrl:window.location.href,imageUrl:N&&N.profilePicture,pageTitle:"".concat(P.name," | ").concat(P.typeOfBusiness," | Jobs | 13RMS "),title:P.name,description:y.briefDescription,keywords:Object(f.d)(y.briefDescription)}),Object(v.jsxs)("div",{className:"flex flex-col gap-y-12",children:[Object(v.jsx)(p,{followingList:s.following,views:y.views,websiteUrl:y.website,iAmOwnerOfThisProfile:w,userData:N}),Object(v.jsx)(a.a,{content:Object(v.jsxs)("div",{className:"dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900",children:[Object(v.jsxs)("div",{className:"sm:col-span-2",children:[Object(v.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"Description"}),Object(v.jsx)("div",{className:"whitespace-pre-line",children:y.briefDescription}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"flex flex-col gap-y-4",children:[j()(y.sections,(function(e){return Object(v.jsx)(g,{title:e.title,content:e.content})})),Object(v.jsx)(g,{title:"",content:y.closure})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl mb-4 font-semibold",children:"Function Description"}),Object(v.jsxs)("dl",{className:"",children:[Object(v.jsx)(O,{name:"Function Type",value:Object(f.e)(y.functionType,"name")}),Object(v.jsx)(O,{name:"Salary",value:"".concat(k.min," - ").concat(k.max," / ").concat(k.duration)}),Object(v.jsx)(O,{name:"Location",value:"".concat((null===D||void 0===D?void 0:D.city)||"--",", ").concat((null===D||void 0===D?void 0:D.country)||"--")}),Object(v.jsx)(O,{name:"Posted",value:Object(f.c)(y.postedOn)})]})]})]})}),Object(v.jsx)(a.a,{content:Object(v.jsxs)("div",{className:"dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900",children:[Object(v.jsxs)("div",{className:"sm:col-span-2",children:[Object(v.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"About the company"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"sm:flex items-center",children:[Object(v.jsx)("div",{className:"mb-4 flex-shrink-0 sm:mb-0 sm:mr-4",children:Object(v.jsx)("img",{className:"h-12 w-12  cursor-pointer  shadow-xl",src:(null===N||void 0===N?void 0:N.profilePicture)?null===N||void 0===N?void 0:N.profilePicture:b.s,alt:""})}),Object(v.jsx)("h4",{className:"text-lg font-bold",children:null===P||void 0===P?void 0:P.name})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("p",{className:"dark:text-gray-400 text-gray-600",children:(null===F||void 0===F?void 0:F.summary)||"Test summary"}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{className:"dark:text-gray-400 text-gray-600",children:(null===P||void 0===P?void 0:P.additionalInfo)||"Additional Info"})]})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"Company Details"}),Object(v.jsx)(O,{name:"Company Size",value:"100"}),Object(v.jsx)(O,{name:"Type of business",value:P.typeOfBusiness}),Object(v.jsx)(O,{name:"Year of foundation",value:"2007"}),Object(v.jsx)(O,{valueClassName:"underline cursor-pointer tracking-wider",name:"Website",value:y.website})]})]})})]})]})}}}]);
//# sourceMappingURL=34.1781690f.chunk.js.map