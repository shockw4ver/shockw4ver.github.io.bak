(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});n(49);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(163),u=n.n(c),l=(n(158),n(164)),s=n.n(l),d=n(162),m=n(176),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this.props,"data.site.siteMetadata"),t=s()(this.props,"data.posts.edges"),n=s()(this.props,"pageContext.tag");return o.a.createElement(d.a,{location:this.props.location},o.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:e.description}],title:""+e.title}),o.a.createElement("h1",null,n),t.map(function(e){var t=e.node,n=s()(t,"frontmatter.title")||t.fields.slug;return o.a.createElement(m.a,{key:t.fields.slug,to:t.fields.slug,title:n,date:t.frontmatter.date,tags:t.frontmatter.tags,excerpt:t.excerpt})}))},t}(o.a.Component);t.default=p;var f="3664368007"},156:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return s});var a=n(168),r=n.n(a),i=n(169),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var u=c.rhythm,l=c.scale,s={TECHFONT:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"}},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(155),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(25);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(159),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(36);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},160:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(157),r=n(158),i=Object(a.a)(r.Link).withConfig({displayName:"gatsbyWithStyled__AppLink",componentId:"ug3brl-0"})(["color:inherit;text-decoration:none;box-shadow:none;"])},161:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(50),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},162:function(e,t,n){"use strict";n(35);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(160),u=n(157),l=n(156),s=u.a.hr.withConfig({displayName:"Heading__Hr",componentId:"l8rtjv-0"})(["width:100%;height:",";width:100%;border:none;outline:none;background-color:#000;"],Object(l.b)(.1)),d=u.a.h1.withConfig({displayName:"Heading__H1",componentId:"l8rtjv-1"})(["color:#000;font-family:Georgia,Cambria,'Times New Roman',Times,serif;margin-top:0;margin-bottom:",";text-align:center;"],Object(l.b)(1.5)),m=u.a.h2.withConfig({displayName:"Heading__H2",componentId:"l8rtjv-2"})(["margin-top:0;font-family:Georgia,Cambria,'Times New Roman',Times,serif;text-align:center;"]),p=u.a.main.withConfig({displayName:"Containers__MainBody",componentId:"sc-34jvmu-0"})(["margin-left:auto;margin-right:auto;max-width:",";padding:",";"],Object(l.b)(34),Object(l.b)(1.5)+" "+Object(l.b)(.75)),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/"===n.pathname?o.a.createElement(d,{style:Object.assign({},Object(l.c)(1.5))},o.a.createElement(c.a,{to:"/"},"The Minimum Town")):o.a.createElement(m,null,o.a.createElement(c.a,{to:"/"},"The Minimum Town")),o.a.createElement(p,null,e,o.a.createElement(s,null),a)},t}(o.a.Component);t.a=f},176:function(e,t,n){"use strict";n(49),n(177);var a=n(0),r=n.n(a),i=n(157),o=n(160),c=n(156),u=i.a.h3.withConfig({displayName:"Excerpt__ExcerptTitle",componentId:"sc-4djmxj-0"})(["margin-bottom:",";color:#007acc;"],Object(c.b)(.25)),l=i.a.small.withConfig({displayName:"Excerpt__ExcerptDate",componentId:"sc-4djmxj-1"})(["margin-right:10px;color:#666;"]),s=i.a.small.withConfig({displayName:"Excerpt__ExcerptTag",componentId:"sc-4djmxj-2"})(["margin-right:10px;color:#666;cursor:pointer;"]);t.a=function(e){return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement(o.a,{style:{boxShadow:"none"},to:e.to},e.title)),r.a.createElement(l,null,e.date),r.a.createElement("small",null,"标签："),e.tags.map(function(e){return r.a.createElement(s,{key:e},r.a.createElement(o.a,{style:{boxShadow:"none"},to:"/tags/"+e},e))}),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}},177:function(e,t,n){"use strict";n(178)("small",function(e){return function(){return e(this,"small","","")}})},178:function(e,t,n){var a=n(6),r=n(17),i=n(27),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-templates-blog-tag-jsx-17b796106a997475b098.js.map