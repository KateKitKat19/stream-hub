"use strict";(self.webpackChunkstream_hub=self.webpackChunkstream_hub||[]).push([[751],{4911:function(e,i,n){n.d(i,{e:function(){return d}});var a=n(2791),r=n(456),s=n(9434),t=n(9273),l=n(3329),d=function(e){var i=e.type,n=(0,s.I0)();return(0,a.useEffect)((function(){google.accounts.id.initialize({client_id:"678634402419-djp8c1atoej0ssbmb7sosa28mspt0kpt.apps.googleusercontent.com",callback:function(e){var a=(0,r.Z)(e.credential);"register"===i?n((0,t.z2)({name:a.name,email:a.email,password:a.sub})):"login"===i&&n((0,t.Ib)({email:a.email,password:a.sub}))}}),google.accounts.id.renderButton(document.getElementById("signinButton"),{theme:"outline",size:"large"})}),[n,i]),(0,l.jsx)("div",{id:"signinButton"})}},4136:function(e,i,n){n.d(i,{_:function(){return s},u:function(){return r}});var a=n(6727),r=a.Ry({name:a.Z_().min(3,"Name should have at least 3 characters").required("Name is required!"),email:a.Z_().email("Email is invalid!").required("Email is required!"),password:a.Z_().min(5,"Password must be minimum 5 digits!").required("Password is required!")}),s=a.Ry({email:a.Z_().email("Email is invalid!").required("Email is required!"),password:a.Z_().min(5,"Password must be minimum 5 digits!").required("Password is required!")})},2751:function(e,i,n){n.r(i),n.d(i,{default:function(){return c}});var a=n(9434),r=n(9273),s=n(5705),t=n(4136),l=n(3329),d=function(){var e=(0,a.I0)(),i=(0,s.TA)({initialValues:{email:"",password:""},validationSchema:t.u,onSubmit:function(i){e((0,r.z2)({name:i.name,email:i.email,password:i.password}))}});return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:i.handleSubmit,autoComplete:"off",children:[(0,l.jsx)("input",{id:"name",name:"name",type:"text",onChange:i.handleChange,value:i.values.name,placeholder:"Name"}),i.touched.name&&i.errors.name?(0,l.jsx)("div",{children:i.errors.name}):null,(0,l.jsx)("input",{id:"email",name:"email",type:"text",onChange:i.handleChange,value:i.values.email,placeholder:"Email"}),i.touched.email&&i.errors.email?(0,l.jsx)("div",{children:i.errors.email}):null,(0,l.jsx)("input",{id:"password",type:"text",name:"password",onChange:i.handleChange,value:i.values.password,placeholder:"Password"}),i.touched.password&&i.errors.password?(0,l.jsx)("div",{children:i.errors.password}):null,(0,l.jsx)("button",{type:"submit",children:"Register"})]})})},o=n(4911),u=n(5067),m=n(4217);function c(){var e=(0,a.v9)(m.Kr),i=(0,a.v9)(m.wi);return(0,l.jsxs)(l.Fragment,{children:[e&&!i&&(0,l.jsx)(u.a,{}),!e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(d,{})}),(0,l.jsx)(o.e,{type:"register"})]}),!e&&i&&(0,l.jsxs)("div",{children:["Ooops, something went wrong! ",(0,l.jsx)("span",{children:i})]})]})}}}]);
//# sourceMappingURL=751.fa1305fc.chunk.js.map