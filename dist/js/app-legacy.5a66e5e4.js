(function(){"use strict";var e={1842:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var o=r(144),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],s={},i=s,l=r(1001),c=(0,l.Z)(i,n,a,!1,null,null,null),u=c.exports,d=r(858);o.Z.use(d.Z);var m=new d.Z({icons:{iconfont:"mdi"}}),v=(r(1539),r(8345)),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v("ルーム")])],1),r("v-navigation-drawer",{attrs:{app:"",light:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("SideBar")],1),r("v-main",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"6",sm:"4"}},[r("CreateRoom")],1),e._l(e.rooms,(function(t){return r("v-col",{key:t.id,attrs:{cols:"6",sm:"4"}},[r("router-link",{staticClass:"room-name",attrs:{to:{path:"/chat",query:{room_id:t.id}}}},[r("v-avatar",{attrs:{color:"grey lighten-2",size:"128"}},[t.thumbnailUrl?e._e():r("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-home ")]),t.thumbnailUrl?r("img",{attrs:{src:t.thumbnailUrl}}):e._e()],1),r("h2",{staticClass:"room-name"},[e._v(e._s(t?t.name:""))])],1)],1)}))],2)],1)],1)],1)},p=[],h=r(4367),g=r(6198),b=(r(5666),r(1249),r(4747),r(1902)),Z=(r(4642),r(6621),r(5063),{apiKey:"AIzaSyDeZrBHs_Hu4LluPMM_K1idrJMNVMaXY-o",authDomain:"vue-chat-1d24f.firebaseapp.com",projectId:"vue-chat-1d24f",storageBucket:"vue-chat-1d24f.appspot.com",messagingSenderId:"151996774452",appId:"1:151996774452:web:01895ae9161c1bc042b261"});b.Z.initializeApp(Z);var w=b.Z,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-sheet",{staticClass:"pa-4",attrs:{color:""}},[r("v-avatar",{attrs:{color:"indigo"}},[r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg, image/jpg, image/png"},on:{change:e.updateIcon}}),e.photoUrl?e._e():r("v-icon",{attrs:{dark:""},on:{click:e.changeIcon}},[e._v(" mdi-account-circle ")]),e.photoUrl?r("img",{attrs:{src:e.photoUrl},on:{click:e.changeIcon}}):e._e()],1),r("div",{staticClass:"username"},[e._v(e._s(e.auth&&e.auth.displayName))])],1),r("v-divider"),r("v-list",[e._l(e.links,(function(t){var o=t[0],n=t[1],a=t[2];return r("v-list-item",{key:o,attrs:{to:a,link:""}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(o))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(n))])],1)],1)})),r("v-list-item",{on:{click:e.logout}},[r("v-list-item-icon",[r("v-icon",[e._v(" mdi-logout ")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("ログアウト")])],1)],1)],2)],1)},_=[],x=(r(8309),r(8862),{mounted:function(){this.auth=JSON.parse(sessionStorage.getItem("user")),this.photoUrl=this.auth.photoURL},data:function(){return{drawer:null,links:[["mdi-home","ルーム","/"]],auth:null,photoUrl:""}},methods:{logout:function(){var e=this;w.auth().signOut().then((function(){localStorage.message="ログアウトしました",e.$router.push("/login")})).catch((function(e){console.log(e)}))},changeIcon:function(){this.$refs.fileInput.click()},updateIcon:function(){var e=this,t=this.getAuth();t||(sessionStorage.removeItem("user"),this.$router.push("/login"));var r=this.$refs.fileInput.files[0];console.log(r);var o="/user/".concat(r.name);w.storage().ref().child(o).put(r).then(function(){var t=(0,g.Z)(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.ref.getDownloadURL();case 2:o=t.sent,console.log("download",o),w.auth().onAuthStateChanged((function(t){t&&(t.updateProfile({photoURL:o}),e.auth.photoURL=o,sessionStorage.setItem("user",JSON.stringify(e.auth)),e.photoUrl=o)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getAuth:function(){return w.auth().onAuthStateChanged((function(e){return e}))}}}),y=x,k=r(3453),C=r.n(k),I=r(6370),R=r(1418),S=r(6428),A=r(6816),$=r(7620),U=r(9851),B=r(459),L=r(3385),T=(0,l.Z)(y,V,_,!1,null,null,null),E=T.exports;C()(T,{VAvatar:I.Z,VDivider:R.Z,VIcon:S.Z,VList:A.Z,VListItem:$.Z,VListItemContent:U.km,VListItemIcon:B.Z,VListItemTitle:U.V9,VSheet:L.Z});var O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r("v-avatar",e._g(e._b({attrs:{color:"primary",size:"128",dark:""}},"v-avatar",n,!1),o),[r("v-icon",{attrs:{"x-large":"",color:"white"}},[e._v(" mdi-home-plus ")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[e._v("新しいルーム")])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"ルーム名を入力してください",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-file-input",{attrs:{label:"ルームアイコンを選択してください","truncate-length":"15",accept:"image/*"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"success darken-1"},on:{click:e.onSubmit}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-check-bold ")]),e._v("作成 ")],1),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 閉じる ")])],1)],1)],1)},q=[],M={data:function(){return{dialog:!1,name:"",file:null}},methods:{onSubmit:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r="",!e.file){t.next=5;break}return o="/room/".concat(e.file.name),t.next=5,w.storage().ref().child(o).put(e.file).then(function(){var e=(0,g.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.ref.getDownloadURL();case 2:r=e.sent,console.log("thumbnailUrl",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:return n=w.firestore().collection("rooms"),t.next=8,n.add({name:e.name,thumbnailUrl:r,createdAt:w.firestore.Timestamp.now()}).then((function(t){console.log("success to create room",t),e.$router.go({path:"/",force:!0}),e.dialog=!1}));case 8:case"end":return t.stop()}}),t)})))()}}},N=M,j=r(680),D=r(3237),P=r(7118),z=r(2102),F=r(9846),J=r(4246),W=r(3065),H=r(2877),K=r(9762),Q=r(1347),X=(0,l.Z)(N,O,q,!1,null,null,null),Y=X.exports;C()(X,{VAvatar:I.Z,VBtn:j.Z,VCard:D.Z,VCardActions:P.h7,VCardText:P.ZB,VCardTitle:P.EB,VCol:z.Z,VContainer:F.Z,VDialog:J.Z,VFileInput:W.Z,VIcon:S.Z,VRow:H.Z,VSpacer:K.Z,VTextField:Q.Z});var G={components:{SideBar:E,CreateRoom:Y},data:function(){return{rooms:[],drawer:null,roomId:[]}},mounted:function(){this.getRooms()},methods:{getRooms:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.rooms=[],r=w.firestore().collection("rooms"),t.next=4,r.get();case 4:o=t.sent,console.log("snapshot",o),o.docs.map((function(t){var r=(0,h.Z)({},t.data());r.id=t.id,console.log(r),e.rooms.push(r)})),console.log(e.rooms);case 8:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;w.firestore().collection("rooms").orderBy("createdAt","asc").get().then((function(t){t.forEach((function(t){e.roomId.push((0,h.Z)((0,h.Z)({},t.data()),{},{id:t.id}))}))}))}}},ee=G,te=r(7524),re=r(3130),oe=r(5206),ne=r(7877),ae=r(7575),se=r(7921),ie=(0,l.Z)(ee,f,p,!1,null,null,null),le=ie.exports;C()(ie,{VApp:te.Z,VAppBar:re.Z,VAppBarNavIcon:oe.Z,VAvatar:I.Z,VCol:z.Z,VContainer:F.Z,VIcon:S.Z,VMain:ne.Z,VNavigationDrawer:ae.Z,VRow:H.Z,VToolbarTitle:se.qW});var ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{app:"","elevate-on-scroll":""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-toolbar-title",{staticClass:"room-title d-flex"},[r("h2",[e._v(e._s(e.room?e.room.name:""))]),r("DeleteRoom")],1)],1),r("v-navigation-drawer",{attrs:{app:"",light:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("SideBar")],1),r("v-main",[r("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[r("v-row",e._l(e.cards,(function(t){return r("v-col",{key:t,attrs:{cols:"12"}},[r("v-card",[r("v-subheader",[e._v(e._s(t))]),r("v-list",{attrs:{"two-line":""}},[e._l(e.messages,(function(t,o){return[r("v-list-item",{key:o},[r("div",[r("v-list-item-avatar",{attrs:{color:"grey darken-1"}},[r("v-img",{attrs:{src:t.photoURL}})],1),e._v(" "+e._s(t.name)+" ")],1),r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"message"},[e._v(" "+e._s(t.message)+" ")])],1)],1),6!==e.n?r("v-divider",{key:"divider-"+o,attrs:{inset:""}}):e._e()]}))],2)],1)],1)})),1)],1)],1),r("v-card",[r("v-bottom-navigation",{staticClass:"d-flex align-center",attrs:{"hide-on-scroll":"",horizontal:"",fixed:""}},[r("v-textarea",{attrs:{"prepend-inner-icon":"mdi-comment",rows:"1","auto-lgrow":"",label:"メッセージを入力"},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}}),r("v-btn",{attrs:{icon:"",type:"submit",disabled:e.invalid},on:{click:e.submit}},[r("v-icon",{attrs:{color:"blue"}},[e._v("mdi-send")])],1)],1)],1)],1)},ue=[],de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"delete-button",attrs:{color:"error",elevation:"0",fab:"",small:""}},"v-btn",n,!1),o),[r("v-icon",[e._v("mdi-trash-can")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h6"},[e._v("ルームを削除しますか？")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" キャンセル ")]),r("v-btn",{attrs:{color:"error"},on:{click:function(t){e.deleteRoom(),e.dialog=!1}}},[e._v(" 削除 ")])],1)],1)],1)],1)},me=[],ve={created:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.roomId=e.$route.query.room_id,console.log("roomId",e.roomId),r=w.firestore().collection("rooms").doc(e.roomId),t.next=5,r.get();case 5:if(o=t.sent,o.exists){t.next=9;break}return t.next=9,e.$router.push("/");case 9:e.room=o.data(),console.log("room",e.room);case 11:case"end":return t.stop()}}),t)})))()},data:function(){return{messages:[],body:"",roomId:"",room:null,drawer:null,dialog:!1,n:"",auth:null}},computed:{invalid:function(){return!this.body}},methods:{deleteRoom:function(){var e=this,t=this.$route.query.room_id;w.firestore().collection("rooms").doc(t).delete(this.body).then((function(){console.log(t,"は削除されました"),e.$router.push("/")}))}}},fe=ve,pe=(0,l.Z)(fe,de,me,!1,null,null,null),he=pe.exports;C()(pe,{VBtn:j.Z,VCard:D.Z,VCardActions:P.h7,VCardTitle:P.EB,VDialog:J.Z,VIcon:S.Z,VRow:H.Z,VSpacer:K.Z});var ge={components:{SideBar:E,DeleteRoom:he},created:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.roomId=e.$route.query.room_id,console.log("roomId",e.roomId),r=w.firestore().collection("rooms").doc(e.roomId),t.next=5,r.get();case 5:if(o=t.sent,o.exists){t.next=9;break}return t.next=9,e.$router.push("/");case 9:e.room=o.data(),console.log("room",e.room);case 11:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;this.auth=JSON.parse(sessionStorage.getItem("user")),console.log(this.auth);var t=w.firestore().collection("rooms").doc(this.roomId);t.collection("messages").orderBy("createdAt","asc").onSnapshot((function(t){t.docChanges().forEach((function(t){console.log("new message",t.doc.data()),e.messages.push(t.doc.data())}))}))},data:function(){return{messages:[],name:"",body:"",roomId:"",room:null,cards:["トーク"],drawer:null,n:"",auth:null}},computed:{invalid:function(){return!this.body}},methods:{clear:function(){this.body=""},submit:function(){var e=this,t=w.firestore().collection("rooms").doc(this.roomId);t.collection("messages").add({message:this.body,name:this.auth.displayName,photoURL:this.auth.photoURL,createdAt:w.firestore.Timestamp.now()}).then((function(t){console.log("success",t),e.body=""})).catch((function(e){console.log("fail",e),alert("メッセージの送信に失敗しました")}))}}},be=ge,Ze=r(1049),we=r(7047),Ve=r(6421),_e=r(5533),xe=r(4350),ye=(0,l.Z)(be,ce,ue,!1,null,null,null),ke=ye.exports;C()(ye,{VApp:te.Z,VAppBar:re.Z,VAppBarNavIcon:oe.Z,VBottomNavigation:Ze.Z,VBtn:j.Z,VCard:D.Z,VCol:z.Z,VContainer:F.Z,VDivider:R.Z,VIcon:S.Z,VImg:we.Z,VList:A.Z,VListItem:$.Z,VListItemAvatar:Ve.Z,VListItemContent:U.km,VListItemSubtitle:U.oZ,VMain:ne.Z,VNavigationDrawer:ae.Z,VRow:H.Z,VSubheader:_e.Z,VTextarea:xe.Z,VToolbarTitle:se.qW});var Ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",{staticClass:"login-wrap"},[r("v-card",{staticClass:"login-form"},[r("v-card-title",{staticClass:"login-title"},[e._v("Login")]),r("v-card-subtitle",[e._v("ユーザー情報をご入力ください。")]),r("v-btn",{attrs:{text:"",color:"light-blue",to:"signup"}},[e._v("新規登録はこちら")]),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{type:"password",label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{staticClass:"login-btn",attrs:{color:"success",disabled:e.isValid},on:{click:e.submit}},[e._v("ログイン")]),e.message?r("v-alert",{staticClass:"success-message",attrs:{dense:"",text:"",type:"success"}},[r("strong",[e._v(e._s(e.message))])]):e._e(),e.errorMessage?r("v-alert",{staticClass:"error-message",attrs:{dense:"",outlined:"",type:"error"}},[r("strong",[e._v(e._s(e.errorMessage))])]):e._e()],1)],1)],1)])},Ie=[],Re=(r(4916),r(7601),{data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"メールアドレスを入力してください"},function(e){return/.+@.+\..+/.test(e)||"メールアドレスが不正です"}],password:"",message:"",errorMessage:""}},mounted:function(){localStorage.message&&(this.message=localStorage.message,localStorage.message="")},computed:{isValid:function(){return!this.valid}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},submit:function(){var e=this;w.auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){console.log("success"),console.log("user",t.user);var r={displayName:t.user.displayName,email:t.user.email,uid:t.user.uid,refreshToken:t.user.refreshToken,photoURL:t.user.photoURL};sessionStorage.setItem("user",JSON.stringify(r)),e.$router.push("/")})).catch((function(t){console.log("fail",t),e.errorMessage="ログインに失敗しました"}))}}}),Se=Re,Ae=r(3401),$e=r(6232),Ue=(0,l.Z)(Se,Ce,Ie,!1,null,null,null),Be=Ue.exports;C()(Ue,{VAlert:Ae.Z,VApp:te.Z,VBtn:j.Z,VCard:D.Z,VCardSubtitle:P.Qq,VCardTitle:P.EB,VForm:$e.Z,VTextField:Q.Z});var Le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",{staticClass:"login-wrap"},[r("v-card",{staticClass:"login-form"},[r("v-card-title",{staticClass:"login-title"},[e._v("Sign Up")]),r("v-card-subtitle",[e._v("ユーザー情報をご入力ください。")]),r("v-btn",{attrs:{text:"",color:"light-blue",to:"login"}},[e._v("ログインはこちら")]),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"User name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{rules:e.passwordRules,type:"password",label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{staticClass:"login-btn",attrs:{color:"success",disabled:e.isValid},on:{click:e.submit}},[e._v("サインアップ")]),e.errorMessage?r("v-alert",{staticClass:"error-message",attrs:{dense:"",outlined:"",type:"error"}},[r("strong",[e._v(e._s(e.errorMessage))])]):e._e()],1)],1)],1)])},Te=[],Ee={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"ユーザー名を入力してください"},function(e){return e&&e.length<=10||"ユーザー名は10文字以内で入力してください"}],email:"",emailRules:[function(e){return!!e||"メールアドレスを入力してください"},function(e){return/.+@.+\..+/.test(e)||"メールアドレスが不正です"}],password:"",passwordRules:[function(e){return!!e||"パスワードを入力してください"},function(e){return e&&e.length>=6||"パスワードは6文字以上で入力してください"}],errorMessage:""}},computed:{isValid:function(){return!this.valid}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},submit:function(){var e=this;w.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(){var t=(0,g.Z)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("success",r),t.next=3,r.user.updateProfile({displayName:e.name});case 3:console.log("update user",r.user),localStorage.message="新規作成に成功しました",e.$router.push("/login");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log("success",t),e.errorMessage="ユーザーの新規作成に失敗しました"}))}}},Oe=Ee,qe=(0,l.Z)(Oe,Le,Te,!1,null,null,null),Me=qe.exports;C()(qe,{VAlert:Ae.Z,VApp:te.Z,VBtn:j.Z,VCard:D.Z,VCardSubtitle:P.Qq,VCardTitle:P.EB,VForm:$e.Z,VTextField:Q.Z}),o.Z.use(v.Z);var Ne=[{path:"/",name:"RoomList",component:le,meta:{requiresAuth:!0}},{path:"/chat",name:"ChatBoard",component:ke},{path:"/login",name:"LoginView",component:Be},{path:"/signup",name:"SignUp",component:Me}],je=new v.Z({mode:"history",base:"/",routes:Ne});je.beforeEach((function(e,t,r){var o=e.matched.some((function(e){return e.meta.requiresAuth}));o?w.auth().onAuthStateChanged((function(t){t?r():r({path:"/login",query:{redirect:e.fullPath}})})):r()}));var De=je;o.Z.config.productionTip=!1,new o.Z({vuetify:m,router:De,render:function(e){return e(u)}}).$mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],a=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var u=l(r)}for(t&&t(o);c<s.length;c++)a=s[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self["webpackChunkvue_chat"]=self["webpackChunkvue_chat"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(1842)}));o=r.O(o)})();
//# sourceMappingURL=app-legacy.5a66e5e4.js.map