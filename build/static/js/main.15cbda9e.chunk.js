(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{59:function(e,a,t){e.exports=t(70)},64:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),c=t.n(i),l=(t(64),t(36)),m=t.n(l),o=t(43),s=t(31),d=t(20),u=t(44),p=t(45),h=t(52),E=t(104),f=t(108),w=t(109),g=t(110),v=t(120),b=t(122),y=t(112),k=t(114),j=t(115),O=t(116),x=t(121),U=t(113),C=t(117),D=t(118),I=t(119),S=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={data:{},item:{weather:"",temperature:"",icon:"",pressure:"",speed:""},placeName:""},t.apiToken="60a35d514f8f55678203c4b633f16fb1",t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"getData",value:function(){var e=Object(o.a)(m.a.mark((function e(a){var t,n,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e,a){return window.fetch(e,a).then((function(e){return e.json()})).then((function(e){return{weather:e.weather[0].description,icon:e.weather[0].icon,temperature:e.main.temp,pressure:e.main.pressure,speed:e.wind.speed}}))},n={method:"get"},"https://api.openweathermap.org/data/2.5/weather?lang=ja&units=metric",r="&appid=".concat(this.apiToken,"&id=").concat(a),e.next=6,t("https://api.openweathermap.org/data/2.5/weather?lang=ja&units=metric"+r,n);case 6:i=e.sent,this.setState({item:i});case 8:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleUpdate",value:function(e){var a=e.target.dataset.optionIndex,t=this.state.data[a];this.getData(t.id),this.setState({placeName:t.name})}},{key:"componentDidMount",value:function(){this.setState({data:[{name:"\u5317\u6d77\u9053 \u672d\u5e4c\u5e02",id:2128295},{name:"\u6771\u4eac \u6771\u4eac\u90fd",id:1850147},{name:"\u6803\u6728 \u65e5\u5149\u5e02",id:1855395},{name:"\u795e\u5948\u5ddd \u938c\u5009\u5e02",id:1860672},{name:"\u5927\u962a \u5927\u962a\u5e9c",id:1853909},{name:"\u4eac\u90fd \u4eac\u90fd\u5e9c",id:1857910},{name:"\u5948\u826f \u5948\u826f\u5e02",id:1855612},{name:"\u611b\u77e5 \u540d\u53e4\u5c4b\u5e02",id:1856057},{name:"\u5175\u5eab\u770c \u59eb\u8def\u5e02",id:1862627},{name:"\u5e83\u5cf6 \u5e83\u5cf6\u5e02",id:1862415},{name:"\u798f\u5ca1 \u798f\u5ca1\u5e02",id:1863967},{name:"\u6c96\u7e04 \u90a3\u8987\u5e02",id:1894616},{name:"\u30cb\u30e5\u30fc\u30e8\u30fc\u30af",id:5128581},{name:"\u30ed\u30b5\u30f3\u30bc\u30eb\u30b9",id:5368361},{name:"\u30b7\u30a2\u30c8\u30eb",id:5809844},{name:"\u30ed\u30f3\u30c9\u30f3",id:2643741},{name:"\u30db\u30ce\u30eb\u30eb",id:5856195},{name:"\u30b9\u30c8\u30c3\u30af\u30db\u30eb\u30e0",id:2673730},{name:"\u30a4\u30b9\u30bf\u30f3\u30d6\u30fc\u30eb",id:745042},{name:"\u30df\u30e9\u30ce",id:3173435},{name:"\u30d0\u30eb\u30bb\u30ed\u30ca",id:3128760},{name:"\u30de\u30c9\u30ea\u30fc\u30c9",id:3117735},{name:"\u30d1\u30ea",id:2988507},{name:"\u30c9\u30d0\u30a4",id:292223},{name:"\u30de\u30e9\u30b1\u30c3\u30b7\u30e5",id:2542997},{name:"\u30b7\u30c9\u30cb\u30fc",id:2147714},{name:"\u9999\u6e2f",id:1819729},{name:"\u53f0\u5317",id:1668341}]})}},{key:"render",value:function(){return console.log(this.state),r.a.createElement(E.a,null,r.a.createElement("div",{class:"Card"},r.a.createElement(f.a,{title:"\u4eba\u6c17\u90fd\u5e02\u5929\u6c17"})),r.a.createElement(w.a,null,r.a.createElement(W,{data:this.state.data,handleUpdate:this.handleUpdate.bind(this)})),r.a.createElement(g.a,null,r.a.createElement(B,{item:this.state.item})))}}]),a}(r.a.Component),W=function(e){return r.a.createElement(x.a,{options:e.data,getOptionLabel:function(e){return e.name},renderInput:function(e){return r.a.createElement(v.a,Object.assign({},e,{label:"\u5730\u57df\u3092\u9078\u3093\u3067\u306d",variant:"outlined",style:{width:300},fullWidth:!0}))},onChange:e.handleUpdate})},B=function(e){var a=e.item,t=a.weather,n=a.icon,i=a.temperature,c=a.pressure,l=a.speed,m=i?"\u6c17\u6e29 ".concat(i,"\u2103"):"",o=c?"\u6c17\u5727 ".concat(c,"hap"):"",s=l?"\u98a8\u901f ".concat(l,"m/s"):"",d="http://openweathermap.org/img/wn/".concat(n,".png"),u=n?r.a.createElement(b.a,{src:d,alt:t}):r.a.createElement(U.a,null);return console.log("props",e),r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement(j.a,null,u),r.a.createElement(O.a,{primary:t})),r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(C.a,null)),r.a.createElement(O.a,{primary:m})),r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(D.a,null)),r.a.createElement(O.a,{primary:o})),r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(I.a,null)),r.a.createElement(O.a,{primary:s})))},J=S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.15cbda9e.chunk.js.map