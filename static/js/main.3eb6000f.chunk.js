(this["webpackJsonpevacutation-guides"]=this["webpackJsonpevacutation-guides"]||[]).push([[0],{19:function(e,t,i){},20:function(e,t,i){},27:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var c=i(0),a=i.n(c),n=i(9),u=i.n(n),s=(i(19),i(20),i(4)),l=[{imageSrc:"/evacuation-guides/211101180337.jpg",imageAlt:"B1",title:"B1\uce35"},{imageSrc:"/evacuation-guides/211101180343.jpg",imageAlt:"1\uce35",title:"1\uce35"},{imageSrc:"/evacuation-guides/211101180358.jpg",imageAlt:"2\uce35",title:"2\uce35"},{imageSrc:"/evacuation-guides/211101180410.jpg",imageAlt:"3\uce35",title:"3\uce35"},{imageSrc:"/evacuation-guides/211101180424.jpg",imageAlt:"4\uce35",title:"4\uce35"},{imageSrc:"/evacuation-guides/211101180439.jpg",imageAlt:"5\uce35",title:"5\uce35"},{imageSrc:"/evacuation-guides/211101180449.jpg",imageAlt:"6\uce35",title:"6\uce35"},{imageSrc:"/evacuation-guides/211101180502.jpg",imageAlt:"7\uce35",title:"7\uce35"},{imageSrc:"/evacuation-guides/211101180524.jpg",imageAlt:"8\uce35",title:"8\uce35"},{imageSrc:"/evacuation-guides/211101180538.jpg",imageAlt:"9\uce35",title:"9\uce35"}],g=i(5),d=i(1),r="SET_SELECTED_GUIDE_ID",j="SET_SELECTED_GUIDE_IMAGE_SRC",o=function(e){return function(t){t({type:r,payload:e})}},m=(i(27),i(2)),b=function(e){var t=e.imageSrc,i=e.imageAlt,c=e.title,a=Object(g.b)(),n=Object(d.f)();return Object(m.jsxs)("div",{className:"guide-wrapper",onClick:function(){var e,i=t.split("/evacuation-guides/")[1].split(".jpg")[0];a(o(i)),a((e=t,function(t){t({type:j,payload:e})})),n("./".concat(i))},children:[Object(m.jsx)("img",{alt:i,src:t,className:"guide-thumbnail"}),Object(m.jsx)("h3",{children:c})]})},p=(i(29),function(){return Object(m.jsx)("div",{className:"guide-list",children:l.map((function(e){return Object(m.jsx)(b,Object(s.a)({},e))}))})}),O=i(7),v=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"\uc548\ub155\ud558\uc138\uc694!!"}),Object(m.jsx)(O.b,{to:"1/guides",children:"\ub86f\ub370\ubc31\ud654\uc810 \ud53c\ub09c\uc548\ub0b4\ub3c4"})]})},h=(i(30),function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.guide.selectedGuideId}));return Object(c.useEffect)((function(){var t=window.location.href.split("/");e(o(t[t.length-1]))})),Object(m.jsxs)("div",{className:"guide-detail-wrapper",children:[Object(m.jsx)("img",{className:"guide-detail-image",src:"/evacuation-guides"+"/".concat(t,".jpg"),alt:""}),Object(m.jsx)("img",{className:"fire-extinguisher-guide-image",src:"/evacuation-guides/fire-extinguisher-guide.png",alt:""})]})});var f=function(){return Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/",element:Object(m.jsx)(v,{})}),Object(m.jsx)(d.a,{path:":placeId/guides",element:Object(m.jsx)(p,{})}),Object(m.jsx)(d.a,{path:":placeId/guides/:guideDetailId",element:Object(m.jsx)(h,{})})]})},x=i(8),S=i(14),I={placeId:null,selectedGuideId:null,selectedGuideImageSrc:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(s.a)(Object(s.a)({},e),{},{selectedGuideId:t.payload});case j:return Object(s.a)(Object(s.a)({},e),{},{selectedGuideImageSrc:t.payload});default:return e}},A=Object(x.b)({guide:E}),y=[S.a],G=Object(x.c)(A,{},x.a.apply(void 0,y));u.a.render(Object(m.jsx)(O.a,{basename:"/evacuation-guides",children:Object(m.jsx)(g.a,{store:G,children:Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3eb6000f.chunk.js.map