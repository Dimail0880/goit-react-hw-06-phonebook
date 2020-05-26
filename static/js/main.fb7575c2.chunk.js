(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={enter:"slide_enter__-FaUU",enterActive:"slide_enterActive__JI3df",exit:"slide_exit__h4C50",exitActive:"slide_exitActive__2pQji"}},20:function(e,t,n){e.exports={wrapper:"ContactListItem_wrapper__3SVCI",deleteBtn:"ContactListItem_deleteBtn__1xaXe"}},21:function(e,t,n){e.exports={list:"list_list__kFxa5",item:"list_item__1y5L-"}},28:function(e,t,n){e.exports={enter:"pop_enter__3RC9n",enterActive:"pop_enterActive__1BSx7",exit:"pop_exit__2CeG_",exitActive:"pop_exitActive__XIlah"}},29:function(e,t,n){e.exports={wrapper:"ContactsFilter_wrapper__3xf4W"}},32:function(e,t,n){e.exports=n(47)},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(5),s=n.n(o),i=n(14),m=n(4),l=n(6),u=n(30),p=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}},d=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},b=Object(m.b)("item/add"),f=Object(m.b)("item/delete"),h=Object(m.b)("contacts/filter",(function(e){return{payload:e.target.value}})),_=[],E=d("contacts");E&&(_=E);var v={contacts:Object(m.c)(_,(a={},Object(l.a)(a,b,(function(e,t){return[].concat(Object(u.a)(e),[t.payload])})),Object(l.a)(a,f,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),filter:Object(m.c)("",Object(l.a)({},h,(function(e,t){return t.payload})))},O=Object(m.a)({reducer:v,devTools:!1}),g=n(12),x=n(13),N=n(16),y=n(15),C=n(7),j=n.n(C),w=n(27),S=n(48),F=n(28),I=n.n(F),k=function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",isError:!1,errorMessage:""},e.handleNameChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.handleNumberChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.pushError=function(t){e.setState({isError:!0,errorMessage:"".concat(t)}),setTimeout((function(){e.setState({isError:!1})}),2500)},e.handleSubmit=function(t){t.preventDefault();var n={id:Object(w.v4)(),name:e.state.name,number:e.state.number},a=e.state.name,r=Number(e.state.number);e.props.contacts.find((function(t){return t.name===e.state.name}))?e.pushError("".concat(a," is already in contacts.")):r||""!==a?r?a.length?Number(a)?e.pushError("Please, enter a correct name - NOT A NUMBER"):(e.props.addItem(n),e.setState({name:"",number:"",isError:!1,errorMessage:""})):e.pushError("Please, enter a name"):e.pushError("Please, enter a correct number"):e.pushError("Please, enter name and number, your input is empty")},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.isError,r=e.errorMessage;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:j.a.form},c.a.createElement(S.a,{in:a,classNames:I.a,timeout:{enter:2500,exit:500},mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("p",{className:j.a.errorMessage},r)),c.a.createElement("p",{className:j.a.name},"Name:"),c.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleNameChange,className:j.a.input}),c.a.createElement("p",{className:j.a.name},"Number:"),c.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleNumberChange,className:j.a.input}),c.a.createElement("button",{className:j.a.button,disabled:!t||!n,type:"submit"},"Add contact"))}}]),n}(r.Component),A=n(20),M=n.n(A),L=function(e){var t=e.contact,n=e.name,a=e.number,r=e.deleteContact;return c.a.createElement("li",{className:M.a.wrapper},n,": ",a,c.a.createElement("button",{className:M.a.deleteBtn,onClick:function(){return r(t.id)}},"\ud83d\udfab"))},B=n(49),J=n(21),P=n.n(J),D=n(10),U=n.n(D),T=function(e){var t=e.contactList,n=e.deleteContact;return c.a.createElement(B.a,{component:"ul",className:P.a.list},t.map((function(e){return c.a.createElement(S.a,{key:e.id,classNames:U.a,timeout:500,mountOnEnter:!0,unmountOnExit:!0},c.a.createElement(L,{name:e.name,number:e.number,deleteContact:n,contact:e,className:P.a.item}))})).reverse())},R=n(29),V=n.n(R),W=function(e){var t=e.handleFilter;return c.a.createElement("form",{className:V.a.wrapper},c.a.createElement("p",null,"Find contact by name"),c.a.createElement("input",{type:"text",onChange:t}))},X=(n(44),function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.setState({didMount:!0})}},{key:"componentDidUpdate",value:function(e,t){p("contacts",this.props.contacts)}},{key:"render",value:function(){var e=this.state.didMount,t=this.props,n=t.contacts,a=t.filter,r=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,{in:e,classNames:U.a,timeout:{enter:500,exit:500},mountOnEnter:!0},c.a.createElement("h2",{className:"title-phonebook"},"Phonebook")),c.a.createElement(k,{contacts:n,addItem:this.props.addItem}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(S.a,{in:n.length>=2,classNames:U.a,timeout:{enter:500,exit:500},mountOnEnter:!0,unmountOnExit:!0},c.a.createElement(W,{handleFilter:this.props.filterContacts})),c.a.createElement(T,{contactList:r,deleteContact:this.props.deleteItem}))}}]),n}(r.Component)),z={addItem:b,deleteItem:f,filterContacts:h},G=Object(i.b)((function(e,t){return{contacts:e.contacts,filter:e.filter}}),z)(X),Q=(n(45),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(G,null))});n(46);s.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{store:O},c.a.createElement(Q,null))),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"Form_form__2z26W",name:"Form_name__3Ssio",input:"Form_input__2xarV",button:"Form_button__1Y0bx",errorMessage:"Form_errorMessage__8tOcD"}}},[[32,1,2]]]);
//# sourceMappingURL=main.fb7575c2.chunk.js.map