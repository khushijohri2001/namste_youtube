"use strict";(self.webpackChunknamste_youtube=self.webpackChunknamste_youtube||[]).push([[368],{2934:function(e,t,n){n.d(t,{Z:function(){return h}});var s=n(4165),r=n(5861),i=n(9439),a=n(2791),l=n(9434),o=n(2402),c=n(1087),u=n(5640),d=function(e){var t=[{suffix:"T",threshold:1e12},{suffix:"B",threshold:1e9},{suffix:"M",threshold:1e6},{suffix:"K",threshold:1e3},{suffix:"",threshold:1}].find((function(t){return Math.abs(e)>=t.threshold}));return t?(e/t.threshold).toFixed(2)+t.suffix:e},f=n(184),h=function(e){var t=e.info,n=(0,a.useState)([]),h=(0,i.Z)(n,2),m=(h[0],h[1]),x=(0,a.useState)(),v=(0,i.Z)(x,2),p=v[0],j=v[1],w=(0,a.useState)([]),g=(0,i.Z)(w,2),Z=(g[0],g[1]),b=(0,a.useState)(!0),y=(0,i.Z)(b,2),N=y[0],k=y[1],S=(0,l.v9)((function(e){return e.menu.isMenuOpen})),C=t.snippet,F=C.channelId,E=C.title,M=C.channelTitle,B=C.thumbnails,I=C.liveBroadcastContent,O=t.id,T=(null===O||void 0===O?void 0:O.videoId)||O;return(0,a.useEffect)((function(){(0,r.Z)((0,s.Z)().mark((function e(){var t,n,r,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch((0,o.XC)(T));case 2:return r=e.sent,e.next=5,r.json();case 5:i=e.sent,m(null===i||void 0===i?void 0:i.items[0]),j(null===i||void 0===i||null===(t=i.items[0])||void 0===t||null===(n=t.statistics)||void 0===n?void 0:n.viewCount);case 8:case"end":return e.stop()}}),e)})))()}),[T]),(0,a.useEffect)((function(){try{var e=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n,r,i,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch((0,o.kT)(F));case 2:return i=e.sent,e.next=5,i.json();case 5:a=e.sent,Z(null===a||void 0===a||null===(t=a.items[0])||void 0===t||null===(n=t.snippet)||void 0===n||null===(r=n.thumbnails)||void 0===r?void 0:r.default),k(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),(0,f.jsx)(f.Fragment,{children:N?(0,f.jsx)(u.Z,{}):(0,f.jsx)(c.rU,{to:"/watch?v="+T,children:(0,f.jsxs)("div",{className:"shadow-md rounded-lg p-3 bg-white h-full ".concat(S?"  w-96":" w-[22rem]"," max-sm:w-[22rem]"),children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{className:"object-cover rounded-lg \n          ".concat(S?" h-[13rem] w-96":"h-[12rem] w-[22rem]"," \n          max-sm:h-[11rem] max-sm:w-80"),src:B.medium.url,alt:E,loading:"lazy"})}),(0,f.jsx)("div",{className:"flex gap-4 mt-2 justify-between",children:(0,f.jsxs)("div",{className:"w-[85%]",children:[(0,f.jsx)("h3",{className:"font-bold text-lg max-sm:text-sm line-clamp-2",children:E}),(0,f.jsx)("p",{className:"text-md font-medium text-gray-600",children:M}),(0,f.jsx)("p",{className:"text-md font-medium text-red-600",children:"none"===!I&&I}),(0,f.jsxs)("p",{className:"text-md font-medium text-gray-600",children:[d(p)," views"]})]})})]})})})}},8368:function(e,t,n){n.r(t);var s=n(4165),r=n(5861),i=n(9439),a=n(2791),l=(n(2934),n(2402)),o=n(5640),c=n(9434),u=n(1380),d=n(184);t.default=function(){var e=(0,a.useState)(!0),t=(0,i.Z)(e,2),n=t[0],f=t[1],h=(0,a.useState)(!1),m=(0,i.Z)(h,2),x=m[0],v=m[1],p=(0,c.I0)(),j=(0,c.v9)((function(e){return e.videos.allVideos})),w=(0,c.v9)((function(e){return e.videos.allFilterVideos}));return(0,a.useEffect)((function(){try{var e=new AbortController,t=e.signal;return(0,r.Z)((0,s.Z)().mark((function e(){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.BO,{signal:t});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p((0,u.F4)(r.items)),p((0,u.M)(r.items)),f(!1);case 9:case"end":return e.stop()}}),e)})))(),function(){e.abort()}}catch(x){"AbortError"===x.name?console.log("cancelled"):v(!0)}}),[p]),x?(0,d.jsxs)("p",{className:"flex items-center justify-center h-[60vh] text-3xl font-bold",children:["Oops! Something went wrong \ud83d\ude2c"," "]}):(0,d.jsx)("div",{children:n||0===(null===j||void 0===j?void 0:j.length)?(0,d.jsx)(o.Z,{}):(0,d.jsx)("div",{style:{width:"100%",height:"100%"},className:"flex flex-wrap gap-4 my-4 justify-between max-sm:justify-center",children:0===(null===w||void 0===w?void 0:w.length)?(0,d.jsx)("h1",{className:"flex items-center justify-center h-[60vh] text-3xl font-bold",children:"No Videos Found"}):(0,d.jsx)(d.Fragment,{})})})}}}]);
//# sourceMappingURL=368.5f6da0d5.chunk.js.map