(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(e,t,n){"use strict";n.r(t);n(49);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),c=(n(158),n(164)),s=n.n(c),u=n(163),l=n.n(u),d=n(179),m=n(162),p=n(156),f=n(157),h=p.a.span.withConfig({displayName:"Tag",componentId:"js00nw-0"})(["position:relative;display:inline-block;height:",";line-height:",";padding:0 ",";margin-right:",";&::after{content:'';position:absolute;bottom:0;left:0;display:block;height:",";width:100%;background-color:#000;transform:scale(0,0);transition:300ms;}&:hover{&::after{transform:scale(1,1);}}"],Object(f.b)(1.5),Object(f.b)(1.5),Object(f.b)(.2),Object(f.b)(.5),Object(f.b)(.1)),g=n(160);n.d(t,"pageQuery",function(){return y});var b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),n=s()(this,"props.data.tags.group");return o.a.createElement(m.a,{location:this.props.location},o.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),o.a.createElement(d.a,null),n.map(function(e){return o.a.createElement(h,{key:e.fieldValue},o.a.createElement(g.a,{to:"/tags/"+e.fieldValue},e.fieldValue))}))},t}(o.a.Component),y=(t.default=b,"1166945422")},157:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return l});var a=n(168),i=n.n(a),r=n(169),o=n.n(r);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new i.a(o.a);var s=c.rhythm,u=c.scale,l={TECHFONT:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"}},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(155),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(25);n.d(t,"waitForRouteChange",function(){return u.c});var l=n(159),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var m=n(36);n.d(t,"parsePath",function(){return m.a});var p=i.a.createContext({}),f=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},160:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(156),i=n(158),r=Object(a.a)(i.Link).withConfig({displayName:"gatsbyWithStyled__AppLink",componentId:"ug3brl-0"})(["color:inherit;text-decoration:none;box-shadow:none;"])},161:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(50),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},162:function(e,t,n){"use strict";n(35);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),c=n(4),s=n.n(c),u=n(156),l=u.a.footer.withConfig({displayName:"Footer__Container",componentId:"jwjtm4-0"})(["position:fixed;left:0;bottom:0;height:50px;width:100%;color:#666;font-size:14px;line-height:50px;text-align:center;"]),d=function(e){return o.a.createElement(l,null,e.children)};d.propTypes={color:s.a.string};var m=d,p=n(160),f=n(157),h=u.a.hr.withConfig({displayName:"Heading__Hr",componentId:"l8rtjv-0"})(["width:100%;height:",";width:100%;border:none;outline:none;background-color:#000;"],Object(f.b)(.1)),g=u.a.h1.withConfig({displayName:"Heading__H1",componentId:"l8rtjv-1"})(["color:#000;font-family:Georgia,Cambria,'Times New Roman',Times,serif;margin-top:0;margin-bottom:",";text-align:center;"],Object(f.b)(1.5)),b=u.a.h2.withConfig({displayName:"Heading__H2",componentId:"l8rtjv-2"})(["margin-top:0;font-family:Georgia,Cambria,'Times New Roman',Times,serif;text-align:center;"]),y=u.a.main.withConfig({displayName:"Containers__MainBody",componentId:"sc-34jvmu-0"})(["margin-left:auto;margin-right:auto;max-width:",";padding:",";"],Object(f.b)(34),Object(f.b)(1.5)+" "+Object(f.b)(.75)),w=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/"===n.pathname?o.a.createElement(g,{style:Object.assign({},Object(f.c)(1.5))},o.a.createElement(p.a,{to:"/"},"The Minimum Town")):o.a.createElement(b,null,o.a.createElement(p.a,{to:"/"},"The Minimum Town")),o.a.createElement(y,null,e,o.a.createElement(h,null),a,o.a.createElement(m,null,"Powered by 了不起的盖茨比"))},t}(o.a.Component);t.a=w},170:function(e,t,n){var a=n(26).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},179:function(e,t,n){"use strict";n(170);var a=n(0),i=n.n(a),r=n(156),o=(n(180),n(182),n(157)),c=r.a.section.withConfig({displayName:"Bio__Container",componentId:"sc-10vo74t-0"})(["display:flex;align-items:center;justify-content:center;margin-bottom:",";"],Object(o.b)(2.5)),s=r.a.img.withConfig({displayName:"Bio__Avatar",componentId:"sc-10vo74t-1"})(["margin-right:",";margin-bottom:0;width:",";height:",";border-radius:50%;"],Object(o.b)(.5),Object(o.b)(2),Object(o.b)(2)),u=r.a.p.withConfig({displayName:"Bio__Description",componentId:"sc-10vo74t-2"})(["margin:0;padding:0;font-family:Georgia,Cambria,'Times New Roman',Times,serif;"]);t.a=function(e){return i.a.createElement(c,null,i.a.createElement(s,{src:e.avatar,alt:e.name}),i.a.createElement(u,null,e.motto,i.a.createElement("br",null),i.a.is,"function"==typeof e.description?i.a.createElement(e.description,null):e.description))}},180:function(e,t,n){},182:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-60de4b4043b136c27e0d.js.map