(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return v}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",f="AUTH_START",m="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",v="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(18),a=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return m})),n.d(t,"j",(function(){return v})),n.d(t,"c",(function(){return _}));var r=n(1),a=n(19),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://burgerbuilder-540b5.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(18),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth=".concat(t),e).then((function(t){console.log(t.data),n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth=".concat(e,"&orderBy=userId&equalTo=").concat(t);a.a.get("/orders.json?auth="+o).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)(Object(u.a)({},e.data[o]),{},{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},p=n(31),h=n.n(p),f=function(e,t){return{type:r.e,idToken:e,userId:t}},m=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout((function(){t(m())}),1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBQOm6eHRGSXwWW5_Q3ulnOZ0H4tMsIr4";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBQOm6eHRGSXwWW5_Q3ulnOZ0H4tMsIr4"),h.a.post(i,o).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(f(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))})).catch((function(e){var t;console.log(e),a((t=e.response.data.error,{type:r.b,error:t}))}))}},v=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var r=localStorage.getItem("userId");e(f(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}else e(m())}else e(m())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,function(e,t,n){"use strict";var r=n(31),a=n.n(r).a.create({baseURL:"https://burgerbuilder-540b5.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(0),u=n.n(c),l=n(55),s=n.n(l),d=n(11),p=n(30),h=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),u.a.createElement("div",{className:s.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(c.Component);t.a=h},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(56),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(36),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(57),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(0),u=n.n(c),l=n(29),s=n(11);t.a=function(e,t){return function(n){Object(o.a)(d,n);var c=Object(i.a)(d);function d(){var e;Object(r.a)(this,d);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=c.call.apply(c,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(a.a)(d,[{key:"componentWillMount",value:function(){var e=this;this.reqInceptors=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptors=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInceptors),t.interceptors.request.eject(this.resInceptors)}},{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement(l.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),u.a.createElement(e,this.props))}}]),d}(c.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(65),a=n(0),o=n.n(a),i=n(54),c=n.n(i),u=n(5),l=n(6),s=n(8),d=n(7),p=n(17),h=n.n(p),f=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},";",o.a.createElement("div",{className:h.a.Seeds1}),";",o.a.createElement("div",{className:h.a.Seeds2}),";");break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:h.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;default:e=null}return e}}]),n}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(f,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please Start Adding Ingredients")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(f,{type:"bread-top"}),t,o.a.createElement(f,{type:"bread-bottom"}))}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},,function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},,,function(e,t,n){e.exports=n(94)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),i=n.n(o),c=(n(71),n(5)),u=n(6),l=n(8),s=n(7),d=n(18),p=n(11),h=n(53),f=n(35),m=n.n(f),g=n(26),b=n.n(g),v=function(e){return a.a.createElement("div",{className:b.a.BuildControl},a.a.createElement("div",{className:b.a.Label},e.label),a.a.createElement("button",{className:b.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:b.a.More,onClick:e.added},"More"))},_=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],E=function(e){return a.a.createElement("div",{className:m.a.BuildControls},a.a.createElement("p",null," Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))," "),_.map((function(t){return a.a.createElement(v,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:m.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"Order Now":"Sign Up to Order"))},O=n(29),k=n(33),y=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.props.ingredients[t])}));return a.a.createElement(p.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following Ingredients: "),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(k.a,{clicked:this.props.purchaseCancelled,btnType:"Danger"},"CANCEL"),a.a.createElement(k.a,{clicked:this.props.purchaseContinued,btnType:"Success"},"CONTINUE"))}}]),n}(r.Component),j=n(41),S=n(42),C=n(15),w=n(19),I=n(16),B=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(d.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null," Ingredients cannot be loaded "):a.a.createElement(j.a,null);return this.props.ings&&(r=a.a.createElement(p.a,null,a.a.createElement(h.a,{ingredients:this.props.ings}),a.a.createElement(E,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemove,disabled:e,purchaseable:this.updatePurchaseState(this.props.ings),price:this.props.price,isAuth:this.props.isAuthenticated,ordered:this.purchaseHandler})),n=a.a.createElement(y,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(p.a,null,a.a.createElement(O.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),n}(r.Component),T=Object(C.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(I.a(t))},onIngredientRemove:function(t){return e(I.i(t))},onInitIngredients:function(){return e(I.e())},onInitPurchase:function(){return e(I.h())},onSetAuthRedirectPath:function(t){return e(I.j(t))}}}))(Object(S.a)(B,w.a)),N=n(32),A=n.n(N),D=n(59),L=n.n(D),R=n(60),x=n.n(R),H=function(e){return a.a.createElement("div",{className:x.a.Logo},a.a.createElement("img",{src:L.a,alt:"My Burger"}))},U=n(61),P=n.n(U),M=function(e){return a.a.createElement("div",{className:P.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},F=n(62),W=n.n(F),z=n(21),G=n(38),q=n.n(G),X=function(e){return a.a.createElement("li",{className:q.a.NavigationItem},a.a.createElement(z.b,{to:e.link,exact:!0,activeClassName:q.a.active},e.children))},Y=function(e){return a.a.createElement("ul",{className:W.a.NavigationItems},a.a.createElement(X,{link:"/"},"Burger Builder"),e.isAuthenticated?a.a.createElement(X,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(X,{link:"/logout"},"Logout"):a.a.createElement(X,{link:"/auth"},"Authenticate"))},K=function(e){return a.a.createElement("header",{className:A.a.Toolbar},a.a.createElement(M,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:A.a.Logo},a.a.createElement(H,null)),a.a.createElement("nav",{className:A.a.DesktopOnly},a.a.createElement(Y,{isAuthenticated:e.isAuth})))},Q=n(30),J=n(23),$=n.n(J),Z=function(e){var t=[$.a.SideDrawer,$.a.Close];return e.open&&(t=[$.a.SideDrawer,$.a.Open]),a.a.createElement(p.a,null,a.a.createElement(Q.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:$.a.Logo},a.a.createElement(H,null)),a.a.createElement("nav",null,a.a.createElement(Y,{isAuthenticated:e.isAuth}))))},V=n(63),ee=n.n(V),te=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(p.a,null,a.a.createElement(K,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(Z,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:ee.a.Content},this.props.children))}}]),n}(r.Component),ne=Object(C.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(te),re=n(4),ae=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(re.a,{to:"/"})}}]),n}(r.Component),oe=Object(C.b)(null,(function(e){return{onLogout:function(){return e(I.f())}}}))(ae),ie=function(e){return function(t){Object(l.a)(r,t);var n=Object(s.a)(r);function r(){var e;Object(c.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={component:null},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),r}(r.Component)},ce=ie((function(){return n.e(3).then(n.bind(null,102))})),ue=ie((function(){return n.e(5).then(n.bind(null,103))})),le=ie((function(){return n.e(4).then(n.bind(null,101))})),se=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(re.d,null,a.a.createElement(re.b,{path:"/auth",component:le}),a.a.createElement(re.b,{path:"/",exact:!0,component:T}),a.a.createElement(re.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(re.d,null,a.a.createElement(re.b,{path:"/checkout",component:ce}),a.a.createElement(re.b,{path:"/orders",component:ue}),a.a.createElement(re.b,{path:"/logout",component:oe}),a.a.createElement(re.b,{path:"/auth",component:le}),a.a.createElement(re.b,{path:"/",exact:!0,component:T}))),a.a.createElement("div",null,a.a.createElement(ne,null,e))}}]),n}(r.Component),de=Object(re.g)(Object(C.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(I.c())}}}))(se)),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var fe=n(20),me=n(64),ge=n(24),be=n(1),ve=n(3),_e={ingredients:null,totalPrice:4,error:!1,building:!1},Ee={salad:.5,cheese:.4,meat:1.3,bacon:.7},Oe=function(e,t){var n=Object(ge.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ve.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(ve.b)(e,r)},ke=function(e,t){var n=Object(ge.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ve.b)(e.ingredients,n),totalPrice:e.totalPrice-Ee[t.ingredientName],building:!0};return Object(ve.b)(e,r)},ye=function(e,t){return Object(ve.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},je=function(e,t){return Object(ve.b)(e,{error:!0})},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.a:return Oe(e,t);case be.n:return ke(e,t);case be.p:return ye(e,t);case be.f:return je(e);default:return e}},Ce={orders:[],loading:!1,purchased:!1},we=function(e,t){return Object(ve.b)(e,{purchased:!1})},Ie=function(e,t){return Object(ve.b)(e,{loading:!0})},Be=function(e,t){var n=Object(ve.b)(t.orderData,{id:t.orderId});return Object(ve.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Te=function(e,t){return Object(ve.b)(e,{loading:!1})},Ne=function(e,t){return Object(ve.b)(e,{loading:!0})},Ae=function(e,t){return Object(ve.b)(e,{orders:t.orders,loading:!1})},De=function(e,t){return Object(ve.b)(e,{loading:!1})},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.m:return we(e);case be.k:return Ie(e);case be.l:return Be(e,t);case be.j:return Te(e);case be.h:return Ne(e);case be.i:return Ae(e,t);case be.g:return De(e);default:return e}},Re={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},xe=function(e,t){return Object(ve.b)(e,{error:null,loading:!0})},He=function(e,t){return Object(ve.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Ue=function(e,t){return Object(ve.b)(e,{error:t.error,loading:!1})},Pe=function(e,t){return Object(ve.b)(e,{token:null,userId:null})},Me=function(e,t){return Object(ve.b)(e,{authRedirectPath:t.path})},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.d:return xe(e);case be.e:return He(e,t);case be.b:return Ue(e,t);case be.c:return Pe(e);case be.o:return Me(e,t);default:return e}},We=fe.d,ze=Object(fe.c)({burgerBuilder:Se,order:Le,auth:Fe}),Ge=Object(fe.e)(ze,We(Object(fe.a)(me.a))),qe=a.a.createElement(C.a,{store:Ge},a.a.createElement(z.a,null,a.a.createElement(de,null)));i.a.render(qe,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");pe?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):he(e)}))}}()}],[[66,1,2]]]);
//# sourceMappingURL=main.bd0617f8.chunk.js.map