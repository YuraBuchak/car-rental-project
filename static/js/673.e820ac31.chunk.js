"use strict";(self.webpackChunkcar_rental_project=self.webpackChunkcar_rental_project||[]).push([[673],{125:function(a,e,s){s.d(e,{Z:function(){return U}});var r=s(771),l=s(9439),n=s(2791),i="CarCard_carCard_item__KdzGo",c="CarCard_carCard_imgWrapper__YNYzE",t="CarCard_carCard_img__6d3Fh",d="CarCard_carCard_infoWrapper__Zr2oO",o="CarCard_carCard_titleWrapper__D50Ws",_="CarCard_carCard_title__rIRmV",m="CarCard_carCard_titleModel__BnDyc",u="CarCard_carCard_titleYear__pB8Wv",j="CarCard_carCard_listInfo__TmP84",h="CarCard_carCard_itemInfo__WoIbb",x="CarCard_carCard_button__RZsv2",f="CarCard_heart_button__tK-mX",C=s(3853),N=s(3433),p=s(4164),v="CarModal_overlay__O0fqN",g="CarModal_modal__FOFDk",k="CarModal_modal_imgWrapper__NqejR",y="CarModal_modal_img__aKZFc",M="CarModal_modal_infoWrapper__4zcka",S="CarModal_modal_title__W4hE0",b="CarModal_modal_titleModel__7UOIc",E="CarModal_modal_titleYear__KDFsg",L="CarModal_modal_description__fFTxx",I="CarModal_modal_subTitle__mgAfu",Z="CarModal_modal_rentalBtn__gFldS",w="CarModal_modal_cancelBtn__DSv96",P="CarModal_modal_listG__Ep2xU",z="CarModal_modal_listItemG__mX1TU",T="CarModal_modal_listCondition__kt+ye",F="CarModal_modal_itemCondition__uhM5k",W=s(1213),O=s.p+"static/media/placeholder.bfdc4f1b42bd9a5d2e35.jpg",R=s(184),B=document.querySelector("#modal-root"),D=function(a){var e=a.onClick,s=a.data,r=s.id,i=s.accessories,c=s.address,t=s.description,d=s.engineSize,o=s.fuelConsumption,_=s.functionalities,m=s.img,u=s.make,j=s.mileage,h=s.model,x=s.rentalConditions,f=s.rentalPrice,C=s.type,D=s.year,J=function(a){(a.currentTarget===a.target||"Escape"===a.code)&&e()};(0,n.useEffect)((function(){return window.addEventListener("keydown",J),window.addEventListener("click",J),function(){window.removeEventListener("keydown",J),window.removeEventListener("click",J)}}));var Y=[].concat((0,N.Z)(i),(0,N.Z)(_)),K=c.split(","),U=x.split("\n"),X=U[0].split(":"),q=(0,l.Z)(X,2),A=q[0],G=q[1];return(0,p.createPortal)((0,R.jsx)("div",{onClick:J,className:v,children:(0,R.jsxs)("div",{className:g,children:[(0,R.jsx)("div",{className:k,children:(0,R.jsx)("img",{className:y,src:m||O,alt:"car"})}),(0,R.jsxs)("div",{className:M,children:[(0,R.jsxs)("div",{children:[(0,R.jsxs)("h3",{className:S,children:[u," ",(0,R.jsx)("span",{className:b,children:h}),",",(0,R.jsx)("span",{className:E,children:D})]}),(0,R.jsxs)("ul",{className:P,children:[(0,R.jsx)("li",{className:z,children:K[2]}),(0,R.jsx)("li",{className:z,children:K[1]}),(0,R.jsxs)("li",{className:z,children:["Id: ",r]}),(0,R.jsxs)("li",{className:z,children:["Year: ",D]}),(0,R.jsxs)("li",{className:z,children:["Type: ",C]})]}),(0,R.jsxs)("ul",{className:P,children:[(0,R.jsxs)("li",{className:z,children:["Fuel Consumption: ",o]}),(0,R.jsxs)("li",{className:z,children:["Engine Size: ",d]})]}),(0,R.jsx)("p",{className:L,children:t})]}),(0,R.jsxs)("div",{children:[(0,R.jsx)("p",{className:I,children:"Accessories and functionalities:"}),(0,R.jsx)("ul",{className:P,children:Y.map((function(a,e){return(0,R.jsx)("li",{className:z,children:a},e)}))})]}),(0,R.jsxs)("div",{children:[(0,R.jsx)("p",{className:I,children:"Rental Conditions:"}),(0,R.jsxs)("ul",{className:T,children:[(0,R.jsxs)("li",{className:F,children:[A,":",(0,R.jsx)("span",{className:b,children:G})]}),(0,R.jsx)("li",{className:F,children:U[1]}),(0,R.jsx)("li",{className:F,children:U[2]}),(0,R.jsxs)("li",{className:F,children:["Mileage:",(0,R.jsx)("span",{className:b,children:j.toLocaleString("en-US")})]}),(0,R.jsxs)("li",{className:F,children:["RentalPrice:",(0,R.jsx)("span",{className:b,children:f})]})]})]}),(0,R.jsx)("a",{href:"tel:+380730000000",className:Z,children:"Rental car"})]}),(0,R.jsx)("button",{onClick:e,type:"button",className:w,children:(0,R.jsx)(W.$iT,{size:24})})]})}),B)},J=s(9434),Y=s(7665),K=function(a){var e=a.data,s=e.id,r=e.address,N=e.functionalities,p=e.img,v=e.make,g=e.mileage,k=e.model,y=e.rentalCompany,M=e.rentalPrice,S=e.type,b=e.year,E=(0,n.useState)(!1),L=(0,l.Z)(E,2),I=L[0],Z=L[1],w=function(){return Z(!I)},P=r.split(","),z=(0,J.I0)(),T=(0,n.useState)(!1),F=(0,l.Z)(T,2),W=F[0],B=F[1];(0,n.useEffect)((function(){var a=(JSON.parse(localStorage.getItem("favorites"))||[]).find((function(a){return a.id===s}));B(a)}),[s]);return(0,R.jsxs)("li",{className:i,children:[(0,R.jsxs)("div",{className:c,children:[(0,R.jsx)("img",{className:t,src:p||O,alt:"car"}),(0,R.jsx)("button",{onClick:function(){var a=JSON.parse(localStorage.getItem("favorites"))||[];if(W){var r=a.filter((function(a){return a.id!==s}));localStorage.setItem("favorites",JSON.stringify(r)),z((0,Y.j)(r)),B(!1)}else a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),z((0,Y.j)(a)),B(!0)},type:"button",className:f,children:(0,R.jsx)(C.$aX,{style:{fill:W?"#3470ff":"transparent",stroke:"white"},size:20})})]}),(0,R.jsxs)("div",{className:d,children:[(0,R.jsxs)("div",{className:o,children:[(0,R.jsxs)("h3",{className:_,children:[v," ",(0,R.jsx)("span",{className:m,children:k}),",",(0,R.jsx)("span",{className:u,children:b})]}),(0,R.jsx)("p",{className:_,children:M})]}),(0,R.jsxs)("ul",{className:j,children:[(0,R.jsx)("li",{className:h,children:P[2]}),(0,R.jsx)("li",{className:h,children:P[1]}),(0,R.jsx)("li",{className:h,children:y})]}),(0,R.jsxs)("ul",{className:j,children:[(0,R.jsx)("li",{className:h,children:S}),(0,R.jsx)("li",{className:h,children:k}),(0,R.jsx)("li",{className:h,children:g}),(0,R.jsx)("li",{className:h,children:N[0]})]})]}),(0,R.jsx)("button",{onClick:w,type:"button",className:x,children:"Learn more"}),I&&(0,R.jsx)(D,{data:e,onClick:function(a){return w()}})]})},U=function(a){var e=a.cars;return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("ul",{className:r.Z.cardList,children:null===e||void 0===e?void 0:e.map((function(a){return(0,R.jsx)(K,{data:a},a.id)}))})})}},1647:function(a,e,s){s.r(e),s.d(e,{default:function(){return f}});var r=s(6168),l=s(2791),n=s(9434),i=s(2068),c=s(7665),t=s(125),d=s(7689),o="EmptyPage_chooseBtn__hJRMm",_="EmptyPage_container__L16Hv",m="EmptyPage_aboutDescription__jC9E0",u=s(3853),j=s(184),h=function(){var a=(0,d.s0)();return(0,j.jsxs)("div",{className:_,children:[(0,j.jsx)(u.$aX,{style:{fill:"transparent",stroke:"#3470ff"},size:120}),(0,j.jsx)("p",{className:m,children:"You have not added any favorite car yet"}),(0,j.jsx)("button",{onClick:function(){return a("/catalog")},className:o,children:"Pick a car"})]})},x=function(){var a=(0,n.I0)(),e=(0,n.v9)(i.Tc);return(0,l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"))||[];a((0,c.j)(e))}),[a]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("section",{children:e.length>0?(0,j.jsx)(t.Z,{cars:e}):(0,j.jsx)(h,{})})})},f=function(){return(0,j.jsx)("div",{className:r.Z.container,children:(0,j.jsx)(x,{})})}},2068:function(a,e,s){s.d(e,{Tc:function(){return l},Wz:function(){return r}});var r=function(a){return a.cars.carsAll},l=function(a){return a.favorites.favorites}},771:function(a,e){e.Z={cardList:"CardList_cardList__-CiLx",cardList_loadBtn:"CardList_cardList_loadBtn__PEp5u"}},6168:function(a,e){e.Z={pageTitle:"Page_pageTitle__Pl-Lt",container:"Page_container__z9ezR"}}}]);
//# sourceMappingURL=673.e820ac31.chunk.js.map