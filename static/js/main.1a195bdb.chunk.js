(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(16),c(1)),b=c(6),j=c.n(b),r=c(0),d=c(2),l=function(e){var t=e.tabs,c=Object(i.h)().id,a=Object(r.useMemo)((function(){return t.find((function(e){return e.id===c}))}),[c]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("li",{className:j()({"is-active":c===e.id}),"data-cy":"tab",children:Object(d.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"tab-content",children:a?a.content:"Tab not found"})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"nav",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(d.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home page"})}),Object(d.jsx)(i.b,{path:"/home",element:Object(d.jsx)(i.a,{to:"/",replace:!0})}),Object(d.jsxs)(i.b,{path:"/tabs",children:[Object(d.jsx)(i.b,{index:!0,element:Object(d.jsx)(l,{tabs:o})}),Object(d.jsx)(i.b,{path:":id",element:Object(d.jsx)(l,{tabs:o})})]}),Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1a195bdb.chunk.js.map