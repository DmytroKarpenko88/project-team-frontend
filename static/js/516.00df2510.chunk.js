"use strict";(self.webpackChunkteam_project_frontend=self.webpackChunkteam_project_frontend||[]).push([[516],{8516:function(n,i,e){e.r(i),e.d(i,{default:function(){return J}});var o,r,t,s,a,d,m,p,l,x,c,u,h=e(9439),f=e(2791),w=e(5705),g=e(7689),z=e(803),b=e(9434),Z=e(8724),j=e(7834),v=e(168),y=e(6487),q=e(1087),S=e(3746),_=e(165),P=e(4997),k=y.zo.div(o||(o=(0,v.Z)(["\nposition: relative;\nmargin: 0 auto;\npadding:  40px 12px;\ntext-align: center;\njustify-content: center;\nbackground-color: ",";\nborder-radius: 20px;\nwidth: 280px;\nheight: 425px;\nbox-shadow: 7px 10px 14px rgba(63, 143, 248, 0.11);\nz-index: 0;\n@media (min-width: 768px) {\n    padding:  60px 75px;\n    width: 608px;\n    height: 481px;\n    border-radius: 40px;\n    /* z-index: 99; */\n  }\n@media screen and (min-width: 1281px) {\n    height: 481px;\n  }\n"])),P.r.colors.white),A=y.zo.h1(r||(r=(0,v.Z)(["\nfont-size: ",";\nfont-family: ",";\nmargin-bottom: 20px;\n@media (min-width: 768px) {\n    font-size: ",";\n    margin-bottom: 40px;\n}\n@media screen and (min-width: 1281px) {\n  }\n"])),P.r.fontSizes.xl,P.r.fonts.main.medium,P.r.fontSizes.xxl),C=y.zo.div(t||(t=(0,v.Z)(["\nposition: relative;\n"]))),T=(0,y.zo)(w.gN)(s||(s=(0,v.Z)(["\npadding: 12px 16px;\nwidth: 100%;\nheight: 48px;\nfont-size: ",";\nfont-family: ",";\nmargin-bottom: 14px;\nborder: solid 1px ",";\nborder-radius: 40px;\n@media (min-width: 768px) {\n    font-size: ",";\n    margin-bottom: 32px;\n};\n@media screen and (min-width: 1281px) {\n  };\n"])),P.r.fontSizes.m,P.r.fonts.main.regular,P.r.colors.blue,P.r.fontSizes.m),E=(0,y.zo)(w.Bc)(a||(a=(0,v.Z)(["\nposition: absolute;\nfont-size: 10px;\ncolor: ",";\nleft: 10px;\ntop: 47px;\n@media (min-width: 768px) {\n    font-size: 12px;\n}\n"])),P.r.colors.red),I=y.zo.p(d||(d=(0,v.Z)(["\nposition: absolute;\nfont-size: 10px;\ncolor: ",";\nleft: 10px;\ntop: 47px;\n@media (min-width: 768px) {\n    font-size: 12px;\n};\n"])),P.r.colors.green),L=(0,y.zo)(S.Z)(m||(m=(0,v.Z)(["\nposition: absolute;\ncolor: ",";\ntop: 12px;\nleft:218px;\n@media screen and (min-width: 768px) {\n  top: 12px;\n    left:420px;\n  };\n@media screen and (min-width: 1281px) {\n  };\n"])),P.r.colors.blue),N=(0,y.zo)(_.Z)(p||(p=(0,v.Z)(["\nposition: absolute;\ncolor: ",";\ntop: 12px;\nleft:218px;\n@media screen and (min-width: 768px) {\n  top: 12px;\n    left:420px;\n  };\n@media screen and (min-width: 1281px) {\n  };\n"])),P.r.colors.blue),B=y.zo.button(l||(l=(0,v.Z)(["\nwidth: 100%;\nheight: 48px;\nmargin-top: 96px;\nmargin-bottom: 8px;\nfont-size: ",";\ncolor: ",";\nborder-radius: 40px;\nbackground-color: ",";\ntransition: ",";\n&:focus,\n&:hover {\n    /* background-color: ","; */\n};\n@media screen and (min-width: 768px) {\n    margin-top: 28px;\n    margin-bottom: 20px;\n    font-family: ",";\n  };\n@media screen and (min-width: 1281px) {\n  };\n"])),P.r.fontSizes.l,P.r.colors.white,P.r.colors.blue,P.r.transition,P.r.colors.green,P.r.fonts.main.semiBold),R=y.zo.p(x||(x=(0,v.Z)(["\ncolor: ",";\nfont-size: ",";\nfont-family: ",";\n"])),P.r.colors.grey,P.r.fontSizes.xs,P.r.fonts.main.regular),$=(0,y.zo)(q.OL)(c||(c=(0,v.Z)(["\ncolor: ",";\nfont-size: ",";\nfont-family: ",";\nmargin-left: 4px;\ntext-decoration: underline;\n"])),P.r.colors.blue,P.r.fontSizes.xs,P.r.fonts.main.regular),O=e(184),D={email:"",password:""};function F(){var n=(0,f.useState)(!1),i=(0,h.Z)(n,2),e=i[0],o=i[1],r=function(){return o((function(n){return!n}))},t=(0,j.a)().isLoggedIn,s=(0,b.I0)(),a=(0,g.s0)();return(0,f.useEffect)((function(){t&&a("/user")}),[t,a]),(0,O.jsx)(k,{children:(0,O.jsx)(w.J9,{validationSchema:z.d,initialValues:D,onSubmit:function(n,i){var e=i.resetForm,o={email:n.email,password:n.password};s((0,Z.x4)(o)),e()},children:function(n){var i=n.errors,o=n.touched;return(0,O.jsxs)(w.l0,{children:[(0,O.jsx)(A,{children:"Login"}),(0,O.jsxs)(C,{children:[(0,O.jsx)(T,{name:"email",type:"email",placeholder:"Email",autoComplete:"on"}),!i.email&&o.email?(0,O.jsx)(I,{children:"Success, email is valid!"}):null,(0,O.jsx)(E,{name:"email",component:"p"})]}),(0,O.jsxs)(C,{children:[(0,O.jsx)(T,{name:"password",type:e?"text":"password",placeholder:"Password",autoComplete:"on"}),(0,O.jsx)("span",{id:"visibilityBtn",onClick:r,children:e?(0,O.jsx)(L,{}):(0,O.jsx)(N,{})}),!i.password&&o.password?(0,O.jsx)(I,{children:"Success, password is valid!"}):null,(0,O.jsx)(E,{name:"password",component:"p"})]}),(0,O.jsx)("div",{children:(0,O.jsx)(B,{type:"submit",children:"Login"})}),(0,O.jsxs)(R,{children:["Don't have an account?",(0,O.jsx)($,{to:"/register",children:"Register"})]})]})}})})}var H=y.zo.main(u||(u=(0,v.Z)(["\n  margin: 0 auto;\n  padding: 40px 20px 88px 20px;\n  width: 320px;\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding: 80px 80px 395px 80px;\n  }\n  @media screen and (min-width: 1281px) {\n    width: 1280px;\n    padding: 80px 16px 141px 16px;\n  }\n"])));function J(){return(0,O.jsx)(H,{children:(0,O.jsx)(F,{})})}},803:function(n,i,e){e.d(i,{d:function(){return t},g:function(){return s}});var o=e(8007),r=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,t=o.Ry({email:o.Z_().required("Email field is required!").min(10).max(63).matches(r,"Invalid email format"),password:o.Z_().required("Password field is required!").min(6,"Password is too short. The minimum 6 symbols").max(16,"Password is too long. The maximum 16 symbols")}),s=o.Ry({name:o.Z_().required("Name field is required!").min(2,"Name is too short").matches(/^[A-Za-z-\s]+$/,"Name field can contain only latin letters"),email:o.Z_().required("Email field is required!").min(10).max(20).matches(r,"Invalid email format"),password:o.Z_().required("Password is required!").min(6,"Password is too short. The minimum 6 symbols").max(16,"Password is too long. The maximum 16 symbols").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"The must contain 6 characters, 1 uppercase, numbers, 1 special case character"),confirmPassword:o.Z_().required("Password confirmation is required!").oneOf([o.iH("password"),""],"Password confirmation must match")})}}]);
//# sourceMappingURL=516.00df2510.chunk.js.map