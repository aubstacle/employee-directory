(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(2),c=s.n(r),a=s(16),l=s.n(a),h=s(17),i=s(3),o=s(4),u=s(6),j=s(5),d=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={people:e.props},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.setState({people:this.props.person})}},{key:"render",value:function(){return Object(n.jsxs)("table",{className:"table table-hover",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",onClick:this.props.clickEvent,children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Location"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"Phone"})]})}),this.props.person.map((function(e,t){return Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:Object(n.jsx)("img",{src:e.picture.thumbnail,alt:e.name.first})}),Object(n.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(n.jsxs)("td",{children:[e.location.city,", ",e.location.state]}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.phone})]})},t)}))]})}}]),s}(r.Component),p=(s(24),function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("form",{className:"text-center",onSubmit:e.handleSearch,children:Object(n.jsx)("input",{type:"text",placeholder:"search by first name",onChange:e.handleInput,value:e.search,name:"search",id:"search"})}),Object(n.jsx)(d,{person:e.searchResults,clickEvent:e.handleSort})]})}),b=(s(25),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"text-center",children:[Object(n.jsx)("h3",{className:"header",onClick:this.props.handleHeaderClick,children:"Employee Directory"}),Object(n.jsx)("h5",{className:"header",children:"Search or Sort by First Name!"})]})}}]),s}(r.Component)),O=s(18),m=s.n(O),f=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],searchResults:[]},e.handleInput=function(t){var s=t.target,n=s.name,r=s.value;e.setState(Object(h.a)({},n,r))},e.handleSearch=function(t){t.preventDefault();for(var s=e.state.search,n=[],r=0;r<e.state.results.length;r++){e.state.results[r].name.first===s&&n.push(e.state.results[r])}e.setState({searchResults:n})},e.handleSort=function(){for(var t=e.state.results,s=[],n=0;n<t.length;n++)s.push(t[n]);s.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})),e.setState({searchResults:s})},e.handleHeaderClick=function(){e.setState({searchResults:e.state.results})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://randomuser.me/api/?results=100&nat=us").then((function(t){e.setState({searchResults:t.data.results,results:t.data.results})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{handleHeaderClick:this.handleHeaderClick}),Object(n.jsx)(p,{search:this.state.search,results:this.state.results,searchResults:this.state.searchResults,handleSearch:this.handleSearch,handleInput:this.handleInput,handleSort:this.handleSort})]})}}]),s}(r.Component);var x=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(f,{})})};s(43);l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.dba9ad93.chunk.js.map