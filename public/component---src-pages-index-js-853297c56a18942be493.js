(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{ENlo:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=(a("ENlo"),a("V/Hs")),i=a.n(r),s=function(){var e=Object(n.useState)({submitting:!1,status:null}),t=e[0],a=e[1],r=function(e,t,n){a({submitting:!1,status:{ok:e,msg:t}}),e&&n.reset()};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target;a({submitting:!0}),fetch("/.netlify/functions/hello-world",{method:"POST",body:JSON.stringify({email:new FormData(t)})}).then((function(e){r(!0,"Thanks!",t)})).catch((function(e){r(!1,e.response.data.error,t)}))},style:{justifyContent:"center",display:"flex"}},l.a.createElement("div",{className:"form-group",style:{display:"contents"}},l.a.createElement("input",{style:{width:"60%",height:"20px",textIndent:"10px",border:"5px solid #f624af"},type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),l.a.createElement("button",{style:{fontFamily:"Courier",fontSize:"medium",height:"25px",overflow:"visible",zIndex:"10",marginLeft:"10px"},type:"submit",className:"btn btn-primary",disabled:t.submitting},l.a.createElement("b",null,l.a.createElement("u",null,"Submit")))),l.a.createElement("div",{style:{width:"100%"}},t.status&&l.a.createElement("p",{style:{fontFamily:"Courier"},className:t.status.ok?"":"errorMsg"},t.status.msg)))))};t.default=function(){return n.createElement("div",{className:"text-light",style:{width:"100%"}},n.createElement("div",{className:"hero"},n.createElement("p",{className:"intro"},n.createElement("i",null,"welcome to the")," "),n.createElement("h1",{className:"header"}," Make More Art Club!    ",n.createElement("img",{style:{height:"3rem",marginLeft:"auto",marginRight:"auto"},src:i.a})),n.createElement("p",{className:"subheader"},n.createElement("i",null,"// A prompt a day to create for creation's sake.")," "),n.createElement(s,null)))}},"V/Hs":function(e,t,a){e.exports=a.p+"static/party-a973c4b429f2142c1ff559574c4018e4.gif"}}]);
//# sourceMappingURL=component---src-pages-index-js-853297c56a18942be493.js.map