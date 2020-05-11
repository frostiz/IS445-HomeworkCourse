(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,a,t){e.exports=t(130)},127:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(57),o=t.n(l),c=t(39),i=t(101),m=t(18),u=Object(m.a)(),s=t(85),d=t.n(s),h=t(91),p=t(94),E=t(104),v=t(86),f=t.n(v);f.a.initializeApp({apiKey:"AIzaSyCbeEOI70eQ7fTn03_fcc0dzSOzJMpb80A",authDomain:"is445-homeworkcourse.firebaseapp.com",databaseURL:"https://is445-homeworkcourse.firebaseio.com",projectId:"is445-homeworkcourse",storageBucket:"is445-homeworkcourse.appspot.com",messagingSenderId:"26237188445",appId:"1:26237188445:web:8e2860fcb714e2d3a790b4"});var b=f.a,k=t(95),y=t(17);var g=function(e){var a=Object(n.useState)([]),t=Object(E.a)(a,2),l=t[0],o=t[1],c=function(){var e=Object(p.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.firestore(),e.next=3,a.collection("users").get();case 3:t=e.sent,o(t.docs.map((function(e){return Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){c()}),[]);var i=e.history;return r.a.createElement("div",null,r.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0,className:"contact-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Controls"))),r.a.createElement("tbody",null,l.map((function(e,a){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,a),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",{style:{width:"min-content"}},r.a.createElement(y.a,{variant:"outline-primary",className:"mr-2",onClick:function(){return i.push("/details",{user:e})}},"Details"),r.a.createElement(y.a,{variant:"outline-warning",className:"mr-2",onClick:function(){return i.push("/create",{user:e})}},"Edit"),r.a.createElement(y.a,{variant:"outline-danger",className:"",onClick:function(){return a=e,void(window.confirm("Are you sure ?")&&(b.firestore().collection("users").doc(a.id).delete(),c()));var a}},"Delete")))})))),r.a.createElement(y.a,{variant:"success",href:"/create"},"Create"))},C=t(11),w=t(81),N=t(59),x=t(103),I=t(63),O=I.a({name:I.b().required(),email:I.b().required().matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,'The email must use the pattern "username@server.domain"'),phone:I.b().required().length(10,"The phone number must contain 10 digits.").matches(/^[0-9]{10}$/)});var F=function(e){var a=e.history,t=e.location;t.state||(t.state={});var n=t.state.user,l=void 0===n?{name:"",email:"",phone:""}:n,o=!!l.id;return r.a.createElement("div",null,r.a.createElement(x.a,{validationSchema:O,initialValues:l,validateOnChange:!0,validateOnBlur:!1,onSubmit:o?function(e){b.firestore().collection("users").doc(e.id).set(e),a.push("/")}:function(e){b.firestore().collection("users").add(e),a.push("/")}},(function(e){var a=e.handleSubmit,t=e.handleChange,n=(e.handleBlur,e.values),l=e.touched,o=(e.isValid,e.errors),c=e.setFieldTouched;return r.a.createElement(C.a,{noValidate:!0,onSubmit:a},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,{as:N.a,md:"4",controlId:"validationFormikName"},r.a.createElement(C.a.Label,null,"Name"),r.a.createElement(C.a.Control,{type:"text",name:"name",placeholder:"Name",value:n.name,onChange:function(e){return c("name")&&t(e)},isInvalid:l.name&&!!o.name,isValid:l.name&&!o.name}),r.a.createElement(C.a.Control.Feedback,null,"Looks good!"),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},o.name)),r.a.createElement(C.a.Group,{as:N.a,md:"4",controlId:"validationFormikEmail"},r.a.createElement(C.a.Label,null,"Email"),r.a.createElement(C.a.Control,{type:"text",name:"email",placeholder:"Email",value:n.email,onChange:function(e){return c("email")&&t(e)},isInvalid:l.email&&!!o.email,isValid:l.email&&!o.email}),r.a.createElement(C.a.Control.Feedback,null,"Looks good!"),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},o.email)),r.a.createElement(C.a.Group,{as:N.a,md:"4",controlId:"validationFormikPhone"},r.a.createElement(C.a.Label,null,"Phone"),r.a.createElement(w.a,null,r.a.createElement(w.a.Prepend,null,r.a.createElement(w.a.Text,{id:"inputGroupPrepend"},"@")),r.a.createElement(C.a.Control,{type:"text",placeholder:"Phone","aria-describedby":"inputGroupPrepend",name:"phone",value:n.phone,onChange:function(e){return c("phone")&&t(e)},isInvalid:l.phone&&!!o.phone,isValid:l.phone&&!o.phone}),r.a.createElement(C.a.Control.Feedback,null,"Looks good!"),r.a.createElement(C.a.Control.Feedback,{type:"invalid"},o.phone)))),r.a.createElement(y.a,{type:"submit"},"Submit form"))})))},S=t(42);var j=function(e){var a=e.history,t=e.location;t.state||(t.state={});var n=t.state.user,l=void 0===n?{name:"",email:"",phone:""}:n;return r.a.createElement("div",null,r.a.createElement(y.a,{variant:"outline-secondary",href:"/",className:"mb-2"},"Go back"),r.a.createElement(S.a,null,r.a.createElement(S.a.Header,null,"Contact"),r.a.createElement(S.a.Body,null,r.a.createElement(S.a.Text,null,"Name: ",l.name),r.a.createElement(S.a.Text,null,"Email: ",l.email),r.a.createElement(S.a.Text,null,"Phone: ",l.phone)),r.a.createElement(S.a.Footer,{className:"text-muted"},r.a.createElement(y.a,{variant:"outline-warning",className:"mr-2",onClick:function(){return a.push("/create",{user:l})}},"Edit"),r.a.createElement(y.a,{variant:"outline-danger",className:"",onClick:function(){return e=l,void(window.confirm("Are you sure ?")&&(b.firestore().collection("users").doc(e.id).delete(),a.push("/")));var e}},"Delete"))))},A=t(90),P=t(102);var T=function(e){var a=e.location;return r.a.createElement(A.a,{collapseOnSelect:!0,expand:"md",bg:"primary",variant:"dark",className:"main-nav",sticky:"top"},r.a.createElement(A.a.Brand,{href:"/"},"Contact management"),r.a.createElement(P.a,{className:"mx-auto",activeKey:a.pathname},r.a.createElement(y.a,{variant:"outline-light",href:"/",className:"mr-2"},"Index"),r.a.createElement(y.a,{variant:"outline-light",href:"/create"},"Create")))};var z=function(){return r.a.createElement("div",null,"No match")},B=(t(127),Object(c.f)(T));var L=function(){return r.a.createElement(i.a,{history:u},r.a.createElement(B,null),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:g}),r.a.createElement(c.a,{exact:!0,path:"/create",component:F}),r.a.createElement(c.a,{exact:!0,path:"/details",component:j}),r.a.createElement(c.a,{component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(129);o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.fcc5b4c4.chunk.js.map