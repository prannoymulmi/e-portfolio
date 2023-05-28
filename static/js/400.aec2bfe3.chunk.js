"use strict";(self.webpackChunkprannoy_eportfolio=self.webpackChunkprannoy_eportfolio||[]).push([[400,84],{7084:function(e,n,r){r.r(n);r(2791),r(3508);var t=r(184);n.default=function(e){var n=e.title;return(0,t.jsx)("div",{className:"header",children:n})}},3400:function(e,n,r){r.r(n),r.d(n,{default:function(){return Y}});var t=r(9439),a=r(2791),o=r(1056),i=r(1413),c=r(5987),s=r(1694),l=r.n(s),d=r(8580),u=r(162),v=r(7858);function f(e,n){return Array.isArray(e)?e.includes(n):e===n}var x=a.createContext({});x.displayName="AccordionContext";var m=x,h=r(184),y=["as","bsPrefix","className","children","eventKey"],p=a.forwardRef((function(e,n){var r=e.as,t=void 0===r?"div":r,o=e.bsPrefix,s=e.className,d=e.children,x=e.eventKey,p=(0,c.Z)(e,y),b=(0,a.useContext)(m).activeEventKey;return o=(0,u.vE)(o,"accordion-collapse"),(0,h.jsx)(v.Z,(0,i.Z)((0,i.Z)({ref:n,in:f(b,x)},p),{},{className:l()(s,o),children:(0,h.jsx)(t,{children:a.Children.only(d)})}))}));p.displayName="AccordionCollapse";var b=p,Z=a.createContext({eventKey:""});Z.displayName="AccordionItemContext";var j=Z,g=["as","bsPrefix","className"],N=a.forwardRef((function(e,n){var r=e.as,t=void 0===r?"div":r,o=e.bsPrefix,s=e.className,d=(0,c.Z)(e,g);o=(0,u.vE)(o,"accordion-body");var v=(0,a.useContext)(j).eventKey;return(0,h.jsx)(b,{eventKey:v,children:(0,h.jsx)(t,(0,i.Z)((0,i.Z)({ref:n},d),{},{className:l()(s,o)}))})}));N.displayName="AccordionBody";var C=N,k=r(3433),P=["as","bsPrefix","className","onClick"];var w=a.forwardRef((function(e,n){var r=e.as,t=void 0===r?"button":r,o=e.bsPrefix,s=e.className,d=e.onClick,v=(0,c.Z)(e,P);o=(0,u.vE)(o,"accordion-button");var x=(0,a.useContext)(j).eventKey,y=function(e,n){var r=(0,a.useContext)(m),t=r.activeEventKey,o=r.onSelect,i=r.alwaysOpen;return function(r){var a=e===t?null:e;i&&(a=Array.isArray(t)?t.includes(e)?t.filter((function(n){return n!==e})):[].concat((0,k.Z)(t),[e]):[e]),null==o||o(a,r),null==n||n(r)}}(x,d),p=(0,a.useContext)(m).activeEventKey;return"button"===t&&(v.type="button"),(0,h.jsx)(t,(0,i.Z)((0,i.Z)({ref:n,onClick:y},v),{},{"aria-expanded":x===p,className:l()(s,o,!f(p,x)&&"collapsed")}))}));w.displayName="AccordionButton";var K=w,S=["as","bsPrefix","className","children","onClick"],I=a.forwardRef((function(e,n){var r=e.as,t=void 0===r?"h2":r,a=e.bsPrefix,o=e.className,s=e.children,d=e.onClick,v=(0,c.Z)(e,S);return a=(0,u.vE)(a,"accordion-header"),(0,h.jsx)(t,(0,i.Z)((0,i.Z)({ref:n},v),{},{className:l()(o,a),children:(0,h.jsx)(K,{onClick:d,children:s})}))}));I.displayName="AccordionHeader";var E=I,A=["as","bsPrefix","className","eventKey"],R=a.forwardRef((function(e,n){var r=e.as,t=void 0===r?"div":r,o=e.bsPrefix,s=e.className,d=e.eventKey,v=(0,c.Z)(e,A);o=(0,u.vE)(o,"accordion-item");var f=(0,a.useMemo)((function(){return{eventKey:d}}),[d]);return(0,h.jsx)(j.Provider,{value:f,children:(0,h.jsx)(t,(0,i.Z)((0,i.Z)({ref:n},v),{},{className:l()(s,o)}))})}));R.displayName="AccordionItem";var U=R,L=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],D=a.forwardRef((function(e,n){var r=(0,d.Ch)(e,{activeKey:"onSelect"}),t=r.as,o=void 0===t?"div":t,s=r.activeKey,v=r.bsPrefix,f=r.className,x=r.onSelect,y=r.flush,p=r.alwaysOpen,b=(0,c.Z)(r,L),Z=(0,u.vE)(v,"accordion"),j=(0,a.useMemo)((function(){return{activeEventKey:s,onSelect:x,alwaysOpen:p}}),[s,x,p]);return(0,h.jsx)(m.Provider,{value:j,children:(0,h.jsx)(o,(0,i.Z)((0,i.Z)({ref:n},b),{},{className:l()(f,Z,y&&"".concat(Z,"-flush"))}))})}));D.displayName="Accordion";var O=Object.assign(D,{Button:K,Collapse:b,Item:U,Header:E,Body:C}),T=r(7022),z=r(9743),B=r(2677),M=r(1398),V=r(3360),G=r(54),H=r(4313),F=r(9945),_=r(1087),W=r(7084),q=r(126),J=r(2150),Q=(r(7237),r(4261)),X={introTextContainer:{margin:50,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500,marginBottom:50},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"},header:{margin:"100px 0 50px 0"},unitText:{padding:"50px 0 0 0"}};var Y=function(){var e,n,r=(0,a.useState)(null),i=(0,t.Z)(r,2),c=i[0],s=i[1],l=(0,a.useContext)(H.Ni),d=function(e){return(0,h.jsx)(o.D,{children:e,rehypePlugins:[F.Z]})};(0,a.useEffect)((function(){fetch(q.Z.srmMain,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return e}))}),[]);var u=c?c.outcome.length:3;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(W.default,{title:"Security and Risk Management"}),(0,h.jsx)("div",{children:(0,h.jsx)(T.Z,{className:"about-screen-body-container",children:c?(0,h.jsxs)(G.ZP,{children:[(0,h.jsx)(z.Z,{children:(0,h.jsxs)(B.Z,{style:X.introTextContainer,children:[(0,h.jsx)("h2",{style:X.header,children:"Module Learning Outcomes"}),(0,h.jsxs)(M.Z,{as:"li",numbered:!0,children:[null===(e=c.outcome)||void 0===e?void 0:e.slice(0,u).map((function(e){return(0,h.jsx)(M.Z.Item,{style:{backgroundColor:l.background,color:l.color},children:e},(0,Q.Z)())})),(0,h.jsx)("a",{href:c.githubLink,children:(0,h.jsx)(V.Z,{style:X.buttonStyle,variant:"outline-"+l.bsSecondaryVariant,className:"artefact-button",children:"Check out all artefacts"},(0,Q.Z)())})]})]})}),(0,h.jsx)("hr",{}),(0,h.jsx)("h3",{children:" Units in Details"}),null===(n=c.units)||void 0===n?void 0:n.map((function(e){var n,r;return(0,h.jsxs)(z.Z,{children:[(0,h.jsx)(B.Z,{style:X.introTextContainer,children:(0,h.jsx)(O,{style:{backgroundColor:l.background,color:l.color},children:(0,h.jsxs)(O.Item,{eventKey:(0,Q.Z)(),style:{backgroundColor:l.background,color:l.color},children:[(0,h.jsx)(O.Header,{style:{backgroundColor:l.background,color:l.color},children:e.title}),(0,h.jsx)(O.Body,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{style:X.header,children:e.title}),(0,h.jsx)("h4",{children:"Learning Outcomes"}),(0,h.jsx)(M.Z,{as:"li",numbered:!0,children:null===(n=e.outcome)||void 0===n?void 0:n.slice(0,u).map((function(e){return(0,h.jsx)(M.Z.Item,{style:{backgroundColor:l.background,color:l.color},children:e},e)}))}),null===(r=e.details)||void 0===r?void 0:r.map((function(e){return e&&(0,h.jsxs)("div",{style:X.unitText,children:[d(e.activity),e.route&&(0,h.jsx)(_.rU,{to:e.route,children:(0,h.jsx)(V.Z,{style:X.buttonStyle,variant:"outline-"+l.bsSecondaryVariant,children:"Learn More"},e.route)}),e.downloadLink&&(0,h.jsx)("a",{href:e.downloadLink,children:(0,h.jsx)(V.Z,{style:X.buttonStyle,variant:"outline-"+l.bsSecondaryVariant,children:"Link"},e.route)})]},e.route)}))]})})]},(0,Q.Z)())},(0,Q.Z)())}),(0,h.jsx)("hr",{})]})})),(0,h.jsx)(z.Z,{children:(0,h.jsxs)(B.Z,{style:X.introTextContainer,children:[(0,h.jsx)("h2",{style:X.header,children:"Reflections"}),(0,h.jsx)("img",{src:"/e-portfolio/images/reflection.jpeg"}),d(c.about),(0,h.jsx)(_.rU,{to:c.reflectionLink,children:(0,h.jsx)(V.Z,{style:X.buttonStyle,variant:"outline-"+l.bsSecondaryVariant,children:"Read More"},c.reflectionLink)})]})})]}):(0,h.jsx)(J.default,{})})})]})}},3360:function(e,n,r){var t=r(1413),a=r(9439),o=r(5987),i=r(1694),c=r.n(i),s=r(2791),l=r(5341),d=r(162),u=r(184),v=["as","bsPrefix","variant","size","active","className"],f=s.forwardRef((function(e,n){var r=e.as,i=e.bsPrefix,s=e.variant,f=e.size,x=e.active,m=e.className,h=(0,o.Z)(e,v),y=(0,d.vE)(i,"btn"),p=(0,l.FT)((0,t.Z)({tagName:r},h)),b=(0,a.Z)(p,2),Z=b[0],j=b[1].tagName;return(0,u.jsx)(j,(0,t.Z)((0,t.Z)((0,t.Z)({},Z),h),{},{ref:n,className:c()(m,y,x&&"active",s&&"".concat(y,"-").concat(s),f&&"".concat(y,"-").concat(f),h.href&&h.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=f},1398:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(1413),a=r(5987),o=r(1694),i=r.n(o),c=r(2791),s=(r(2391),r(8580)),l=r(1561),d=r(162),u=r(9439),v=r(9007),f=r(4787),x=r(8633),m=r(184),h=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],y=c.forwardRef((function(e,n){var r=e.bsPrefix,o=e.active,c=e.disabled,s=e.eventKey,l=e.className,y=e.variant,p=e.action,b=e.as,Z=(0,a.Z)(e,h);r=(0,d.vE)(r,"list-group-item");var j=(0,f.v)((0,t.Z)({key:(0,x.h)(s,Z.href),active:o},Z)),g=(0,u.Z)(j,2),N=g[0],C=g[1],k=(0,v.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();N.onClick(e)}));c&&void 0===Z.tabIndex&&(Z.tabIndex=-1,Z["aria-disabled"]=!0);var P=b||(p?Z.href?"a":"button":"div");return(0,m.jsx)(P,(0,t.Z)((0,t.Z)((0,t.Z)({ref:n},Z),N),{},{onClick:k,className:i()(l,r,C.isActive&&"active",c&&"disabled",y&&"".concat(r,"-").concat(y),p&&"".concat(r,"-action"))}))}));y.displayName="ListGroupItem";var p=y,b=["className","bsPrefix","variant","horizontal","numbered","as"],Z=c.forwardRef((function(e,n){var r,o=(0,s.Ch)(e,{activeKey:"onSelect"}),c=o.className,u=o.bsPrefix,v=o.variant,f=o.horizontal,x=o.numbered,h=o.as,y=void 0===h?"div":h,p=(0,a.Z)(o,b),Z=(0,d.vE)(u,"list-group");return f&&(r=!0===f?"horizontal":"horizontal-".concat(f)),(0,m.jsx)(l.Z,(0,t.Z)((0,t.Z)({ref:n},p),{},{as:y,className:i()(c,Z,v&&"".concat(Z,"-").concat(v),r&&"".concat(Z,"-").concat(r),x&&"".concat(Z,"-numbered"))}))}));Z.displayName="ListGroup";var j=Object.assign(Z,{Item:p})},4261:function(e,n,r){r.d(n,{Z:function(){return d}});var t,a={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},o=new Uint8Array(16);function i(){if(!t&&!(t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(o)}for(var c=[],s=0;s<256;++s)c.push((s+256).toString(16).slice(1));function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(c[e[n+0]]+c[e[n+1]]+c[e[n+2]]+c[e[n+3]]+"-"+c[e[n+4]]+c[e[n+5]]+"-"+c[e[n+6]]+c[e[n+7]]+"-"+c[e[n+8]]+c[e[n+9]]+"-"+c[e[n+10]]+c[e[n+11]]+c[e[n+12]]+c[e[n+13]]+c[e[n+14]]+c[e[n+15]]).toLowerCase()}var d=function(e,n,r){if(a.randomUUID&&!n&&!e)return a.randomUUID();var t=(e=e||{}).random||(e.rng||i)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){r=r||0;for(var o=0;o<16;++o)n[r+o]=t[o];return n}return l(t)}},2391:function(e){var n=function(){};e.exports=n},7237:function(){}}]);
//# sourceMappingURL=400.aec2bfe3.chunk.js.map