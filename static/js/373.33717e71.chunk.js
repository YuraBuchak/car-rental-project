"use strict";(self.webpackChunkcar_rental_project=self.webpackChunkcar_rental_project||[]).push([[373],{8692:function(a,e,s){s.d(e,{Z:function(){return K}});var r="CardList_cardList__-CiLx",n=s(9439),l=s(2791),i="CarCard_carCard_item__KdzGo",c="CarCard_carCard_imgWrapper__YNYzE",t="CarCard_carCard_img__6d3Fh",d="CarCard_carCard_infoWrapper__Zr2oO",o="CarCard_carCard_titleWrapper__D50Ws",_="CarCard_carCard_title__rIRmV",m="CarCard_carCard_titleModel__BnDyc",u="CarCard_carCard_titleYear__pB8Wv",h="CarCard_carCard_listInfo__TmP84",x="CarCard_carCard_itemInfo__WoIbb",f="CarCard_carCard_button__RZsv2",j="CarCard_heart_button__tK-mX",C=s(3853),N=s(3433),p=s(4164),v="CarModal_overlay__O0fqN",g="CarModal_modal__FOFDk",k="CarModal_modal_imgWrapper__NqejR",M="CarModal_modal_img__aKZFc",b="CarModal_modal_infoWrapper__4zcka",y="CarModal_modal_title__W4hE0",S="CarModal_modal_titleModel__7UOIc",Z="CarModal_modal_titleYear__KDFsg",w="CarModal_modal_description__fFTxx",E="CarModal_modal_subTitle__mgAfu",L="CarModal_modal_rentalBtn__gFldS",z="CarModal_modal_cancelBtn__DSv96",I="CarModal_modal_listG__Ep2xU",P="CarModal_modal_listItemG__mX1TU",W="CarModal_modal_listCondition__kt+ye",F="CarModal_modal_itemCondition__uhM5k",T=s(1213),O=s.p+"static/media/placeholder.bfdc4f1b42bd9a5d2e35.jpg",B=s(184),R=document.querySelector("#modal-root"),A=function(a){var e=a.onClick,s=a.data,r=s.id,i=s.accessories,c=s.address,t=s.description,d=s.engineSize,o=s.fuelConsumption,_=s.functionalities,m=s.img,u=s.make,h=s.mileage,x=s.model,f=s.rentalConditions,j=s.rentalPrice,C=s.type,A=s.year,D=function(a){(a.currentTarget===a.target||"Escape"===a.code)&&e()};(0,l.useEffect)((function(){return window.addEventListener("keydown",D),window.addEventListener("click",D),function(){window.removeEventListener("keydown",D),window.removeEventListener("click",D)}}));var Y=[].concat((0,N.Z)(i),(0,N.Z)(_)),J=c.split(","),K=f.split("\n"),U=K[0].split(":"),q=(0,n.Z)(U,2),G=q[0],X=q[1];return(0,p.createPortal)((0,B.jsx)("div",{onClick:D,className:v,children:(0,B.jsxs)("div",{className:g,children:[(0,B.jsx)("div",{className:k,children:(0,B.jsx)("img",{className:M,src:m||O,alt:"car"})}),(0,B.jsxs)("div",{className:b,children:[(0,B.jsxs)("div",{children:[(0,B.jsxs)("h3",{className:y,children:[u," ",(0,B.jsx)("span",{className:S,children:x}),",",(0,B.jsx)("span",{className:Z,children:A})]}),(0,B.jsxs)("ul",{className:I,children:[(0,B.jsx)("li",{className:P,children:J[2]}),(0,B.jsx)("li",{className:P,children:J[1]}),(0,B.jsxs)("li",{className:P,children:["Id: ",r]}),(0,B.jsxs)("li",{className:P,children:["Year: ",A]}),(0,B.jsxs)("li",{className:P,children:["Type: ",C]})]}),(0,B.jsxs)("ul",{className:I,children:[(0,B.jsxs)("li",{className:P,children:["Fuel Consumption: ",o]}),(0,B.jsxs)("li",{className:P,children:["Engine Size: ",d]})]}),(0,B.jsx)("p",{className:w,children:t})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("p",{className:E,children:"Accessories and functionalities:"}),(0,B.jsx)("ul",{className:I,children:Y.map((function(a,e){return(0,B.jsx)("li",{className:P,children:a},e)}))})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("p",{className:E,children:"Rental Conditions:"}),(0,B.jsxs)("ul",{className:W,children:[(0,B.jsxs)("li",{className:F,children:[G,":",(0,B.jsx)("span",{className:S,children:X})]}),(0,B.jsx)("li",{className:F,children:K[1]}),(0,B.jsx)("li",{className:F,children:K[2]}),(0,B.jsxs)("li",{className:F,children:["Mileage:",(0,B.jsx)("span",{className:S,children:h.toLocaleString("en-US")})]}),(0,B.jsxs)("li",{className:F,children:["RentalPrice:",(0,B.jsx)("span",{className:S,children:j})]})]})]}),(0,B.jsx)("a",{href:"tel:+380730000000",className:L,children:"Rental car"})]}),(0,B.jsx)("button",{onClick:e,type:"button",className:z,children:(0,B.jsx)(T.$iT,{size:24})})]})}),R)},D=s(9434),Y=s(7665),J=function(a){var e=a.data,s=e.id,r=e.address,N=e.functionalities,p=e.img,v=e.make,g=e.mileage,k=e.model,M=e.rentalCompany,b=e.rentalPrice,y=e.type,S=e.year,Z=(0,l.useState)(!1),w=(0,n.Z)(Z,2),E=w[0],L=w[1],z=function(){return L(!E)},I=r.split(","),P=(0,D.I0)(),W=(0,l.useState)(!1),F=(0,n.Z)(W,2),T=F[0],R=F[1];(0,l.useEffect)((function(){var a=(JSON.parse(localStorage.getItem("favorites"))||[]).find((function(a){return a.id===s}));R(a)}),[s]);return(0,B.jsxs)("li",{className:i,children:[(0,B.jsxs)("div",{className:c,children:[(0,B.jsx)("img",{className:t,src:p||O,alt:"car"}),(0,B.jsx)("button",{onClick:function(){var a=JSON.parse(localStorage.getItem("favorites"))||[];if(T){var r=a.filter((function(a){return a.id!==s}));localStorage.setItem("favorites",JSON.stringify(r)),P((0,Y.j)(r)),R(!1)}else a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),P((0,Y.j)(a)),R(!0)},type:"button",className:j,children:(0,B.jsx)(C.$aX,{style:{fill:T?"#3470ff":"transparent",stroke:"white"},size:20})})]}),(0,B.jsxs)("div",{className:d,children:[(0,B.jsxs)("div",{className:o,children:[(0,B.jsxs)("h3",{className:_,children:[v," ",(0,B.jsx)("span",{className:m,children:k}),",",(0,B.jsx)("span",{className:u,children:S})]}),(0,B.jsx)("p",{className:_,children:b})]}),(0,B.jsxs)("ul",{className:h,children:[(0,B.jsx)("li",{className:x,children:I[2]}),(0,B.jsx)("li",{className:x,children:I[1]}),(0,B.jsx)("li",{className:x,children:M})]}),(0,B.jsxs)("ul",{className:h,children:[(0,B.jsx)("li",{className:x,children:y}),(0,B.jsx)("li",{className:x,children:k}),(0,B.jsx)("li",{className:x,children:g}),(0,B.jsx)("li",{className:x,children:N[0]})]})]}),(0,B.jsx)("button",{onClick:z,type:"button",className:f,children:"Learn more"}),E&&(0,B.jsx)(A,{data:e,onClick:function(a){return z()}})]})},K=function(a){var e=a.cars;return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("ul",{className:r,children:null===e||void 0===e?void 0:e.map((function(a){return(0,B.jsx)(J,{data:a},a.id)}))})})}},2052:function(a,e,s){s.r(e),s.d(e,{default:function(){return j}});var r=s(6168),n=s(3433),l=s(5861),i=s(9439),c=s(7757),t=s.n(c),d=s(2791),o=s(9434),_=s(8313),m=s(8692),u=s(4706),h=s(2068),x=s(184),f=function(){var a=(0,d.useState)(),e=(0,i.Z)(a,2),s=e[0],c=e[1],f=(0,d.useState)(1),j=(0,i.Z)(f,2),C=j[0],N=j[1],p=(0,o.I0)(),v=(0,o.v9)(h.Wz),g=Math.ceil(v.length/8);(0,d.useEffect)((function(){(0,l.Z)(t().mark((function a(){var e;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,_.z)(C);case 3:e=a.sent,c(C>1?function(a){return[].concat((0,n.Z)(a),(0,n.Z)(e))}:e),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),alert("Error fetching catalog:",a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()}),[C]),(0,d.useEffect)((function(){p((0,u.k)())}),[p]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("section",{className:r.Z.section,children:[(0,x.jsx)(m.Z,{cars:s}),C<g&&(0,x.jsx)("button",{type:"button",onClick:function(){N((function(a){return a+1}))},className:r.Z.cardList_loadBtn,children:"Load more"})]})})},j=function(){return(0,x.jsx)("div",{className:r.Z.container,children:(0,x.jsx)(f,{})})}},2068:function(a,e,s){s.d(e,{Tc:function(){return n},Wz:function(){return r}});var r=function(a){return a.cars.carsAll},n=function(a){return a.favorites.favorites}},6168:function(a,e){e.Z={pageTitle:"Page_pageTitle__Pl-Lt",container:"Page_container__z9ezR",section:"Page_section__12A5P",cardList_loadBtn:"Page_cardList_loadBtn__AzAiu"}}}]);
//# sourceMappingURL=373.33717e71.chunk.js.map