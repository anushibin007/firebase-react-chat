(this["webpackJsonpfirebase-react-chat"]=this["webpackJsonpfirebase-react-chat"]||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(18),s=a.n(c),i=(a(45),a(46),a(74)),o=(a(47),a(48),a(16)),u=(a(49),a(21)),d=a(15),l=a(72),j=a(28),m=a.n(j),b=a(35),p=a(17),f=(a(30),a(51),a(5)),O=Object(r.createContext)();p.a.apps.length?p.a.app():(p.a.initializeApp({apiKey:"AIzaSyACCHgp6UEYQcIdtcW8V7KWEn2T8DVAe1k",authDomain:"fir-react-demo-c5a92.firebaseapp.com",projectId:"fir-react-demo-c5a92",storageBucket:"fir-react-demo-c5a92.appspot.com",messagingSenderId:"80104492686",appId:"1:80104492686:web:1d6fefd98a6f1fce5c03df",measurementId:"G-QFH37R5MHR"}),p.a.performance());var h=p.a.auth(),g=function(e){var t=Object(r.useState)({user:void 0}),a=Object(d.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){h.onAuthStateChanged(function(){var e=Object(b.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({user:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(f.jsx)(O.Provider,{value:[n,c],children:e.children})};function x(){var e=Object(r.useContext)(O),t=Object(d.a)(e,2),a=t[0],n=t[1],c=new p.a.auth.GoogleAuthProvider,s=function(){i()},i=function(){p.a.auth().signInWithPopup(c).then((function(e){return console.log(e.user),Object(o.b)("\ud83d\udc4b Hello "+e.user.displayName+" ("+e.user.email+")"),n(Object(u.a)(Object(u.a)({},a),{},{user:e.user})),e.user})).catch((function(e){Object(o.b)("\ud83d\udc94 Login failed : "+e.message),console.error(e.message)}))},j=function(){h.signOut().then((function(){n(Object(u.a)(Object(u.a)({},a),{},{user:void 0})),Object(o.b)("\ud83d\udc4b See you soon")}))};return Object(f.jsx)("div",{className:"wrapper",children:a.user?Object(f.jsxs)(l.a,{variant:"danger",onClick:j,children:[Object(f.jsx)("i",{className:"bi bi-google"}),"\xa0Log Out"]}):Object(f.jsxs)(l.a,{variant:"danger",onClick:s,children:[Object(f.jsx)("i",{className:"bi bi-google"}),"\xa0Login with Google"]})})}var v=a(76),y=a(75),N=a(77),w=a(20),C=(a(57),a(36)),F=a(73),U=function(e){var t=Object(r.useContext)(O),a=Object(d.a)(t,1)[0],c=e.message,s=c.uid===(a.user?a.user.uid:"")?"from-me":"from-them",i=Object(f.jsx)(F.a,{roundedCircle:!0,className:"avatar",src:c.photoUrl,alt:"Profile picture of ".concat(c.displayName),title:c.displayName});return Object(f.jsx)(n.a.Fragment,{children:c&&Object(f.jsxs)("p",{className:"".concat(s," animate__bounceIn animate__animated"),title:c.createdAt&&c.createdAt.toDate(),children:["from-them"===s?i:"","\xa0",c.messageType&&"image"===c.messageType?Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)("a",{href:c.attachmentUrl,target:"_blank",rel:"noopener noreferrer",children:Object(f.jsx)("img",{className:"image-message",src:c.attachmentUrl,alt:"Attachment sent by ".concat(c.displayName)})}),Object(f.jsx)("br",{}),c.text]}):c.text,"\xa0","from-me"===s?i:""]})})},I=a(37),A=a.n(I),E=function(){var e=Object(r.useContext)(O),t=Object(d.a)(e,1)[0],a=Object(r.useState)(""),c=Object(d.a)(a,2),s=c[0],i=c[1],u=w.a.firestore().collection("room-public"),j=u.orderBy("createdAt"),m=Object(C.a)(j,{idField:"id"}),b=Object(d.a)(m,1)[0],p=function(e){i(e.target.value)},h=function(e){e.preventDefault(),s&&s.trim()?(i(""),u.add({text:s,uid:t.user.uid,photoUrl:t.user.photoURL,displayName:t.user.displayName,messageType:"text",createdAt:w.a.firestore.FieldValue.serverTimestamp()}).catch((function(e){o.b.error("\ud83d\udc94 Oops. Error: "+e)}))):o.b.error("\ud83d\udc94 Please enter some message")},g=function(e){e.preventDefault(),document.getElementById("fileUpload").click()},x=function(e){o.b.error("\ud83d\udc94 Oops. Error: "+e),P(0)},F=function(e){w.a.storage().ref("images").child(e).getDownloadURL().then((function(e){u.add({text:s,uid:t.user.uid,photoUrl:t.user.photoURL,displayName:t.user.displayName,messageType:"image",attachmentUrl:e,createdAt:w.a.firestore.FieldValue.serverTimestamp()}).then((function(){i("")})).catch((function(e){o.b.error("\ud83d\udc94 Oops. Error: "+e)})),P(0)}))},I=Object(r.useState)(0),E=Object(d.a)(I,2),S=E[0],P=E[1],k=function(e){return P(e)};return Object(r.useEffect)((function(){var e=document.getElementById("endOfPage");e&&e.scrollIntoView()}),[b,t.user]),Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)(n.a.Fragment,{children:Object(f.jsxs)("div",{className:"imessage",children:[b&&b.map((function(e){return Object(f.jsx)(U,{message:e},e.id)})),Object(f.jsx)("div",{id:"endOfPage"})]})}),t.user?Object(f.jsx)(n.a.Fragment,{children:Object(f.jsxs)("form",{onSubmit:h,children:[Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)(v.a,{value:s,onChange:p,placeholder:"\ud83d\udd8a Enter your message here",required:!0,autoFocus:!0})}),Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)(l.a,{type:"submit",variant:"success",children:"\ud83d\ude80\xa0Send"})})]})}):Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)(y.a,{variant:"danger",children:"Please login to send a message"})}),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(A.a,{hidden:!0,accept:"image/*",id:"fileUpload",randomizeFilename:!0,storageRef:w.a.storage().ref("images"),onUploadError:x,onUploadSuccess:F,onProgress:k}),t.user&&0===S?Object(f.jsx)(l.a,{variant:"primary",onClick:g,children:"\ud83d\udcf8\xa0Upload an image"}):""]}),function(){if(S>0)return Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)(N.a,{now:S,animated:!0})})}()]})};a(68),a(69);var S=function(){return Object(f.jsx)(i.a,{children:Object(f.jsxs)(g,{children:[Object(f.jsx)(x,{}),Object(f.jsx)(E,{}),Object(f.jsx)(o.a,{position:"bottom-right"})]})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.43327824.chunk.js.map