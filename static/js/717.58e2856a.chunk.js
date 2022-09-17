"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[717],{4717:function(a,e,r){r.r(e),r.d(e,{default:function(){return G}});var t=r(1413),n=r(2791),s=r(2677),o=r(5987),c=r(1694),i=r.n(c),d=r(162),l=r(6543),f=r(7472),u=r(184),b=["bsPrefix","className","variant","as"],v=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,s=a.variant,c=a.as,l=void 0===c?"img":c,f=(0,o.Z)(a,b),v=(0,d.vE)(r,"card-img");return(0,u.jsx)(l,(0,t.Z)({ref:e,className:i()(s?"".concat(v,"-").concat(s):v,n)},f))}));v.displayName="CardImg";var p=v,x=r(6040),m=["bsPrefix","className","as"],y=n.forwardRef((function(a,e){var r=a.bsPrefix,s=a.className,c=a.as,l=void 0===c?"div":c,f=(0,o.Z)(a,m),b=(0,d.vE)(r,"card-header"),v=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:b}}),[b]);return(0,u.jsx)(x.Z.Provider,{value:v,children:(0,u.jsx)(l,(0,t.Z)((0,t.Z)({ref:e},f),{},{className:i()(s,b)}))})}));y.displayName="CardHeader";var g=y,Z=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,f.Z)("h5"),N=(0,f.Z)("h6"),j=(0,l.Z)("card-body"),P=(0,l.Z)("card-title",{Component:h}),C=(0,l.Z)("card-subtitle",{Component:N}),S=(0,l.Z)("card-link",{Component:"a"}),k=(0,l.Z)("card-text",{Component:"p"}),T=(0,l.Z)("card-footer"),w=(0,l.Z)("card-img-overlay"),B=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,s=a.bg,c=a.text,l=a.border,f=a.body,b=a.children,v=a.as,p=void 0===v?"div":v,x=(0,o.Z)(a,Z),m=(0,d.vE)(r,"card");return(0,u.jsx)(p,(0,t.Z)((0,t.Z)({ref:e},x),{},{className:i()(n,m,s&&"bg-".concat(s),c&&"text-".concat(c),l&&"border-".concat(l)),children:f?(0,u.jsx)(j,{children:b}):b}))}));B.displayName="Card",B.defaultProps={body:!1};var R=Object.assign(B,{Img:p,Title:P,Subtitle:C,Body:j,Link:S,Text:k,Header:g,Footer:T,ImgOverlay:w}),E=r(9439),z=r(5341),F=["as","bsPrefix","variant","size","active","className"],I=n.forwardRef((function(a,e){var r=a.as,n=a.bsPrefix,s=a.variant,c=a.size,l=a.active,f=a.className,b=(0,o.Z)(a,F),v=(0,d.vE)(n,"btn"),p=(0,z.FT)((0,t.Z)({tagName:r},b)),x=(0,E.Z)(p,2),m=x[0],y=x[1].tagName;return(0,u.jsx)(y,(0,t.Z)((0,t.Z)((0,t.Z)({},m),b),{},{ref:e,className:i()(f,v,l&&"active",s&&"".concat(v,"-").concat(s),c&&"".concat(v,"-").concat(c),b.href&&b.disabled&&"disabled")}))}));I.displayName="Button",I.defaultProps={variant:"primary",active:!1,disabled:!1};var V=I,H=["bsPrefix","bg","pill","text","className","as"],_=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.bg,s=a.pill,c=a.text,l=a.className,f=a.as,b=void 0===f?"span":f,v=(0,o.Z)(a,H),p=(0,d.vE)(r,"badge");return(0,u.jsx)(b,(0,t.Z)((0,t.Z)({ref:e},v),{},{className:i()(l,p,s&&"rounded-pill",c&&"text-".concat(c),n&&"bg-".concat(n))}))}));_.displayName="Badge",_.defaultProps={bg:"primary",pill:!1};var D=_,L=r(6444),O=r(8635),A={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},G=function(a){var e,r,o=(0,n.useContext)(L.Ni),c=a.project;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(R,{style:(0,t.Z)((0,t.Z)({},A.cardStyle),{},{backgroundColor:o.cardBackground,borderColor:o.cardBorderColor}),text:o.bsSecondaryVariant,children:[(0,u.jsx)(R.Img,{variant:"top",src:null===c||void 0===c?void 0:c.image}),(0,u.jsxs)(R.Body,{children:[(0,u.jsx)(R.Title,{style:A.cardTitleStyle,children:c.title}),(0,u.jsx)(R.Text,{style:A.cardTextStyle,children:(r=c.bodyText,(0,u.jsx)(O.D,{children:r}))})]}),(0,u.jsx)(R.Body,{children:null===c||void 0===c||null===(e=c.links)||void 0===e?void 0:e.map((function(a){return(0,u.jsx)(V,{style:A.buttonStyle,variant:"outline-"+o.bsSecondaryVariant,onClick:function(){return window.open(a.href,"_blank")},children:a.text},a.href)}))}),c.tags&&(0,u.jsx)(R.Footer,{style:{backgroundColor:o.cardFooterBackground},children:c.tags.map((function(a){return(0,u.jsx)(D,{pill:!0,bg:o.bsSecondaryVariant,text:o.bsPrimaryVariant,style:A.badgeStyle,children:a},a)}))})]})})}},2677:function(a,e,r){var t=r(9439),n=r(1413),s=r(5987),o=r(1694),c=r.n(o),i=r(2791),d=r(162),l=r(184),f=["as","bsPrefix","className"],u=["className"];var b=i.forwardRef((function(a,e){var r=function(a){var e=a.as,r=a.bsPrefix,t=a.className,o=(0,s.Z)(a,f);r=(0,d.vE)(r,"col");var i=(0,d.pi)(),l=(0,d.zG)(),u=[],b=[];return i.forEach((function(a){var e,t,n,s=o[a];delete o[a],"object"===typeof s&&null!=s?(e=s.span,t=s.offset,n=s.order):e=s;var c=a!==l?"-".concat(a):"";e&&u.push(!0===e?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(e)),null!=n&&b.push("order".concat(c,"-").concat(n)),null!=t&&b.push("offset".concat(c,"-").concat(t))})),[(0,n.Z)((0,n.Z)({},o),{},{className:c().apply(void 0,[t].concat(u,b))}),{as:e,bsPrefix:r,spans:u}]}(a),o=(0,t.Z)(r,2),i=o[0],b=i.className,v=(0,s.Z)(i,u),p=o[1],x=p.as,m=void 0===x?"div":x,y=p.bsPrefix,g=p.spans;return(0,l.jsx)(m,(0,n.Z)((0,n.Z)({},v),{},{ref:e,className:c()(b,!g.length&&y)}))}));b.displayName="Col",e.Z=b}}]);
//# sourceMappingURL=717.58e2856a.chunk.js.map