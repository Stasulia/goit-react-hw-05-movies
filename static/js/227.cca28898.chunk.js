"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{590:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(861),a=t(439),c=t(757),u=t.n(c),i=t(791),s=t(689),o=t(793),p=t.p+"static/media/default_actor.3c056bd12668b2333a47.jpg",l=t(854),f=t(184),h=function(){var e=(0,s.UO)().movieId,r=(0,i.useState)([]),t=(0,a.Z)(r,2),c=t[0],h=t[1],d=(0,i.useState)(null),v=(0,a.Z)(d,2),m=v[0],x=v[1],g=(0,i.useState)(""),j=(0,a.Z)(g,2),b=j[0],w=j[1],k=(0,i.useState)(!1),y=(0,a.Z)(k,2),Z=y[0],_=y[1];return(0,i.useEffect)((function(){if(_(!0),e){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.zv)(e);case 3:t=r.sent,(n=t.cast).length||(x("No actors are mentioned"),w("rejected")),h(n),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),x(r.t0.message),w("rejected");case 13:return r.prev=13,_(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,9,13,16]])})));return function(){return r.apply(this,arguments)}}();r()}}),[e]),(0,f.jsxs)("div",{children:[Z&&(0,f.jsx)(l.a,{}),"rejected"===b&&(0,f.jsx)("p",{children:m}),c.map((function(e){return e.profile_path?(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name}),(0,f.jsxs)("p",{children:["Name: ",e.name]}),(0,f.jsxs)("p",{children:["Character: ",e.character]})]},e.id):(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:p,alt:e.name,height:225}),(0,f.jsxs)("p",{children:["Name: ",e.name]}),(0,f.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))]})}},854:function(e,r,t){t.d(r,{a:function(){return c}});var n=t(154),a=t(184),c=function(){return(0,a.jsx)(n.p2,{height:"80",width:"80",color:"rgb(164, 218, 220)",ariaLabel:"circles-loading",wrapperStyle:{display:"flex",justifyContent:"center",textAlign:"center"},visible:!0})}},793:function(e,r,t){t.d(r,{$h:function(){return i},XT:function(){return o},_n:function(){return s},fh:function(){return p},zv:function(){return l}});var n=t(861),a=t(757),c=t.n(a),u=t(294),i="7e904d0cc36c36a15049d60007f4c80a",s="https://api.themoviedb.org/3",o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error getting movie details: ",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error getting movie credits",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=227.cca28898.chunk.js.map