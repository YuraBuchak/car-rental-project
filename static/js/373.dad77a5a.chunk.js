"use strict";(self.webpackChunkcar_rental_project=self.webpackChunkcar_rental_project||[]).push([[373],{125:function(a,e,s){s.d(e,{Z:function(){return U}});var r=s(771),n=s(9439),l=s(2791),i="CarCard_carCard_item__KdzGo",c="CarCard_carCard_imgWrapper__YNYzE",t="CarCard_carCard_img__6d3Fh",d="CarCard_carCard_infoWrapper__Zr2oO",o="CarCard_carCard_titleWrapper__D50Ws",_="CarCard_carCard_title__rIRmV",m="CarCard_carCard_titleModel__BnDyc",u="CarCard_carCard_titleYear__pB8Wv",h="CarCard_carCard_listInfo__TmP84",f="CarCard_carCard_itemInfo__WoIbb",x="CarCard_carCard_button__RZsv2",j="CarCard_heart_button__tK-mX",C=s(3853),N=s(3433),p=s(4164),v="CarModal_overlay__O0fqN",g="CarModal_modal__FOFDk",k="CarModal_modal_imgWrapper__NqejR",M="CarModal_modal_img__aKZFc",Z="CarModal_modal_infoWrapper__4zcka",b="CarModal_modal_title__W4hE0",y="CarModal_modal_titleModel__7UOIc",S="CarModal_modal_titleYear__KDFsg",L="CarModal_modal_description__fFTxx",w="CarModal_modal_subTitle__mgAfu",E="CarModal_modal_rentalBtn__gFldS",I="CarModal_modal_cancelBtn__DSv96",z="CarModal_modal_listG__Ep2xU",W="CarModal_modal_listItemG__mX1TU",F="CarModal_modal_listCondition__kt+ye",T="CarModal_modal_itemCondition__uhM5k",P=s(1213),O=s.p+"static/media/placeholder.bfdc4f1b42bd9a5d2e35.jpg",B=s(184),R=document.querySelector("#modal-root"),D=function(a){var e=a.onClick,s=a.data,r=s.id,i=s.accessories,c=s.address,t=s.description,d=s.engineSize,o=s.fuelConsumption,_=s.functionalities,m=s.img,u=s.make,h=s.mileage,f=s.model,x=s.rentalConditions,j=s.rentalPrice,C=s.type,D=s.year,Y=function(a){(a.currentTarget===a.target||"Escape"===a.code)&&e()};(0,l.useEffect)((function(){return window.addEventListener("keydown",Y),window.addEventListener("click",Y),function(){window.removeEventListener("keydown",Y),window.removeEventListener("click",Y)}}));var J=[].concat((0,N.Z)(i),(0,N.Z)(_)),K=c.split(","),U=x.split("\n"),q=U[0].split(":"),A=(0,n.Z)(q,2),G=A[0],X=A[1];return(0,p.createPortal)((0,B.jsx)("div",{onClick:Y,className:v,children:(0,B.jsxs)("div",{className:g,children:[(0,B.jsx)("div",{className:k,children:(0,B.jsx)("img",{className:M,src:m||O,alt:"car"})}),(0,B.jsxs)("div",{className:Z,children:[(0,B.jsxs)("div",{children:[(0,B.jsxs)("h3",{className:b,children:[u," ",(0,B.jsx)("span",{className:y,children:f}),",",(0,B.jsx)("span",{className:S,children:D})]}),(0,B.jsxs)("ul",{className:z,children:[(0,B.jsx)("li",{className:W,children:K[2]}),(0,B.jsx)("li",{className:W,children:K[1]}),(0,B.jsxs)("li",{className:W,children:["Id: ",r]}),(0,B.jsxs)("li",{className:W,children:["Year: ",D]}),(0,B.jsxs)("li",{className:W,children:["Type: ",C]})]}),(0,B.jsxs)("ul",{className:z,children:[(0,B.jsxs)("li",{className:W,children:["Fuel Consumption: ",o]}),(0,B.jsxs)("li",{className:W,children:["Engine Size: ",d]})]}),(0,B.jsx)("p",{className:L,children:t})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("p",{className:w,children:"Accessories and functionalities:"}),(0,B.jsx)("ul",{className:z,children:J.map((function(a,e){return(0,B.jsx)("li",{className:W,children:a},e)}))})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("p",{className:w,children:"Rental Conditions:"}),(0,B.jsxs)("ul",{className:F,children:[(0,B.jsxs)("li",{className:T,children:[G,":",(0,B.jsx)("span",{className:y,children:X})]}),(0,B.jsx)("li",{className:T,children:U[1]}),(0,B.jsx)("li",{className:T,children:U[2]}),(0,B.jsxs)("li",{className:T,children:["Mileage:",(0,B.jsx)("span",{className:y,children:h.toLocaleString("en-US")})]}),(0,B.jsxs)("li",{className:T,children:["RentalPrice:",(0,B.jsx)("span",{className:y,children:j})]})]})]}),(0,B.jsx)("a",{href:"tel:+380730000000",className:E,children:"Rental car"})]}),(0,B.jsx)("button",{onClick:e,type:"button",className:I,children:(0,B.jsx)(P.$iT,{size:24})})]})}),R)},Y=s(9434),J=s(7665),K=function(a){var e=a.data,s=e.id,r=e.address,N=e.functionalities,p=e.img,v=e.make,g=e.mileage,k=e.model,M=e.rentalCompany,Z=e.rentalPrice,b=e.type,y=e.year,S=(0,l.useState)(!1),L=(0,n.Z)(S,2),w=L[0],E=L[1],I=function(){return E(!w)},z=r.split(","),W=(0,Y.I0)(),F=(0,l.useState)(!1),T=(0,n.Z)(F,2),P=T[0],R=T[1];(0,l.useEffect)((function(){var a=(JSON.parse(localStorage.getItem("favorites"))||[]).find((function(a){return a.id===s}));R(a)}),[s]);return(0,B.jsxs)("li",{className:i,children:[(0,B.jsxs)("div",{className:c,children:[(0,B.jsx)("img",{className:t,src:p||O,alt:"car"}),(0,B.jsx)("button",{onClick:function(){var a=JSON.parse(localStorage.getItem("favorites"))||[];if(P){var r=a.filter((function(a){return a.id!==s}));localStorage.setItem("favorites",JSON.stringify(r)),W((0,J.j)(r)),R(!1)}else a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),W((0,J.j)(a)),R(!0)},type:"button",className:j,children:(0,B.jsx)(C.$aX,{style:{fill:P?"#3470ff":"transparent",stroke:"white"},size:20})})]}),(0,B.jsxs)("div",{className:d,children:[(0,B.jsxs)("div",{className:o,children:[(0,B.jsxs)("h3",{className:_,children:[v," ",(0,B.jsx)("span",{className:m,children:k}),",",(0,B.jsx)("span",{className:u,children:y})]}),(0,B.jsx)("p",{className:_,children:Z})]}),(0,B.jsxs)("ul",{className:h,children:[(0,B.jsx)("li",{className:f,children:z[2]}),(0,B.jsx)("li",{className:f,children:z[1]}),(0,B.jsx)("li",{className:f,children:M})]}),(0,B.jsxs)("ul",{className:h,children:[(0,B.jsx)("li",{className:f,children:b}),(0,B.jsx)("li",{className:f,children:k}),(0,B.jsx)("li",{className:f,children:g}),(0,B.jsx)("li",{className:f,children:N[0]})]})]}),(0,B.jsx)("button",{onClick:I,type:"button",className:x,children:"Learn more"}),w&&(0,B.jsx)(D,{data:e,onClick:function(a){return I()}})]})},U=function(a){var e=a.cars;return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("ul",{className:r.Z.cardList,children:null===e||void 0===e?void 0:e.map((function(a){return(0,B.jsx)(K,{data:a},a.id)}))})})}},2052:function(a,e,s){s.r(e),s.d(e,{default:function(){return C}});var r=s(6168),n=s(3433),l=s(5861),i=s(9439),c=s(7757),t=s.n(c),d=s(771),o=s(2791),_=s(9434),m=s(8313),u=s(125),h=s(4706),f=s(2068),x=s(184),j=function(){var a=(0,o.useState)(),e=(0,i.Z)(a,2),s=e[0],r=e[1],c=(0,o.useState)(1),j=(0,i.Z)(c,2),C=j[0],N=j[1],p=(0,_.I0)(),v=(0,_.v9)(f.Wz),g=Math.ceil(v.length/8);(0,o.useEffect)((function(){(0,l.Z)(t().mark((function a(){var e;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,m.z)(C);case 3:e=a.sent,r(C>1?function(a){return[].concat((0,n.Z)(a),(0,n.Z)(e))}:e),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),alert("Error fetching catalog:",a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()}),[C]),(0,o.useEffect)((function(){p((0,h.k)())}),[p]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("section",{children:[(0,x.jsx)(u.Z,{cars:s}),C<g&&(0,x.jsx)("button",{type:"button",onClick:function(){N((function(a){return a+1}))},className:d.Z.cardList_loadBtn,children:"Load more"})]})})},C=function(){return(0,x.jsx)("div",{className:r.Z.container,children:(0,x.jsx)(j,{})})}},2068:function(a,e,s){s.d(e,{Tc:function(){return n},Wz:function(){return r}});var r=function(a){return a.cars.carsAll},n=function(a){return a.favorites.favorites}},771:function(a,e){e.Z={cardList:"CardList_cardList__-CiLx",cardList_loadBtn:"CardList_cardList_loadBtn__PEp5u"}},6168:function(a,e){e.Z={pageTitle:"Page_pageTitle__Pl-Lt",container:"Page_container__z9ezR"}}}]);
//# sourceMappingURL=373.dad77a5a.chunk.js.map