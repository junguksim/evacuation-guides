(this["webpackJsonpevacutation-guides"]=this["webpackJsonpevacutation-guides"]||[]).push([[0],{31:function(e,t){},487:function(e,t,a){},488:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(20),s=a.n(i),r=(a(61),a(62),a(7)),u=[{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180337.jpg",imageAlt:"B1",title:"B1\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180343.jpg",imageAlt:"1\uce35",title:"1\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180358.jpg",imageAlt:"2\uce35",title:"2\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180410.jpg",imageAlt:"3\uce35",title:"3\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180424.jpg",imageAlt:"4\uce35",title:"4\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180439.jpg",imageAlt:"5\uce35",title:"5\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180449.jpg",imageAlt:"6\uce35",title:"6\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180502.jpg",imageAlt:"7\uce35",title:"7\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180524.jpg",imageAlt:"8\uce35",title:"8\uce35"},{imageSrc:"https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180538.jpg",imageAlt:"9\uce35",title:"9\uce35"}],o=a(10),l=a(4),d="SET_SELECTED_GUIDE_ID",p="SET_SELECTED_GUIDE_IMAGE_SRC",j=(a(69),a(3)),g=function(e){var t=e.imageSrc,a=e.imageAlt,n=e.title,c=Object(o.b)(),i=Object(l.f)();return Object(j.jsxs)("div",{className:"guide-wrapper",onClick:function(){var e,a,n=t.split(".com/")[1].split(".jpg")[0];c((e=n,function(t){t({type:d,payload:e})})),c((a=t,function(e){e({type:p,payload:a})})),i("./".concat(n))},children:[Object(j.jsx)("img",{alt:a,src:t,className:"guide-thumbnail"}),Object(j.jsx)("h3",{children:n})]})},m=(a(71),a(21)),h=a(8),b=a.n(h),v=a(23),f=a(73),O=function(){var e=new f.S3({accessKeyId:"AKIAZRSRA5DE4KP4XMCR",secretAccessKey:"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"}),t=function(){var t=Object(v.a)(b.a.mark((function t(a){var n,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.split("/"),c=n[3],i={Bucket:"evacuation-guides",Key:c},t.abrupt("return",new Promise((function(t){e.getObject(i,(function(e,a){var n=new Blob([a.Body],{type:a.ContentType});t(n)}))})).then((function(e){return e})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var e=Object(v.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.createElement("a")).href=window.URL.createObjectURL(t),n.download=a,n.click();case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n=function(){var e=Object(v.a)(b.a.mark((function e(){var n,c,i,s,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(m.a)(u),e.prev=1,n.s();case 3:if((c=n.n()).done){e.next=12;break}return i=c.value,s=i.imageSrc,r=i.title,e.next=7,t(s);case 7:return o=e.sent,e.next=10,a(o,r);case 10:e.next=3;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"guide-list-float-button",onClick:n,children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 20 20",children:[Object(j.jsx)("title",{children:"download"}),Object(j.jsx)("path",{d:"M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"}),Object(j.jsx)("path",{d:"M10 15l5-6h-4V1H9v8H5l5 6z"})]})})},x=function(){return Object(j.jsxs)("div",{className:"guide-list",children:[Object(j.jsx)(O,{}),u.map((function(e){return Object(j.jsx)(g,Object(r.a)({},e))}))]})},w=a(15),S=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"\uc548\ub155\ud558\uc138\uc694!!"}),Object(j.jsx)(w.b,{to:"1/guides",children:"\ub86f\ub370\ubc31\ud654\uc810 \ud53c\ub09c\uc548\ub0b4\ub3c4"})]})},y=(a(487),function(){var e=Object(o.c)((function(e){return e.guide.selectedGuideImageSrc}));return Object(j.jsx)("div",{className:"guide-detail-wrapper",children:Object(j.jsx)("img",{className:"guide-detail-image",src:e,alt:""})})});var I=function(){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(S,{})}),Object(j.jsx)(l.a,{path:":placeId/guides",element:Object(j.jsx)(x,{})}),Object(j.jsx)(l.a,{path:":placeId/guides/:guideDetailId",element:Object(j.jsx)(y,{})})]})},A=a(16),E=a(56),z={placeId:null,selectedGuideId:null,selectedGuideImageSrc:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(r.a)(Object(r.a)({},e),{},{selectedGuideId:t.payload});case p:return Object(r.a)(Object(r.a)({},e),{},{selectedGuideImageSrc:t.payload});default:return e}},G=Object(A.b)({guide:k}),C=[E.a],B=Object(A.c)(G,{},A.a.apply(void 0,C));s.a.render(Object(j.jsx)(w.a,{basename:"/evacuation-guides",children:Object(j.jsx)(o.a,{store:B,children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})})})}),document.getElementById("root"))},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){}},[[488,1,2]]]);
//# sourceMappingURL=main.53c8f4d0.chunk.js.map