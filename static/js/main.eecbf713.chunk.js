(this.webpackJsonponline_store=this.webpackJsonponline_store||[]).push([[0],{111:function(e,t,a){e.exports=a(240)},116:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),l=a.n(c),o=(a(116),a(10));var m=a(7),i=Object(m.b)((function(e){return{cart:e.products.cart}}))((function(e){var t=e.cart;return r.a.createElement(o.b,{to:"/cart",className:"cart"},r.a.createElement("i",{className:"fas fa-shopping-basket cart__icon nav-link"}),r.a.createElement("span",{className:"cart__qty"},t.totalQty))})),s=function(e){return r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:e.to},e.title))};function u(){return r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mx-auto w-100 justify-content-center"},r.a.createElement(s,{title:"Home",to:"/"}),r.a.createElement(s,{title:"About us",to:"/about"}),r.a.createElement(s,{title:"Products",to:"/products"}),r.a.createElement(s,{title:"Manufacturing",to:"/manufacturing"}),r.a.createElement(s,{title:"Contact us",to:"/contact"})),r.a.createElement(i,null))}a(121);var d=function(){return r.a.createElement(o.b,{className:"navbar-brand mr-auto",to:"/"},"COMPANY")},p=function(){return r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"}))};function E(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light sticky-top"},r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(u,null))}a(122);function f(){return r.a.createElement("footer",{className:"footer bg-light"},r.a.createElement("div",null,"developed by Oleksii Tyshchenko \xa9 2020"))}var b=a(23);function v(){return r.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{src:"https://www.york.ac.uk/media/study/courses/undergraduate/electronics/EE-comp-BEng-ind.jpg",className:"d-block w-100 carousel-item__img",alt:"..."})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:"https://www.nutsvolts.com/uploads/articles/NV_0704_Christopherson_Large.jpg",className:"d-block w-100",alt:"..."}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))}function g(){return r.a.createElement("div",{className:"jumbotron bg-light container"},r.a.createElement("h1",{className:"display-4"},"Welcome!"),r.a.createElement("p",{className:"lead"}),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis debitis, ducimus corporis cum corrupti ab beatae voluptatem ut soluta laborum, voluptas blanditiis laboriosam, ratione magnam et esse ipsa cupiditate veniam suscipit sint eligendi dolore! "),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"Quis ut corrupti incidunt nisi tempora necessitatibus itaque? Quisquam, excepturi doloremque iste possimus expedita autem inventore sint animi!  "),r.a.createElement("p",{className:"lead"},r.a.createElement(o.b,{className:"btn btn-primary btn-lg",to:"/products",role:"button"},"Go to products")))}a(123);function N(){return r.a.createElement("div",{className:"home"},r.a.createElement(v,null),r.a.createElement(g,null))}function y(){return r.a.createElement("div",{className:"about container"},r.a.createElement("header",{className:"content-title"},"About us"),r.a.createElement("article",null,r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse maxime minima harum, voluptatem itaque et, optio commodi cumque aliquid necessitatibus provident tempora enim fuga modi. Aut reprehenderit debitis ab, minus enim est placeat aspernatur ullam? Autem repudiandae commodi recusandae deserunt voluptates dolores distinctio voluptas, facilis nesciunt laborum. Distinctio, praesentium!"),r.a.createElement("p",{className:"lead"},"Tenetur aliquam voluptatum omnis officiis aut quo vero ad cumque, beatae magnam accusantium inventore nostrum molestias ipsam placeat rerum magni, consequuntur minus at sapiente tempora maiores? Quo cupiditate tempore quaerat numquam rerum laboriosam itaque dolorem dicta possimus fugiat error nihil fugit obcaecati eaque ad aperiam, est deserunt necessitatibus modi excepturi."),r.a.createElement("p",{className:"lead"},"Cum id voluptate amet alias eos incidunt numquam ab aspernatur sint mollitia? Modi sed ducimus nesciunt tempora numquam illum ea ex eum error in, quaerat distinctio vel sint. Ipsam iusto veniam adipisci, ducimus consectetur et accusantium laboriosam natus quasi provident? Distinctio aspernatur officiis ad sunt magnam at fugit adipisci sit!")))}var h=a(29),C=a(30),T=a(34),_=a(31),O=a(35),q=a(110);a(124);function k(e){return r.a.createElement("input",{type:"number",className:"form-control col",min:1,max:e.item.stock,value:e.item.qty,onChange:function(t){return e.onChangeToBuy(e.item.id,t.target.value)},onKeyDown:function(t){"Enter"===t.key&&e.addToCartTC(e.item,e.item.qty)}})}function j(e){return r.a.createElement("button",{onClick:function(){return e.addToCartTC(e.item,e.item.qty)},className:"btn btn-primary price-block__el"},"Add to cart")}var S=a(16),x=a(106).create({baseURL:"https://store-6f41d.firebaseio.com"}),A={getCatalog:function(){return x.get("/catalog.json").then((function(e){return e.data}))},setStock:function(e,t){return x.put("/catalog/".concat(e,"/stock.json"),t)}},w={catalog:[],get cart(){return null!==localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{items:[],totalQty:0,totalSum:0}}};var L=function(e){return function(t){e.items.map((function(e){return A.setStock(e.id,e.stock-e.qty)})),t({type:"CLEAR_CART"}),t({type:"SET_LS"})}},R=Object(m.b)((function(e,t){return{item:t.item,catalog:e.products.catalog}}),{onChangeToBuy:function(e,t){return{type:"ON_CHANGE_TO_BUY",id:e,qty:+t}},addToCartTC:function(e,t){return function(a){a(function(e,t){return{type:"ADD_TO_CART",item:e,qty:+t}}(e,t)),a({type:"CALC_TOTAL"}),a({type:"SET_LS"})}}})((function(e){return r.a.createElement("div",{className:"price-block"},r.a.createElement("div",{className:"price-block__el price-block__price row align-items-center"},r.a.createElement("span",{className:"col-7"},"In stock:")," ",r.a.createElement("span",{className:"col"},e.item.stock," pcs"),r.a.createElement("span",{className:"col-7"},"Total: ",e.item.sum.toFixed(2)," $"),r.a.createElement(k,{item:e.item,onChangeToBuy:e.onChangeToBuy,addToCartTC:e.addToCartTC})),r.a.createElement(j,{item:e.item,addToCartTC:e.addToCartTC}))}));function I(e){return r.a.createElement("div",{className:"card bg-light"},r.a.createElement(o.b,{className:"navLink",to:"/products/"+e.item.id},r.a.createElement("img",{src:e.item.src,className:"card-img-top",alt:e.item.title})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement(o.b,{className:"navLink",to:"/products/"+e.item.id},e.item.title," ")),r.a.createElement(R,{item:e.item})))}var P=a(242),M=a(241),F=Object(M.a)({form:"sortForm"})((function(e){return r.a.createElement("form",{className:"row justify-content-center",onSubmit:e.handleSubmit},r.a.createElement(P.a,{name:"sort",component:"select",className:"custom-select",style:{maxWidth:250},onChange:e.submit},r.a.createElement("option",{value:""},"Sort by..."),r.a.createElement("option",{value:"title"},"title"),r.a.createElement("option",{value:"price"},"price"),r.a.createElement("option",{value:"stock"},"quantity")))}));function D(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null)))}function B(e){var t=r.a.useState(!0),a=Object(q.a)(t,2),n=a[0],c=a[1];return r.a.createElement("div",{className:"products container-fluid"},r.a.createElement("header",{className:"content-title"},"Products"),r.a.createElement(F,Object.assign({},e,{onSubmit:function(t){t.sort&&(c(!1),e.sortProducts(t.sort),setTimeout((function(){return c(!0)}),0))}})),n?r.a.createElement("div",{className:"products-cards "},e.catalog.map((function(e){return r.a.createElement(I,{key:e.id,item:e})}))):r.a.createElement(D,null))}function Q(e){return r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body product-item-description"},r.a.createElement("div",{className:"product-item-description__header"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},e.description)),r.a.createElement("p",{className:"product-item-description__footer card-text"},r.a.createElement("small",{className:"text-muted"},"Last updated 3 days ago"))))}function G(e){var t=e.item;return r.a.createElement("div",{className:"product-item container"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4 card-div-img"},r.a.createElement("img",{src:t.src,className:"card-img mt-auto",alt:t.title}),r.a.createElement(R,{item:t})),r.a.createElement(Q,{title:t.title,description:t.description}))))}var U=function(){return r.a.createElement("div",{className:"alert alert-light text-center",role:"alert"},r.a.createElement("h1",{className:"display-4 mt-5"},r.a.createElement("strong",null,"404 \u2013 page not found")))},Y=function(e){function t(){return Object(h.a)(this,t),Object(T.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return this.props.item?r.a.createElement(G,{item:this.props.item}):r.a.createElement(U,null)}}]),t}(r.a.Component),H=Object(m.b)((function(e,t){return{item:e.products.catalog.filter((function(e){return t.id===e.id}))[0]}}))(Y),J=a(6),W=function(e){function t(){return Object(h.a)(this,t),Object(T.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.getProductsThunkCreator()}},{key:"render",value:function(){return this.props.catalog.length?this.props.match.params.productId?r.a.createElement(H,{id:+this.props.match.params.productId}):r.a.createElement(B,{catalog:this.props.catalog,sortProducts:this.props.sortProducts}):r.a.createElement(D,null)}}]),t}(r.a.Component),$=Object(J.d)(Object(m.b)((function(e){return{catalog:e.products.catalog}}),{getProductsThunkCreator:function(){return function(e){A.getCatalog().then((function(t){return e(function(e){return{type:"SET_CATALOG",catalog:e}}(t))}))}},sortProducts:function(e){return{type:"SORT_PRODUCTS",payload:e}}}),b.f)(W);function V(){return r.a.createElement("div",{className:"manufacturing container"},r.a.createElement("header",{className:"content-title"},"Manufacturing"),r.a.createElement("div",{className:"alert alert-info",role:"alert"},"Content under construction."))}function K(){return r.a.createElement("div",{className:"contact container"},r.a.createElement("header",{className:"content-title"},"Contact Us"),r.a.createElement("div",{id:"contacts row"},r.a.createElement("div",{className:"contact-items row col justify-content-around"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-paper-plane","aria-hidden":"true"}),r.a.createElement("a",{href:"https://t.me/",className:"navLink",rel:"noopener noreferrer",target:"_blank"},"Aleksey")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-envelope","aria-hidden":"true"}),r.a.createElement("a",{className:"navLink",href:"mailto:alexcare1337@gmail.com"},"alexcare1337@gmail.com")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-mobile-alt","aria-hidden":"true"}),r.a.createElement("a",{className:"navLink",href:"tel:+380932657847"},"+38(093)-265-78-47"))),r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20326.065521301334!2d30.436714190356554!3d50.44560459199414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1576323955462!5m2!1sru!2sua",title:"contacts-map",className:"w-100 google-map",height:"300px",frameBorder:"0",allowFullScreen:""})))}var z,X=a(26),Z=a.n(X),ee=function(e){return!e&&"This field is required"},te=function(e){return e&&(!e.includes("@")||!e.split("@")[0]||!e.split("@")[1])&&"Email is not valid"},ae=a(108),ne=function(e){var t=e.input,a=e.meta,n=Object(ae.a)(e,["input","meta"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({},t,n,{style:a.touched&&a.error?{border:"1px solid red"}:{}})),a.touched&&a.error&&r.a.createElement("small",{style:{color:"red"}},a.error))},re=(z=4,function(e){return e&&e.length<z&&"Min length is ".concat(z," symbols")}),ce=Object(M.a)({form:"purchaseBlank"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"cartName"},"Name"),r.a.createElement(P.a,{validate:[ee,re],component:ne,type:"text",placeholder:"Name",name:"name",className:"form-control",id:"cartName"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"cartPhone"},"Phone number"),r.a.createElement(P.a,{validate:[ee],component:ne,type:"text",placeholder:"055-555-55-55",name:"phone",className:"form-control",id:"cartPhone"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"cartEmail"},"Email address"),r.a.createElement(P.a,{validate:[te],component:ne,type:"email",placeholder:"email@example.com",name:"email",className:"form-control",id:"cartEmail"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"cartComments"},"Comments"),r.a.createElement(P.a,{component:"textarea",placeholder:"Any comments",name:"comments",className:"form-control",id:"cartComments",rows:"3"}))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("input",{type:"submit",className:"btn btn-primary","data-dismiss":"modal",disabled:!e.valid,onClick:e.submit,value:"Send request"})))})),le=function(e){function t(){return Object(h.a)(this,t),Object(T.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"modal fade",id:"modal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Fill in the data for feedback"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(ce,Object.assign({},this.props,{onSubmit:function(){return e.props.submitPurchase(e.props.cart)}})))))}}]),t}(r.a.Component),oe=Object(m.b)((function(e){return{cart:e.products.cart}}),{submitPurchase:L})(le);function me(e){var t=e.props;return r.a.createElement("div",{className:Z.a.summary},r.a.createElement("div",{className:Z.a.textSummary},r.a.createElement("span",null,"Total quantity:"),r.a.createElement("span",null,t.cart.totalQty)),r.a.createElement("div",{className:Z.a.textSummary},r.a.createElement("span",null,"Total sum:"),r.a.createElement("span",null,t.cart.totalSum.toFixed(2)," $")),r.a.createElement("div",{className:Z.a.buttonsSummary},r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#modal"},"Accept"),r.a.createElement(oe,null)),r.a.createElement("button",{className:"btn btn-danger",onClick:t.clearCartTC},"Clear cart")))}var ie=Object(m.b)((function(e,t){return{item:t.item,cart:e.products.cart}}),{removeCartItemTC:function(e){return function(t){t(function(e){return{type:"REMOVE_CART_ITEM",id:e}}(e)),t({type:"CALC_TOTAL"}),t({type:"SET_LS"})}},setCartItemTC:function(e,t){return function(a){a(function(e,t){return{type:"ON_CHANGE_CART_QTY",id:e,qty:+t}}(e,t)),a({type:"CALC_TOTAL"}),a({type:"SET_LS"})}}})((function(e){return r.a.createElement("li",{className:"list-group-item bg-light d-flex justify-content-center align-items-center row"},r.a.createElement("img",{src:e.item.src,alt:e.item.title,className:"col-12 col-md-2"}),r.a.createElement("span",{className:"col-12 col-md-5"},e.item.title),r.a.createElement("span",{className:"col-5 col-md-2",style:{textAlign:"right"}},e.item.sum.toFixed(2)," $"),r.a.createElement("input",{type:"number",className:"form-control col-5 col-md-2",value:+e.item.qty,onChange:function(t){return e.setCartItemTC(e.item.id,t.target.value)}}),r.a.createElement("span",{className:Z.a.times,onClick:function(){return e.removeCartItemTC(e.item.id)}},"\xd7"))}));function se(e){var t=e.cart;return r.a.createElement("ul",{className:"list-group"},t.items.map((function(e){return r.a.createElement(ie,{key:e.id,item:e})})))}var ue=Object(m.b)((function(e){return{cart:e.products.cart}}),{clearCartTC:function(){return function(e){e({type:"CLEAR_CART"}),e({type:"SET_LS"})}},submitPurchase:L})((function(e){return r.a.createElement("div",{className:"container align-center"},r.a.createElement("header",{className:"content-title"},"Cart "),e.cart.totalQty?r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{cart:e.cart}),r.a.createElement(me,{props:e})):r.a.createElement("div",{className:"alert alert-info",role:"alert"},"Your cart is empty")," ")}));function de(e){return r.a.createElement("main",{className:"content container-fluid"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:N}),r.a.createElement(b.a,{path:"/about",component:y}),r.a.createElement(b.a,{path:"/products/:productId?",component:$}),r.a.createElement(b.a,{path:"/manufacturing",component:V}),r.a.createElement(b.a,{path:"/contact",component:K}),r.a.createElement(b.a,{path:"/cart",component:ue}),r.a.createElement(b.a,{path:"/",component:U})))}var pe=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(E,null),r.a.createElement(de,null),r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(109),fe=a(243),be=Object(J.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_CHANGE_TO_BUY":return Object(S.a)({},e,{catalog:e.catalog.map((function(e){return e.id===t.id&&(e.qty=t.qty,t.qty<1&&(e.qty=1),t.qty>e.stock&&(e.qty=e.stock),e.sum=e.qty*e.price),e}))});case"ADD_TO_CART":var a=Object(S.a)({},e,{catalog:e.catalog.map((function(e){return e.id===t.item.id&&(e.qty=1,e.sum=e.price,t.sum=e.price*t.qty),e}))}),n=a.cart.items.filter((function(e){return e.id===t.item.id})).length;return n?a.cart.items.map((function(e){return e.id===t.item.id&&(e.qty+=t.qty,e.qty<1&&(e.qty=1),e.qty>e.stock&&(e.qty=e.stock),e.sum+=t.sum),e})):a.cart.items.push(Object(S.a)({},t.item,{qty:t.qty,sum:t.sum})),a;case"SET_CATALOG":return Object(S.a)({},e,{catalog:t.catalog.map((function(e){return e.qty=1,e.sum=e.price,e}))});case"CLEAR_CART":return localStorage.removeItem("cart"),Object(S.a)({},e,{cart:{items:[],totalQty:0,totalSum:0}});case"REMOVE_CART_ITEM":return Object(S.a)({},e,{cart:Object(S.a)({},e.cart,{items:e.cart.items.filter((function(e){return e.id!==t.id}))})});case"ON_CHANGE_CART_QTY":return Object(S.a)({},e,{cart:{items:e.cart.items.map((function(e){return e.id===t.id&&(e.qty=t.qty,e.qty<1&&(e.qty=1),e.qty>e.stock&&(e.qty=e.stock),e.sum=e.qty*e.price),e}))}});case"CALC_TOTAL":return Object(S.a)({},e,{cart:Object(S.a)({},e.cart,{totalQty:e.cart.items.reduce((function(e,t){return e+t.qty}),0),totalSum:e.cart.items.reduce((function(e,t){return e+t.sum}),0)})});case"SET_LS":return localStorage.setItem("cart",JSON.stringify(e.cart)),e;case"SORT_PRODUCTS":return Object(S.a)({},e,{catalog:e.catalog.sort((function(e,a){return e[t.payload]<a[t.payload]?-1:1}))});default:return e}},form:fe.a}),ve=Object(J.e)(be,Object(J.a)(Ee.a));l.a.render(r.a.createElement(m.a,{store:ve},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e,t,a){e.exports={summary:"Cart_summary__i9M4v",buttonsSummary:"Cart_buttonsSummary__1Dptg",textSummary:"Cart_textSummary__3_rl8",times:"Cart_times__fhUMq"}}},[[111,1,2]]]);
//# sourceMappingURL=main.eecbf713.chunk.js.map