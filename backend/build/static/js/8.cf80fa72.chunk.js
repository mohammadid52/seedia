(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[8],{303:function(e,t,a){"use strict";var s=a(390),r=a(53),n=a(2);t.a=function(e){var t=e.enabled,a=e.setEnabled,c=e.text,i=e.subText,l=e.className;return Object(n.jsxs)(s.a.Group,{as:"div",className:"flex items-center justify-between ".concat(l),children:[Object(n.jsxs)("span",{className:"flex-grow flex flex-col items-start",children:[Object(n.jsx)(s.a.Label,{as:"span",className:"text-sm font-medium text-white",passive:!0,children:c}),Object(n.jsx)(s.a.Description,{as:"span",className:"text-sm text-gray-500",children:i})]}),Object(n.jsx)(s.a,{checked:t,onChange:a,className:Object(r.a)(t?"bg-gradient-to-r from-pink-500 to-yellow-500":"bg-gray-800","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:Object(n.jsx)("span",{"aria-hidden":"true",className:Object(r.a)(t?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200")})})]})}},555:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a.p+"static/media/13RMS.45341eaf.png",c=a(2),i=function(e){var t=e.theme;return Object(c.jsx)(s.Fragment,{children:Object(c.jsx)("div",{className:" home-content",children:Object(c.jsxs)("div",{className:"text-center "+t,style:{paddingTop:"3rem",paddingBottom:"1rem"},children:[Object(c.jsx)("img",{alt:"13RMS",src:n,className:"m-0 h-48"}),Object(c.jsx)("p",{className:"max-w-xl mt-5 mx-auto text-xl text-gray-500",children:"The place to sell your products, services and build business relationships"})]})})})},l=a(526),o=a(532),d=a(482),m=a(369),h=a.n(m),j=a(318),u=a(75),x=a(255),b=a(561),p=a.p+"static/media/voice.b6b27a58.png",g=a.p+"static/media/search.e20a06c9.png",f=a(94),O=a(96),v=function(e){var t=e.theme;return Object(c.jsx)(l.a,{md:{size:6},lg:{size:1},sm:{size:2},className:"country-list column mb-md-3 mb-lg-0",children:Object(c.jsx)("ul",{className:"flex items-center customDropdown p-0 m-0",children:Object(c.jsxs)("li",{className:"nav-item  mb-0",children:[Object(c.jsxs)("a",{className:"nav-link  pt-1",href:"/#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[Object(c.jsx)("img",{alt:"USA",src:O.a,className:"w-8 h-8"}),Object(c.jsx)(f.a,{className:"w-8 h-8"})]}),Object(c.jsxs)("ul",{className:"dropdown-content hidden absolute right-0 top-14 bg-white py-4 px-4 origin-top-right mt-2  rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none",id:t,children:[Object(c.jsxs)("li",{className:"nav-item",children:[Object(c.jsx)("span",{className:"mr-11 font-semibold",children:"Change language "}),Object(c.jsx)("span",{className:"hover:underline text-blue-600 cursor-pointer",children:"Learn more"})]}),Object(c.jsxs)("li",{className:"nav-item mt-2",children:[Object(c.jsx)("span",{className:"mr-14",children:"English-EN"}),Object(c.jsx)("span",{className:"cursor-pointer hover:underline text-blue-600",children:"Change"})]}),Object(c.jsx)("hr",{className:"dropdown-divider text-gray-300"}),Object(c.jsxs)("li",{className:"nav-item mt-2",children:[Object(c.jsx)("span",{className:"mr-12 font-semibold",children:"Change currency"}),Object(c.jsx)("span",{className:"cursor-pointer hover:underline text-blue-600",children:"Learn more"})]}),Object(c.jsxs)("li",{className:"nav-item mt-2",children:[Object(c.jsx)("span",{className:"mr-14",children:"$- USD- US Dollar"}),Object(c.jsx)("span",{className:"cursor-pointer hover:underline text-blue-600",children:"Change"})]}),Object(c.jsx)("hr",{className:"dropdown-divider text-gray-300"}),Object(c.jsxs)("li",{className:"nav-item flex flex-col text-center",children:[Object(c.jsxs)("span",{className:"flex mb-2",children:[Object(c.jsx)("img",{className:"w-6 h-6",src:O.a,alt:"USA"}),Object(c.jsx)("span",{className:"site-info text-gray-400",children:"You are on Tradingpost13RMS.com"})]}),Object(c.jsx)("span",{className:"cursor-pointer hover:underline text-blue-600",children:"Change country/region"})]})]})]})})})},y=Object(j.a)(Object(j.f)("text","setText",null),Object(j.f)("product","setProducts",{label:"Products",value:"products"}),Object(j.f)("voiceActivated","setVoiceStatus",!1),Object(j.f)("department","setDepartment",{value:"all",label:"All Departments"}),Object(j.d)({handleChange:function(e){var t=e.setText;return function(e){var a=e.target.value;t(a)}},changeProduct:function(e){var t=e.setProducts;return function(e){t(e)}},changeDepartment:function(e){var t=e.setDepartment;return function(e){t(e)}},voiceSearch:function(e){var t=e.setVoiceStatus,a=e.voiceActivated;return function(){t(!a),a?h.a.stopListening():h.a.startListening()}}}),Object(j.b)({componentDidMount:function(){document.addEventListener("mousedown",this.props.handleClickOutside)},componentWillUnmount:function(){document.removeEventListener("mousedown",this.props.handleClickOutside)}}),j.c)((function(e){var t,a,r=e.theme,n=e.product,i=e.changeProduct,m=e.changeDepartment,h=e.voiceSearch,j=e.handleChange,f=e.text,O=e.department,y=(e.voiceActivated,-1!==["products","bulk","all"].indexOf(n.value)?"Search":"Find a");"dark"===r?(t="#262d31",a="#fff"):(t="#f5f5f9",a="rgba(0, 0, 0, 0.87)");var N=Object(x.a)((function(e){return{tooltip:{backgroundColor:t,color:a,maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(b.a);return Object(c.jsx)(s.Fragment,{children:Object(c.jsxs)("div",{className:"search-container",children:[Object(c.jsx)("div",{className:"h-10  border-gray-200 flex flex-wrap row p-0 border-2",style:{borderBottom:0},children:Object(c.jsx)("nav",{className:"pb-1 px-0 bg-transparent navbar-expand-lg ",children:Object(c.jsx)("div",{className:"container-fluid px-0",children:Object(c.jsxs)("div",{className:"navbar-collapse search-panel",id:"navbarSupportedContent",children:[Object(c.jsx)(N,{title:Object(c.jsx)("div",{children:[{heading:"Bulk items",content:"Bulk items are items that are offered in large numbers."},{heading:"Commercial agent",content:"A commercial agent acts on your company's behalf. Find a commercial agent abroad to sell your products abroad."},{heading:"Distributor",content:"A distributor acts for its own account and risk. Find a distributor who wants to buy your products."},{heading:"Manufacturer",content:"A manufacturer is a company that produces goods. Find a manufacturer who wants to produce your product."},{heading:"Supplier",content:"A supplier provides goods or services in exchange for money. Find a supplier who sells your products for your webshop, for example"}].map((function(e){return Object(c.jsxs)("p",{className:"p1",children:[Object(c.jsx)("span",{className:"s1",children:Object(c.jsxs)("strong",{children:[e.heading,Object(c.jsx)("br",{})," "]})}),e.content]})}))}),placement:"left",disableTouchListener:!0,children:Object(c.jsx)("div",{className:"relative h-10 flex-1",children:Object(c.jsx)(d.a,{className:"highlite-area search-area products",value:n,placeholder:"Products",options:u.e,onChange:i})})}),Object(c.jsx)(l.a,{md:{size:6},lg:{size:6},sm:{size:2},className:"column mb-md-3 mb-lg-0 input-box",children:Object(c.jsxs)("div",{className:"highlite-area search-area item search-place-holder",children:[Object(c.jsx)("div",{onClick:h,className:"float-left h-full p-1 cursor-pointer",children:Object(c.jsx)("img",{alt:"voice",src:p,className:"w-8 h-auto"})}),Object(c.jsx)("input",{type:"text",className:"input-search h-9",placeholder:y+" "+n.label,name:"search",onChange:j}),f&&Object(c.jsx)("img",{alt:"search",src:g,className:"w-8 h-8 -mt-0.5 cursor-pointer"})]})}),Object(c.jsx)(l.a,{md:{size:6},lg:{size:3},sm:{size:3},className:"column mb-md-3 mb-lg-0 department-section",children:Object(c.jsx)(d.a,{className:"mr-2 highlite-area search-area products",value:O,placeholder:"All departments",options:u.d,onChange:m})}),Object(c.jsx)(v,{theme:r})]})})})}),Object(c.jsx)(o.a,{className:"h-10 border-2 border-gray-200 flex flex-wrap",children:[{data:"Recieve quotes",href:"/#"},{data:"Trending",href:"/#"},{data:"Jobs",href:"/#"},{data:"Remarkable",href:"/#"},{data:"New",href:"/#"}].map((function(e,t){return Object(c.jsx)(l.a,{className:"text-center",children:Object(c.jsx)("a",{className:"search-link link-tag mt-0",href:e.href,children:e.data})})}))})]})})})),N=a(55),w=a(22),k=a(388),C=a(68),S=a(389),P=a(69),L=function(){var e=[{name:"Develop",description:"New product developed look for manufacturers who want to produce your product",icon:w.b},{name:"Present Yourself",description:"Present yourself extensively on 13RMS to the client and employers",icon:P.b},{name:"Internships",description:"Post vacancies and internships and find the right candidates",icon:N.b},{name:"Network",description:"Worldwide selling & Networking",icon:k.a},{name:"Verified",description:"Only do business with verified users",icon:C.d},{name:"Our App",description:"Discover our app. Download our app now",icon:S.a},{name:"Protection",description:"Worldwide buyer protection. Pay safely all over the world.",icon:w.e},{name:"Payment",description:"Pay safely with 13RMS Trading post",icon:f.b}];return Object(c.jsx)("div",{className:"relative bg-white py-16 sm:py-24 lg:py-32",children:Object(c.jsxs)("div",{className:"mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl",children:[Object(c.jsxs)("p",{className:"mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl",children:["Everything you need to get started with"," ",Object(c.jsx)("span",{className:"border-b-2 border-pink-600 mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl",children:"13RMS"})]}),Object(c.jsx)("div",{className:"mt-12",children:Object(c.jsx)("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",children:e.map((function(e){return Object(c.jsx)("div",{className:"pt-6 ",children:Object(c.jsx)("div",{className:"flow-root feature cursor-pointer bg-gray-50 rounded-lg px-6 pb-8",children:Object(c.jsxs)("div",{className:"-mt-6",children:[Object(c.jsx)("div",{children:Object(c.jsx)("span",{className:"feature-icon transform  inline-flex items-center justify-center p-3 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md shadow-lg",children:Object(c.jsx)(e.icon,{className:"h-6 w-6 text-white","aria-hidden":"true"})})}),Object(c.jsx)("h3",{className:"mt-8 text-lg font-medium text-gray-900 tracking-tight",children:e.name}),Object(c.jsx)("p",{className:"mt-5 text-base text-gray-500",children:e.description})]})})},e.name)}))})})]})})},R=a(247),T=a(246),F=a(53),A=function(e){e.changeCountry;return Object(c.jsx)(R.a,{className:"relative bg-white",children:function(e){e.open;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"max-w-7xl",children:Object(c.jsxs)("div",{className:"flex justify-between items-center  py-6 md:justify-start md:space-x-10",children:[Object(c.jsx)("div",{className:"-mr-2 -my-2 md:hidden",children:Object(c.jsxs)(R.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[Object(c.jsx)("span",{className:"sr-only",children:"Open menu"}),Object(c.jsx)(N.c,{className:"h-6 w-6","aria-hidden":"true"})]})}),Object(c.jsx)(R.a.Group,{as:"nav",className:"hidden mx-0 md:flex space-x-10",children:Object(c.jsx)(R.a,{className:"relative",children:function(e){var t=e.open;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"mb-3  text-sm font-medium text-gray-400",children:"13RMS Trading post worldwide"}),Object(c.jsxs)(R.a.Button,{className:Object(F.a)(t?"text-gray-900":"text-gray-500","group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 border p-2 border-gray-400 focus:ring-indigo-500"),children:[Object(c.jsx)("img",{alt:"usa",className:"h-4 mr-1 w-4 ",src:O.a}),Object(c.jsx)("span",{children:"United States"}),Object(c.jsx)(N.a,{className:Object(F.a)(t?"text-gray-600":"text-gray-400","ml-2 h-5 w-5 group-hover:text-gray-500"),"aria-hidden":"true"})]}),Object(c.jsx)(T.a,{show:t,as:s.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:Object(c.jsx)(R.a.Panel,{static:!0,style:{maxWidth:"90rem"},className:"absolute bottom-10 z-10 -ml-4 mt-3 transform px-2 w-screen sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",children:Object(c.jsx)("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",children:Object(c.jsx)("div",{className:"relative grid bg-white px-5 py-6 sm:gap-8 sm:p-8 grid-cols-6",children:u.b.map((function(e,t){return Object(c.jsxs)("div",{className:"cursor-pointer hover:bg-gray-100 p-2 px-3 truncate rounded-md flex items-center justify-start",key:t,onClick:function(){},style:{},children:[Object(c.jsx)("img",{alt:"",src:e.flag,style:{width:"1.5rem",height:"1.5rem",marginRight:"6px"},className:"mr-4"}),Object(c.jsx)("p",{className:"mb-0",children:e.label})]})}))})})})})]})}})})]})})})}})},D={first:[{name:"About 13RMS Trading post",href:"#"},{name:"Careers",href:"#"},{name:"News",href:"#"},{name:"Blog",href:"#"},{name:"Advertise with us",href:"#"}],second:[{name:"Contact us",href:"#"},{name:"Help",href:"#"},{name:"Ask the community",href:"#"},{name:"Resolution Center",href:"#"},{name:"Seller Center",href:"#"},{name:"Your advertising preferances",href:"#"}],third:[{name:"Registration",href:"#"},{name:"Moneyback guarentee",href:"#"},{name:"Buyer protection",href:"#"},{name:"Pay safely",href:"#"}],fourth:[{name:"Start selling",href:"#"},{name:"How to sell",href:"#"}],fifth:[{name:"Join our community",href:"#"},{name:"Knowledge base",href:"#"},{name:"Groups",href:"#"},{name:"Messenger",href:"#"}],sixth:[{name:"Developers",href:"#"},{name:"Security Center",href:"#"},{name:"Site Map",href:"#"}]},W=Object(j.a)(Object(j.e)((function(){return{locationRef:r.a.createRef()}})),Object(j.f)("extraRunType","setExtraRunType",null),Object(j.f)("worldwideLocationPopoverIsOpen","setWorldwideLocationPopoverStatus",!1),Object(j.d)({openWorldWideLocationPopover:function(e){var t=e.setWorldwideLocationPopoverStatus,a=e.worldwideLocationPopoverIsOpen;return function(){t(!a)}},closeWorldWideLocationPopover:function(e){var t=e.setWorldwideLocationPopoverStatus,a=e.worldwideLocationPopoverIsOpen;return function(){t(!a)}},handleClickOutside:function(e){var t=e.locationRef,a=e.setWorldwideLocationPopoverStatus;e.worldwideLocationPopoverIsOpen;return function(e){t.current&&!t.current.contains(e.target)&&a(!1)}},changeCountry:function(){return function(e){"NL"===e&&window.location.assign("http://tradingpost13rms.nl")}}}),Object(j.b)({componentDidMount:function(){document.addEventListener("mousedown",this.props.handleClickOutside)},componentWillUnmount:function(){document.removeEventListener("mousedown",this.props.handleClickOutside)}}),j.c)((function(e){e.theme,e.worldwideLocationPopoverIsOpen,e.openWorldWideLocationPopover,e.locationRef,e.closeWorldWideLocationPopover;var t=e.changeCountry,a=(new Date).getFullYear();return Object(c.jsxs)("footer",{className:"bg-white border-t border-gray-200","aria-labelledby":"footer-heading",children:[Object(c.jsx)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),Object(c.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",children:[Object(c.jsx)("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:Object(c.jsxs)("div",{className:"mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-3",children:[Object(c.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"text-sm font-semibold text-gray-600 tracking-wider uppercase",children:"13RMS Trading post"}),Object(c.jsx)("ul",{className:"mt-4 space-y-4 pl-0",children:D.first.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.href,className:"text-sm font-medium text-gray-400 link-hover",children:e.name})},e.name)}))})]}),Object(c.jsxs)("div",{className:"mt-12 md:mt-0",children:[Object(c.jsx)("h3",{className:"text-sm font-semibold text-gray-600 tracking-wider uppercase",children:"Help & Contact"}),Object(c.jsx)("ul",{className:"mt-4 space-y-4 pl-0",children:D.second.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.href,className:"text-sm font-medium text-gray-400 link-hover",children:e.name})},e.name)}))})]})]}),Object(c.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"text-sm font-semibold text-gray-600 tracking-wider uppercase",children:"Buy"}),Object(c.jsxs)("ul",{className:"mt-4 space-y-4 pl-0",children:[D.third.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.href,className:"text-sm font-medium text-gray-400 link-hover",children:e.name})},e.name)})),Object(c.jsx)("li",{children:Object(c.jsx)(A,{changeCountry:t})})]})]}),Object(c.jsxs)("div",{className:"mt-12 md:mt-0",children:[Object(c.jsx)("h3",{className:"text-sm font-semibold text-gray-600 tracking-wider uppercase",children:"Sell"}),Object(c.jsx)("ul",{className:"mt-4 space-y-4 pl-0",children:D.fourth.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.href,className:"text-sm font-medium text-gray-400 link-hover",children:e.name})},e.name)}))})]})]}),Object(c.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"text-sm font-semibold text-gray-600 tracking-wider uppercase",children:"Community"}),Object(c.jsx)("ul",{className:"mt-4 space-y-4 pl-0",children:D.fifth.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.href,className:"text-sm font-medium text-gray-400 link-hover",children:e.name})},e.name)}))})]}),Object(c.jsxs)("div",{className:"mt-12 md:mt-0",children:[Object(c.jsx)("h3",{className:"text-sm font-semibold text-gray-600 tracking-wider uppercase",children:"Tool & Apps"}),Object(c.jsx)("ul",{className:"mt-4 space-y-4 pl-0",children:D.sixth.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.href,className:"text-sm font-medium text-gray-400 link-hover",children:e.name})},e.name)}))})]})]})]})}),Object(c.jsx)("div",{className:"mt-12 border-t border-gray-200 pt-8",children:Object(c.jsxs)("p",{className:"text-sm text-gray-600 xl:text-center",children:["\xa9 ",a," 13RMS, Inc. All rights reserved."]})})]})]})})),M=a(7),z=a(39),B=a(18),E=a(11),I=a(303);function U(){var e=Object(s.useState)(!1),t=Object(M.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(u.a[0]),i=Object(M.a)(n,2),l=i[0],o=i[1],d=Object(E.f)();return Object(c.jsx)(R.a,{className:"relative bg-white",children:function(e){e.open;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"",children:Object(c.jsxs)("div",{className:"flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10 px-2",children:[Object(c.jsx)("div",{className:"flex justify-start lg:w-0 lg:flex-1",children:Object(c.jsxs)(R.a.Group,{as:"nav",className:"hidden ml-6 md:flex space-x-10",children:[Object(c.jsx)("a",{href:"/#",className:"text-base font-medium text-gray-500 link-hover",children:"Help & Contact"}),Object(c.jsx)(R.a,{className:"relative",children:function(e){var t=e.open;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(R.a.Button,{className:Object(F.a)(t?"text-gray-900":"text-gray-500","group bg-white rounded-md inline-flex items-center text-base font-medium link-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:[Object(c.jsx)("a",{href:"/#",className:"text-base font-medium text-gray-500 link-hover",children:"Adjust Colors"}),Object(c.jsx)(z.b,{className:Object(F.a)(t?"text-gray-600":"text-gray-400","ml-2 h-5 w-5 group-hover:text-gray-500"),"aria-hidden":"true"})]}),Object(c.jsx)(T.a,{show:t,as:s.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:Object(c.jsx)(R.a.Panel,{static:!0,className:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",children:Object(c.jsx)("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",children:Object(c.jsxs)("div",{className:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",children:[Object(c.jsx)("div",{children:Object(c.jsx)(I.a,{enabled:a,text:"Select mode",subText:"Choose theme preferance",setEnabled:r})}),u.a.map((function(e){return Object(c.jsxs)("a",{onClick:function(){return o(e)},href:e.href,className:"-m-3 p-3 mt-1 flex items-center text-left rounded-lg hover:bg-gray-50 justify-start cursor-pointer",children:[Object(c.jsx)("span",{className:Object(F.a)(l.name===e.name?"bg-indigo-600 border-transparent":"bg-white border-gray-300",l.name===e.name?"ring-2 ring-offset-2 ring-indigo-500":"","h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"),"aria-hidden":"true",children:Object(c.jsx)("span",{className:"rounded-full bg-white w-1.5 h-1.5"})}),Object(c.jsx)("div",{className:"ml-4",children:Object(c.jsx)("p",{className:"text-base text-left font-medium text-gray-900 mb-0",children:e.name})})]},e.name)}))]})})})})]})}}),Object(c.jsx)("a",{href:"/#",className:"text-base text-gray-500  font-medium link-hover",children:"Join our forum"})]})}),Object(c.jsx)("div",{className:"-mr-2 -my-2 md:hidden",children:Object(c.jsxs)(R.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[Object(c.jsx)("span",{className:"sr-only",children:"Open menu"}),Object(c.jsx)(N.c,{className:"h-6 w-6","aria-hidden":"true"})]})}),Object(c.jsxs)("div",{className:"hidden md:flex items-center justify-end md:flex-1 lg:w-0",children:[Object(c.jsx)("a",{href:"/signup",className:"whitespace-nowrap text-gray-500  text-base font-medium  link-hover",children:"Join Now"}),Object(c.jsx)(B.a,{onClick:function(){return d.push("/login")},className:"ml-4",label:"Login",gradient:!0})]})]})})})}})}var J=function(e){e.themeToggler;var t=e.theme;return Object(c.jsxs)("div",{className:"w-full",children:[Object(c.jsx)(U,{theme:t}),Object(c.jsx)(i,{theme:t}),Object(c.jsxs)("div",{className:"flex flex-col",children:[Object(c.jsx)(y,{theme:t}),Object(c.jsx)(L,{theme:t})]}),Object(c.jsx)(W,{})]})},G=a(98),H=a(121);G.a.add(H.a);t.default=function(){return Object(s.useEffect)((function(){"dark"!==localStorage.getItem("theme")&&localStorage.setItem("theme","dark")}),[]),Object(c.jsx)(J,{})}}}]);
//# sourceMappingURL=8.cf80fa72.chunk.js.map