"use strict";(self.webpackChunkstream_hub=self.webpackChunkstream_hub||[]).push([[501],{4911:function(e,i,s){s.d(i,{e:function(){return u}});var a=s(2791),n=s(456),r=s(9434),t=s(9273),o=s(3329),u=function(e){var i=e.type,s=(0,r.I0)();return(0,a.useEffect)((function(){google.accounts.id.initialize({client_id:"678634402419-djp8c1atoej0ssbmb7sosa28mspt0kpt.apps.googleusercontent.com",callback:function(e){var a=(0,n.Z)(e.credential);"register"===i?s((0,t.z2)({name:a.name,email:a.email,password:a.sub})):"login"===i&&s((0,t.Ib)({email:a.email,password:a.sub}))}}),google.accounts.id.renderButton(document.getElementById("signinButton"),{theme:"outline",size:"large"})}),[s,i]),(0,o.jsx)("div",{id:"signinButton"})}},4136:function(e,i,s){s.d(i,{_:function(){return r},u:function(){return n}});var a=s(6727),n=a.Ry({name:a.Z_().min(3,"Name should have at least 3 characters").required("Name is required!"),email:a.Z_().email("Email is invalid!").required("Email is required!"),password:a.Z_().min(5,"Password must be minimum 5 digits!").required("Password is required!")}),r=a.Ry({email:a.Z_().email("Email is invalid!").required("Email is required!"),password:a.Z_().min(5,"Password must be minimum 5 digits!").required("Password is required!")})},501:function(e,i,s){s.r(i),s.d(i,{default:function(){return c}});var a=s(9434),n=s(9273),r=s(4136),t=s(5705),o=s(3329),u=function(){var e=(0,a.I0)(),i=(0,t.TA)({initialValues:{email:"",password:""},validationSchema:r._,onSubmit:function(i){e((0,n.Ib)({email:i.email,password:i.password}))}});return(0,o.jsxs)("form",{onSubmit:i.handleSubmit,autoComplete:"off",children:[(0,o.jsx)("input",{id:"email",name:"email",type:"email",onChange:i.handleChange,value:i.values.email,placeholder:"Email"}),i.touched.email&&i.errors.email?(0,o.jsx)("div",{children:i.errors.email}):null,(0,o.jsx)("input",{id:"password",type:"text",name:"password",onChange:i.handleChange,value:i.values.password,placeholder:"Password"}),i.touched.password&&i.errors.password?(0,o.jsx)("div",{children:i.errors.password}):null,(0,o.jsx)("button",{type:"submit",children:"Submit"})]})},l=s(4911),d=s(5067),m=s(4217);function c(){var e=(0,a.v9)(m.Kr),i=(0,a.v9)(m.wi);return(0,o.jsxs)(o.Fragment,{children:[e&&!i&&(0,o.jsx)(d.a,{}),!e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(u,{})}),(0,o.jsx)(l.e,{type:"login"})]}),!e&&i&&(0,o.jsxs)("div",{children:["Ooops, something went wrong! ",(0,o.jsx)("span",{children:i})]})]})}}}]);
//# sourceMappingURL=501.86e01cfa.chunk.js.map