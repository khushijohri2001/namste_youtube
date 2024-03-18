"use strict";(self.webpackChunknamste_youtube=self.webpackChunknamste_youtube||[]).push([[368],{2934:function(e,t,n){n.d(t,{Z:function(){return h}});var s=n(4165),i=n(5861),l=n(9439),r=n(2791),a=n(9434),u=n(2402),c=n(1087),o=n(5640),d=function(e){var t=[{suffix:"T",threshold:1e12},{suffix:"B",threshold:1e9},{suffix:"M",threshold:1e6},{suffix:"K",threshold:1e3},{suffix:"",threshold:1}].find((function(t){return Math.abs(e)>=t.threshold}));return t?(e/t.threshold).toFixed(2)+t.suffix:e},f=n(184),h=function(e){var t=e.info,n=(0,r.useState)([]),h=(0,l.Z)(n,2),m=(h[0],h[1]),x=(0,r.useState)(),v=(0,l.Z)(x,2),j=v[0],p=v[1],w=(0,r.useState)([]),g=(0,l.Z)(w,2),Z=g[0],b=g[1],y=(0,r.useState)(!0),N=(0,l.Z)(y,2),k=N[0],S=N[1],F=(0,a.v9)((function(e){return e.menu.isMenuOpen})),C=t.snippet,E=C.channelId,I=C.title,M=C.channelTitle,T=C.thumbnails,V=C.liveBroadcastContent,B=t.id,O=(null===B||void 0===B?void 0:B.videoId)||B;return(0,r.useEffect)((function(){(0,i.Z)((0,s.Z)().mark((function e(){var t,n,i,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch((0,u.GE)(O));case 2:return i=e.sent,e.next=5,i.json();case 5:l=e.sent,m(null===l||void 0===l?void 0:l.items[0]),p(null===l||void 0===l||null===(t=l.items[0])||void 0===t||null===(n=t.statistics)||void 0===n?void 0:n.viewCount);case 8:case"end":return e.stop()}}),e)})))()}),[O]),(0,r.useEffect)((function(){try{var e=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n,i,l,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch((0,u.kT)(E));case 2:return l=e.sent,e.next=5,l.json();case 5:r=e.sent,b(null===r||void 0===r||null===(t=r.items[0])||void 0===t||null===(n=t.snippet)||void 0===n||null===(i=n.thumbnails)||void 0===i?void 0:i.default),S(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),(0,f.jsx)(f.Fragment,{children:k?(0,f.jsx)(o.Z,{}):(0,f.jsx)(c.rU,{to:"/watch?v="+O,children:(0,f.jsxs)("div",{className:"shadow-md rounded-lg p-3 bg-white h-full ".concat(F?"  w-96":" w-[22rem]"," max-sm:w-[22rem]"),children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{className:"object-cover rounded-lg \n          ".concat(F?" h-[13rem] w-96":"h-[12rem] w-[22rem]"," \n          max-sm:h-[11rem] max-sm:w-80"),src:T.medium.url,alt:I,loading:"lazy"})}),(0,f.jsxs)("div",{className:"flex gap-4 mt-2 justify-between",children:[(0,f.jsx)("div",{className:"w-12",children:(0,f.jsx)("img",{src:null===Z||void 0===Z?void 0:Z.url,alt:"user icon",className:"w-12 h-12 object-cover rounded-full"})}),(0,f.jsxs)("div",{className:"w-[85%]",children:[(0,f.jsx)("h3",{className:"font-bold text-lg max-sm:text-sm line-clamp-2",children:I}),(0,f.jsx)("p",{className:"text-md font-medium text-gray-600",children:M}),(0,f.jsx)("p",{className:"text-md font-medium text-red-600",children:"none"===!V&&V}),(0,f.jsxs)("p",{className:"text-md font-medium text-gray-600",children:[d(j)," views"]})]})]})]})})})}},8368:function(e,t,n){n.r(t);var s=n(9439),i=n(2791),l=n(2934),r=n(5640),a=n(9434),u=n(1380),c=n(184);t.default=function(){var e=(0,i.useState)(!0),t=(0,s.Z)(e,2),n=t[0],o=t[1],d=(0,i.useState)(!1),f=(0,s.Z)(d,2),h=f[0],m=f[1],x=(0,a.I0)(),v=(0,a.v9)((function(e){return e.videos})),j=v.allVideos,p=v.allFilterVideos,w=v.isApiCalled,g=v.status;return(0,i.useEffect)((function(){try{w||(x((0,u.Fi)()),x((0,u.YW)())),o(!1)}catch(h){m(!0)}}),[x,w]),h||"failed"===g?(0,c.jsxs)("p",{className:"flex items-center justify-center h-[60vh] text-3xl font-bold",children:["Oops! Something went wrong \ud83d\ude2c"," "]}):(0,c.jsx)("div",{children:n||"loading"===g||0===(null===j||void 0===j?void 0:j.length)?(0,c.jsx)(r.Z,{}):(0,c.jsx)("div",{style:{width:"100%",height:"100%"},className:"flex flex-wrap gap-4 my-4 justify-between max-sm:justify-center",children:0===(null===p||void 0===p?void 0:p.length)?(0,c.jsx)("h1",{className:"flex items-center justify-center h-[60vh] text-3xl font-bold",children:"No Videos Found"}):(0,c.jsx)(c.Fragment,{children:p.map((function(e){return(0,c.jsx)("div",{children:(0,c.jsx)(l.Z,{info:e})},e.etag)}))})})})}}}]);
//# sourceMappingURL=368.6f88a4d9.chunk.js.map