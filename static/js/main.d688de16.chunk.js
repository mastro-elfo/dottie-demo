(this["webpackJsonpdottie-demo"]=this["webpackJsonpdottie-demo"]||[]).push([[0],{339:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),i=(n(339),n(58)),s=n(426),u=n(318),j=n.n(u),l=n(319),d=n.n(l),b=n(10),O=n(33),h=n(320),f=n(154),v=n.n(f),x=n(6);var g={path:"/about",exact:!0,component:function(){return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{LeftAction:Object(x.jsx)(b.BackIconButton,{}),children:"About"}),content:Object(x.jsx)(b.Content,{children:"About content"})})}},p={key:"about",primary:"About",secondary:"",icon:Object(x.jsx)(v.a,{}),title:"Open About",href:"/about"},m=n(37),y=n(23),w=n(435),C=n(156);function k(e){var t=e.list,n=void 0===t?[]:t,r=(e.loading,e.onFetch),a=void 0===r?function(){}:r,c=e.hasMore,o=void 0!==c&&c;return Object(x.jsx)(w.a,{children:Object(x.jsx)(C.a,{dataLength:n.length,hasMore:o,next:a,loader:Object(x.jsx)(E,{loading:!0}),children:n.map((function(e){return Object(x.jsx)(E,Object(y.a)({},e),e.id)}))})})}var S=n(80),A=n(436),P=n(437),L=n(438),B=n(439),F=n(440),I=n(441),T=n(442);function E(e){var t=e.datetime,n=void 0===t?0:t,a=e.title,c=void 0===a?"":a,o=e.note,i=void 0===o?"":o,s=e.author,u=void 0===s?{name:"",surname:""}:s,j=e.loading,l=void 0!==j&&j,d=Object(r.useMemo)((function(){return new Date(n)}),[n]);return Object(x.jsxs)(A.a,{children:[Object(x.jsxs)(P.a,{children:[Object(x.jsx)(S.a,{variant:"body2",children:l?Object(x.jsx)(L.a,{width:"50%",style:{display:"inline-block"}}):d.toLocaleDateString(void 0,{dateStyle:"long"})}),Object(x.jsx)(S.a,{variant:"body2",children:l?Object(x.jsx)(L.a,{width:"25%",style:{display:"inline-block"}}):d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),Object(x.jsxs)(B.a,{children:[Object(x.jsx)(F.a,{}),Object(x.jsx)(I.a,{})]}),Object(x.jsxs)(T.a,{children:[Object(x.jsx)(S.a,{variant:"h5",children:l?Object(x.jsx)(L.a,{}):c}),Object(x.jsx)(S.a,{variant:"subtitle2",color:"textSecondary",children:l?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(L.a,{width:"30%",style:{display:"inline-block"}})," ",Object(x.jsx)(L.a,{width:"30%",style:{display:"inline-block"}})]}):"".concat(u.name," ").concat(u.surname)}),Object(x.jsx)(S.a,{paragraph:!0,children:l?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(L.a,{width:"75%"}),Object(x.jsx)(L.a,{width:"50%"})]}):i})]})]})}var U=n(18),D=n(428),H=n(429),M=n(430),W=n(321),N=n(120),R=sessionStorage;function J(e,t){return function(e){return Promise.resolve(R.getItem(e))}(e).then((function(e){return JSON.parse(e)||t})).catch((function(e){return t}))}function q(e,t){return function(e,t){return R.setItem(e,t),Promise.resolve()}(e,JSON.stringify(t))}function K(e,t,n){var r=+new Date,a=Object(y.a)({},t);return delete a.password,function(e,t){return J(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).then((function(e){return[t].concat(Object(N.a)(e))})).then((function(t){return q(e,t)}))}(e,Object(y.a)(Object(y.a)({},n),{},{cDateTime:r,uDateTime:r,cAuthor:a,uAuthor:a,deleted:!1,id:Object(W.a)()}))}function V(e){return function(e){return J(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:[])}(e)}var z="debug",G="info",Q="create",X="none";function Y(e,t){return function(n){return function(e,t){var n=t.severity,r=void 0===n?z:n,a=t.type,c=void 0===a?X:a,o=t.table,i=void 0===o?X:o,s=t.short;return K("log",e,{severity:r,type:c,table:i,short:void 0===s?"":s})}(e,t).then((function(){return n}))}}var Z,$=n(308),_=n.n($),ee=n(309),te=n.n(ee),ne=n(310),re=n.n(ne),ae=(Z={},Object(U.a)(Z,z,Object(x.jsx)(_.a,{})),Object(U.a)(Z,G,Object(x.jsx)(v.a,{})),Object(U.a)(Z,"warning",Object(x.jsx)(te.a,{})),Object(U.a)(Z,"error",Object(x.jsx)(re.a,{})),Z);function ce(e){var t=e.loading,n=void 0!==t&&t,r=e.severity,a=void 0===r?X:r,c=e.cDateTime,o=void 0===c?0:c,i=e.cAuthor,s=void 0===i?null:i,u=e.type,j=void 0===u?X:u,l=e.table,d=void 0===l?X:l,b=e.short,O=void 0===b?"":b,h=s||{name:"Unknown",surname:"User"},f=h.name,v=h.surname;return Object(x.jsxs)(D.a,{children:[Object(x.jsx)(H.a,{children:n?Object(x.jsx)(L.a,{}):ae[a]||Object(x.jsx)("span",{})}),Object(x.jsx)(M.a,{primary:n?Object(x.jsx)(L.a,{}):O||"".concat(f," ").concat(v," ").concat(j," ").concat(d),secondary:n?Object(x.jsx)(L.a,{}):"".concat(a," - ").concat(new Date(o).toLocaleString())})]})}var oe=n(405);function ie(e){var t=e.items,n=void 0===t?[]:t,r=e.hasMore,a=void 0!==r&&r,c=e.onFetch,o=void 0===c?function(){}:c;return Object(x.jsx)(oe.a,{children:Object(x.jsx)(C.a,{dataLength:n.length,hasMore:a,next:o,loader:Object(x.jsx)(ce,{loading:!0}),children:n.map((function(e){return Object(x.jsx)(ce,Object(y.a)({},e),e.id)}))})})}var se=n(100),ue=n(425);function je(e){var t=e.children,n=e.Container,r=void 0===n?le:n,a=e.ContainerProps,c=void 0===a?{}:a,o=e.Item,i=void 0===o?de:o,s=Object(se.a)(e,["children","Container","ContainerProps","Item"]);return Object(x.jsx)(r,Object(y.a)(Object(y.a)({},c),{},{children:Object(x.jsx)(i,Object(y.a)(Object(y.a)({},s),{},{children:t}))}))}function le(e){var t=e.children,n=Object(se.a)(e,["children"]);return Object(x.jsx)(ue.a,Object(y.a)(Object(y.a)({container:!0},n),{},{children:t}))}function de(e){var t=e.children,n=Object(se.a)(e,["children"]);return Object(x.jsx)(ue.a,Object(y.a)(Object(y.a)({item:!0},n),{},{children:t}))}var be=n(432),Oe=n(197),he=n(424);function fe(e){var t=e.children,n=e.subtitle,r=void 0===n?"":n;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(be.a,{children:Object(x.jsxs)(Oe.a,{children:[Object(x.jsx)(S.a,{variant:"h6",children:t}),Object(x.jsx)(S.a,{variant:"subtitle2",color:"textSecondary",children:r})]})}),Object(x.jsx)(he.a,{})]})}var ve=n(434);function xe(e){var t=e.children,n=e.Component,a=void 0===n?ve.a:n,c=e.validateFn,o=void 0===c?function(){return null}:c,i=e.validateArgs,s=void 0===i?[]:i,u=Object(se.a)(e,["children","Component","validateFn","validateArgs"]),j=Object(r.useMemo)((function(){return o.apply(void 0,Object(N.a)(s))}),[].concat(Object(N.a)(s),[o]));return Object(x.jsx)(a,Object(y.a)(Object(y.a)(Object(y.a)({},j),u),{},{children:t}))}var ge=n(311),pe=n.n(ge);var me={path:"/log",exact:!0,component:function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),o=Object(m.a)(c,2),i=o[0],s=o[1];return Object(r.useEffect)((function(){s(!0),V("log").then((function(e){a(e),s(!1)})).catch((function(e){console.error(e),s(!1)}))}),[]),Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{leftAction:Object(x.jsx)(b.BackIconButton,{}),children:"Log"}),content:Object(x.jsx)(b.Content,{children:Object(x.jsx)(ie,{items:n,loading:i})})})}},ye={key:"log",primary:"Log",secondary:"",icon:Object(x.jsx)(pe.a,{}),title:"Open Log",href:"/log"},we=n(74),Ce=n.n(we);var ke={path:"/profileedit",exact:!0,component:function(){return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{LeftAction:Object(x.jsx)(b.BackIconButton,{}),children:"Profileedit"}),content:Object(x.jsx)(b.Content,{children:"Profileedit content"})})}},Se=(Ce.a,n(312)),Ae=n.n(Se);var Pe={path:"/profileview",exact:!0,component:function(){return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{LeftAction:Object(x.jsx)(b.BackIconButton,{}),children:"Profileview"}),content:Object(x.jsx)(b.Content,{children:"Profileview content"})})}},Le={key:"profileview",primary:"Profile",secondary:"",icon:Object(x.jsx)(Ae.a,{}),title:"Open Profile",href:"/profileview"},Be=n(313),Fe=n.n(Be);var Ie={path:"/settings",exact:!0,component:function(){return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{LeftAction:Object(x.jsx)(b.BackIconButton,{}),children:"Settings"}),content:Object(x.jsx)(b.Content,{children:"Settings content"})})}},Te={key:"settings",primary:"Settings",secondary:"",icon:Object(x.jsx)(Fe.a,{}),title:"Open Settings",href:"/settings"},Ee=n(31),Ue=n(314),De=n.n(Ue);var He,Me={path:"/users",exact:!0,component:function(){return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{LeftAction:Object(x.jsx)(b.BackIconButton,{}),children:"Users"}),content:Object(x.jsx)(b.Content,{children:"Users content"})})}},We={key:"users",primary:"Users",secondary:"",icon:Object(x.jsx)(De.a,{}),title:"Open Users",href:"/users"},Ne=n(417),Re=n(427),Je=n(443),qe=n(54),Ke=n(39),Ve=n.n(Ke),ze=n(64),Ge=n(45);function Qe(e,t){var n=t.datetime,r=t.title,a=t.note;return K("timeline",e,{datetime:+new Date(n),title:r,note:a}).then(Y(e,{severity:G,type:Q,table:"timeline"}))}var Xe=Object(Ge.b)("timeline/create",function(){var e=Object(ze.a)(Ve.a.mark((function e(t){var n,r;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.author,r=t.data,e.abrupt("return",Qe(n,r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ye=Object(Ge.b)("timeline/readAll",Object(ze.a)(Ve.a.mark((function e(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V("timeline").then((function(e){return e.slice(0,10)})));case 1:case"end":return e.stop()}}),e)})))),Ze=Object(Ge.c)({name:"timeline",initialState:{loading:!1,error:!1,notes:[],hasMore:!1},extraReducers:(He={},Object(U.a)(He,Ye.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.error=!1,e.notes=n})),Object(U.a)(He,Ye.pending,(function(e){e.loading=!0,e.error=!1})),Object(U.a)(He,Ye.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),Object(U.a)(He,Xe.fulfilled,(function(e,t){t.payload;e.loading=!1,e.error=!1})),Object(U.a)(He,Xe.pending,(function(e){e.loading=!0,e.error=!1})),Object(U.a)(He,Xe.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),He)}).reducer,$e=n(201),_e=n.n($e),et=n(315),tt=n.n(et);function nt(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(m.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(""),j=Object(m.a)(u,2),l=j[0],d=j[1],O=Object(r.useState)(new Date),h=Object(m.a)(O,2),f=h[0],v=h[1],g=Object(Ee.b)(),p=Object(Ee.c)((function(e){return e.login.logged})),y=Object(Ee.c)((function(e){return e.timeline})),w=y.loading,C=y.error,k=Object(qe.useSnackbar)().enqueueSnackbar;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Ne.a,{onClick:function(){return a(!0)},children:Object(x.jsx)(_e.a,{})}),Object(x.jsx)(b.ConfirmDialog,{open:n,onClose:function(){return a(!1)},title:"Create a new note",confirm:"Save",cancel:"Cancel",onConfirm:function(){g(Xe({author:p,data:{datetime:f,title:i,note:l}})).then((function(){console.info("Note created"),k("Note created",{variant:"success"})})).then((function(){return g(Ye())})).then((function(){a(!1),s(""),d("")})).catch((function(e){console.error("Error creating note",e),k("Error creating note",{variant:"error"})}))},onCancel:function(){return a(!1)},ConfirmButtonProps:{disabled:w},CancelButtonProps:{disabled:w},content:[!!C&&Object(x.jsx)(S.a,{color:"error",children:C.name}),Object(x.jsx)(Je.a,{label:"Date and Time",value:f,onChange:v,onError:console.error,disableFuture:!0,ampm:!1,InputProps:{startAdornment:Object(x.jsx)(Re.a,{position:"start",children:Object(x.jsx)(Ne.a,{onClick:function(){return v(new Date)},children:Object(x.jsx)(tt.a,{})})})}}),Object(x.jsx)(ve.a,{fullWidth:!0,label:"Title",value:i,onChange:function(e){var t=e.target.value;return s(t)}}),Object(x.jsx)(ve.a,{fullWidth:!0,label:"Note",value:l,onChange:function(e){var t=e.target.value;return d(t)},multiline:!0})]})]})}function rt(e){e.user;var t=Object(Ee.c)((function(e){return e.timeline})),n=t.notes,a=t.loading,c=t.hasMore,o=Object(Ee.b)();Object(r.useEffect)((function(){o(Ye()).catch((function(e){console.error(e)}))}),[]);var i=Object(r.useMemo)((function(){return console.log("Sorting",n),n.slice().sort((function(e,t){return t.datetime-e.datetime}))}),[n]);return Object(x.jsx)(k,{list:i,loading:a,hasMore:c,onFetch:function(){}})}var at,ct=n(418),ot=n(316);function it(e){return Object(ot.sha256)().update(e).digest("hex")}function st(e,t){var n=t.name,r=t.surname,a=t.username,c=t.password,o=t.admin;return K("users",e,{name:n,surname:r,username:a,password:it(c),admin:{is:o,downgrade:!1},reset:{password:"",expire:0}}).then(Y(e,{severity:G,type:Q,table:"users",short:e?"".concat(e.name," ").concat(e.surname," created a new user"):"First admin user created"}))}function ut(){return V("users")}var jt=Object(Ge.b)("hasAdmin",Object(ze.a)(Ve.a.mark((function e(){var t;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ut();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),lt=Object(Ge.b)("hasAdmin/create",function(){var e=Object(ze.a)(Ve.a.mark((function e(t){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",st(null,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),dt=Object(Ge.c)({name:"hasAdmin",initialState:{loading:!1,has:!1,error:!1},reducers:{},extraReducers:(at={},Object(U.a)(at,jt.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.has=n.some((function(e){return e.admin.is})),e.error=!1})),Object(U.a)(at,jt.pending,(function(e){e.loading=!1,e.error=!1})),Object(U.a)(at,jt.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),Object(U.a)(at,lt.fulfilled,(function(e){e.loading=!1,e.has=!0,e.error=!1})),Object(U.a)(at,lt.pending,(function(e){e.loading=!0,e.error=!1})),Object(U.a)(at,lt.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),at)}).reducer;function bt(e){var t=e.children,n=Object(r.useState)(!1),a=Object(m.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(m.a)(i,2),u=s[0],j=s[1],l=Object(r.useState)(""),d=Object(m.a)(l,2),O=d[0],h=d[1],f=Object(r.useState)(""),v=Object(m.a)(f,2),g=v[0],p=v[1],y=Object(r.useState)(""),w=Object(m.a)(y,2),C=w[0],k=w[1],A=Object(r.useState)(""),P=Object(m.a)(A,2),L=P[0],B=P[1],F=Object(Ee.c)((function(e){return e.hasAdmin.has})),I=Object(Ee.b)(),T=Object(qe.useSnackbar)().enqueueSnackbar;Object(r.useEffect)((function(){return[u,O,g,C,L].some((function(e){return Ot(e)}))||ht(C,L)?o(!1):void o(!0)}),[u,O,g,C,L]),Object(r.useEffect)((function(){I(jt())}),[]);return F?t:Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{withContainer:!0,children:"Create an Admin"}),content:Object(x.jsx)(b.Content,{children:Object(x.jsxs)(je,{ContainerProps:{justify:"center"},xs:12,md:10,xl:8,children:[Object(x.jsx)(S.a,{variant:"h6",children:"First we need to create an Admin user"}),Object(x.jsx)(S.a,{children:"Admins have full control over the application."}),Object(x.jsx)(S.a,{children:"They can:"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Create new users"}),Object(x.jsx)("li",{children:"Create monthly reports"}),Object(x.jsx)("li",{children:"Manage app settings"}),Object(x.jsx)("li",{children:"View app log"})]}),Object(x.jsxs)(oe.a,{children:[Object(x.jsx)(D.a,{children:Object(x.jsx)(xe,{fullWidth:!0,label:"Name",value:u,onChange:function(e){var t=e.target.value;return j(t)},validateFn:Ot,validateArgs:[u]})}),Object(x.jsx)(D.a,{children:Object(x.jsx)(xe,{fullWidth:!0,label:"Surname",value:O,onChange:function(e){var t=e.target.value;return h(t)},validateFn:Ot,validateArgs:[O]})}),Object(x.jsx)(D.a,{children:Object(x.jsx)(xe,{fullWidth:!0,label:"Username",value:g,onChange:function(e){var t=e.target.value;return p(t)},validateFn:Ot,validateArgs:[g]})}),Object(x.jsx)(D.a,{children:Object(x.jsx)(xe,{fullWidth:!0,label:"Password",type:"password",value:C,onChange:function(e){var t=e.target.value;return k(t)},validateFn:Ot,validateArgs:[C]})}),Object(x.jsx)(D.a,{children:Object(x.jsx)(xe,{fullWidth:!0,label:"Repeat Password",type:"password",value:L,onChange:function(e){var t=e.target.value;return B(t)},validateFn:ht,validateArgs:[C,L]})}),Object(x.jsx)(D.a,{children:Object(x.jsx)(ct.a,{variant:"contained",color:"primary",disabled:!c,onClick:function(){I(lt({name:u,surname:O,username:g,password:C,admin:!0})).then((function(){T("User created",{variant:"success"})})).catch((function(e){console.error(e),T("Error creating user",{variant:"error"})}))},children:"Save"})})]})]})})})}function Ot(e){if(!e.trim())return{error:!0,helperText:"This field can't be empty"}}function ht(e,t){return t.trim()?t!==e?{error:!0,helperText:"The two passwords don't match"}:void 0:{error:!0,helperText:"This field can't be empty"}}function ft(e){return q("login",e)}var vt,xt=n(160),gt=n(161),pt=n(162),mt=n(163),yt=function(e){Object(gt.a)(n,e);var t=Object(pt.a)(n);function n(e){var r;return Object(xt.a)(this,n),(r=t.call(this,e)).name="UserNotFound",r}return n}(Object(mt.a)(Error)),wt=function(e){Object(gt.a)(n,e);var t=Object(pt.a)(n);function n(e){var r;return Object(xt.a)(this,n),(r=t.call(this,e)).name="NotLogged",r}return n}(Object(mt.a)(Error)),Ct=(Error,Object(Ge.b)("login/init",Object(ze.a)(Ve.a.mark((function e(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J("login",null).then((function(e){if(e)return Y(e,{severity:G,type:"login",table:X,short:"".concat(e.name," ").concat(e.surname," logged in")})(e);throw new wt})));case 1:case"end":return e.stop()}}),e)}))))),kt=Object(Ge.b)("login/login",function(){var e=Object(ze.a)(Ve.a.mark((function e(t){var n,r,a;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,a=it(r),e.abrupt("return",ut().then((function(e){return e.find((function(e){return e.username===n&&e.password===a}))})).then((function(e){if(e)return e;throw new yt})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),St=Object(Ge.b)("login/logout",Object(ze.a)(Ve.a.mark((function e(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ft(null));case 1:case"end":return e.stop()}}),e)})))),At=Object(Ge.c)({name:"login",initialState:{loading:!1,error:!1,logged:!1},extraReducers:(vt={},Object(U.a)(vt,kt.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.error=!1,e.logged=n})),Object(U.a)(vt,kt.pending,(function(e,t){t.payload;e.loading=!0,e.error=!1})),Object(U.a)(vt,kt.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),Object(U.a)(vt,Ct.fulfilled,(function(e,t){var n=t.payload;e.loading=!1,e.error=!1,e.logged=n})),Object(U.a)(vt,Ct.pending,(function(e){e.loading=!0,e.error=!1})),Object(U.a)(vt,Ct.rejected,(function(e,t){var n=t.error;e.loading=!1,e.logged=!1,"NotLogged"===n.name?e.error=!1:e.error=n.name})),Object(U.a)(vt,St.fulfilled,(function(e){e.loading=!1,e.error=!1,e.logged=!1})),Object(U.a)(vt,St.pending,(function(e){e.loading=!0,e.error=!1})),Object(U.a)(vt,St.rejected,(function(e,t){var n=t.error;e.loading=!1,e.error=n.name})),vt)}).reducer;function Pt(e){var t=e.children,n=Object(r.useState)(""),a=Object(m.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(m.a)(i,2),u=s[0],j=s[1],l=Object(Ee.b)(),d=Object(Ee.c)((function(e){return e.login})),O=d.loading,h=d.logged,f=d.error;Object(r.useEffect)((function(){l(Ct())}),[]);var v=function(){l(kt({username:c,password:u})).then((function(e){return ft(e.payload)})).catch((function(e){console.error(e)}))},g=function(e){"Enter"===e.key&&v()};return h?t:Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{withContainer:!0,children:"Login"}),content:Object(x.jsx)(b.Content,{children:Object(x.jsxs)(je,{ContainerProps:{justify:"center"},xs:12,md:10,xl:8,children:[!!f&&Object(x.jsx)(S.a,{color:"error",gutterBottom:!0,children:f}),Object(x.jsxs)(oe.a,{children:[Object(x.jsx)(D.a,{children:Object(x.jsx)(ve.a,{fullWidth:!0,label:"Username",value:c,onChange:function(e){var t=e.target.value;return o(t)},onKeyPress:g})}),Object(x.jsx)(D.a,{children:Object(x.jsx)(ve.a,{fullWidth:!0,label:"Password",type:"password",value:u,onChange:function(e){var t=e.target.value;return j(t)},onKeyPress:g})}),Object(x.jsx)(D.a,{children:Object(x.jsx)(ct.a,{variant:"contained",color:"primary",onClick:v,disabled:!c||!u||O,children:"Login"})})]})]})})})}var Lt=n(317),Bt=n.n(Lt);function Ft(){var e=Object(Ee.b)(),t=Object(Ee.c)((function(e){return e.login})).loading,n=Object(qe.useSnackbar)().enqueueSnackbar;return Object(x.jsx)(Ne.a,{onClick:function(){e(St()).then((function(){console.log("Logout successful"),n("Logout successful",{variant:"success"})})).catch((function(e){console.error("Logout Error",e),n("Logout Error",{variant:"error"})}))},disabled:t,children:Object(x.jsx)(Bt.a,{})})}var It={path:"/",exact:!0,component:function(){var e=Object(Ee.c)((function(e){return e.login})).logged,t=e.admin.is;return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{withContainer:!0,leftAction:Object(x.jsxs)(b.DrawerIconButton,{children:[Object(x.jsxs)(fe,{subtitle:t?"Admin":"",children:[e.name," ",e.surname]}),Object(x.jsx)(b.DrawerLists,{lists:[{key:"pages",items:[Object(y.a)(Object(y.a)({},Le),{},{action:Object(x.jsx)(Ft,{})}),t?We:null,t?Te:null,t?ye:null,p]}]})]}),rightAction:Object(x.jsx)(nt,{}),children:"Timeline"}),content:Object(x.jsx)(b.Content,{children:Object(x.jsx)(rt,{user:e})})})}};var Tt={path:"/usercreate",exact:!0,component:function(){return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{LeftAction:Object(x.jsx)(b.BackIconButton,{}),children:"Usercreate"}),content:Object(x.jsx)(b.Content,{children:"Usercreate content"})})}};Ce.a;var Et={path:"/useredit",exact:!0,component:function(){return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{LeftAction:Object(x.jsx)(b.BackIconButton,{}),children:"Useredit"}),content:Object(x.jsx)(b.Content,{children:"Useredit content"})})}};Ce.a;var Ut={path:"/userview",exact:!0,component:function(){return Object(x.jsx)(b.Page,{header:Object(x.jsx)(b.Header,{LeftAction:Object(x.jsx)(b.BackIconButton,{}),children:"Userview"}),content:Object(x.jsx)(b.Content,{children:"Userview content"})})}},Dt=(Ce.a,{});function Ht(){var e=Object(s.a)("(prefers-color-scheme: dark)");return Object(x.jsx)(b.AppContainer,{ThemeProps:{palette:{primary:j.a,secondary:d.a,type:e?"dark":"light"}},RouterProps:{Router:i.BrowserRouter,routes:[g,me,ke,Pe,Ie,It,Tt,Et,Ut,Me],WrapperProps:{components:[{Component:bt},{Component:Pt},{Component:O.a,utils:h.a,locale:Dt[window.navigator.language.substr(0,2)]}]}}})}var Mt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,447)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},Wt=Object(Ge.a)({reducer:{hasAdmin:dt,login:At,timeline:Ze}});o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Ee.a,{store:Wt,children:Object(x.jsx)(Ht,{})})}),document.getElementById("root")),Mt()}},[[391,1,2]]]);
//# sourceMappingURL=main.d688de16.chunk.js.map