(this.webpackJsonpcotizadorauto=this.webpackJsonpcotizadorauto||[]).push([[0],{15:function(e,a,t){e.exports=t(23)},20:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),l=(t(20),t(1)),i=t(2),u=t(4),s=t(3),m=t(5),p=function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,"Cotizador de Auto"))},f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).marcaRef=r.a.createRef(),t.yearRef=r.a.createRef(),t.planBasicoRef=r.a.createRef(),t.planCompletoRef=r.a.createRef(),t.planRef=r.a.createRef(),t.CotizadorSeguros=function(e){e.preventDefault();var a=t.planBasicoRef.current.checked?"basico":"completo",n={marca:t.marcaRef.current.value,year:t.yearRef.current.value,plan:a};t.props.cotizarSeguro(n),e.currentTarget.reset()},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"cotizar-auto",onSubmit:this.CotizadorSeguros},r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Marca"),r.a.createElement("select",{name:"marca",ref:this.marcaRef},r.a.createElement("option",{value:"americano"},"Americano"),r.a.createElement("option",{value:"europeo"},"Europeo"),r.a.createElement("option",{value:"asiatico"},"Asiatico"))),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"A\xf1o"),r.a.createElement("select",{name:"year",ref:this.yearRef},r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2015"},"2015"),r.a.createElement("option",{value:"2014"},"2014"),r.a.createElement("option",{value:"2013"},"2013"),r.a.createElement("option",{value:"2012"},"2012"),r.a.createElement("option",{value:"2011"},"2011"),r.a.createElement("option",{value:"2010"},"2010"),r.a.createElement("option",{value:"2009"},"2009"),r.a.createElement("option",{value:"2008"},"2008"))),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Plan:"),r.a.createElement("input",{type:"radio",ref:this.planBasicoRef,name:"plan",value:"basico"})," B\xe1sico",r.a.createElement("input",{type:"radio",ref:this.planCompletoRef,name:"plan",value:"completo"})," Completo"),r.a.createElement("button",{type:"submit",className:"boton"},"Cotizar"))}}]),a}(n.Component);function v(e){return(new Date).getFullYear()-e}function E(e){var a;switch(e){case"europeo":a=1.3;break;case"americano":a=1.15;break;case"asiatico":a=1.05}return a}function d(e){return"basico"===e?1.2:1.5}function h(e){return e.charAt(0).toUpperCase()+e.slice(1)}var b=t(26),y=t(25),j=function(e){function a(){return Object(l.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resultado,a=e?"El total es":"Elige marca, a\xf1o y tipo de seguro";return r.a.createElement("div",{className:"gran-total"},a,r.a.createElement(b.a,{componente:"span",className:"resultado"},r.a.createElement(y.a,{classNames:"resultado",key:e,timeout:{enter:700,exit:700}},r.a.createElement("span",null,e))))}}]),a}(n.Component),O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).mostrarResumen=function(){var e=t.props.datos,a=e.marca,n=e.year,o=e.plan;return a&&n&&o?r.a.createElement("div",{className:"resumen"},r.a.createElement("h2",null,"Resumen de Cotizaci\xf3n"),r.a.createElement("li",null,"Marca: ",h(a)),r.a.createElement("li",null,"Plan: ",h(o)),r.a.createElement("li",null,"A\xf1o: ",n)):null},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.mostrarResumen(),r.a.createElement(j,{resultado:this.props.resultado}))}}]),a}(n.Component),R=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={resultado:"",datos:{}},t.cotizarSeguro=function(e){console.log(e);var a=e.marca,n=e.plan,r=e.year,o=2e5;o-=3*v(r)*o/100,o=E(a)*o,o*=d(n);var c={marca:a,plan:n,year:r};t.setState({resultado:o,datos:c})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor"},r.a.createElement(p,null),r.a.createElement(f,{cotizarSeguro:this.cotizarSeguro}),r.a.createElement(O,{datos:this.state.datos,resultado:this.state.resultado}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.40004b6d.chunk.js.map