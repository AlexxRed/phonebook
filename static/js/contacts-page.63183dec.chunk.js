"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[141],{8369:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,o,i,a,c=t(2791),l=t(5705),d=t(8571),u=d.Ry().shape({name:d.Z_().required(),number:d.Rx().min(8).positive().required()}),s=t(168),p=t(2879),x=t(6915),h=(0,p.Z)(l.l0)(r||(r=(0,s.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 200px;\n  padding: 20px 20px 20px 20px;\n  border-radius: 10px; \n  border: 2px dotted #2778a7;\n"]))),m=p.Z.label(o||(o=(0,s.Z)(["\n  font-size: 18px;\n"]))),f=(0,p.Z)(l.gN)(i||(i=(0,s.Z)(["\n  margin-top: 5px;\n  margin-bottom: 20px;\n  padding: 10px;\n  background-color: #868d79;\n"]))),b=(0,p.Z)(x.Z)(a||(a=(0,s.Z)(["\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 5px 5px;\n  background-color: #1565c0;\n  color: white;\n  font-weight: 500;\n  &:hover,\n  &:focus {\n    background-color: #23647e;\n  }\n"]))),g=t(5264),Z=t(9434),w=t(3661),j=t(3871),v=t(184);var y,k,C,N,_,L,B,F,z,E,I=function(){var n=(0,Z.v9)(w.K2),e=(0,Z.I0)(),t=function(n){return g.Notify.info("".concat(n))};return(0,v.jsx)(l.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var o=t.name,i=t.number,a=r.resetForm,c={name:o,number:i};c.number.length<6?g.Notify.info("Phone number must be more than 6 numbers"):n.find((function(n){return n.name.toLowerCase()===c.name.toLowerCase()}))?g.Notify.info("Contact with this name already exists"):(e((0,j.MA)(c)),a())},validationSchema:u,children:(0,v.jsxs)(h,{autoComplete:"off",children:[(0,v.jsx)(m,{htmlFor:"name",children:"Name"}),(0,v.jsx)(f,{name:"name",type:"text",placeholder:"Enter name"}),(0,v.jsx)(l.Bc,{name:"name",render:t}),(0,v.jsx)(m,{htmlFor:"number",children:"Number"}),(0,v.jsx)(f,{name:"number",type:"tel",placeholder:"Enter phone number"}),(0,v.jsx)(l.Bc,{name:"number",render:t}),(0,v.jsx)(b,{type:"submit",children:"Add contact"})]})})},q=p.Z.label(y||(y=(0,s.Z)(["\n    display:block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 200px;\n    font-size: 18px;\n    display: flex;\n    flex-direction: column;\n"]))),A=p.Z.input(k||(k=(0,s.Z)(["\n        padding: 5px;\n        margin-top: 5px;\n        background-color: #749166;\n"]))),J=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(w.B8);return(0,v.jsxs)(q,{children:["Find contacts by name",(0,v.jsx)(A,{type:"text",value:e,onChange:function(e){""===e.target.value&&g.Notify.info("Who are you looking for?"),n((0,w.Tv)(e.target.value))}})]})},K=t(7247),M=t(8619),P=p.Z.ul(C||(C=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 450px;\n    padding-left: 0px;\n    border-radius: 5px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #8080809d;\n\n"]))),R=p.Z.div(N||(N=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    width: 300px;\n    padding: 15px;\n"]))),S=(0,p.Z)(M.Z)(_||(_=(0,s.Z)(["\n    display: block;\n    align-items: center;\n    fill: #1565c0;\n    width: 30px;\n    height: 30px;\n"]))),D=p.Z.li(L||(L=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 400px;\n    border-bottom: 1px dotted #2778a7;\n    /* &::before {\n        content: '';\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background-color: #1565c0;\n        margin-right: 15px;\n        margin-left: 30px;\n    } */\n"]))),T=(0,p.Z)(K.Z)(B||(B=(0,s.Z)(["\n    cursor: pointer;\n    margin-left: 15px;\n    border-radius: 3px;\n    padding: 5px 5px;\n    background-color: #133a66;\n    color: white;\n    font-weight: 500;\n    &:hover,\n    &:focus {\n        background-color: #bb4d1a;\n    }\n"]))),V=p.Z.span(F||(F=(0,s.Z)(["\n    display:block;\n    width: 300px;\n    color: #1e7716;\n    font-size: 24px;\n    font-weight: 500;\n"]))),W=p.Z.a(z||(z=(0,s.Z)(["\n    display:block;\n    width: 300px;\n"]))),G=(t(8865),function(){var n=(0,Z.I0)(),e=(0,Z.v9)(w.K2),t=(0,Z.v9)(w.B8);(0,c.useEffect)((function(){n((0,j.CL)())}),[n]);var r=(0,c.useMemo)((function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}),[e,t]);return(0,v.jsxs)(P,{children:[!1,0===r.length&&(0,v.jsx)("h3",{children:"...oops has no contacts :("}),r.map((function(e){var t=e.id,r=e.name,o=e.number,i=e.phone;return(0,v.jsxs)(D,{children:[(0,v.jsx)(S,{}),(0,v.jsxs)(R,{children:[(0,v.jsxs)(V,{children:[r,":"]}),(0,v.jsx)(W,{href:"tel:".concat(null!==o&&void 0!==o?o:i),children:null!==o&&void 0!==o?o:i})]}),(0,v.jsx)(T,{type:"button",onClick:function(){return function(e){n((0,j.cJ)(e))}(t)},children:"Delete"})]},t)}))]})}),H=p.Z.div(E||(E=(0,s.Z)(["\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align:center;\n"])));var O=function(){return(0,v.jsxs)(H,{children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(I,{}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(J,{}),(0,v.jsx)(G,{})]})}}}]);
//# sourceMappingURL=contacts-page.63183dec.chunk.js.map