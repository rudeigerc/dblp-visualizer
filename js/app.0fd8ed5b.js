(function(t){function e(e){for(var r,o,l=e[0],u=e[1],s=e[2],d=0,f=[];d<l.length;d++)o=l[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={1:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dblp-visualizer/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=u;i.push([3,0]),n()})({3:function(t,e,n){t.exports=n("Vtdi")},AW0C:function(t,e,n){"use strict";var r=n("ky5l"),a=n.n(r);a.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),a=n("XJYT"),i=n.n(a),o=n("stYL"),l=n.n(o),u=(n("D66Q"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",[n("el-menu",{staticClass:"el-menu",attrs:{"default-active":t.activeIndex,mode:"horizontal",router:""},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"/author"}},[t._v("Author")]),n("el-menu-item",{attrs:{index:"/article"}},[t._v("Article")]),n("el-menu-item",{attrs:{index:"/relationship"}},[t._v("Relationship")])],1)],1),n("el-main",[n("router-view")],1),n("el-footer",[n("p",{attrs:{id:"footer"}},[t._v("Copyright © 2018 Yuchen Cheng. All Rights Reserved.")])])],1)],1)}),s=[],c={name:"App",data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},d=c,f=(n("nNx0"),n("KHd+")),h=Object(f["a"])(d,u,s,!1,null,null,null),p=h.exports,g=n("jE9Z"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"1280",height:"600"}})},v=[],x=(n("tUrg"),n("f3/d"),n("VphZ")),y=n("vDqi"),b=n.n(y),k={name:"Author",data:function(){return{graph:{},simulation:null,link:null,node:null}},mounted:function(){var t=this,e=x["h"]("svg"),n=+e.attr("width"),r=+e.attr("height"),a=x["g"]().range(["red","green","blue","#6b486b","#a05d56","#d0743c","#ff8c00"]);this.simulation=x["f"]().force("link",x["d"]().id(function(t){return t.id}).distance(100)).force("charge",x["e"]()).force("center",x["c"](n/2,r/2)),b.a.get("data.json").then(function(e){t.graph=e.data}).then(function(n){t.link=e.append("g").attr("class","links").selectAll("line").data(t.graph.links).enter().append("line").attr("stroke-width",function(t){return Math.sqrt(t.value)}),t.node=e.append("g").attr("class","nodes").selectAll("node").data(t.graph.nodes).enter().append("g").attr("class","node").call(x["a"]().on("start",t.dragstarted).on("drag",t.dragged).on("end",t.dragended)),t.node.append("circle").attr("r",5).attr("fill",function(t){return a(t.group)}),t.node.append("title").text(function(t){return t.name}),t.node.append("text").attr("x",12).attr("dy",".35em").text(function(t){return t.name}),t.simulation.nodes(t.graph.nodes).on("tick",t.ticked),t.simulation.force("link").links(t.graph.links)})},methods:{ticked:function(){this.link.attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}),this.node.attr("transform",function(t){return"translate("+t.x+","+t.y+")"})},dragstarted:function(t){x["b"].active||this.simulation.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y},dragged:function(t){t.fx=x["b"].x,t.fy=x["b"].y},dragended:function(t){x["b"].active||this.simulation.alphaTarget(0),t.fx=null,t.fy=null}}},w=k,_=(n("AW0C"),Object(f["a"])(w,m,v,!1,null,null,null)),j=_.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container")},A=[],S={name:"Article"},I=S,T=Object(f["a"])(I,O,A,!1,null,null,null),C=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("el-row",[n("el-col",{attrs:{span:5}},[n("el-autocomplete",{attrs:{placeholder:"Author","fetch-suggestions":t.querySearchAsync,clearable:""},model:{value:t.authorId,callback:function(e){t.authorId=e},expression:"authorId"}})],1),n("el-col",{attrs:{span:1}},[n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-search",circle:""},on:{click:t.generate}})],1)],1)],1),n("el-main",[n("svg",{attrs:{width:"1280",height:"540"}})])],1)},M=[],q=(n("a1Th"),n("rGqo"),n("yt8O"),n("RW0V"),{name:"Relationship",data:function(){return{data:{},authorIds:[],authorId:null,timeout:null,graph:{},simulation:null,link:null,node:null}},mounted:function(){var t=this;b.a.get("test.json").then(function(e){t.data=e.data,t.authorIds=Object.keys(e.data).map(function(t){return{value:t}})})},methods:{querySearchAsync:function(t,e){var n=t&&t.length>=4?this.authorIds.filter(this.createStateFilter(t)):[];console.log(n),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e(n)},1e3*Math.random())},createStateFilter:function(t){return function(e){return 0===e.value.toString().indexOf(t)}},generate:function(){x["i"]("svg > *").remove(),this.graph=this.data[parseInt(this.authorId)];var t=x["h"]("svg"),e=+t.attr("width"),n=+t.attr("height"),r=x["g"]().range(["red","green","blue","#6b486b","#a05d56","#d0743c","#ff8c00"]);this.simulation=x["f"]().force("link",x["d"]().id(function(t){return t.id}).distance(100)).force("charge",x["e"]()).force("center",x["c"](e/2,n/2)),this.link=t.append("g").attr("class","links").selectAll("line").data(this.graph.links).enter().append("line").attr("stroke-width",function(t){return Math.sqrt(t.value)}),this.node=t.append("g").attr("class","nodes").selectAll("node").data(this.graph.nodes).enter().append("g").attr("class","node").call(x["a"]().on("start",this.dragstarted).on("drag",this.dragged).on("end",this.dragended)),this.node.append("circle").attr("r",5).attr("fill",function(t){return r(t.group)}),this.node.append("title").text(function(t){return t.name}),this.node.append("text").attr("x",12).attr("dy",".35em").text(function(t){return t.name}),this.simulation.nodes(this.graph.nodes).on("tick",this.ticked),this.simulation.force("link").links(this.graph.links)},ticked:function(){this.link.attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}),this.node.attr("transform",function(t){return"translate("+t.x+","+t.y+")"})},dragstarted:function(t){x["b"].active||this.simulation.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y},dragged:function(t){t.fx=x["b"].x,t.fy=x["b"].y},dragended:function(t){x["b"].active||this.simulation.alphaTarget(0),t.fx=null,t.fy=null}}}),P=q,R=Object(f["a"])(P,E,M,!1,null,null,null),V=R.exports;r["default"].use(g["a"]);var W=new g["a"]({routes:[{path:"/author",name:"author",component:j},{path:"/article",name:"ariticle",component:C},{path:"/relationship",name:"relationship",component:V}]});r["default"].config.productionTip=!1,r["default"].use(i.a,{locale:l.a}),new r["default"]({router:W,render:function(t){return t(p)}}).$mount("#app")},ky5l:function(t,e,n){},nNx0:function(t,e,n){"use strict";var r=n("uWEC"),a=n.n(r);a.a},uWEC:function(t,e,n){}});
//# sourceMappingURL=app.0fd8ed5b.js.map