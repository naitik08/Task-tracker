(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(7),i=n.n(o),s=(n(16),n(10)),d=n(5),l=n(2),j=(n(17),n(8)),u=n.n(j),b=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("button",{className:"btn",style:{backgroundColor:t},onClick:r,children:n})};b.defaultProps={color:"#000"};var h=b,O=function(e){var t=e.title,n=e.onAdd,r=e.changeBtn;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(h,{color:r?"green":"black",text:r?"Hide":"Show",onClick:n})]})};O.defaultProps={title:"Task Tracker"},O.protoTypes={title:u.a.string};var f=O,x=n(9),m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task "+(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(c.jsxs)("h3",{children:[t.text," ",Object(c.jsx)(x.a,{onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(m,{task:e,onDelete:n,onToggle:r},e.id)}))})},k=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(l.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(""),d=Object(l.a)(s,2),j=d[0],u=d[1],b=Object(r.useState)(!1),h=Object(l.a)(b,2),O=h[0],f=h[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),!o|!j?alert("Add task or day"):(t({text:o,day:j,reminder:O}),i(""),u(""),f(!1))},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Add Task"}),Object(c.jsx)("input",{type:"text",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Add task"})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Add Day and Time"}),Object(c.jsx)("input",{type:"text",value:j,onChange:function(e){return u(e.target.value)},placeholder:"Add day and time"})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{type:"checkbox",value:O,onChange:function(e){return f(e.currentTarget.checked)},checked:O})]}),Object(c.jsx)("input",{type:"submit",value:"Save",className:"btn btn-block"})]})};var p=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([{id:1,text:"Docter Appointment",day:"5 Feb 2021",reminder:!0},{id:2,text:"Meeting at Office",day:"12 Apr 2021",reminder:!1},{id:3,text:"Shopping",day:"3 March 2021",reminder:!0}]),i=Object(l.a)(o,2),j=i[0],u=i[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(f,{onAdd:function(){return a(!n)},changeBtn:n}),n&&Object(c.jsx)(k,{onAdd:function(e){var t=Math.floor(1e3*Math.random()+1),n=Object(d.a)({id:t},e);u([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(c.jsx)(g,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks"]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()}},[[20,1,2]]]);
//# sourceMappingURL=main.bf04398e.chunk.js.map