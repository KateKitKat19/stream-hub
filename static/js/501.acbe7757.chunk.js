"use strict";(self.webpackChunkstream_hub=self.webpackChunkstream_hub||[]).push([[501],{5708:function(e,n,t){t.d(n,{e:function(){return p}});var r=t(2791);function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new a("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,r,o=0,i=0,s="";r=n.charAt(i++);~r&&(t=o%4?64*t+r:r,o++%4)?s+=String.fromCharCode(255&t>>(-2*o&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return s};function i(e){var n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,n){var t=n.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(n)}catch(e){return o(n)}}function s(e){this.message=e}s.prototype=new Error,s.prototype.name="InvalidTokenError";var c=function(e,n){if("string"!=typeof e)throw new s("Invalid token specified");var t=!0===(n=n||{}).header?0:1;try{return JSON.parse(i(e.split(".")[t]))}catch(e){throw new s("Invalid token specified: "+e.message)}},l=t(9434),u=t(9273),d=t(3329),p=function(e){var n=e.type,t=(0,l.I0)();return(0,r.useEffect)((function(){google.accounts.id.initialize({client_id:"678634402419-djp8c1atoej0ssbmb7sosa28mspt0kpt.apps.googleusercontent.com",callback:function(e){var r=c(e.credential);"register"===n?t((0,u.z2)({name:r.name,email:r.email,password:r.sub})):"login"===n&&t((0,u.Ib)({email:r.email,password:r.sub}))}}),google.accounts.id.renderButton(document.getElementById("signinButton"),{theme:"outline",size:"large"})}),[t,n]),(0,d.jsx)("div",{id:"signinButton"})}},501:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(9434),a=t(9273),o=t(3329),i=function(){var e=(0,r.I0)();return(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,a.Ib)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},autoComplete:"off",children:[(0,o.jsxs)("label",{children:["Email",(0,o.jsx)("input",{type:"email",name:"email"})]}),(0,o.jsxs)("label",{children:["Password",(0,o.jsx)("input",{type:"password",name:"password"})]}),(0,o.jsx)("button",{type:"submit",children:"Log In"})]})},s=t(5708),c=t(5067),l=t(4217);function u(){var e=(0,r.v9)(l.Kr),n=(0,r.v9)(l.wi);return(0,o.jsxs)(o.Fragment,{children:[e&&!n&&(0,o.jsx)(c.a,{}),!e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(i,{})}),(0,o.jsx)(s.e,{type:"login"})]}),!e&&n&&(0,o.jsxs)("div",{children:["Ooops, something went wrong! ",(0,o.jsx)("span",{children:n})]})]})}}}]);
//# sourceMappingURL=501.acbe7757.chunk.js.map