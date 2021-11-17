(this["webpackJsonptravel-advisor"]=this["webpackJsonptravel-advisor"]||[]).push([[0],{42:function(e,t,c){},46:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(5),i=c.n(a),l=(c(42),c(8)),r=c(37),o=c(30),d=c(2),j=function(e){var t=e.setCoordinates,c=Object(s.useState)(null),n=Object(l.a)(c,2),a=n[0],i=n[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"header",style:{backgroundColor:"#252525"},children:Object(d.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light ",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("h5",{class:"navbar-brand",style:{color:"white"},children:"Travel Advisor"}),Object(d.jsxs)("div",{className:"d-flex flex-column flex-sm-row",id:"",children:[Object(d.jsx)("h6",{className:"px-2 navbar-brand",style:{color:"white"},children:"Explore New place"}),Object(d.jsx)(r.a,{onLoad:function(e){return i(e)},onPlaceChanged:function(){var e=a.getPlace().geometry.location.lat(),c=a.getPlace().geometry.location.lng();t({lat:e,lng:c})},children:Object(d.jsxs)("div",{class:"input-group input-group-sm mb-3 position-relative",children:[Object(d.jsx)("span",{class:"input-group-text",id:"inputGroup-sizing-sm",children:Object(d.jsx)(o.a,{})}),Object(d.jsx)("input",{type:"text",placeholder:"Search...",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"})]})})]})]})})})})},b=c(31),h=c(13),u=function(e){var t,c=e.setCoordinates,n=e.setBounds,a=e.coordinates,i=e.places,r=(e.setchildClicked,e.weatherData),o=Object(s.useState)(window.screen.width),j=Object(l.a)(o,2),u=j[0],p=j[1],m=function(){p(window.screen.width)};return Object(s.useEffect)((function(){return window.addEventListener("resize",m),function(){window.removeEventListener("resize",m)}})),Object(d.jsx)("div",{className:"container-fluid",style:{height:"85vh",width:"100%"},children:Object(d.jsxs)(b.a,{bootstrapURLKeys:{key:"AIzaSyDKAIWbkM0JwPKv5CVcIvM_iYsj5c7XtMs"},google:window.google,defaultCenter:a,center:a,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!0,zoomControl:!0},onChange:function(e){c({lat:e.center.lat,lng:e.center.lng}),n({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){},children:[null===i||void 0===i?void 0:i.map((function(e,t){return u<576?Object(d.jsx)(h.a,{color:"blue",size:"2em"}):Object(d.jsx)("div",{className:"markerContainer",lat:Number(e.latitude),lng:Number(e.longitude),style:{height:"auto",width:"70px",backgroundColor:"white"},children:Object(d.jsxs)("div",{className:"p-1",children:[Object(d.jsx)("p",{className:"rating",children:e.rating}),Object(d.jsx)("img",{src:e.photo?e.photo.images.large.url:"https://media-cdn.tripadvisor.com/media/photo-p/15/0a/28/b8/photo2jpg.jpg",alt:"",style:{height:"80%",width:"100%"}}),Object(d.jsx)("p",{className:"pt-2",children:e.name})]})},t)})),null===r||void 0===r||null===(t=r.list)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("div",{lat:e.coord.lat,lng:e.coord.lng,children:Object(d.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:""})},t)}))]})})},p=c(33),m=function(e){var t,c,s=e.place;e.ref;return Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("div",{className:"image-holder py-2",style:{height:"200px",width:"100%"},children:Object(d.jsx)("img",{src:s.photo?s.photo.images.large.url:"https://media-cdn.tripadvisor.com/media/photo-p/15/0a/28/b8/photo2jpg.jpg",alt:"",style:{height:"100%",width:"100%"}})}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("h5",{children:s.name}),Object(d.jsxs)("section",{className:"price d-flex justify-content-between",children:[Object(d.jsx)("p",{children:s.price}),Object(d.jsx)("p",{children:s.price_level})]}),Object(d.jsxs)("section",{className:"ranking d-flex justify-content-between ",children:[Object(d.jsx)("p",{children:"Ranking"}),Object(d.jsx)("p",{children:s.ranking})]}),Object(d.jsxs)("section",{className:"ranking d-flex justify-content-between ",children:[Object(d.jsx)("p",{children:"Rating"}),Object(d.jsx)("p",{children:s.rating})]}),null===s||void 0===s||null===(t=s.awards)||void 0===t?void 0:t.map((function(e){return Object(d.jsxs)("section",{className:"awards my-1 d-flex justify-content-between ",children:[Object(d.jsx)("img",{src:e.images.small,alt:e.display_name}),Object(d.jsx)("span",{children:e.display_name})]})})),null===s||void 0===s||null===(c=s.cuisine)||void 0===c?void 0:c.map((function(e){var t=e.name;return Object(d.jsx)("section",{className:"foodType my-2 d-flex flex-column",children:Object(d.jsx)("span",{className:"px-2",style:{backgroundColor:"grey",borderRadius:"10px"},children:t})})})),(null===s||void 0===s?void 0:s.address)&&Object(d.jsxs)("section",{className:"address mt-1 d-flex justify-content-between",children:[Object(d.jsx)("p",{children:Object(d.jsx)(h.a,{})}),Object(d.jsx)("p",{children:s.address})]}),(null===s||void 0===s?void 0:s.phone)&&Object(d.jsxs)("section",{className:"address d-flex justify-content-between",children:[Object(d.jsx)("p",{children:Object(d.jsx)(p.a,{})}),Object(d.jsx)("p",{children:s.phone})]}),Object(d.jsx)("button",{className:"btn-sm btn-outline-info",onClick:function(){window.open(s.web_url,"_blank")},children:"Trip Advisor"}),Object(d.jsx)("button",{type:"button",className:"btn-sm btn-outline-info mb-2 ms-2",onClick:function(){window.open(s.website,"_blank")},children:"WebSite"})]})]})},x=function(e){var t=e.places,c=e.type,s=e.settype,n=e.rating,a=e.setrating;e.childClicked;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container-fluid m-0 p-0",children:[Object(d.jsx)("h4",{children:"Restaurents, Hotels, Attractions"}),Object(d.jsxs)("form",{action:"",className:"py-2 d-flex",children:[Object(d.jsx)("label",{htmlFor:"",className:"me-1",children:"Type"}),Object(d.jsxs)("select",{name:"",id:"",className:"form-select form-select-sm",value:c,onChange:function(e){s(e.target.value),console.log(e.target.value)},children:[Object(d.jsx)("option",{value:"restaurants",children:"restaurents"}),Object(d.jsx)("option",{value:"hotels",children:"Hotels"}),Object(d.jsx)("option",{value:"attractions",children:"Attractions"})]}),Object(d.jsx)("label",{htmlFor:"",className:"ms-2 me-1",children:"Rating"}),Object(d.jsxs)("select",{name:"",id:"",className:"form-select form-select-sm",value:n,onChange:function(e){a(e.target.value)},children:[Object(d.jsx)("option",{value:0,children:"All"}),Object(d.jsx)("option",{value:3,children:"Above 3.0"}),Object(d.jsx)("option",{value:4,children:"Above 4.0"}),Object(d.jsx)("option",{value:4.5,children:"Above 4.5"})]})]}),Object(d.jsx)("div",{className:"row list",style:{height:"75vh",overflow:"auto"},children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("div",{className:"col-12 pt-2",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},children:Object(d.jsx)(m,{place:e},t)})}))})]})})},O=(c(46),c(36)),v=c(11),g=c(10),f=function(){return Object(d.jsx)(v.a,{children:Object(d.jsxs)("footer",{id:"footer",className:"footer-1",children:[Object(d.jsx)("div",{className:"main-footer widgets-dark typo-light",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-3",children:Object(d.jsxs)("div",{className:"widget subscribe no-box",children:[Object(d.jsxs)("h5",{className:"widget-title",children:["Developer",Object(d.jsx)("span",{})]}),Object(d.jsxs)("p",{children:["Made with"," ",Object(d.jsx)("span",{children:Object(d.jsx)(O.a,{color:"red"})})," ","by"," ",Object(d.jsx)("span",{children:Object(d.jsx)(v.b,{to:"https://rahulsaha-portfolio.herokuapp.com",children:"Rahul Saha"})})]})]})}),Object(d.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-3",children:Object(d.jsxs)("div",{className:"widget no-box",children:[Object(d.jsxs)("h5",{className:"widget-title",children:["Idea ",Object(d.jsx)("span",{})]}),Object(d.jsx)("p",{children:"Github"})]})}),Object(d.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-3",children:Object(d.jsxs)("div",{className:"widget no-box",children:[Object(d.jsxs)("h5",{className:"widget-title",children:["Contact Us",Object(d.jsx)("span",{})]}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:info@domain.com",title:"glorythemes",children:"forrahul7@gmail.com"})}),Object(d.jsxs)("ul",{className:"social-footer2",children:[Object(d.jsx)("li",{className:"",children:Object(d.jsx)(v.b,{to:"https://github.com/rahulsaha7",children:Object(d.jsx)(g.a,{})})}),Object(d.jsx)("li",{className:"",children:Object(d.jsx)(v.b,{to:"https://www.linkedin.com/in/rahul-saha7",children:Object(d.jsx)(g.b,{})})}),Object(d.jsx)("li",{className:"",children:Object(d.jsx)(v.b,{to:"https://twitter.com/Rahul_Saha_7?s=09",children:Object(d.jsx)(g.c,{})})})]})]})})]})})}),Object(d.jsx)("div",{className:"footer-copyright",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-12 text-center",children:Object(d.jsx)("p",{children:"version 1.0.1"})})})})})]})})},w=c(12),N=c.n(w),y=c(19),k=c(20),C=c.n(k),S=function(){var e=Object(y.a)(N.a.mark((function e(t,c,s){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://travel-advisor.p.rapidapi.com/".concat(t,"/list-in-boundary"),{params:{bl_latitude:s.lat,tr_latitude:c.lat,bl_longitude:s.lng,tr_longitude:c.lat},headers:{"x-rapidapi-host":"travel-advisor.p.rapidapi.com","x-rapidapi-key":"c8ab248aabmsh6cf90eb82fcef62p1daca5jsn93ea7c4d899b"}});case 3:return n=e.sent,a=n.data.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c,s){return e.apply(this,arguments)}}(),_=function(){var e=Object(y.a)(N.a.mark((function e(t,c){var s,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://community-open-weather-map.p.rapidapi.com/find",{params:{lon:c,lat:t},headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"c8ab248aabmsh6cf90eb82fcef62p1daca5jsn93ea7c4d899b"}});case 3:return s=e.sent,n=s.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}();var A=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(l.a)(a,2),r=i[0],o=i[1],b=Object(s.useState)([]),h=Object(l.a)(b,2),p=h[0],m=h[1],O=Object(s.useState)({}),v=Object(l.a)(O,2),g=v[0],w=v[1],N=Object(s.useState)({}),y=Object(l.a)(N,2),k=y[0],C=y[1],A=Object(s.useState)("restaurants"),F=Object(l.a)(A,2),R=F[0],z=F[1],E=Object(s.useState)(0),I=Object(l.a)(E,2),P=I[0],B=I[1];return Object(s.useRef)(),Object(s.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,c=t.latitude,s=t.longitude;w({lat:c,lng:s})}))}),[]),Object(s.useEffect)((function(){var e=p.filter((function(e){return e.rating>Number(P)}));o(e)}),[P]),Object(s.useEffect)((function(){k.sw&&k.ne&&(_(g.lat,g.lng).then((function(e){return n(e)})),S(R,k.ne,k.sw).then((function(e){m(null===e||void 0===e?void 0:e.filter((function(e){return e.name&&e.num_reviews>0}))),o([])})))}),[R,k]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container-fluid m-0 p-0",children:[Object(d.jsx)(j,{setCoordinates:w}),Object(d.jsx)("div",{className:"container-fluid ",children:Object(d.jsxs)("section",{className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-md-4 col-lg-4 col-xl-4",children:Object(d.jsx)(x,{places:r.length?r:p,type:R,settype:z,rating:P,setrating:B})}),Object(d.jsx)("div",{className:"cols-12 col-md-8 col-lg-8 col-xl-8 my-2",children:Object(d.jsx)(u,{coordinates:g,setCoordinates:w,setBounds:C,places:r.length?r:p,weatherData:c})}),Object(d.jsx)("div",{className:"col-12 m-0 p-0",children:Object(d.jsx)(f,{})})]})})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),F()}},[[70,1,2]]]);
//# sourceMappingURL=main.5a0ae20b.chunk.js.map