"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{3311:function(n,t,e){var r=e(4165),a=e(5861),i=e(4569),o=e.n(i),s="1abcab100520369e11a771de2f4e2532",c="https://api.themoviedb.org/3",u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(c,"/trending/movie/day?api_key=").concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(c,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,a=e.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(c,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f={fetchPopularMovies:u,fetchMoviesName:p,fetchMovieById:h,fetchFilmCasts:l,fetchFilmReviews:d};t.Z=f},6425:function(n,t,e){e.r(t),e.d(t,{default:function(){return Q}});var r,a,i,o,s,c,u,p,h,l,d,f,x,g,m=e(5785),v=e(5671),w=e(3144),Z=e(136),b=e(2882),j=e(2791),C=e(1045),k=e(168),y=e(6031),I=e(1523),S=y.ZP.button(r||(r=(0,k.Z)(["\n    position: absolute;\n    display: flex;\n    padding: 5px;\n    width: 100px;\n    margin-left: 10px;\n    margin-bottom: 15px;\n    margin-top: 3px;\n    cursor: pointer;\n    background-color: grey;\n    color: white;\n    border-radius: 5px;\n        &:hover {\n           background-color: orange;\n           color: blue;\n           font-weight: 700;\n"]))),A=y.ZP.div(a||(a=(0,k.Z)(["\n  display: flex;\n  background-color: grey;\n  color: black;\n"]))),F=y.ZP.div(i||(i=(0,k.Z)(["\n  margin-left: 20px;\n  margin-top: 15px;\n"]))),K=y.ZP.div(o||(o=(0,k.Z)(["\n  display: flex;\n"]))),P=y.ZP.p(s||(s=(0,k.Z)(["\n  margin-right: 15px;\n  font-weight: 400;\n"]))),Y=y.ZP.ul(c||(c=(0,k.Z)(["\n  display: flex;\n  list-style: none;\n  border-bottom: 1px solid grey;\n  padding-bottom: 30px;\n  margin-top: 15px;\n  padding-top: 10px;\n  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.281);\n"]))),M=y.ZP.div(u||(u=(0,k.Z)(["\n  background-color: grey;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  font-weight: 700;\n"]))),U=(0,y.ZP)(I.OL)(p||(p=(0,k.Z)(["\n    padding-bottom: 12px;\n  color: black;\n  font-size: 18px;\n  font-weight: 500;\n  border-bottom: 3px solid transparent;\n  transition: color: red;\n  text-decoration: none;\n  list-style: none;\n  margin-right: 20px;\n    &:hover {\n    cursor: pointer;\n    color: red;\n  }\n  "]))),H=y.ZP.img(h||(h=(0,k.Z)(["\n  border-radius: 5px;\n  margin-left: 20px;\n  margin-top: 35px;\n  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.9);\n"]))),N=e(9793),R=y.ZP.img(l||(l=(0,k.Z)(["\n  height: auto;\n  width: 111px;\n  border-radius: 5px;\n"]))),B=y.ZP.ul(d||(d=(0,k.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background-color: grey;\n  margin-top: 0;\n"]))),q=y.ZP.li(f||(f=(0,k.Z)(["\n  margin-right: 15px;\n  text-align: center;\n  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.281);\n  border-radius: 5px;\n  margin-bottom: 10px;\n"]))),E=y.ZP.p(x||(x=(0,k.Z)(["\n  color: white;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n"]))),V=y.ZP.p(g||(g=(0,k.Z)(["\n  color: white;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n"]))),z=e(184),D=function(n){var t=n.casts;return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(B,{children:t.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character,i="https://image.tmdb.org/t/p/w200".concat(e);return(0,z.jsxs)(q,{children:[(0,z.jsx)(R,{src:e?i:N,alt:r}),(0,z.jsx)(E,{children:r}),(0,z.jsx)(V,{children:a})]},t)}))})})},G=e(3311),O=function(n){(0,Z.Z)(e,n);var t=(0,b.Z)(e);function e(){var n;(0,v.Z)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={movie:{},query:"",casts:[],reviews:[],from:""},n.buttonBack=function(){var t,e=n.props.history;n.state.query?e.push({pathname:null===(t=n.state)||void 0===t?void 0:t.from,search:"query=".concat(n.state.query),query:n.state.query}):e.push("/")},n}return(0,w.Z)(e,[{key:"componentDidMount",value:function(){var n,t,e=this,r=this.props.match.params.movieId;G.Z.fetchMovieById(r).then((function(n){return e.setState({movie:n})})),G.Z.fetchFilmCasts(r).then((function(n){return e.setState({casts:(0,m.Z)(n)})})),G.Z.fetchFilmReviews(r).then((function(n){return e.setState({reviews:(0,m.Z)(n)})})),this.setState({from:null===(n=this.props.location.state)||void 0===n?void 0:n.from,query:null===(t=this.props.location.state)||void 0===t?void 0:t.query})}},{key:"render",value:function(){var n=this,t=this.state.movie,e=t.title,r=t.vote_average,a=t.overview,i=t.genres,o=t.poster_path,s="https://image.tmdb.org/t/p/w300".concat(o);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(A,{children:[(0,z.jsx)(S,{type:"button",onClick:this.buttonBack,children:"Go back"}),(0,z.jsx)(H,{src:o&&s,alt:e}),(0,z.jsxs)(F,{children:[(0,z.jsx)("h2",{children:e}),(0,z.jsxs)("p",{children:["User Score: ",r,"/10"]}),(0,z.jsx)("h3",{children:"Overview"}),(0,z.jsx)("p",{children:a}),(0,z.jsx)("h3",{children:"Genres"}),(0,z.jsx)(K,{children:i&&i.map((function(n){return(0,z.jsx)(P,{children:n.name},n.id)}))})]})]}),(0,z.jsx)(M,{children:(0,z.jsxs)(Y,{children:[(0,z.jsx)("li",{children:(0,z.jsx)(U,{to:"".concat(this.props.match.url,"/cast"),activeStyle:{fontWeight:"bold",color:"orange"},children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(U,{to:"".concat(this.props.match.url,"/reviews"),activeStyle:{fontWeight:"bold",color:"orange"},children:"Reviews"})})]})}),(0,z.jsx)(C.rs,{children:(0,z.jsx)(C.AW,{path:"".concat(this.props.match.path,"/cast"),render:function(t){return(0,z.jsx)(D,{casts:n.state.casts})}})})]})}}]),e}(j.Component),Q=O},9793:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=movie-details-page.63393f1c.chunk.js.map