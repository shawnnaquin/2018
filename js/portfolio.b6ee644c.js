(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio"],{1169:function(t,e,r){var n=r("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"11e9":function(t,e,r){var n=r("52a7"),o=r("4630"),i=r("6821"),s=r("6a99"),a=r("69a8"),c=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=i(t),e=s(e,!0),c)try{return u(t,e)}catch(r){}if(a(t,e))return o(!n.f.call(t,e),t[e])}},2811:function(t,e,r){"use strict";var n=r("ec09"),o=r.n(n);o.a},"37c8":function(t,e,r){e.f=r("2b4c")},"3a72":function(t,e,r){var n=r("7726"),o=r("8378"),i=r("2d00"),s=r("37c8"),a=r("86cc").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:s.f(t)})}},"4c21":function(t,e,r){},"57f4":function(t,e,r){"use strict";var n=function(){var t,e=this,r=e.$createElement,n=e._self._c||r;return n("figure",[n("transition",{attrs:{name:"fade",appear:""}},[e.showLoader?n("p",{class:"loader",style:{color:e.$route.params.image?"white":""}},[e._v("Loading "),n("span",[n("Loader",{attrs:{go:e.showLoader}})],1)]):e._e()]),n("picture",[n("source",{attrs:{media:"(min-width: 900px)",srcset:e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-lg_1x.webp 1x, "+e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-lg_2x.webp 2x",type:"image/webp"}}),n("source",{attrs:{media:"(min-width: 601px)",srcset:e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-md_1x.webp 1x, "+e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-md_2x.webp 2x",type:"image/webp"}}),n("source",{attrs:{srcset:e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-sm_1x.webp 1x, "+e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-sm_2x.webp 2x",type:"image/webp"}}),n("v-lazy-image",{attrs:{src:e.imgSrc,srcset:e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-sm_1x.jpg 600w, "+e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-md_1x.jpg 900w, "+e.process.env.BASE_URL+"img/portfolio/"+e.type+"/"+e.path+"-lg_1x.jpg 1440w",type:"image/jpeg",alt:e.alt},on:{load:e.setShowLoader}})],1),n("figcaption",{class:["figcaption",(t={},t["blur"]=e.showLoader,t)]},[e._t("default")],2)],1)},o=[],i=(r("cadf"),r("551c"),r("097d"),r("555f")),s={components:{Loader:i["a"]},data:function(){return{showLoader:!0}},computed:{imgSrc:function(){return"".concat("/","img/portfolio/").concat(this.type,"/").concat(this.path,"-lg_1x.jpg")}},methods:{setShowLoader:function(){this.showLoader=!1}},props:{path:{required:!0,type:String},type:{required:!0,type:String},alt:{required:!0,type:String}}},a=s,c=(r("b29e"),r("2877")),u=Object(c["a"])(a,n,o,!1,null,"36711d9e",null);u.options.__file="Picture.vue";e["a"]=u.exports},5974:function(t,e,r){"use strict";var n=r("4c21"),o=r.n(n);o.a},"650f":function(t,e,r){},"67ab":function(t,e,r){var n=r("ca5a")("meta"),o=r("d3f4"),i=r("69a8"),s=r("86cc").f,a=0,c=Object.isExtensible||function(){return!0},u=!r("79e5")(function(){return c(Object.preventExtensions({}))}),p=function(t){s(t,n,{value:{i:"O"+ ++a,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,n)){if(!c(t))return"F";if(!e)return"E";p(t)}return t[n].i},l=function(t,e){if(!i(t,n)){if(!c(t))return!0;if(!e)return!1;p(t)}return t[n].w},h=function(t){return u&&y.NEED&&c(t)&&!i(t,n)&&p(t),t},y=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:l,onFreeze:h}},"7bbc":function(t,e,r){var n=r("6821"),o=r("9093").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"8a81":function(t,e,r){"use strict";var n=r("7726"),o=r("69a8"),i=r("9e1e"),s=r("5ca1"),a=r("2aba"),c=r("67ab").KEY,u=r("79e5"),p=r("5537"),f=r("7f20"),l=r("ca5a"),h=r("2b4c"),y=r("37c8"),d=r("3a72"),m=r("d4c0"),v=r("1169"),g=r("cb7c"),b=r("d3f4"),w=r("6821"),j=r("6a99"),_=r("4630"),x=r("2aeb"),S=r("7bbc"),O=r("11e9"),L=r("86cc"),k=r("0d58"),E=O.f,$=L.f,T=S.f,A=n.Symbol,P=n.JSON,B=P&&P.stringify,D="prototype",I=h("_hidden"),R=h("toPrimitive"),F={}.propertyIsEnumerable,K=p("symbol-registry"),N=p("symbols"),U=p("op-symbols"),C=Object[D],q="function"==typeof A,J=n.QObject,z=!J||!J[D]||!J[D].findChild,W=i&&u(function(){return 7!=x($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=E(C,e);n&&delete C[e],$(t,e,r),n&&t!==C&&$(C,e,n)}:$,G=function(t){var e=N[t]=x(A[D]);return e._k=t,e},M=q&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},Y=function(t,e,r){return t===C&&Y(U,e,r),g(t),e=j(e,!0),g(r),o(N,e)?(r.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),r=x(r,{enumerable:_(0,!1)})):(o(t,I)||$(t,I,_(1,{})),t[I][e]=!0),W(t,e,r)):$(t,e,r)},Q=function(t,e){g(t);var r,n=m(e=w(e)),o=0,i=n.length;while(i>o)Y(t,r=n[o++],e[r]);return t},H=function(t,e){return void 0===e?x(t):Q(x(t),e)},V=function(t){var e=F.call(this,t=j(t,!0));return!(this===C&&o(N,t)&&!o(U,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,I)&&this[I][t])||e)},X=function(t,e){if(t=w(t),e=j(e,!0),t!==C||!o(N,e)||o(U,e)){var r=E(t,e);return!r||!o(N,e)||o(t,I)&&t[I][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=T(w(t)),n=[],i=0;while(r.length>i)o(N,e=r[i++])||e==I||e==c||n.push(e);return n},tt=function(t){var e,r=t===C,n=T(r?U:w(t)),i=[],s=0;while(n.length>s)!o(N,e=n[s++])||r&&!o(C,e)||i.push(N[e]);return i};q||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(r){this===C&&e.call(U,r),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),W(this,t,_(1,r))};return i&&z&&W(C,t,{configurable:!0,set:e}),G(t)},a(A[D],"toString",function(){return this._k}),O.f=X,L.f=Y,r("9093").f=S.f=Z,r("52a7").f=V,r("2621").f=tt,i&&!r("2d00")&&a(C,"propertyIsEnumerable",V,!0),y.f=function(t){return G(h(t))}),s(s.G+s.W+s.F*!q,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)h(et[rt++]);for(var nt=k(h.store),ot=0;nt.length>ot;)d(nt[ot++]);s(s.S+s.F*!q,"Symbol",{for:function(t){return o(K,t+="")?K[t]:K[t]=A(t)},keyFor:function(t){if(!M(t))throw TypeError(t+" is not a symbol!");for(var e in K)if(K[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),s(s.S+s.F*!q,"Object",{create:H,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),P&&s(s.S+s.F*(!q||u(function(){var t=A();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(r=e=n[1],(b(e)||void 0!==t)&&!M(t))return v(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!M(e))return e}),n[1]=e,B.apply(P,n)}}),A[D][R]||r("32e9")(A[D],R,A[D].valueOf),f(A,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},9093:function(t,e,r){var n=r("ce10"),o=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},ac4d:function(t,e,r){r("3a72")("asyncIterator")},b29e:function(t,e,r){"use strict";var n=r("650f"),o=r.n(n);o.a},c9e5:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["max-width"],staticStyle:{overflow:"hidden"}},[r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[t.type?r("h1",{key:t.type,staticClass:"push"},[t._v("\n\t\t\t"+t._s(t.getTrueCaps(t.type))+" Projects\n\t\t\t"),r("transition",{attrs:{name:"fade"}},[t.projects?t._e():r("span",[t._v("\n\t\t\t\t\t…\n\t\t\t\t")])])],1):t._e()]),r("div",{staticStyle:{position:"relative"}},[r("transition",{attrs:{name:"fade",appear:""}},[t.projects?t._e():r("p",{key:t.type,class:["loading"]},[t._v("LOADING "),r("Loader",{attrs:{go:!t.projects}})],1)]),r("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{afterEnter:t.pageAfterEnter}},[t.projects?r("div",{key:t.type,ref:"portfolio",class:["portfolio",t.direction]},t._l(t.projects,function(e,n){return r("router-link",{class:["link",e.link],style:{transitionDelay:String(50*t.getIndex(e.link))+"ms"},attrs:{to:"/"+t.getType(e.link)+"/"+e.link,"data-name":e.link}},[r("div",{class:["main-description"]},[r("h3",[t._v(t._s(e.title))]),r("small",[t._v(t._s(e.projectDescription))])]),r("div",{class:"image"},[r("picture-query",{attrs:{type:t.getType(e.link),path:e.mainImage.path,alt:e.mainImage.alt}},[r("h3",[t._v(t._s(e.mainImage.alt))]),r("p",[t._v(t._s(e.mainImage.caption))])])],1)])})):t._e()])],1),r("transition",{attrs:{name:"fade",appear:""}},[t.showButtons?r("div",{key:t.showButtons,class:["buttons"]},[r("router-link",{class:["external"],attrs:{to:"/"+t.prevType},nativeOn:{click:function(e){t.setDirection("left")}}},[t._v("\n\t\t\t\t<\n\t\t\t")]),r("router-link",{class:["external"],attrs:{to:"/"+t.nextType},nativeOn:{click:function(e){t.setDirection("right")}}},[t._v("\n\t\t\t\t>\n\t\t\t")])],1):t._e()])],1)},o=[],i=(r("456d"),r("ac4d"),r("8a81"),r("ac6a"),r("be94")),s=(r("cadf"),r("551c"),r("097d"),r("2f62")),a=r("555f"),c=r("57f4"),u=r("e886"),p=r("f7ad"),f={components:{Loader:a["a"],"picture-query":c["a"]},data:function(){return{direction:"",showButtons:!1}},computed:Object(i["a"])({},Object(s["b"])({getLoading:"getLoading",types:"getTypes",getTrans:"getTrans"}),{typeKey:function(){var t=this.types.indexOf(this.$route.params.type);return-1===t&&(t=0),t},nextTypeKey:function(){return(1+this.typeKey)%this.types.length},prevTypeKey:function(){var t=this.typeKey-1;return t<0&&(t=this.types.length-1),t},prevType:function(){return this.types[this.prevTypeKey]},nextType:function(){return this.types[this.nextTypeKey]}}),beforeRouteUpdate:function(t,e,r){this.showButtons=!1,r()},beforeRouteLeave:function(t,e,r){this.direction="",this.showButtons=!1;var n=0,o=!0,i=!1,s=void 0;try{for(var a,c=this.$refs.portfolio.children[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var u=a.value;u.style.transition="opacity 200ms ease-out",u.style.transitionDelay=50*n+"ms",u.getAttribute("data-name")!=t.params.project&&(u.style.opacity=0),n++}}catch(p){i=!0,s=p}finally{try{o||null==c.return||c.return()}finally{if(i)throw s}}setTimeout(function(){r()},50*n+100)},mixins:[u["a"],p["a"]],mounted:function(){this.showButtons=!0},watch:{$route:function(t,e){this.setProjects(t.params.type)},projects:function(t){var e=this.typeKey-1;e<0&&(e=this.types.length-1)}},methods:{pageAfterEnter:function(t){this.direction="",this.showButtons=!0,this.$scrollTo(":root")},getTrueCaps:function(t){if(Object.keys(this.projects).length){for(var e=this.projects[Object.keys(this.projects)[0]].content["techList"],r=null,n=0;n<e.length;n++)if(t.toLocaleLowerCase()==e[n].toLocaleLowerCase())return e[n];return null===r?t:void 0}},setDirection:function(t){this.direction=t},getIndex:function(t){return Object.keys(this.projects).indexOf(t)}}},l=f,h=(r("5974"),r("2811"),r("2877")),y=Object(h["a"])(l,n,o,!1,null,"2b9bf958",null);y.options.__file="Portfolio.vue";e["default"]=y.exports},d4c0:function(t,e,r){var n=r("0d58"),o=r("2621"),i=r("52a7");t.exports=function(t){var e=n(t),r=o.f;if(r){var s,a=r(t),c=i.f,u=0;while(a.length>u)c.call(t,s=a[u++])&&e.push(s)}return e}},e886:function(t,e,r){"use strict";r("c0d6");e["a"]={data:function(){return{frame:!1}},beforeDestroy:function(){cancelAnimationFrame(this.frame)},methods:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){var r=this,n=200*t.dataset.index;setTimeout(function(){var e=0,n=r.frame=requestAnimationFrame(o);function o(){if(!(t.style.opacity<1))return cancelAnimationFrame(n),void(t.style.opacity=1);requestAnimationFrame(o),t.style.opacity=e+=.08}},n)},leave:function(t,e){}}}},ec09:function(t,e,r){},f7ad:function(t,e,r){"use strict";r("a481"),r("7f7f"),r("ac6a"),r("456d"),r("6762"),r("2fdb");var n=r("be94"),o=r("2f62");e["a"]={data:function(){return{type:!1}},computed:Object(n["a"])({},Object(o["b"])(["getProject"]),{projects:function(){if(!this.type)return!1;var t=this.getProject({name:this.type});if(!t)for(var e in t={},this.$store.state.projects)for(var r in this.$store.state.projects[e]){var n=this.$store.state.projects[e][r].content["techList"],o=decodeURI(this.$route.params.type);if(!this.$store.state.types.includes(o.toLocaleLowerCase()))for(var i in n)n[i].toLocaleLowerCase()==o.toLocaleLowerCase()&&(t[r]=this.$store.state.projects[e][r],t[r].type=e)}return t},project:function(){return!!this.$route.params.project&&this.projects[this.$route.params.project]},images:function(){var t=this;return!!this.project&&this.project.content.images.reduce(function(e,r){return r.path.includes("mobile")?e.mobile.push(r):r.path.includes("horiz")?e.horiz.push(r):e.regular.push(r),r.path.includes("one.".concat(t.$route.params.project))&&(e.video=r.path),e},{mobile:[],regular:[],horiz:[],video:!1})}}),watch:{$route:function(t,e){},"$store.state.projects":function(t){var e=this;Object.keys(t).length>=this.$store.state.types.length&&!Object.keys(this.projects).length&&"tech"!==this.$route.name&&this.$nextTick(function(){e.$router.replace("/"+e.$store.state.types[0])})}},mounted:function(){this.setProjects(this.$route.params.type)},methods:{getType:function(t){return this.$store.state.types.includes(this.type)?this.type:this.projects[t].type},setProjects:function(t){var e=this;this.type=t,this.$nextTick(function(){e.$store.dispatch("setProjects",t)})}}}}}]);
//# sourceMappingURL=portfolio.b6ee644c.js.map