(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,n,t){e.exports=t(234)},233:function(e,n,t){},234:function(e,n,t){"use strict";t.r(n);var r=t(5),a=t(0),o=t.n(a),i=t(28),c=t.n(i),l=t(23),d=t(9),u=t(57),s=t(13),p=function(e){return{type:m.ADD_LIST,payload:e}},f=function(e,n,t,r,a,o){return{type:m.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:n,droppableIndexEnd:r,droppableIndexStart:t,draggableId:a,type:o}}},b=function(e,n){return{type:m.ADD_CARD,payload:{text:n,listID:e}}},m={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST"},h=2,E=6,g=[{title:"Last Episode",id:"list-".concat(0),cards:[{id:"card-".concat(0),text:"we created a static list and a static card"},{id:"card-".concat(1),text:"we used a mix between material UI React and styled components"}]},{title:"This Episode",id:"list-".concat(1),cards:[{id:"card-".concat(2),text:"we will create our first reducer"},{id:"card-".concat(3),text:"and render many cards on our list with static data"},{id:"card-".concat(4),text:"we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)"},{id:"card-".concat(5),text:"we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)"}]}],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(console.log(e),n.type){case m.ADD_LIST:var t={title:n.payload,cards:[],id:"list-".concat(h)};return h+=1,[].concat(Object(s.a)(e),[t]);case m.ADD_CARD:var r={text:n.payload.text,id:"card-".concat(E)};return E+=1,console.log("action received",n),e.map(function(e){return e.id===n.payload.listID?Object(u.a)({},e,{cards:[].concat(Object(s.a)(e.cards),[r])}):e});case m.DRAG_HAPPENED:var a=n.payload,o=a.droppableIdStart,i=a.droppableIdEnd,c=a.droppableIndexEnd,l=a.droppableIndexStart,d=a.type,p=Object(s.a)(e);if("list"===d){var f=p.splice(l,1);return p.splice.apply(p,[c,0].concat(Object(s.a)(f))),p}if(o===i){var b,v=e.find(function(e){return o===e.id}),x=v.cards.splice(l,1);(b=v.cards).splice.apply(b,[c,0].concat(Object(s.a)(x)))}if(o!==i){var D,O=e.find(function(e){return o===e.id}).cards.splice(l,1);(D=e.find(function(e){return i===e.id}).cards).splice.apply(D,[c,0].concat(Object(s.a)(O)))}return p;case m.EDIT_CARD:var y=n.payload,j=y.id,I=y.listID,w=y.newText;return e.map(function(e){if(e.id===I){var n=e.cards.map(function(e){return e.id===j?(e.text=w,e):e});return Object(u.a)({},e,{cards:n})}return e});case m.DELETE_CARD:var T=n.payload,A=T.id,k=T.listID;return e.map(function(e){if(e.id===k){var n=e.cards.filter(function(e){return e.id!==A});return Object(u.a)({},e,{cards:n})}return e});case m.EDIT_LIST_TITLE:var C=n.payload,S=C.listID,_=C.newTitle;return console.log(S,_),e.map(function(e){return e.id===S?(e.title=_,e):e});case m.DELETE_LIST:var L=n.payload.listID;return e.filter(function(e){return e.id!==L});default:return e}},x=Object(d.c)({lists:v}),D=t(70),O=t(96),y={key:"root",storage:t.n(O).a},j=Object(D.a)(y,x),I=t(12),w=t(20),T=t(16),A=t(15),k=t(17),C=t(35),S=t(54),_=t.n(S),L=t(105),R=t.n(L),P=t(104),F=t.n(P),H=t(29),N=t(6),z=t(19),M=t.n(z),B=t(99);function G(){var e=Object(r.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]);return G=function(){return e},e}function J(){var e=Object(r.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return J=function(){return e},e}function W(){var e=Object(r.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return W=function(){return e},e}function U(){var e=Object(r.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return U=function(){return e},e}function Y(){var e=Object(r.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return Y=function(){return e},e}var $=N.b.div(Y()),q=Object(N.b)(_.a)(U()),K=Object(N.b)(B.a)(W()),Q=N.b.div(J()),V=Object(N.b)(M.a)(G()),X=o.a.memo(function(e){var n=e.list,t=e.text,r=void 0===t?"":t,a=e.onChange,i=e.closeForm,c=e.children,l=n?"Enter list title...":"Enter a title for this card...";return o.a.createElement($,null,o.a.createElement(q,null,o.a.createElement(K,{placeholder:l,autoFocus:!0,value:r,onChange:function(e){return a(e)},onBlur:i})),o.a.createElement(Q,null,c,o.a.createElement(V,{onMouseDown:i},"close")))}),Z=t(100),ee=t.n(Z);function ne(){var e=Object(r.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return ne=function(){return e},e}var te=Object(N.b)(ee.a)(ne()),re=function(e){var n=e.children,t=e.onClick;return o.a.createElement(te,{variant:"contained",onMouseDown:t},n)},ae=t(68);function oe(){var e=Object(r.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(r.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(r.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return ce=function(){return e},e}var le=N.b.div(ce()),de=Object(N.b)(M.a)(ie(),le),ue=Object(N.b)(M.a)(oe(),le),se=o.a.memo(function(e){var n=e.text,t=e.id,r=e.listID,i=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(C.a)(l,2),u=d[0],s=d[1],p=Object(a.useState)(n),f=Object(C.a)(p,2),b=f[0],h=f[1],E=Object(ae.b)({opacity:1,from:{opacity:0},config:{duration:400}}),g=function(e){s(!1)},v=function(e){h(e.target.value)},x=function(e){e.preventDefault(),c(function(e,n,t){return{type:m.EDIT_CARD,payload:{id:e,listID:n,newText:t}}}(t,r,b)),s(!1)},D=function(e){c(function(e,n){return{type:m.DELETE_CARD,payload:{id:e,listID:n}}}(t,r))};return u?o.a.createElement(X,{text:b,onChange:v,closeForm:g},o.a.createElement(re,{onClick:x},"Save")):o.a.createElement(ae.a.div,{style:E},o.a.createElement(H.b,{draggableId:String(t),index:i},function(e){return o.a.createElement(le,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:function(){return s(!0)}}),o.a.createElement(_.a,null,o.a.createElement(de,{onMouseDown:function(){return s(!0)},fontSize:"small"},"edit"),o.a.createElement(ue,{fontSize:"small",onMouseDown:D},"delete"),o.a.createElement(F.a,null,o.a.createElement(R.a,null,n))))}))}),pe=Object(l.b)()(se);function fe(){var e=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 8px;\n    width: 300px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return fe=function(){return e},e}var be=function(e){var n=e.list,t=e.children,r=e.onClick,a=n?1:.5,i=n?"white":"inherit",c=n?"rgba(0,0,0,.15)":"inherit",l=N.b.div(fe(),a,i,c);return o.a.createElement(l,{onClick:r},o.a.createElement(M.a,null,"add"),o.a.createElement("p",{style:{flexShrink:0}},t))};function me(){var e=Object(r.a)(["\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 36px;\n      margin-left: 8px;\n      width: 300px;\n      padding-left: 10px;\n      padding-right: 10px;\n      opacity: ",";\n      color: ",";\n      background-color: ",";\n    "]);return me=function(){return e},e}var he=function(e){function n(){var e,t;Object(I.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(T.a)(this,(e=Object(A.a)(n)).call.apply(e,[this].concat(a)))).state={formOpen:!1,text:""},t.openForm=function(){t.setState({formOpen:!0})},t.closeForm=function(e){t.setState({formOpen:!1})},t.handleInputChange=function(e){t.setState({text:e.target.value})},t.handleAddList=function(){var e=t.props.dispatch,n=t.state.text;n&&(t.setState({text:""}),e(p(n)))},t.handleAddCard=function(){var e=t.props,n=e.dispatch,r=e.listID,a=t.state.text;a&&(t.setState({text:""}),n(b(r,a)))},t.renderOpenForm=function(){var e=t.props.list,n=e?"Add another list":"Add another card",r=e?1:.5,a=e?"white":"inherit",i=e?"rgba(0,0,0,.15)":"inherit",c=N.b.div(me(),r,a,i);return o.a.createElement(c,{onClick:t.openForm},o.a.createElement(M.a,null,"add"),o.a.createElement("p",{style:{flexShrink:0}},n))},t}return Object(k.a)(n,e),Object(w.a)(n,[{key:"render",value:function(){var e=this.state.text,n=this.props.list;return this.state.formOpen?o.a.createElement(X,{text:e,onChange:this.handleInputChange,closeForm:this.closeForm},o.a.createElement(re,{onClick:n?this.handleAddList:this.handleAddCard},n?"Add List":"Add Card")):o.a.createElement(be,{list:n,onClick:this.openForm},n?"Add another list":"Add another card")}}]),n}(o.a.PureComponent),Ee=Object(l.b)()(he);function ge(){var e=Object(r.a)(["\n  transition: background 0.3s ease-in;\n  ",":hover & {\n    background: #ccc;\n  }\n"]);return ge=function(){return e},e}function ve(){var e=Object(r.a)(["\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0.4;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return ve=function(){return e},e}function xe(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return xe=function(){return e},e}function De(){var e=Object(r.a)(["\n  width: 100%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]);return De=function(){return e},e}function Oe(){var e=Object(r.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  height: 100%;\n  margin: 0 8px 0 0;\n"]);return Oe=function(){return e},e}var ye=N.b.div(Oe()),je=N.b.input(De()),Ie=N.b.div(xe()),we=Object(N.b)(M.a)(ve()),Te=N.b.h4(ge(),Ie),Ae=Object(l.b)()(function(e){var n=e.title,t=e.cards,r=e.listID,i=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(C.a)(l,2),u=d[0],s=d[1],p=Object(a.useState)(n),f=Object(C.a)(p,2),b=f[0],h=f[1],E=function(e){console.log("hi"),e.target.select()},g=function(e){e.preventDefault(),h(e.target.value)},v=function(e){s(!1),c(function(e,n){return{type:m.EDIT_LIST_TITLE,payload:{listID:e,newTitle:n}}}(r,b))},x=function(){c(function(e){return{type:m.DELETE_LIST,payload:{listID:e}}}(r))};return o.a.createElement(H.b,{draggableId:String(r),index:i},function(e){return o.a.createElement(ye,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),o.a.createElement(H.c,{droppableId:String(r),type:"card"},function(e){return o.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),u?o.a.createElement("form",{onSubmit:v},o.a.createElement(je,{type:"text",value:b,onChange:g,autoFocus:!0,onFocus:E,onBlur:v})):o.a.createElement(Ie,{onClick:function(){return s(!0)}},o.a.createElement(Te,null,b),o.a.createElement(we,{onClick:x},"delete")),t.map(function(e,n){return o.a.createElement(pe,{key:e.id,text:e.text,id:e.id,index:n,listID:r})}),e.placeholder,o.a.createElement(Ee,{listID:r}))}))})});function ke(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return ke=function(){return e},e}var Ce=N.b.div(ke()),Se=function(e){function n(){var e,t;Object(I.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(T.a)(this,(e=Object(A.a)(n)).call.apply(e,[this].concat(a)))).onDragEnd=function(e){var n=e.destination,r=e.source,a=e.draggableId,o=e.type;n&&t.props.dispatch(f(r.droppableId,n.droppableId,r.index,n.index,a,o))},t}return Object(k.a)(n,e),Object(w.a)(n,[{key:"render",value:function(){var e=this.props.lists;return o.a.createElement(H.a,{onDragEnd:this.onDragEnd},o.a.createElement("h2",null,"Hello Youtube"),o.a.createElement(H.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},function(n){return o.a.createElement(Ce,Object.assign({},n.droppableProps,{ref:n.innerRef}),e.map(function(e,n){return o.a.createElement(Ae,{listID:e.id,key:e.id,title:e.title,cards:e.cards,index:n})}),n.placeholder,o.a.createElement(Ee,{list:!0}))}))}}]),n}(a.PureComponent),_e=Object(l.b)(function(e){return{lists:e.lists}})(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(233);var Le=t(106),Re=t.n(Le),Pe=t(107);function Fe(){var e=Object(r.a)(["\n  html {\n    background-color: orange;\n    box-sizing: border-box;\n    transition: all 0.5s ease-in;\n  }\n"]);return Fe=function(){return e},e}var He=function(){var e=Object(d.e)(j);return{store:e,persistor:Object(D.b)(e)}}(),Ne=He.persistor,ze=He.store,Me=Object(N.a)(Fe());c.a.render(o.a.createElement(l.a,{store:ze},o.a.createElement(Pe.a,{loading:null,persistor:Ne},o.a.createElement(Me,null),o.a.createElement(_e,null))),document.getElementById("root")),Re()(document).bind("DOMNodeRemoved",function(e){console.log("Removed: "+e.target.nodeName)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,1,2]]]);
//# sourceMappingURL=main.38abc5fc.chunk.js.map