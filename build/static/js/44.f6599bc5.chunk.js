(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[44],{414:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return d}));n(28),n(48);var i=n(426),r=n.n(i);var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return t.length>e?t.substring(0,e)+"...":t},s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return t.map((function(t){return t[e]})).join(n)},c=function(t){for(var e=t.target,n=e.value,i=e.cols,r=null===n||void 0===n?void 0:n.split("\n"),a=r.length,s=0;s<r.length;s++)a+=parseInt(r[s].length/i);e.rows=a>50?50:a},o=function(t){if(t&&t.length>0)return t.split(" ").filter((function(t){return"in"!==t||"or"!==t||"of"!==t||"the"!==t||"is"!==t||"can"!==t||"so"!==t||"."!==t||"to"!==t}))},d=function(t){return r()(t).fromNow()}},421:function(t,e,n){var i=n(211),r=n(140),a=n(427),s=n(36);t.exports=function(t,e){return(s(t)?i:a)(t,r(e,3))}},427:function(t,e,n){var i=n(212),r=n(142);t.exports=function(t,e){var n=-1,a=r(t)?Array(t.length):[];return i(t,(function(t,i,r){a[++n]=e(t,i,r)})),a}},428:function(t,e,n){"use strict";n(0);var i=n(2);e.a=function(t){var e=t.className,n=t.children,r=t.size,a=void 0===r?"text-3xl":r,s=t.fontWeight,c=void 0===s?"font-semibld":s,o=t.textColor,d=void 0===o?"text-gray-900 dark:text-white":o,l=t.isLoading;return void 0!==l&&l?Object(i.jsx)("div",{className:"h-4 animate-pulse bg-gray-400 rounded ".concat(e," ").concat(a," ").concat(c," ").concat(d)}):Object(i.jsx)("h1",{className:"".concat(e," ").concat(a," ").concat(c," ").concat(d),children:n})}},441:function(t,e,n){"use strict";var i=n(2);e.a=function(t){var e=t.title,n=t.gradient,r=void 0===n||n,a=t.className;return Object(i.jsx)("h2",{className:"".concat(a," text-2xl mb-6 font-extrabold ").concat(r?"gradient-border":""," border-b pb-2 tracking-tight\n         dark:text-white text-gray-900"),children:e})}},527:function(t,e,n){"use strict";var i=n(32),r=n(135),a=n(428),s=n(8),c=n(13),o=n(10),d=n(414),l=n(2);e.a=function(t){var e,n=t.request,u=t.userId,b=(t.userData,t.isLoading),j=void 0!==b&&b,g=n.postedBy.toString()===u,v=Object(c.g)(),x=n.user;return Object(l.jsx)("div",{onClick:function(){return v.push(s.a.viewRequestById(n._id))},children:Object(l.jsx)(r.a,{isLoading:j,className:"box   hover:shadow-xl transition-all  cursor-pointer",content:Object(l.jsxs)("div",{className:"relative max-h-64 h-64",children:[j?Object(l.jsx)("div",{className:"bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"}):Object(l.jsx)("img",{className:"h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md",src:(null===x||void 0===x?void 0:x.profilePicture)?null===x||void 0===x?void 0:x.profilePicture:o.s,alt:""}),Object(l.jsx)(a.a,{isLoading:j,size:"text-xl",children:n.title}),Object(l.jsx)(a.a,{size:"text-base",isLoading:j,className:"tracking-wide mt-1 gradient-text",children:null===x||void 0===x?void 0:x.email}),Object(l.jsx)(a.a,{size:"text-sm",isLoading:j,className:"tracking-wide truncate whitespace-pre-line mt-1",children:n.description}),!j&&Object(l.jsxs)("div",{className:"flex items-center justify-between inset-x-0 absolute bottom-0",children:[Object(l.jsx)("div",{className:"text-sm text-gray-400  dark:text-gray-500",children:Object(d.c)(n.postedOn)}),Object(l.jsx)("div",{onClick:function(t){return t.stopPropagation()},children:g?Object(l.jsx)(i.a,{label:"View",onClick:function(){v.push(s.a.viewRequestById(n._id))},disabled:j,gradient:!0}):Object(l.jsx)(i.a,{disabled:j,label:"View Profile",gradient:!0,link:s.a.getProfileById(x.profileUrl,(null===x||void 0===x||null===(e=x.other)||void 0===e?void 0:e.template)||1)})})]})]})})})}},684:function(t,e,n){"use strict";n.r(e);var i=n(138),r=n(49),a=n(441),s=n(76),c=n(143),o=n(141),d=n(421),l=n.n(d),u=n(527),b=n(35),j=n(13),g=n(2);e.default=function(t){var e=t.userData,n=Object(o.a)(e).isBusiness,d=Object(b.useQuery)("requests-list",(function(){return Object(i.i)()}),{enabled:!n}),v=d.isLoading,x=d.data,h=d.isFetched,f=Object(j.g)();if(n&&f.goBack(),v&&!h)return Object(g.jsx)(s.a,{});var m=h&&!v?x.data.data:{};return Object(g.jsxs)(c.a,{userData:e,customParentMaxWidth:"max-w-360 relative",customMaxWidth:"max-w-360",children:[Object(g.jsx)(r.a,{keywords:"jobs, jobs at 13RMS, 13rms",pageUrl:window.location.href,pageTitle:"Jobs | 13RMS "}),Object(g.jsx)(a.a,{title:"Your Requests (".concat((null===m||void 0===m?void 0:m.length)||0,")")}),Object(g.jsx)("div",{className:"grid gap-4 grid-cols-4",children:l()(m,(function(t){return Object(g.jsx)(u.a,{isLoading:!h&&v,userData:e,userId:e._id.toString(),request:t})}))})]})}}}]);
//# sourceMappingURL=44.f6599bc5.chunk.js.map