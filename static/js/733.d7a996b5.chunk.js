"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{3733:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,a,o,i,s,c,d,l,u,p,x,f,h=t(168),m=t(7691),b=m.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 3px;\n"]))),g=m.ZP.div(a||(a=(0,h.Z)(["\n  border-radius: 5px 50px 50px 5px;\n  padding: 20px;\n  box-shadow: inset 0px 0px 47px -6px rgb(0 0 0 / 55%);\n  width: 350px;\n  background-color: #dd5050cf;\n  margin-left: auto;\n  margin-top: 80px;\n"]))),v=m.ZP.div(o||(o=(0,h.Z)(["\n  position: relative;\n  border-radius: 50px 5px 5px 50px;\n  padding: 20px;\n  box-shadow: inset 0px 0px 47px -6px rgb(0 0 0 / 55%);\n  width: 350px;\n  background-color: #dd5050cf;\n  margin-right: auto;\n  margin-top: 80px;\n"]))),Z=m.ZP.div(i||(i=(0,h.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"]))),w=m.ZP.h1(s||(s=(0,h.Z)(["\n  font-size: 38px;\n  font-weight: 700;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #5a1010;\n"]))),j=t(3634),y=t(2791),P=t(9434),C=t(8402),k=function(n){return n.filter.filter},A=function(n){return n.contacts.contacts},z=function(n){return n.contacts.isLoading},L=function(n){return n.contacts.error},H=function(n){var e=A(n),t=k(n);return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},I=t(9439),R=t(5206),_=m.ZP.form(c||(c=(0,h.Z)(["\n  width: 270px;\n  padding: 15px;\n  border: 2px solid #f0bbae86;\n  border-radius: 5px;\n  box-shadow: 10px 10px 25px -4px rgba(0, 0, 0, 0.75);\n"]))),F=m.ZP.label(d||(d=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 15px;\n  font-weight: 700;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #5a1010;\n"]))),S=m.ZP.input(l||(l=(0,h.Z)(["\n  height: 20px;\n  border-radius: 3px;\n  border: none;\n  width: 220px;\n"]))),q=m.ZP.button(u||(u=(0,h.Z)(["\n  border-radius: 5px;\n  border: 2px solid #5a1010;\n  background-color: white;\n  width: 120px;\n  height: 25px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-left: auto;\n"]))),B=t(184),D=function(){var n=(0,y.useState)(""),e=(0,I.Z)(n,2),t=e[0],r=e[1],a=(0,y.useState)(""),o=(0,I.Z)(a,2),i=o[0],s=o[1],c=(0,P.I0)(),d=(0,P.v9)(A),l=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a)}},u=function(){r(""),s("")};return(0,B.jsxs)(_,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.name.value,t=n.target.elements.number.value;d.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?(0,R.Am)("".concat(e," is already exist in contacts"),{hideProgressBar:!0}):c((0,j.uK)({name:e,number:t})),u()},children:[(0,B.jsxs)(F,{children:["Name",(0,B.jsx)(S,{type:"text",name:"name",value:t,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,B.jsxs)(F,{children:["Phone number",(0,B.jsx)(S,{type:"tel",name:"number",value:i,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,B.jsx)(q,{type:"submit",disabled:!t||!i,children:"Add contact"})]})},K=m.ZP.li(p||(p=(0,h.Z)(["\n  display: flex;\n  gap: 35px;\n  align-items: center;\n"]))),N=m.ZP.p(x||(x=(0,h.Z)(["\n  font-weight: 500;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #3d0a0a;\n"]))),E=function(n){var e=n.name,t=n.id,r=n.number,a=(0,P.I0)();return(0,B.jsxs)(K,{children:[(0,B.jsxs)(N,{children:[e,": ",r]}),(0,B.jsx)(q,{type:"button",onClick:function(){return a((0,j.GK)(t))},children:"Delete"})]},t)},G=function(){var n=(0,P.v9)(H);return(0,B.jsx)("ul",{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,B.jsx)(E,{id:e,name:t,number:r},e)}))})},J=t(4808),M=m.ZP.label(f||(f=(0,h.Z)(["\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: 700;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  color: #5a1010;\n"]))),T=function(){var n=(0,P.I0)(),e=(0,P.v9)(k);return(0,B.jsxs)(M,{children:["Find contacts by name",(0,B.jsx)(S,{type:"text",name:"filter",value:e,onChange:function(e){n((0,J.l)(e.currentTarget.value))}})]})},$=function(){var n=(0,P.v9)(z),e=(0,P.v9)(L),t=(0,P.I0)();return(0,y.useEffect)((function(){t((0,j.yF)())}),[t]),(0,B.jsxs)(b,{children:[(0,B.jsxs)(g,{children:[(0,B.jsx)(w,{children:"Phonebook"}),(0,B.jsx)(D,{})]}),(0,B.jsxs)(v,{children:[(0,B.jsx)(w,{children:"Contacts"}),(0,B.jsx)(T,{}),n&&!e&&(0,B.jsx)(Z,{children:(0,B.jsx)(C.s5,{strokeColor:"#f0c5ae",width:"35"})}),(0,B.jsx)(G,{})]})]})}}}]);
//# sourceMappingURL=733.d7a996b5.chunk.js.map