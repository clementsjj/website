webpackJsonp([0xc19374f83753],{132:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=l(1),r=a(n),u=l(6),d=a(u),f=l(25),m=a(f);t.default=function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement(m.default,null),r.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:"1.45rem"}},r.default.createElement("h1",null,"Blog"),r.default.createElement("hr",null),r.default.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),r.default.createElement("hr",{style:{width:"20%"}}),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.default.createElement(d.default,{to:t.fields.slug,style:{textDecoration:"none",color:"inherit"}},r.default.createElement("h3",null,t.frontmatter.title),r.default.createElement("p",null,r.default.createElement("span",null,r.default.createElement("em",null,"- ",t.frontmatter.date))),r.default.createElement("p",null,t.excerpt))})))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-js-da47ad3e01cb542937da.js.map