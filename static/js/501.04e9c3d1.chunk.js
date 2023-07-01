"use strict";(self.webpackChunkstream_hub=self.webpackChunkstream_hub||[]).push([[501],{6106:function(e,i,n){n.d(i,{Z:function(){return c}});var r=n(8206),s=n(5241),t=n(5946),a=n(9229),o=n(2435),l=n(3329);function c(e){var i=e.errorMessage;return(0,l.jsx)(r.W,{maxW:"5xl",children:(0,l.jsxs)(s.K,{textAlign:"center",align:"center",spacing:{base:8,md:10},py:{base:20,md:28},children:[(0,l.jsxs)(t.X,{fontWeight:600,fontSize:{base:"3xl",sm:"4xl",md:"6xl"},lineHeight:"110%",children:["Ooops, something went wrong! ",(0,l.jsx)(a.x,{as:"span",children:i})]}),(0,l.jsx)(s.K,{spacing:6,direction:"row",children:(0,l.jsx)(o.z,{rounded:"full",px:6,colorScheme:"orange",bg:"orange.400",_hover:{bg:"orange.500"},onClick:function(){return window.location.reload()},children:"Try again"})})]})})}},4911:function(e,i,n){n.d(i,{e:function(){return u}});var r=n(2791),s=n(456),t=n(9434),a=n(9273),o=n(896),l=n(2435),c=n(3728),d=n(3329),u=function(e){var i=e.type,n=(0,t.I0)(),u=(0,r.useRef)(null);return(0,r.useEffect)((function(){google.accounts.id.initialize({client_id:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.CLIENT_ID,callback:function(e){var r=(0,s.Z)(e.credential);"register"===i?n((0,a.z2)({name:r.name,email:r.email,password:r.sub})):"login"===i&&n((0,a.Ib)({email:r.email,password:r.sub}))}}),google.accounts.id.renderButton(u.current,{theme:"transparent",size:"large",text:"login"===i?"Sign in with Google":"Sign up with Google"})}),[n,i]),(0,d.jsx)(o.M,{mt:6,children:(0,d.jsx)(l.z,{ref:u,variant:"ghost",leftIcon:(0,d.jsx)(c.JM8,{}),_hover:{bg:"transparent"}})})}},4136:function(e,i,n){n.d(i,{_D:function(){return t},rL:function(){return a},u_:function(){return s}});var r=n(8007),s=r.Ry({firstName:r.Z_().min(3,"Name should have at least 3 characters").required("Name is required!"),lastName:r.Z_(),email:r.Z_().email("Email is invalid!").required("Email is required!"),password:r.Z_().min(5,"Password must be minimum 5 digits!").required("Password is required!")}),t=r.Ry({email:r.Z_().email("Email is invalid!").required("Email is required!"),password:r.Z_().min(5,"Password must be minimum 5 digits!").required("Password is required!")}),a=r.Ry({name:r.Z_().min(3,"Name should have at least 3 characters").max(20,"Name should be no more than 20 characters").required("Name is required!"),description:r.Z_().min(3,"Description must be minimum 3 digits!").max(500,"Description should have at most 500 characters!").required("Description is required!"),platform:r.Z_()})},501:function(e,i,n){n.r(i),n.d(i,{default:function(){return K}});var r=n(1413),s=n(9439),t=n(9434),a=n(9273),o=n(4136),l=n(5705),c=n(2791),d=n(176),u=n(5241),m=n(5946),h=n(4087),x=n(2392),g=n(8208),p=n(6069),j=n(9229),f=n(311),b=n(7806),w=n(2435),v=n(3466),_=n(5420),S=n(2361),q=n(7689),N=n(4911),Z=n(3329),E=function(){var e=(0,c.useState)(!1),i=(0,s.Z)(e,2),n=i[0],E=i[1],y=(0,q.s0)(),I=(0,t.I0)();return(0,Z.jsx)(d.k,{minH:"100vh",align:"center",justify:"center",children:(0,Z.jsxs)(u.K,{spacing:8,mx:"auto",maxW:"lg",py:12,px:6,align:"center",children:[(0,Z.jsx)(u.K,{align:"center",children:(0,Z.jsx)(m.X,{fontSize:"4xl",textAlign:"center",children:"Sign in"})}),(0,Z.jsxs)(h.xu,{rounded:"lg",bg:"white",boxShadow:"lg",p:8,w:"400px",children:[(0,Z.jsx)(l.J9,{initialValues:{email:"",password:""},validationSchema:o._D,onSubmit:function(e,i){var n=i.setSubmitting;I((0,a.Ib)({email:e.email,password:e.password})).unwrap().then(n(!1))},children:function(e){var i=e.handleSubmit,s=e.isSubmitting;return(0,Z.jsx)("form",{onSubmit:i,children:(0,Z.jsxs)(u.K,{spacing:4,children:[(0,Z.jsxs)(x.NI,{id:"email",isRequired:!0,children:[(0,Z.jsx)(g.l,{children:"Email address"}),(0,Z.jsx)(l.gN,{name:"email",as:p.I,type:"email"}),(0,Z.jsx)(l.Bc,{name:"email",component:j.x,color:"red.500"})]}),(0,Z.jsxs)(x.NI,{id:"password",isRequired:!0,children:[(0,Z.jsx)(g.l,{children:"Password"}),(0,Z.jsxs)(f.B,{children:[(0,Z.jsx)(l.gN,{name:"password",children:function(e){var i=e.field;return(0,Z.jsx)(p.I,(0,r.Z)((0,r.Z)({},i),{},{type:"password"}))}}),(0,Z.jsx)(b.x,{h:"full",children:(0,Z.jsx)(w.z,{variant:"ghost",onClick:function(){return E((function(e){return!e}))},children:n?(0,Z.jsx)(_.O,{}):(0,Z.jsx)(S.t,{})})})]}),(0,Z.jsx)(l.Bc,{name:"password",component:j.x,color:"red.500"})]}),(0,Z.jsx)(u.K,{spacing:10,pt:2,children:(0,Z.jsx)(w.z,{type:"submit",isLoading:s,loadingText:"Submitting",size:"lg",bg:"teal.400",color:"white",_hover:{bg:"teal.500"},children:"Sign in"})})]})})}}),(0,Z.jsx)(N.e,{type:"login"}),(0,Z.jsx)(u.K,{pt:6,children:(0,Z.jsxs)(j.x,{align:"center",children:["Not registered?"," ",(0,Z.jsx)(v.r,{color:"blue.500",onClick:function(){return y("/register")},children:"Sign up"})]})})]})]})})},y=n(4217),I=n(6106);function K(){var e=(0,t.v9)(y.Kr),i=(0,t.v9)(y.wi);return(0,Z.jsxs)(Z.Fragment,{children:[!e&&i&&(0,Z.jsx)(I.Z,{errorMessage:i}),!e&&!i&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(E,{})})]})}}}]);
//# sourceMappingURL=501.04e9c3d1.chunk.js.map