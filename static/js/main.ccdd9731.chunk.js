(this["webpackJsonpswitcher-qa-sample"]=this["webpackJsonpswitcher-qa-sample"]||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(6),r=t.n(i),s=(t(13),t(14),t(3)),o=t(2),l=t(1),m=t(4),u=t.n(m),d=t(7),p=["education","recreational","social","diy","charity","cooking","relaxation","music","busywork"];var v=function(e){var a=e.data,t=e.idx,i=e.save,r=Object(c.useState)(a),s=Object(l.a)(r,2),m=s[0],v=s[1],y=function(){var e=Object(d.a)(u.a.mark((function e(){var a,c,n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.boredapi.com/api/activity?type=cooking");case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,n=c.activity,r=c.price,s=c.accessibility,v((function(e){var a=Object(o.a)({},e,{activity:n,price:r,accessibility:s});return i(t,a),a}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text text-muted"},t),n.a.createElement("h5",{className:"card-title"},m.name),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},m.email),n.a.createElement("div",{className:"form-group row justify-content-center"},n.a.createElement("select",{className:"form-control col-sm-6",value:m.type,id:"activity-type-select-".concat(m.id),onChange:function(e){e.persist(),v((function(a){return Object(o.a)({},a,{type:e.target.value})}))}},p.map((function(e,a){return n.a.createElement("option",{key:a,value:e},e)})))),n.a.createElement("p",{className:"card-text lead"},m.activity),n.a.createElement("p",{className:"card-text"},"Difficulty: ",10*m.accessibility," / 10"),n.a.createElement("p",{className:"card-text"},"Cost: ",m.price," / 10"),n.a.createElement("button",{className:"btn btn-success",onClick:y},"Get New Idea")))},y=(t(16),JSON.parse(localStorage.getItem("switcher-qa:friends")));y||(y={1:{name:"Boromir Williams",email:"neednoking23@yahoo.com",activity:"Watch a classic movie",price:.1,accessibility:.1,type:"recreational"},2:{name:"Samwise Johnson",email:"samheartspotatoes@gmail.com",activity:"Learn how to iceskate or rollerskate",price:.1,accessibility:.25,type:"recreational"},3:{name:"Frodo Stone",email:"ringerbearer42@gmail.com",activity:"Learn to play a new instrument",type:"music",price:.55,accessibility:.6},4:{name:"Galadriel Bogart",email:"gbogart@gmail.com",activity:"Repaint a room in your house",type:"recreational",price:.3,accessibility:.4}});var b=Object.entries(y).sort((function(e,a){var t=Object(l.a)(e,2)[1],c=Object(l.a)(a,2)[1];return t.name.localeCompare(c.name)})).reduce((function(e,a){var t=Object(l.a)(a,2),c=t[0],n=t[1];return Object(o.a)({},e,Object(s.a)({},c,n))}),{});var f=function(){var e=function(e,a){b[e]={name:a.name,email:a.email,activity:a.activity,price:a.price,accessibility:a.accessibility},localStorage.setItem("switcher-qa:friends",JSON.stringify(b))};return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"navbar navbar-dark bg-dark box-shadow"},n.a.createElement("span",{className:"navbar-brand d-flex align-items-center"},n.a.createElement("strong",null,"Activity Ideas"))),n.a.createElement("div",{className:"container pt-4"},n.a.createElement("div",{className:"card-container mb-4"},Object.entries(b).map((function(a){var t=Object(l.a)(a,2),c=t[0],i=t[1];return n.a.createElement(v,{key:"friend-".concat(c),data:i,idx:c,save:e})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.ccdd9731.chunk.js.map