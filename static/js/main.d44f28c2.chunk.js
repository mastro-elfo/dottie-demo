(this["webpackJsonpdottie-demo"]=this["webpackJsonpdottie-demo"]||[]).push([[0],{308:function(e){e.exports=JSON.parse('{"a":"0.1.2"}')},340:function(e,t,n){},392:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),i=(n(340),n(58)),s=n(427),u=n(319),j=n.n(u),l=n(320),d=n.n(l),b=n(10),O=n(34),h=n(321),f=n(32),x=n(406),g=n(429),v=n(431),p=n(155),m=n.n(p),w=n(308),y=n(6);function C(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(g.a,{button:!0,onClick:function(){return a(!0)},children:Object(y.jsx)(v.a,{primary:"MIT",secondary:"License"})}),Object(y.jsx)(b.ConfirmDialog,{open:n,onClose:function(){return a(!1)},title:"MIT License",confirm:"Read",onConfirm:function(){return a(!1)},content:["Copyright (c) 2020 Francesco Michienzi",'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.']})]})}var S={path:"/about",exact:!0,component:function(){return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"About"}),content:Object(y.jsx)(b.Content,{children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(g.a,{children:Object(y.jsx)(v.a,{primary:w.a,secondary:"Version"})}),Object(y.jsx)(C,{})]})})})}},A={key:"about",primary:"About",secondary:"",icon:Object(y.jsx)(m.a,{}),title:"Open About",href:"/about"},T=n(23),I=n(436),E=n(156);function P(e){var t=e.list,n=void 0===t?[]:t,r=(e.loading,e.onFetch),a=void 0===r?function(){}:r,c=e.hasMore,o=void 0!==c&&c;return Object(y.jsxs)(I.a,{children:[0===n.length&&Object(y.jsx)(M,{datetime:+new Date,title:"There are no notes to show",note:"Click the + button to add a new note or edit the search parameters"}),Object(y.jsx)(E.a,{dataLength:n.length,hasMore:o,next:a,loader:Object(y.jsx)(M,{loading:!0}),children:n.map((function(e){return Object(y.jsx)(M,Object(T.a)({},e),e.id)}))})]})}var k=n(80),R=n(437),N=n(438),F=n(439),L=n(440),B=n(441),H=n(442),D=n(443);function U(e){return e.toLocaleString(void 0,{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}function M(e){var t=e.datetime,n=void 0===t?0:t,a=e.title,c=void 0===a?"":a,o=e.note,i=void 0===o?"":o,s=e.cAuthor,u=void 0===s?{name:"",surname:""}:s,j=e.loading,l=void 0!==j&&j,d=Object(r.useMemo)((function(){return new Date(n)}),[n]);return Object(y.jsxs)(R.a,{children:[Object(y.jsxs)(N.a,{children:[Object(y.jsx)(k.a,{variant:"body2",children:l?Object(y.jsx)(F.a,{width:"50%",style:{display:"inline-block"}}):U(d)}),Object(y.jsx)(k.a,{variant:"subtitle2",color:"textSecondary",children:l?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(F.a,{width:"30%",style:{display:"inline-block"}})," ",Object(y.jsx)(F.a,{width:"30%",style:{display:"inline-block"}})]}):"".concat(u.name," ").concat(u.surname)})]}),Object(y.jsxs)(L.a,{children:[Object(y.jsx)(B.a,{}),Object(y.jsx)(H.a,{})]}),Object(y.jsxs)(D.a,{children:[Object(y.jsx)(k.a,{variant:"h5",children:l?Object(y.jsx)(F.a,{}):c}),Object(y.jsx)(k.a,{paragraph:!0,children:l?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(F.a,{width:"75%"}),Object(y.jsx)(F.a,{width:"50%"})]}):i})]})]})}var W=n(18),G=n(430),Y=n(322),J=n(120),V=sessionStorage;function q(e,t){return function(e){return Promise.resolve(V.getItem(e))}(e).then((function(e){return JSON.parse(e)||t})).catch((function(e){return t}))}function K(e,t){return function(e,t){return V.setItem(e,t),Promise.resolve()}(e,JSON.stringify(t))}function z(e,t,n){var r=+new Date,a=Object(T.a)({},t);return delete a.password,function(e,t){return q(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).then((function(e){return[t].concat(Object(J.a)(e))})).then((function(t){return K(e,t)}))}(e,Object(T.a)(Object(T.a)({},n),{},{cDateTime:r,uDateTime:r,cAuthor:a,uAuthor:a,deleted:!1,id:Object(Y.a)()}))}function X(e){return function(e){return q(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:[])}(e)}var Q="debug",Z="info",$="create",_="none";function ee(e,t){return function(n){return function(e,t){var n=t.severity,r=void 0===n?Q:n,a=t.type,c=void 0===a?_:a,o=t.table,i=void 0===o?_:o,s=t.short;return z("log",e,{severity:r,type:c,table:i,short:void 0===s?"":s})}(e,t).then((function(){return n}))}}var te,ne=n(309),re=n.n(ne),ae=n(310),ce=n.n(ae),oe=n(311),ie=n.n(oe),se=(te={},Object(W.a)(te,Q,Object(y.jsx)(re.a,{})),Object(W.a)(te,Z,Object(y.jsx)(m.a,{})),Object(W.a)(te,"warning",Object(y.jsx)(ce.a,{})),Object(W.a)(te,"error",Object(y.jsx)(ie.a,{})),te);function ue(e){var t=e.loading,n=void 0!==t&&t,r=e.severity,a=void 0===r?_:r,c=e.cDateTime,o=void 0===c?0:c,i=e.cAuthor,s=void 0===i?null:i,u=e.type,j=void 0===u?_:u,l=e.table,d=void 0===l?_:l,b=e.short,O=void 0===b?"":b,h=s||{name:"Unknown",surname:"User"},f=h.name,x=h.surname;return Object(y.jsxs)(g.a,{children:[Object(y.jsx)(G.a,{children:n?Object(y.jsx)(F.a,{}):se[a]||Object(y.jsx)("span",{})}),Object(y.jsx)(v.a,{primary:n?Object(y.jsx)(F.a,{}):O||"".concat(f," ").concat(x," ").concat(j," ").concat(d),secondary:n?Object(y.jsx)(F.a,{}):"".concat(a," - ").concat(new Date(o).toLocaleString())})]})}function je(e){var t=e.items,n=void 0===t?[]:t,r=e.hasMore,a=void 0!==r&&r,c=e.onFetch,o=void 0===c?function(){}:c;return Object(y.jsx)(x.a,{children:Object(y.jsx)(E.a,{dataLength:n.length,hasMore:a,next:o,loader:Object(y.jsx)(ue,{loading:!0}),children:n.map((function(e){return Object(y.jsx)(ue,Object(T.a)({},e),e.id)}))})})}var le=n(100),de=n(426);function be(e){var t=e.children,n=e.Container,r=void 0===n?Oe:n,a=e.ContainerProps,c=void 0===a?{}:a,o=e.Item,i=void 0===o?he:o,s=Object(le.a)(e,["children","Container","ContainerProps","Item"]);return Object(y.jsx)(r,Object(T.a)(Object(T.a)({},c),{},{children:Object(y.jsx)(i,Object(T.a)(Object(T.a)({},s),{},{children:t}))}))}function Oe(e){var t=e.children,n=Object(le.a)(e,["children"]);return Object(y.jsx)(de.a,Object(T.a)(Object(T.a)({container:!0},n),{},{children:t}))}function he(e){var t=e.children,n=Object(le.a)(e,["children"]);return Object(y.jsx)(de.a,Object(T.a)(Object(T.a)({item:!0},n),{},{children:t}))}var fe=n(433),xe=n(197),ge=n(425);function ve(e){var t=e.children,n=e.subtitle,r=void 0===n?"":n;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(fe.a,{children:Object(y.jsxs)(xe.a,{children:[Object(y.jsx)(k.a,{variant:"h6",children:t}),Object(y.jsx)(k.a,{variant:"subtitle2",color:"textSecondary",children:r})]})}),Object(y.jsx)(ge.a,{})]})}var pe=n(435);function me(e){var t=e.children,n=e.Component,a=void 0===n?pe.a:n,c=e.validateFn,o=void 0===c?function(){return null}:c,i=e.validateArgs,s=void 0===i?[]:i,u=Object(le.a)(e,["children","Component","validateFn","validateArgs"]),j=Object(r.useMemo)((function(){return o.apply(void 0,Object(J.a)(s))}),[].concat(Object(J.a)(s),[o]));return Object(y.jsx)(a,Object(T.a)(Object(T.a)(Object(T.a)({},j),u),{},{children:t}))}var we=n(312),ye=n.n(we);var Ce={path:"/log",exact:!0,component:function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),o=Object(f.a)(c,2),i=o[0],s=o[1];return Object(r.useEffect)((function(){s(!0),X("log").then((function(e){a(e),s(!1)})).catch((function(e){console.error(e),s(!1)}))}),[]),Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"Log"}),content:Object(y.jsx)(b.Content,{children:Object(y.jsx)(je,{items:n,loading:i})})})}},Se={key:"log",primary:"Log",secondary:"",icon:Object(y.jsx)(ye.a,{}),title:"Open Log",href:"/log"},Ae=n(74),Te=n.n(Ae);var Ie={path:"/profileedit",exact:!0,component:function(){return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"Profileedit"}),content:Object(y.jsx)(b.Content,{children:"Profileedit content"})})}},Ee=(Te.a,n(313)),Pe=n.n(Ee);var ke={path:"/profileview",exact:!0,component:function(){return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"Profileview"}),content:Object(y.jsx)(b.Content,{children:"Profileview content"})})}},Re={key:"profileview",primary:"Profile",secondary:"",icon:Object(y.jsx)(Pe.a,{}),title:"Open Profile",href:"/profileview"},Ne=n(314),Fe=n.n(Ne);var Le={path:"/settings",exact:!0,component:function(){return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"Settings"}),content:Object(y.jsx)(b.Content,{children:"Settings content"})})}},Be={key:"settings",primary:"Settings",secondary:"",icon:Object(y.jsx)(Fe.a,{}),title:"Open Settings",href:"/settings"},He=n(31),De=n(315),Ue=n.n(De);var Me,We={path:"/users",exact:!0,component:function(){return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"Users"}),content:Object(y.jsx)(b.Content,{children:"Users content"})})}},Ge={key:"users",primary:"Users",secondary:"",icon:Object(y.jsx)(Ue.a,{}),title:"Open Users",href:"/users"},Ye=n(418),Je=n(428),Ve=n(444),qe=n(54),Ke=n(39),ze=n.n(Ke),Xe=n(64),Qe=n(45);function Ze(e,t){var n=t.datetime,r=t.title,a=t.note;return z("timeline",e,{datetime:+new Date(n),title:r,note:a}).then(ee(e,{severity:Z,type:$,table:"timeline"}))}var $e=Object(Qe.b)("timeline/create",function(){var e=Object(Xe.a)(ze.a.mark((function e(t){var n,r;return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.author,r=t.data,e.abrupt("return",Ze(n,r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_e=Object(Qe.b)("timeline/readAll",Object(Xe.a)(ze.a.mark((function e(){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X("timeline").then((function(e){return e.slice(0,10)})));case 1:case"end":return e.stop()}}),e)})))),et=Object(Qe.c)({name:"timeline",initialState:{loading:!1,error:!1,notes:[],hasMore:!0},extraReducers:(Me={},Object(W.a)(Me,_e.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.error=!1,e.notes=n,e.hasMore=!1})),Object(W.a)(Me,_e.pending,(function(e){e.loading=!0,e.error=!1})),Object(W.a)(Me,_e.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),Object(W.a)(Me,$e.fulfilled,(function(e,t){t.payload;e.loading=!1,e.error=!1})),Object(W.a)(Me,$e.pending,(function(e){e.loading=!0,e.error=!1})),Object(W.a)(Me,$e.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),Me)}).reducer,tt=n(201),nt=n.n(tt),rt=n(316),at=n.n(rt);function ct(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(f.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(""),j=Object(f.a)(u,2),l=j[0],d=j[1],O=Object(r.useState)(new Date),h=Object(f.a)(O,2),x=h[0],g=h[1],v=Object(He.b)(),p=Object(He.c)((function(e){return e.login.logged})),m=Object(He.c)((function(e){return e.timeline})),w=m.loading,C=m.error,S=Object(qe.useSnackbar)().enqueueSnackbar;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Ye.a,{onClick:function(){return a(!0)},children:Object(y.jsx)(nt.a,{})}),Object(y.jsx)(b.ConfirmDialog,{open:n,onClose:function(){return a(!1)},title:"Create a new note",confirm:"Save",cancel:"Cancel",onConfirm:function(){v($e({author:p,data:{datetime:x,title:i,note:l}})).then((function(){console.info("Note created"),S("Note created",{variant:"success"})})).then((function(){return v(_e())})).then((function(){a(!1),s(""),d("")})).catch((function(e){console.error("Error creating note",e),S("Error creating note",{variant:"error"})}))},onCancel:function(){return a(!1)},ConfirmButtonProps:{disabled:w},CancelButtonProps:{disabled:w},content:[!!C&&Object(y.jsx)(k.a,{color:"error",children:C.name}),Object(y.jsx)(Ve.a,{label:"Date and Time",value:x,onChange:g,onError:console.error,disableFuture:!0,ampm:!1,InputProps:{startAdornment:Object(y.jsx)(Je.a,{position:"start",children:Object(y.jsx)(Ye.a,{onClick:function(){return g(new Date)},children:Object(y.jsx)(at.a,{})})})}}),Object(y.jsx)(pe.a,{fullWidth:!0,label:"Title",value:i,onChange:function(e){var t=e.target.value;return s(t)}}),Object(y.jsx)(pe.a,{fullWidth:!0,label:"Note",value:l,onChange:function(e){var t=e.target.value;return d(t)},multiline:!0})]})]})}function ot(e){e.user;var t=Object(He.c)((function(e){return e.timeline})),n=t.notes,a=t.loading,c=t.hasMore,o=Object(He.b)();Object(r.useEffect)((function(){o(_e()).catch((function(e){console.error(e)}))}),[]);var i=Object(r.useMemo)((function(){return console.log("Sorting",n),n.slice().sort((function(e,t){return t.datetime-e.datetime}))}),[n]);return Object(y.jsx)(P,{list:i,loading:a,hasMore:c,onFetch:function(){}})}var it,st=n(419),ut=n(317);function jt(e){return Object(ut.sha256)().update(e).digest("hex")}function lt(e,t){var n=t.name,r=t.surname,a=t.username,c=t.password,o=t.admin;return z("users",e,{name:n,surname:r,username:a,password:jt(c),admin:{is:o,downgrade:!1},reset:{password:"",expire:0}}).then(ee(e,{severity:Z,type:$,table:"users",short:e?"".concat(e.name," ").concat(e.surname," created a new user"):"First admin user created"}))}function dt(){return X("users")}var bt=Object(Qe.b)("hasAdmin",Object(Xe.a)(ze.a.mark((function e(){var t;return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,dt();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),Ot=Object(Qe.b)("hasAdmin/create",function(){var e=Object(Xe.a)(ze.a.mark((function e(t){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",lt(null,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ht=Object(Qe.c)({name:"hasAdmin",initialState:{loading:!1,has:!1,error:!1},reducers:{},extraReducers:(it={},Object(W.a)(it,bt.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.has=n.some((function(e){return e.admin.is})),e.error=!1})),Object(W.a)(it,bt.pending,(function(e){e.loading=!1,e.error=!1})),Object(W.a)(it,bt.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),Object(W.a)(it,Ot.fulfilled,(function(e){e.loading=!1,e.has=!0,e.error=!1})),Object(W.a)(it,Ot.pending,(function(e){e.loading=!0,e.error=!1})),Object(W.a)(it,Ot.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),it)}).reducer;function ft(e){var t=e.children,n=Object(r.useState)(!1),a=Object(f.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(f.a)(i,2),u=s[0],j=s[1],l=Object(r.useState)(""),d=Object(f.a)(l,2),O=d[0],h=d[1],v=Object(r.useState)(""),p=Object(f.a)(v,2),m=p[0],w=p[1],C=Object(r.useState)(""),S=Object(f.a)(C,2),A=S[0],T=S[1],I=Object(r.useState)(""),E=Object(f.a)(I,2),P=E[0],R=E[1],N=Object(He.c)((function(e){return e.hasAdmin.has})),F=Object(He.b)(),L=Object(qe.useSnackbar)().enqueueSnackbar;Object(r.useEffect)((function(){return[u,O,m,A,P].some((function(e){return xt(e)}))||gt(A,P)?o(!1):void o(!0)}),[u,O,m,A,P]),Object(r.useEffect)((function(){F(bt())}),[]);return N?t:Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,children:"Create an Admin"}),content:Object(y.jsx)(b.Content,{children:Object(y.jsxs)(be,{ContainerProps:{justify:"center"},xs:12,md:10,xl:8,children:[Object(y.jsx)(k.a,{variant:"h6",children:"First we need to create an Admin user"}),Object(y.jsx)(k.a,{children:"Admins have full control over the application."}),Object(y.jsx)(k.a,{children:"They can:"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Create new users"}),Object(y.jsx)("li",{children:"Create monthly reports"}),Object(y.jsx)("li",{children:"Manage app settings"}),Object(y.jsx)("li",{children:"View app log"})]}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(g.a,{children:Object(y.jsx)(me,{fullWidth:!0,label:"Name",value:u,onChange:function(e){var t=e.target.value;return j(t)},validateFn:xt,validateArgs:[u]})}),Object(y.jsx)(g.a,{children:Object(y.jsx)(me,{fullWidth:!0,label:"Surname",value:O,onChange:function(e){var t=e.target.value;return h(t)},validateFn:xt,validateArgs:[O]})}),Object(y.jsx)(g.a,{children:Object(y.jsx)(me,{fullWidth:!0,label:"Username",value:m,onChange:function(e){var t=e.target.value;return w(t)},validateFn:xt,validateArgs:[m]})}),Object(y.jsx)(g.a,{children:Object(y.jsx)(me,{fullWidth:!0,label:"Password",type:"password",value:A,onChange:function(e){var t=e.target.value;return T(t)},validateFn:xt,validateArgs:[A]})}),Object(y.jsx)(g.a,{children:Object(y.jsx)(me,{fullWidth:!0,label:"Repeat Password",type:"password",value:P,onChange:function(e){var t=e.target.value;return R(t)},validateFn:gt,validateArgs:[A,P]})}),Object(y.jsx)(g.a,{children:Object(y.jsx)(st.a,{variant:"contained",color:"primary",disabled:!c,onClick:function(){F(Ot({name:u,surname:O,username:m,password:A,admin:!0})).then((function(){L("User created",{variant:"success"})})).catch((function(e){console.error(e),L("Error creating user",{variant:"error"})}))},children:"Save"})})]})]})})})}function xt(e){if(!e.trim())return{error:!0,helperText:"This field can't be empty"}}function gt(e,t){return t.trim()?t!==e?{error:!0,helperText:"The two passwords don't match"}:void 0:{error:!0,helperText:"This field can't be empty"}}function vt(e){return K("login",e)}var pt,mt=n(160),wt=n(161),yt=n(162),Ct=n(163),St=function(e){Object(wt.a)(n,e);var t=Object(yt.a)(n);function n(e){var r;return Object(mt.a)(this,n),(r=t.call(this,e)).name="UserNotFound",r}return n}(Object(Ct.a)(Error)),At=function(e){Object(wt.a)(n,e);var t=Object(yt.a)(n);function n(e){var r;return Object(mt.a)(this,n),(r=t.call(this,e)).name="NotLogged",r}return n}(Object(Ct.a)(Error)),Tt=(Error,Object(Qe.b)("login/init",Object(Xe.a)(ze.a.mark((function e(){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q("login",null).then((function(e){if(e)return ee(e,{severity:Z,type:"login",table:_,short:"".concat(e.name," ").concat(e.surname," logged in")})(e);throw new At})));case 1:case"end":return e.stop()}}),e)}))))),It=Object(Qe.b)("login/login",function(){var e=Object(Xe.a)(ze.a.mark((function e(t){var n,r,a;return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,a=jt(r),e.abrupt("return",dt().then((function(e){return e.find((function(e){return e.username===n&&e.password===a}))})).then((function(e){if(e)return e;throw new St})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Et=Object(Qe.b)("login/logout",Object(Xe.a)(ze.a.mark((function e(){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",vt(null));case 1:case"end":return e.stop()}}),e)})))),Pt=Object(Qe.c)({name:"login",initialState:{loading:!1,error:!1,logged:!1},extraReducers:(pt={},Object(W.a)(pt,It.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.error=!1,e.logged=n})),Object(W.a)(pt,It.pending,(function(e,t){t.payload;e.loading=!0,e.error=!1})),Object(W.a)(pt,It.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),Object(W.a)(pt,Tt.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.error=!1,e.logged=n})),Object(W.a)(pt,Tt.pending,(function(e){e.loading=!0,e.error=!1})),Object(W.a)(pt,Tt.rejected,(function(e,t){var n=t.error;e.loading=!1,e.logged=!1,"NotLogged"===n.name?e.error=!1:e.error=n.name})),Object(W.a)(pt,Et.fulfilled,(function(e){e.loading=!1,e.error=!1,e.logged=!1})),Object(W.a)(pt,Et.pending,(function(e){e.loading=!0,e.error=!1})),Object(W.a)(pt,Et.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),pt)}).reducer;function kt(e){var t=e.children,n=Object(r.useState)(""),a=Object(f.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(f.a)(i,2),u=s[0],j=s[1],l=Object(He.b)(),d=Object(He.c)((function(e){return e.login})),O=d.loading,h=d.logged,v=d.error;Object(r.useEffect)((function(){l(Tt())}),[]);var p=function(){l(It({username:c,password:u})).then((function(e){return vt(e.payload)})).catch((function(e){console.error(e)}))},m=function(e){"Enter"===e.key&&p()};return h?t:Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,children:"Login"}),content:Object(y.jsx)(b.Content,{children:Object(y.jsxs)(be,{ContainerProps:{justify:"center"},xs:12,md:10,xl:8,children:[!!v&&Object(y.jsx)(k.a,{color:"error",gutterBottom:!0,children:v}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(g.a,{children:Object(y.jsx)(pe.a,{fullWidth:!0,label:"Username",value:c,onChange:function(e){var t=e.target.value;return o(t)},onKeyPress:m})}),Object(y.jsx)(g.a,{children:Object(y.jsx)(pe.a,{fullWidth:!0,label:"Password",type:"password",value:u,onChange:function(e){var t=e.target.value;return j(t)},onKeyPress:m})}),Object(y.jsx)(g.a,{children:Object(y.jsx)(st.a,{variant:"contained",color:"primary",onClick:p,disabled:!c||!u||O,children:"Login"})})]})]})})})}var Rt=n(318),Nt=n.n(Rt);function Ft(){var e=Object(He.b)(),t=Object(He.c)((function(e){return e.login})).loading,n=Object(qe.useSnackbar)().enqueueSnackbar;return Object(y.jsx)(Ye.a,{onClick:function(){e(Et()).then((function(){console.log("Logout successful"),n("Logout successful",{variant:"success"})})).catch((function(e){console.error("Logout Error",e),n("Logout Error",{variant:"error"})}))},disabled:t,children:Object(y.jsx)(Nt.a,{})})}var Lt={path:"/",exact:!0,component:function(){var e=Object(He.c)((function(e){return e.login})).logged,t=e.admin.is;return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsxs)(b.DrawerIconButton,{children:[Object(y.jsxs)(ve,{subtitle:t?"Admin":"",children:[e.name," ",e.surname]}),Object(y.jsx)(b.DrawerLists,{lists:[{key:"pages",items:[Object(T.a)(Object(T.a)({},Re),{},{action:Object(y.jsx)(Ft,{})}),t?Ge:null,t?Be:null,t?Se:null,A]}]})]}),rightAction:Object(y.jsx)(ct,{}),children:"Timeline"}),content:Object(y.jsx)(b.Content,{children:Object(y.jsx)(ot,{user:e})})})}};var Bt={path:"/usercreate",exact:!0,component:function(){return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"Usercreate"}),content:Object(y.jsx)(b.Content,{children:"Usercreate content"})})}};Te.a;var Ht={path:"/useredit",exact:!0,component:function(){return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"Useredit"}),content:Object(y.jsx)(b.Content,{children:"Useredit content"})})}};Te.a;var Dt={path:"/userview",exact:!0,component:function(){return Object(y.jsx)(b.Page,{header:Object(y.jsx)(b.Header,{withContainer:!0,leftAction:Object(y.jsx)(b.BackIconButton,{}),children:"Userview"}),content:Object(y.jsx)(b.Content,{children:"Userview content"})})}},Ut=(Te.a,{});function Mt(){var e=Object(s.a)("(prefers-color-scheme: dark)");return Object(y.jsx)(b.AppContainer,{ThemeProps:{palette:{primary:j.a,secondary:d.a,type:e?"dark":"light"}},RouterProps:{Router:i.BrowserRouter,basename:"dottie-demo",routes:[S,Ce,Ie,ke,Le,Lt,Bt,Ht,Dt,We],WrapperProps:{components:[{Component:ft},{Component:kt},{Component:O.a,utils:h.a,locale:Ut[window.navigator.language.substr(0,2)]}]}}})}var Wt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,448)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},Gt=Object(Qe.a)({reducer:{hasAdmin:ht,login:Pt,timeline:et}});o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(He.a,{store:Gt,children:Object(y.jsx)(Mt,{})})}),document.getElementById("root")),Wt()}},[[392,1,2]]]);
//# sourceMappingURL=main.d44f28c2.chunk.js.map