(this["webpackJsonpprannoy-eportfolio"]=this["webpackJsonpprannoy-eportfolio"]||[]).push([[5,8],{142:function(e,t,c){"use strict";var a=c(9),n=c(2),r=c(3),o=c(4),s=c.n(o),i=c(0),l=c(7),f=c(1),j=["as","bsPrefix","className"],u=["className"];var b=i.forwardRef((function(e,t){var c=function(e){var t=e.as,c=e.bsPrefix,a=e.className,o=Object(r.a)(e,j);c=Object(l.c)(c,"col");var i=Object(l.a)(),f=Object(l.b)(),u=[],b=[];return i.forEach((function(e){var t,a,n,r=o[e];delete o[e],"object"===typeof r&&null!=r?(t=r.span,a=r.offset,n=r.order):t=r;var s=e!==f?"-".concat(e):"";t&&u.push(!0===t?"".concat(c).concat(s):"".concat(c).concat(s,"-").concat(t)),null!=n&&b.push("order".concat(s,"-").concat(n)),null!=a&&b.push("offset".concat(s,"-").concat(a))})),[Object(n.a)(Object(n.a)({},o),{},{className:s.a.apply(void 0,[a].concat(u,b))}),{as:t,bsPrefix:c,spans:u}]}(e),o=Object(a.a)(c,2),i=o[0],b=i.className,d=Object(r.a)(i,u),O=o[1],p=O.as,h=void 0===p?"div":p,v=O.bsPrefix,x=O.spans;return Object(f.jsx)(h,Object(n.a)(Object(n.a)({},d),{},{ref:t,className:s()(b,!x.length&&v)}))}));b.displayName="Col",t.a=b},152:function(e,t,c){"use strict";var a=c(2),n=c(3),r=c(4),o=c.n(r),s=c(0),i=c(7),l=c(1),f=["bsPrefix","className","as"],j=s.forwardRef((function(e,t){var c=e.bsPrefix,r=e.className,s=e.as,j=void 0===s?"div":s,u=Object(n.a)(e,f),b=Object(i.c)(c,"row"),d=Object(i.a)(),O=Object(i.b)(),p="".concat(b,"-cols"),h=[];return d.forEach((function(e){var t,c=u[e];delete u[e],t=null!=c&&"object"===typeof c?c.cols:c;var a=e!==O?"-".concat(e):"";null!=t&&h.push("".concat(p).concat(a,"-").concat(t))})),Object(l.jsx)(j,Object(a.a)(Object(a.a)({ref:t},u),{},{className:o.a.apply(void 0,[r,b].concat(h))}))}));j.displayName="Row",t.a=j},87:function(e,t,c){"use strict";c.r(t);c(0),c(89);var a=c(1);t.default=function(e){var t=e.title;return Object(a.jsx)("div",{className:"header",children:t})}},91:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c(0),r=c(167),o=c(138),s=c(152),i=c(142),l=c(63),f=c.n(l),j=c(87),u=c(24),b=c(29),d=c(1),O={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};t.default=function(e){var t,c=e.header,l=Object(n.useState)(null),p=Object(a.a)(l,2),h=p[0],v=p[1];return Object(n.useEffect)((function(){fetch(u.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return e}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.default,{title:c}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(o.a,{children:h?Object(d.jsx)(f.a,{children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(i.a,{style:O.introTextContainer,children:(t=h.about,Object(d.jsx)(r.a,{children:t}))}),Object(d.jsx)(i.a,{style:O.introImageContainer,children:Object(d.jsx)("img",{src:null===h||void 0===h?void 0:h.imageSource,alt:"profile"})})]})}):Object(d.jsx)(b.default,{})})})]})}}}]);
//# sourceMappingURL=5.943ae307.chunk.js.map