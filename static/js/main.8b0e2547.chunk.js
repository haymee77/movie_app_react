(this.webpackJsonpmovie_app_react=this.webpackJsonpmovie_app_react||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),s=a(7),i=a(1);a(37);var l=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus tow make four. If that is granted, all else follows."'),r.a.createElement("span",null,"- George Orwell, 1984"))},m=a(10),u=a(11),v=a(13),p=a(12),d=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component),E=a(15),f=a.n(E),_=a(29),h=a(30),y=a.n(h);a(56);var g=function(e){var t=e.id,a=e.title,n=e.summary,o=e.poster,c=e.rating,i=e.year,l=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(s.b,{to:{pathname:"/movie/".concat(t),state:{title:a,summary:n,poster:o,rating:c,year:i,genres:l}}},r.a.createElement("img",{src:o,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},i),r.a.createElement("ul",{className:"movie__genres"},l.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"..."))))},b=(a(62),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(_.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=date_added&order_by=desc");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.isLoading;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(g,{key:e.id,title:e.title,id:e.id,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,year:e.year,genres:e.genres})}))))}}]),a}(r.a.Component));a(63);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"About"))};var j=function(){return r.a.createElement(s.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:b}),r.a.createElement(i.a,{path:"/about",component:l}),r.a.createElement(i.a,{path:"/movie/:id",component:d}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8b0e2547.chunk.js.map