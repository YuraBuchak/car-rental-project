"use strict";(self.webpackChunkcar_rental_project=self.webpackChunkcar_rental_project||[]).push([[892],{8692:function(e,a,n){n.d(a,{Z:function(){return U}});var r="CardList_cardList__-CiLx",t=n(9439),s=n(2791),i="CarCard_carCard_button__RZsv2",l="CarCard_carCard_item__KdzGo",c="CarCard_carCard_imgWrapper__YNYzE",o="CarCard_carCard_img__6d3Fh",d="CarCard_carCard_infoWrapper__Zr2oO",u="CarCard_carCard_titleWrapper__D50Ws",m="CarCard_carCard_title__rIRmV",_="CarCard_carCard_titleModel__BnDyc",f="CarCard_carCard_titleYear__pB8Wv",h="CarCard_carCard_listInfo__TmP84",p="CarCard_carCard_itemInfo__WoIbb",x="CarCard_heart_button__tK-mX",j=n(3853),v=n(3433),C=n(4164),N="CarModal_overlay__O0fqN",g="CarModal_modal__FOFDk",b="CarModal_modal_imgWrapper__NqejR",Z="CarModal_modal_img__aKZFc",k="CarModal_modal_infoWrapper__4zcka",w="CarModal_modal_title__W4hE0",S="CarModal_modal_titleModel__7UOIc",y="CarModal_modal_titleYear__KDFsg",M="CarModal_modal_description__fFTxx",F="CarModal_modal_subTitle__mgAfu",P="CarModal_modal_rentalBtn__gFldS",I="CarModal_modal_cancelBtn__DSv96",z="CarModal_modal_listG__Ep2xU",B="CarModal_modal_listItemG__mX1TU",E="CarModal_modal_listCondition__kt+ye",L="CarModal_modal_itemCondition__uhM5k",W=n(1213),R=n.p+"static/media/placeholder.bfdc4f1b42bd9a5d2e35.jpg",T=n(184),O=document.querySelector("#modal-root"),D=function(e){var a=e.onClick,n=e.data,r=n.id,i=n.accessories,l=n.address,c=n.description,o=n.engineSize,d=n.fuelConsumption,u=n.functionalities,m=n.img,_=n.make,f=n.mileage,h=n.model,p=n.rentalConditions,x=n.rentalPrice,j=n.type,D=n.year,A=function(e){(e.currentTarget===e.target||"Escape"===e.code)&&a()};(0,s.useEffect)((function(){return window.addEventListener("keydown",A),window.addEventListener("click",A),function(){window.removeEventListener("keydown",A),window.removeEventListener("click",A)}}));var H=[].concat((0,v.Z)(i),(0,v.Z)(u)),q=l.split(","),U=p.split("\n"),G=U[0].split(":"),Y=(0,t.Z)(G,2),J=Y[0],K=Y[1];return(0,C.createPortal)((0,T.jsx)("div",{onClick:A,className:N,children:(0,T.jsxs)("div",{className:g,children:[(0,T.jsx)("div",{className:b,children:(0,T.jsx)("img",{className:Z,src:m||R,alt:"car"})}),(0,T.jsxs)("div",{className:k,children:[(0,T.jsxs)("div",{children:[(0,T.jsxs)("h3",{className:w,children:[_," ",(0,T.jsx)("span",{className:S,children:h}),",",(0,T.jsx)("span",{className:y,children:D})]}),(0,T.jsxs)("ul",{className:z,children:[(0,T.jsx)("li",{className:B,children:q[2]}),(0,T.jsx)("li",{className:B,children:q[1]}),(0,T.jsxs)("li",{className:B,children:["Id: ",r]}),(0,T.jsxs)("li",{className:B,children:["Year: ",D]}),(0,T.jsxs)("li",{className:B,children:["Type: ",j]})]}),(0,T.jsxs)("ul",{className:z,children:[(0,T.jsxs)("li",{className:B,children:["Fuel Consumption: ",d]}),(0,T.jsxs)("li",{className:B,children:["Engine Size: ",o]})]}),(0,T.jsx)("p",{className:M,children:c})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("p",{className:F,children:"Accessories and functionalities:"}),(0,T.jsx)("ul",{className:z,children:H.map((function(e,a){return(0,T.jsx)("li",{className:B,children:e},a)}))})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("p",{className:F,children:"Rental Conditions:"}),(0,T.jsxs)("ul",{className:E,children:[(0,T.jsxs)("li",{className:L,children:[J,":",(0,T.jsx)("span",{className:S,children:K})]}),(0,T.jsx)("li",{className:L,children:U[1]}),(0,T.jsx)("li",{className:L,children:U[2]}),(0,T.jsxs)("li",{className:L,children:["Mileage:",(0,T.jsx)("span",{className:S,children:f.toLocaleString("en-US")})]}),(0,T.jsxs)("li",{className:L,children:["RentalPrice:",(0,T.jsx)("span",{className:S,children:x})]})]})]}),(0,T.jsx)("a",{href:"tel:+380730000000",className:P,children:"Rental car"})]}),(0,T.jsx)("button",{onClick:a,type:"button",className:I,children:(0,T.jsx)(W.$iT,{size:24})})]})}),O)},A=n(9434),H=n(5161),q=function(e){var a=e.data,n=a.id,r=a.address,v=a.functionalities,C=a.img,N=a.make,g=a.mileage,b=a.model,Z=a.rentalCompany,k=a.rentalPrice,w=a.type,S=a.year,y=(0,s.useState)(!1),M=(0,t.Z)(y,2),F=M[0],P=M[1],I=function(){return P(!F)},z=r.split(","),B=(0,A.I0)(),E=(0,s.useState)(!1),L=(0,t.Z)(E,2),W=L[0],O=L[1];(0,s.useEffect)((function(){var e=(JSON.parse(localStorage.getItem("favorites"))||[]).find((function(e){return e.id===n}));O(e)}),[n]);return(0,T.jsxs)("li",{className:l,children:[(0,T.jsxs)("div",{className:c,children:[(0,T.jsx)("img",{className:o,src:C||R,alt:"car"}),(0,T.jsx)("button",{onClick:function(){var e=JSON.parse(localStorage.getItem("favorites"))||[];if(W){var r=e.filter((function(e){return e.id!==n}));localStorage.setItem("favorites",JSON.stringify(r)),B((0,H.j)(r)),O(!1)}else e.push(a),localStorage.setItem("favorites",JSON.stringify(e)),B((0,H.j)(e)),O(!0)},type:"button",className:x,children:(0,T.jsx)(j.$aX,{style:{fill:W?"#3470ff":"transparent",stroke:"white"},size:20})})]}),(0,T.jsxs)("div",{className:d,children:[(0,T.jsxs)("div",{className:u,children:[(0,T.jsxs)("h3",{className:m,children:[N," ",(0,T.jsx)("span",{className:_,children:b}),",",(0,T.jsx)("span",{className:f,children:S})]}),(0,T.jsx)("p",{className:m,children:k})]}),(0,T.jsxs)("ul",{className:h,children:[(0,T.jsx)("li",{className:p,children:z[2]}),(0,T.jsx)("li",{className:p,children:z[1]}),(0,T.jsx)("li",{className:p,children:Z})]}),(0,T.jsxs)("ul",{className:h,children:[(0,T.jsx)("li",{className:p,children:w}),(0,T.jsx)("li",{className:p,children:b}),(0,T.jsx)("li",{className:p,children:g}),(0,T.jsx)("li",{className:p,children:v[0]})]})]}),(0,T.jsx)("button",{onClick:I,type:"button",className:i,children:"Learn more"}),F&&(0,T.jsx)(D,{data:a,onClick:function(e){return I()}})]})},U=function(e){var a=e.cars;return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)("ul",{className:r,children:null===a||void 0===a?void 0:a.map((function(e){return(0,T.jsx)(q,{data:e},e.id)}))})})}},2889:function(e,a,n){n.r(a),n.d(a,{default:function(){return L}});var r=n(6168),t=n(9439),s=n(2791),i=n(9434),l=n(8692),c=n(5197),o=n(2068),d=n(934),u="Filter_filter_form__W-uAq",m="Filter_filter_btn__f2qAF",_="Filter_label_wrapper__q2m7F",f="Filter_label__CLSp2",h="Filter_input__S09D5",p="Filter_text_wrapper__7m5F1",x=n(1413),j=function(e){return{container:function(a){return(0,x.Z)((0,x.Z)({},a),{},{backgroundColor:"#fffffff",justifyContent:"center",alignSelf:"flex-start"},null===e||void 0===e?void 0:e.container)},control:function(a,n){return(0,x.Z)((0,x.Z)({},a),{},{backgroundColor:"#F7F7FB",color:"#121417",fontSize:18,fontWeight:500,lineHeight:"1.11",borderRadius:"14px",width:"100%",cursor:n.selectProps.isSearchable?"text":"pointer",display:"flex",gap:8,padding:"14px 18px"},null===e||void 0===e?void 0:e.control)},singleValue:function(a){return(0,x.Z)((0,x.Z)({},a),{},{color:"#121417",width:"100%"},null===e||void 0===e?void 0:e.singleValue)},dropdownIndicator:function(a,n){return(0,x.Z)((0,x.Z)({},a),{},{color:"#121417",transition:"transform 200ms ease-out",transform:n.selectProps.menuIsOpen?"rotate(0.5turn)":"unset",cursor:"pointer"},null===e||void 0===e?void 0:e.dropdownIndicator)},input:function(a){return(0,x.Z)((0,x.Z)({},a),{},{color:"rgba(18, 20, 23, 0.2)",padding:0},null===e||void 0===e?void 0:e.input)},menu:function(a){return(0,x.Z)((0,x.Z)({},a),{},{backgroundColor:"white",marginTop:4,width:"100%",border:"1px solid rgba(18, 20, 23, 0.05)",borderRadius:"14px",boxShadow:"0px 4px 36px 0px rgba(0, 0, 0, 0.02)",padding:"14px 8px 14px 18px"},null===e||void 0===e?void 0:e.menu)},menuList:function(a){return(0,x.Z)((0,x.Z)({},a),{},{overflowX:"hidden",display:"flex",flexDirection:"column",gap:8,backgroundColor:"#ffffff"},null===e||void 0===e?void 0:e.menuList)},option:function(a,n){return(0,x.Z)((0,x.Z)({},a),{},{color:n.isFocused?"rgba(18, 20, 23, 1)":"rgba(18, 20, 23, 0.2)",fontSize:16,fontWeight:500,lineHeight:"1.25",whiteSpace:"nowrap"},null===e||void 0===e?void 0:e.option)},placeholder:function(e){return(0,x.Z)((0,x.Z)({},e),{},{color:"#8a8a89",fontSize:18,fontWeight:500,lineHeight:"111.111%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},valueContainer:function(e){return(0,x.Z)({},e)}}},v=n(184),C=function(e){return e.map((function(e){return{value:e,label:e}}))};var N=C(["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land Rover","Jeep","Tesla","Honda","Ford","Toyota"].sort((function(e,a){return e.localeCompare(a)}))),g=C(function(e,a,n){for(var r=[],t=e;t<=a;t+=n)r.push(t);return r}(10,500,10)),b=j({container:{width:224}}),Z=j({container:{width:125}}),k=function(e){var a=e.onFilter,n=(0,s.useState)(""),r=(0,t.Z)(n,2),i=r[0],l=r[1],c=(0,s.useState)(""),o=(0,t.Z)(c,2),x=o[0],j=o[1],C=(0,s.useState)(""),k=(0,t.Z)(C,2),w=k[0],S=k[1],y=(0,s.useState)(""),M=(0,t.Z)(y,2),F=M[0],P=M[1],I=function(e){var a=e.target,n=a.name,r=a.value;switch(n){case"from":S(r);break;case"to":P(r);break;default:return}};return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({make:i,price:x,from:w,to:F})},className:u,children:[(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{htmlFor:"make",className:f,children:"Car brand"}),(0,v.jsx)(d.ZP,{id:"make",name:"make","aria-label":"Search by make",placeholder:"Enter the text",unstyled:!0,styles:b,onChange:function(e){return l(e.value)},options:N})]}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{htmlFor:"price",className:f,children:"Price/ 1 hour"}),(0,v.jsx)(d.ZP,{id:"price",name:"price","aria-label":"Search by max price",placeholder:"To $",unstyled:!0,styles:Z,isSearchable:!1,onChange:function(e){return j(e.value)},options:g})]}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{htmlFor:"from",className:f,children:"Car mileage / km"}),(0,v.jsx)("input",{type:"number",name:"from",id:"from",placeholder:"From",onChange:I,className:h})]}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{htmlFor:"to",className:f,children:"Car mileage / km"}),(0,v.jsx)("input",{type:"number",name:"to",id:"to",placeholder:"To",onChange:I,className:h})]})]}),(0,v.jsx)("button",{className:m,type:"submit",children:"SEARCH"})]})},w=function(e,a){var n=e.make,r=e.price,t=e.from,s=e.to;return a.filter((function(e){var a=Number(e.rentalPrice.slice(1));return(""===n||e.make===n)&&(""===r||a<=r)&&(""===t||e.mileage>=t)&&(""===s||e.mileage<=s)}))},S={paginator_Btn:"Paginator_paginator_Btn__PtGDj",button__wrapper:"Paginator_button__wrapper__9HvqM",button_number__wrapper:"Paginator_button_number__wrapper__YaseI",active:"Paginator_active__PD7Zb"},y=n(7692),M=function(e){var a=e.currentPage,n=e.totalPages,r=e.onPageChange;(0,s.useEffect)((function(){window.scroll({top:0,behavior:"instant"})}),[a]);var t=function(){for(var e=[],a=1;a<=n;a++)e.push(a);return e}(),i=Math.max(1,a-Math.floor(2.5)),l=Math.min(n,i+5-1),c=t.slice(i-1,l);return(0,v.jsxs)("div",{className:S.button__wrapper,children:[(0,v.jsx)("button",{type:"button",className:S.paginator_Btn,disabled:1===a,onClick:function(){return r(1)},children:(0,v.jsx)(y.Wpx,{className:S.svg_Btn,size:27})}),(0,v.jsx)("ul",{className:S.button_number__wrapper,children:c.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)("button",{type:"button",className:"".concat(S.paginator_Btn," ").concat(e===a?S.active:""),onClick:function(){return r(e)},children:e})},e)}))}),(0,v.jsx)("button",{type:"button",disabled:a===n,onClick:function(){return r(n)},className:S.paginator_Btn,children:(0,v.jsx)(y.Cou,{className:S.svg_Btn,size:27})})]})},F=n(9736),P="NoResults_button_result__1xdvy",I="NoResults_container__lGw8R",z="NoResults_text_result__upPOM",B=function(e){var a=e.onClick;return(0,v.jsxs)("div",{className:I,children:[(0,v.jsx)("p",{className:z,children:"No one result for these search params..."}),(0,v.jsx)("button",{type:"button",onClick:a,className:P,children:"Back"})]})},E=function(){var e=(0,i.I0)(),a=(0,i.v9)(o.g2),n=(0,i.v9)(o.xU),d=(0,i.v9)(o.Wz),u=(0,s.useState)(1),m=(0,t.Z)(u,2),_=m[0],f=m[1],h=(0,s.useState)([]),p=(0,t.Z)(h,2),x=p[0],j=p[1],C=(0,s.useState)(null),N=(0,t.Z)(C,2),g=N[0],b=N[1],Z=Math.ceil(d.length/8);(0,s.useEffect)((function(){e((0,c.I)(_))}),[e,_]),(0,s.useEffect)((function(){e((0,c.k)())}),[e]),(0,s.useEffect)((function(){if(d&&g){var e=w(g,d);j(e)}}),[d,g]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("section",{className:r.Z.section,children:(0,v.jsx)(k,{onFilter:function(e){b(e)}})}),n?(0,v.jsx)(F.Z,{}):(0,v.jsxs)("div",{children:[x.length>=1&&g&&(0,v.jsx)("section",{className:r.Z.section,children:(0,v.jsx)(l.Z,{cars:x})}),0===x.length&&g&&(0,v.jsx)("section",{className:r.Z.section,children:(0,v.jsx)(B,{onClick:function(){b(null),j([])}})}),0===x.length&&!g&&(0,v.jsxs)("div",{children:[(0,v.jsx)("section",{className:r.Z.section,children:(0,v.jsx)(l.Z,{cars:a})}),(0,v.jsx)("section",{className:r.Z.section,children:(0,v.jsx)(M,{currentPage:_,totalPages:Z,onPageChange:f})})]})]})]})},L=function(){return(0,v.jsx)("div",{className:r.Z.container,children:(0,v.jsx)(E,{})})}},2068:function(e,a,n){n.d(a,{Tc:function(){return i},Wz:function(){return r},g2:function(){return t},xU:function(){return s}});var r=function(e){return e.cars.carsAll},t=function(e){return e.cars.cars},s=function(e){return e.cars.isLoading},i=function(e){return e.favorites.favorites}},6168:function(e,a){a.Z={pageTitle:"Page_pageTitle__Pl-Lt",container:"Page_container__z9ezR",section:"Page_section__12A5P",favorites:"Page_favorites__zCM+h"}}}]);
//# sourceMappingURL=892.2e8ec4b2.chunk.js.map