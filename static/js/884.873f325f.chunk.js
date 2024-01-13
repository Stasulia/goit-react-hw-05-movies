"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{854:function(r,e,t){t.d(e,{a:function(){return a}});var n=t(154),c=t(184),a=function(){return(0,c.jsx)(n.p2,{height:"80",width:"80",color:"rgb(164, 218, 220)",ariaLabel:"circles-loading",wrapperStyle:{display:"flex",justifyContent:"center",textAlign:"center"},visible:!0})}},793:function(r,e,t){t.d(e,{$h:function(){return i},XT:function(){return s},_n:function(){return o},fh:function(){return l},tx:function(){return v},zv:function(){return p}});var n=t(861),c=t(757),a=t.n(c),u=t(294),i="7e904d0cc36c36a15049d60007f4c80a",o="https://api.themoviedb.org/3",s=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(e));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(i));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting movie details: ",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting movie credits",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error getting reviews for the movie:",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},884:function(r,e,t){t.r(e);var n=t(861),c=t(439),a=t(757),u=t.n(a),i=t(854),o=t(793),s=t(791),l=t(689),p=t(87),v=t(184);e.default=function(){var r=(0,s.useState)(null),e=(0,c.Z)(r,2),t=e[0],a=e[1],f=(0,l.UO)().movieId,h=(0,l.TH)(),d=(0,l.s0)(),x=(0,s.useRef)(h.state);if((0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.fh)(f);case 3:e=r.sent,a(e),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error searching movie details:",r.t0),a(null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[f]),!t)return(0,v.jsx)(i.a,{});var m=t.genres.map((function(r){return r.name})).join(",");return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("button",{onClick:function(){var r;d(null!==(r=x.current)&&void 0!==r?r:"/")},children:"GO BACK"}),(0,v.jsx)("h1",{children:t.title}),(0,v.jsxs)("p",{children:["Overview: ",t.overview]}),(0,v.jsxs)("p",{children:["Genres: ",m," "]})," ",(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"movieDetails.title"}),(0,v.jsx)("p",{children:"Additional information:"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=884.873f325f.chunk.js.map