"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{793:function(r,t,e){e.d(t,{$h:function(){return o},XT:function(){return s},_n:function(){return i},fh:function(){return p},tx:function(){return v},zv:function(){return f}});var n=e(861),c=e(757),a=e.n(c),u=e(294),o="7e904d0cc36c36a15049d60007f4c80a",i="https://api.themoviedb.org/3",s=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting movie details: ",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting movie credits",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting reviews for the movie:",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},415:function(r,t,e){e.r(t);var n=e(861),c=e(439),a=e(757),u=e.n(a),o=e(791),i=e(294),s=e(793),p=e(87),f=e(184);t.default=function(){var r=(0,o.useState)([]),t=(0,c.Z)(r,2),e=t[0],a=t[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("".concat(s._n,"/trending/movie/day?api_key=").concat(s.$h));case 3:t=r.sent,a(t.data.results),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),a([]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Home"}),(0,f.jsx)("p",{children:"Trending today:"}),(0,f.jsx)("ul",{children:e.map((function(r){return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"/movies/".concat(r.id),children:r.title})},r.id)}))})]})}}}]);
//# sourceMappingURL=415.c3f9315f.chunk.js.map