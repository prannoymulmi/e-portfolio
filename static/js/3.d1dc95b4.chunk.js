(this["webpackJsonpprannoy-eportfolio"]=this["webpackJsonpprannoy-eportfolio"]||[]).push([[3,8],{154:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);t(0),t(89);var o=t(1);n.default=function(e){var n=e.title;return Object(o.jsx)("div",{className:"header",children:n})}},92:function(e,n,t){"use strict";t.r(n);var o=t(9),i=t(0),c=t(153),r=t(138),d=t(63),a=t.n(d),l=t(20),s=t(24),u=t(87),h=t(29),j=(t(154),t(1));n.default=function(e){var n=Object(i.useContext)(l.a),t=e.header,d=Object(i.useState)(null),v=Object(o.a)(d,2),b=v[0],w=v[1],f=Object(i.useState)("50vw"),O=Object(o.a)(f,2),m=O[0],p=O[1],C=Object(i.useState)("VERTICAL_ALTERNATING"),x=Object(o.a)(C,2),T=x[0],y=x[1];return Object(i.useEffect)((function(){var e,n,t,o,i,c;fetch(s.a.education,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return w(e)})).catch((function(e){return e})),(null===(e=window)||void 0===e?void 0:e.innerWidth)<576&&y("VERTICAL"),(null===(n=window)||void 0===n?void 0:n.innerWidth)<576||(null===(t=window)||void 0===t?void 0:t.innerWidth)>=576&&(null===(o=window)||void 0===o?void 0:o.innerWidth)<768?p("90vw"):(null===(i=window)||void 0===i?void 0:i.innerWidth)>=768&&(null===(c=window)||void 0===c?void 0:c.innerWidth)<1024?p("75vw"):p("50vw")}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.default,{title:t}),b?Object(j.jsx)(a.a,{children:Object(j.jsx)("div",{style:{width:m},className:"section-content-container",children:Object(j.jsx)(r.a,{children:Object(j.jsx)(c.a,{hideControls:!0,allowDynamicUpdate:!0,useReadMore:!1,items:b.education,cardHeight:250,mode:T,theme:{primary:n.accentColor,secondary:n.accentColor,cardBgColor:n.chronoTheme.cardBgColor,cardForeColor:n.chronoTheme.cardForeColor,titleColor:n.chronoTheme.titleColor},children:Object(j.jsx)("div",{className:"chrono-icons",children:b.education.map((function(e){return e.icon?Object(j.jsx)("img",{src:e.icon.src,alt:e.icon.alt},e.icon.src):null}))})})})})}):Object(j.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=3.d1dc95b4.chunk.js.map