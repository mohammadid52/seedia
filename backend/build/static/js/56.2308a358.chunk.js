(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[56],{424:function(e,t,n){"use strict";var r=n(1),a=n(62),c=n(477),o=n(25),i=n(37),l=n(2);t.a=function(e){var t=e.open,n=void 0!==t&&t,s=e.setOpen,u=e.children,d=e.header,b=e.onClose,f=e.disableBackdropClose,j=void 0===f||f,m=e.hideCloseBtn,p=void 0!==m&&m,v=e.fixedBottom,O=e.disablePadding,h=void 0!==O&&O;return Object(l.jsx)(a.a.Root,{show:n,as:r.Fragment,children:Object(l.jsx)(c.a,{as:"div",static:!0,style:{zIndex:9999},className:"fixed inset-0 overflow-y-auto",open:n,onClose:j?i.noop:b||s,children:Object(l.jsxs)("div",{className:"pb-20 flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0",children:[Object(l.jsx)(a.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(l.jsx)(c.a.Overlay,{className:"fixed dark:bg-black inset-0 bg-gray-500 opacity-50 transition-opacity"})}),Object(l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(l.jsx)(a.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(l.jsxs)("div",{className:"inline-block align-bottom  bg-white dark:bg-gray-900 rounded-lg ".concat(h?"":"px-4 sm:p-6"," pt-5  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top   pb-4"),children:[!p&&Object(l.jsx)("div",{className:"hidden sm:block absolute top-0 right-0 pt-6 pr-6",children:Object(l.jsxs)("button",{type:"button",className:"bg-white dark:bg-gray-900 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",onClick:function(){return b?b():s(!1)},children:[Object(l.jsx)("span",{className:"sr-only",children:"Close"}),Object(l.jsx)(o.f,{className:"h-6 w-6","aria-hidden":"true"})]})}),Object(l.jsxs)("div",{className:"modal-body",children:[d&&Object(l.jsx)("div",{className:"modal-header divider dark:divider px-4",children:Object(l.jsx)("h3",{className:"dark:text-white text-gray-900 text-xl font-normal",children:d})}),Object(l.jsx)("div",{className:"",children:u}),v&&Object(l.jsx)("div",{className:"absolute dark:border-gray-800 border-t bg-white dark:bg-gray-900 bottom-0 mx-6 inset-x-0",children:v})]})]})})]})})})}},459:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return new Promise((function(t){return setTimeout(t,e)}))},a=function(e,t){return t&&t.hasOwnProperty(e)&&""!==t[e]}},475:function(e,t,n){"use strict";var r=n(2);t.a=function(e){var t=e.className,n=e.withButton,a=e.Icon,c=e.text,o=e.onBtnClick;return n?Object(r.jsxs)("div",{className:"relative",children:[Object(r.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:Object(r.jsx)("div",{className:"w-full border-t dark:border-gray-700 border-gray-400"})}),Object(r.jsx)("div",{className:"relative flex justify-center",children:Object(r.jsxs)("span",{onClick:o,className:"".concat(t," bg-white text-xs dark:bg-gray-900 px-2 text-gray-600"),children:[c,a&&Object(r.jsx)(a,{})]})})]}):Object(r.jsx)("div",{style:{height:1},className:"my-4 dark:bg-gray-700 bg-gray-400 ".concat(t)})}},477:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var r,a=n(6),c=n(1),o=n.n(c),i=n(21),l=n(8),s=n(28),u=n(10),d=n(45),b=n(91),f=n(22),j=n(49),m=n(18),p=n(161);function v(e,t,n){void 0===t&&(t=r.All);var o=void 0===n?{}:n,i=o.initialFocus,l=o.containers,s=Object(c.useRef)("undefined"!==typeof window?document.activeElement:null),d=Object(c.useRef)(null),b=Object(p.a)(),f=Boolean(t&r.RestoreFocus),v=Boolean(t&r.InitialFocus);Object(c.useEffect)((function(){f&&(s.current=document.activeElement)}),[f]),Object(c.useEffect)((function(){if(f)return function(){Object(m.d)(s.current),s.current=null}}),[f]),Object(c.useEffect)((function(){if(v&&e.current){var t=document.activeElement;if(null==i?void 0:i.current){if((null==i?void 0:i.current)===t)return void(d.current=t)}else if(e.current.contains(t))return void(d.current=t);(null==i?void 0:i.current)?Object(m.d)(i.current):Object(m.e)(e.current,m.a.First)===m.b.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),d.current=document.activeElement}}),[e,i,v]),Object(j.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===u.a.Tab&&(n.preventDefault(),Object(m.e)(e.current,(n.shiftKey?m.a.Previous:m.a.Next)|m.a.WrapAround)===m.b.Success&&(d.current=document.activeElement))})),Object(j.a)("focus",(function(n){if(t&r.FocusLock){var c=new Set(null==l?void 0:l.current);if(c.add(e),c.size){var o=d.current;if(o&&b.current){var i=n.target;i&&i instanceof HTMLElement?!function(e,t){for(var n,r=Object(a.a)(e);!(n=r()).done;){var c;if(null==(c=n.value.current)?void 0:c.contains(t))return!0}return!1}(c,i)?(n.preventDefault(),n.stopPropagation(),Object(m.d)(o)):(d.current=i,Object(m.d)(i)):Object(m.d)(d.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var O=n(14),h=new Set,g=new Map;function x(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function y(e){var t=g.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var w=Object(c.createContext)(!1);function k(e){return o.a.createElement(w.Provider,{value:e.force},e.children)}var C=n(68);function E(){var e=Object(c.useContext)(w),t=Object(c.useContext)(S),n=Object(c.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],a=n[1];return Object(c.useEffect)((function(){e||null!==t&&a(t.current)}),[t,a,e]),r}var N=c.Fragment;function T(e){var t=e,n=E(),r=Object(c.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],a=Object(b.a)();return Object(O.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),a&&n&&r?Object(C.createPortal)(Object(l.d)({props:t,defaultTag:N,name:"Portal"}),r):null}var F=c.Fragment,S=Object(c.createContext)(null);T.Group=function(e){var t=e.target,n=Object(a.c)(e,["target"]);return o.a.createElement(S.Provider,{value:t},Object(l.d)({props:n,defaultTag:F,name:"Popover.Group"}))};var A,R,D,P,I=n(123),B=n(16),L=Object(c.createContext)((function(){}));function M(e){var t=e.children,n=e.onUpdate,r=e.type,a=e.element,i=Object(c.useContext)(L),l=Object(c.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),i.apply(void 0,t)}),[i,n]);return Object(O.a)((function(){return l(A.Add,r,a),function(){return l(A.Remove,r,a)}}),[l,r,a]),o.a.createElement(L.Provider,{value:l},t)}L.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(A||(A={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(D||(D={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(P||(P={}));var Y=((R={})[P.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(a.b)({},e,{titleId:t.id})},R),z=Object(c.createContext)(null);function G(e){var t=Object(c.useContext)(z);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+K.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,G),n}return t}function H(e,t){return Object(i.a)(t.type,Y,e,t)}z.displayName="DialogContext";var J=l.a.RenderStrategy|l.a.Static,W=Object(l.c)((function(e,t){var n,d=e.open,m=e.onClose,p=e.initialFocus,w=Object(a.c)(e,["open","onClose","initialFocus"]),C=Object(c.useState)(0),E=C[0],N=C[1],F=Object(B.c)();void 0===d&&null!==F&&(d=Object(i.a)(F,((n={})[B.b.Open]=!0,n[B.b.Closed]=!1,n)));var S=Object(c.useRef)(new Set),R=Object(c.useRef)(null),L=Object(s.a)(R,t),Y=e.hasOwnProperty("open")||null!==F,G=e.hasOwnProperty("onClose");if(!Y&&!G)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!Y)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!G)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof d)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+d);if("function"!==typeof m)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+m);var W=d?D.Open:D.Closed,q=null!==F?F===B.b.Open:W===D.Open,K=Object(c.useReducer)(H,{titleId:null,descriptionId:null}),U=K[0],V=K[1],Q=Object(c.useCallback)((function(){return m(!1)}),[m]),X=Object(c.useCallback)((function(e){return V({type:P.SetTitleId,id:e})}),[V]),Z=Object(b.a)()&&W===D.Open,$=E>1,_=null!==Object(c.useContext)(z),ee=$?"parent":"leaf";v(R,Z?Object(i.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:p,containers:S}),function(e,t){void 0===t&&(t=!0),Object(O.a)((function(){if(t&&e.current){var n=e.current;h.add(n);for(var r,c=Object(a.a)(g.keys());!(r=c()).done;){var o=r.value;o.contains(n)&&(y(o),g.delete(o))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(a.a)(h);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===h.size&&(g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e))}})),function(){if(h.delete(n),h.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!g.has(e)){for(var t,n=Object(a.a)(h);!(t=n()).done;){var r=t.value;if(e.contains(r))return}g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e)}}));else for(var e,t=Object(a.a)(g.keys());!(e=t()).done;){var r=e.value;y(r),g.delete(r)}}}}),[t])}(R,!!$&&Z),Object(j.a)("mousedown",(function(e){var t,n=e.target;W===D.Open&&($||(null==(t=R.current)?void 0:t.contains(n))||Q())})),Object(j.a)("keydown",(function(e){e.key===u.a.Escape&&W===D.Open&&($||(e.preventDefault(),e.stopPropagation(),Q()))})),Object(c.useEffect)((function(){if(W===D.Open&&!_){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[W,_]),Object(c.useEffect)((function(){if(W===D.Open&&R.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(a.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&Q()}}));return e.observe(R.current),function(){return e.disconnect()}}}),[W,R,Q]);var te=Object(I.b)(),ne=te[0],re=te[1],ae="headlessui-dialog-"+Object(f.a)(),ce=Object(c.useMemo)((function(){return[{dialogState:W,close:Q,setTitleId:X},U]}),[W,U,Q,X]),oe=Object(c.useMemo)((function(){return{open:W===D.Open}}),[W]),ie={ref:L,id:ae,role:"dialog","aria-modal":W===D.Open||void 0,"aria-labelledby":U.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},le=w;return o.a.createElement(M,{type:"Dialog",element:R,onUpdate:Object(c.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(i.a)(e,((r={})[A.Add]=function(){S.current.add(n),N((function(e){return e+1}))},r[A.Remove]=function(){S.current.add(n),N((function(e){return e-1}))},r))}),[])},o.a.createElement(k,{force:!0},o.a.createElement(T,null,o.a.createElement(z.Provider,{value:ce},o.a.createElement(T.Group,{target:R},o.a.createElement(k,{force:!1},o.a.createElement(re,{slot:oe,name:"Dialog.Description"},Object(l.d)({props:Object(a.b)({},le,ie),slot:oe,defaultTag:"div",features:J,visible:q,name:"Dialog"}))))))))})),q=Object(l.c)((function e(t,n){var r=G([K.displayName,e.name].join("."))[0],o=r.dialogState,i=r.close,u=Object(s.a)(n),b="headlessui-dialog-overlay-"+Object(f.a)(),j=Object(c.useCallback)((function(e){if(e.target===e.currentTarget){if(Object(d.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}}),[i]),m=Object(c.useMemo)((function(){return{open:o===D.Open}}),[o]),p={ref:u,id:b,"aria-hidden":!0,onClick:j},v=t;return Object(l.d)({props:Object(a.b)({},v,p),slot:m,defaultTag:"div",name:"Dialog.Overlay"})}));var K=Object.assign(W,{Overlay:q,Title:function e(t){var n=G([K.displayName,e.name].join("."))[0],r=n.dialogState,o=n.setTitleId,i="headlessui-dialog-title-"+Object(f.a)();Object(c.useEffect)((function(){return o(i),function(){return o(null)}}),[i,o]);var s=Object(c.useMemo)((function(){return{open:r===D.Open}}),[r]),u={id:i},d=t;return Object(l.d)({props:Object(a.b)({},d,u),slot:s,defaultTag:"h2",name:"Dialog.Title"})},Description:I.a})},865:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(38),a=n.n(r),c=n(63),o=n(5),i=n(23),l=n(1),s=n(42),u=n(475),d=n(427),b=n.n(d),f=n(7),j=n(33),m=n(459),p=n(424),v=n(60),O=n(35),h=n(17),g=n(2);function x(e){var t,n,r,d=e.userData,x=(null===(t=d.other)||void 0===t?void 0:t.template)||1;Object(l.useEffect)((function(){Object(f.h)("Settings",!0)}),[]);var y=Object(l.useState)(!1),w=Object(i.a)(y,2),k=w[0],C=w[1],E=Object(j.b)().setValues,N=Object(f.a)(),T=Object(h.g)(),F=Object(l.useState)(!1),S=Object(i.a)(F,2),A=S[0],R=S[1],D=Object(O.b)(),P=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.f.delete("/user",{headers:{Authorization:N}});case 3:D(Object(v.b)(T)),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"bg-white dark:bg-gray-900 h-screen",children:[Object(g.jsx)(p.a,{header:"Delete Account",open:A,setOpen:function(){return R(!1)},children:Object(g.jsxs)("div",{className:"min-h-32 min-w-96",children:[Object(g.jsxs)("div",{className:"mb-8",children:[Object(g.jsx)("h1",{className:"text-lg dark:text-white text-gray-900 min-w-96",children:"Are you sure you want to delete your account?"}),Object(g.jsx)("p",{className:"text-gray-500 ",children:"You won't able to recover it"})]}),Object(g.jsxs)("div",{className:"mt-5 sm:mt-4 flex justify-end space-x-4 items-center",children:[Object(g.jsx)(s.a,{secondary:!0,bgColor:"gray",onClick:function(){R(!1)},invert:!0,label:"No thanks"}),Object(g.jsx)(s.a,{primary:!0,style:{background:"red"},label:"Delete",onClick:P})]})]})}),Object(g.jsx)("main",{className:"bg-white dark:bg-gray-900 max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16",children:Object(g.jsx)("form",{children:Object(g.jsxs)("div",{className:"space-y-6",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-base leading-6 font-medium dark:text-white text-gray-900",children:"Profile Settings"}),Object(g.jsx)("p",{className:"mt-1 text-xs text-gray-500 ",children:"You can change your profile settings here."})]}),Object(g.jsx)("div",{children:Object(g.jsx)(s.a,{invert:!0,onClick:function(){C(!0);try{var e=Object(o.a)(Object(o.a)({},d),{},{other:Object(o.a)(Object(o.a)({},d.other),{},{template:1===x?2:1})});delete e.password,E(Object(o.a)({},e)),Object(m.b)(1e3).then(Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.f.post("/user/update",Object(o.a)({},e),{headers:{Authorization:N}});case 2:case"end":return t.stop()}}),t)}))))}catch(t){console.error(t.message)}finally{C(!1)}},disabled:k,loading:k,loadingText:"Changing template to ".concat(1===x?"Two":"One"),secondary:!0,bgColor:"gray",style:{color:"teal"},label:"Change template to ".concat(1===x?"Two":"One")})}),Object(g.jsx)(u.a,{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-base leading-6 font-medium dark:text-white text-gray-900",children:"Account Settings"}),Object(g.jsx)("p",{className:"mt-1 text-xs text-gray-500 ",children:"You can change your account settings here."})]}),Object(g.jsx)("div",{children:Object(g.jsx)(s.a,{invert:!0,onClick:function(){return R(!0)},secondary:!0,style:{color:"#F87171"},bgColor:"gray",label:"Delete this account"})}),Object(g.jsxs)("p",{className:"text-sm text-gray-500",children:["This account was created on"," ",Object(g.jsx)("time",{dateTime:"2017-01-05T20:35:40",className:"font-semibold",children:(null===(n=d.other)||void 0===n?void 0:n.createdOn)?b()(null===(r=d.other)||void 0===r?void 0:r.createdOn).format("LL"):"January 5, 2017, 8:35:40 PM"}),"."]}),Object(g.jsx)(u.a,{withButton:!0,text:"End"}),Object(g.jsx)(s.a,{onClick:T.goBack,gradient:!0,label:"GO BACK"})]})})})]})}}}]);
//# sourceMappingURL=56.2308a358.chunk.js.map