(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["image"],{"386b":function(t,e,i){var a=i("5ca1"),s=i("79e5"),r=i("be13"),n=/"/g,o=function(t,e,i,a){var s=String(r(t)),o="<"+e;return""!==i&&(o+=" "+i+'="'+String(a).replace(n,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(o),a(a.P+a.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",i)}},"3b5b":function(t,e,i){},"6c9f":function(t,e,i){"use strict";var a=i("9ffd"),s=i.n(a);s.a},"9ffd":function(t,e,i){},b54a:function(t,e,i){"use strict";i("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},b73b:function(t,e,i){"use strict";var a=i("3b5b"),s=i.n(a);s.a},f7ad:function(t,e,i){"use strict";i("7f7f"),i("6762"),i("2fdb");var a=i("be94"),s=i("2f62");e["a"]={data:function(){return{type:!1,projectError:!1,techList:[]}},computed:Object(a["a"])({},Object(s["b"])(["getProject"]),{projects:function(){if(!this.type)return!1;var t=this.getProject({name:this.type});if(!t)for(var e in t={},this.$store.state.projects)for(var i in this.$store.state.projects[e]){var a=this.$store.state.projects[e][i].content["techList"],s=decodeURI(this.$route.params.type);if(!this.$store.state.types.includes(s.toLocaleLowerCase()))for(var r in a)this.techList.includes(a[r])||this.techList.push(a[r]),a[r].toLocaleLowerCase()==s.toLocaleLowerCase()&&(t[i]=this.$store.state.projects[e][i],t[i].type=e)}return t},project:function(){return!!this.$route.params.project&&this.projects[this.$route.params.project]},images:function(){var t=this;return!!this.project&&this.project.content.images.reduce(function(e,i){return i.path.includes("mobile")?e.mobile.push(i):i.path.includes("horiz")?e.horiz.push(i):e.regular.push(i),i.path.includes("one.".concat(t.$route.params.project))&&(e.video=i.path),e},{mobile:[],regular:[],horiz:[],video:!1})}}),mounted:function(){this.setProjects(this.$route.params.type)},methods:{getType:function(t){return this.$store.state.types.includes(this.type)?this.type:this.projects[t].type},setProjects:function(t){var e=this;this.type=t,this.$nextTick(function(){e.$store.dispatch("setProjects",t)})}}}},feec:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"background",class:["background"],style:{height:t.height}},[i("div",{directives:[{name:"hammer",rawName:"v-hammer:swipe",value:t.swipe,expression:"swipe",arg:"swipe"}],ref:"swipe",class:["swipe"]}),i("router-link",{class:["close"],attrs:{to:t.routeBack}},[i("close")],1),i("button",{class:["external"],on:{click:function(e){t.goToImage()}}},[t._v(" > ")]),i("button",{class:["external"],on:{click:function(e){t.goToPrevImage()}}},[t._v(" < ")]),i("div",{class:[t.orientation,"grid"]},[i("div",[i("transition",{attrs:{name:t.trans,mode:"out-in",appear:""}},[t.image?i("picture-query",{key:t.image.path,ref:"image",attrs:{type:t.type,path:t.image.path,alt:t.image.alt?t.image.alt:""}},[i("p",[t._v(t._s(t.image.caption))])]):t._e()],1)],1)])],1)},s=[],r=(i("a481"),i("b54a"),i("ac6a"),i("6762"),i("2fdb"),i("cadf"),i("551c"),i("097d"),i("57f4")),n=i("417c"),o=i("f7ad"),c=i("5d6e"),h={mixins:[o["a"],c["a"]],components:{"picture-query":r["a"],close:n["a"]},data:function(){return{index:0,imageTypes:["mobile","horiz","regular"],trans:"fade-left",title:this.$route.params.image}},head:{title:function(){return{inner:this.title}},link:function(){return[{rel:"canonical",href:"https://shawnnaquin.github.io/".concat(this.$route.params.type,"/").concat(this.$route.params.project,"/").concat(this.title),id:"canonical"}]}},computed:{orientation:function(){if(this.$route.params.image){for(var t=["mobile","horiz"],e=null,i=0;i<t.length;i++){var a=t[i];if(this.$route.params.image.includes(a)){e=a;break}}return null===e&&(e="regular"),e}},getImageIndex:function(){var t=this;if(!this.images||!this.images[this.orientation])return!1;var e=null;return this.images[this.orientation].forEach(function(i,a){i.path==t.$route.params.image&&(e=a)}),e},nextImage:function(){return!(!this.images||!this.images[this.orientation])&&(this.getImageIndex+1)%(this.images[this.orientation].length+1)},prevImage:function(){return this.getImageIndex-1},imageBase:function(){return"/".concat(this.type,"/").concat(this.project.link,"/")},prevImagePath:function(){return this.prevImage<0?"".concat(this.images[this.changeImageType(!0)][this.images[this.changeImageType(!0)].length-1].path):"".concat(this.images[this.orientation][this.prevImage].path)},nextImagePath:function(){return!(!this.images||!this.images[this.orientation])&&(this.nextImage>this.images[this.orientation].length-1?"".concat(this.images[this.changeImageType()][0].path):"".concat(this.images[this.orientation][this.nextImage].path))},image:function(){return!!this.images&&this.images[this.orientation][this.getImageIndex]},routeBack:function(){return this.project?"/".concat(this.type,"/").concat(this.project.link):""}},watch:{projects:function(t){this.image||this.$router.replace("/"+this.$route.params.type+"/"+this.$route.params.project)},$route:function(t,e){var i=this;this.images&&(this.title=t.params.image,e.params.image==this.prevImagePath?this.trans="fade-left":e.params.image==this.nextImagePath&&(this.trans="fade-right"),this.$nextTick(function(){i.$emit("updateHead")}))}},methods:{keyPress:function(){var t=this;window.onkeydown=function(e){switch(e.keyCode){case 27:t.$router.push(t.routeBack);break;case 37:t.goToPrevImage();break;case 38:t.goToPrevImage();break;case 39:t.goToImage();break;case 40:t.goToImage();break;default:return}}},changeImageType:function(t){var e=this,i=function(i){var a=i+1;return t&&(a=i-1<0?e.imageTypes.length-1:i-1),a%e.imageTypes.length},a=!1,s=i(this.imageTypes.indexOf(this.orientation)),r=function t(){e.images[e.imageTypes[s]].length?a=e.imageTypes[s]:(s=i(s),t())};return r(),a},goToImage:function(){this.$router.replace(this.imageBase+this.nextImagePath)},goToPrevImage:function(){this.$router.replace(this.imageBase+this.prevImagePath)},swipe:function(t){switch(t.direction){case 4:this.goToPrevImage();break;case 2:this.goToImage();break;case 8:this.goToPrevImage();break;case 16:this.goToImage();break;default:break}}},beforeDestroy:function(){window.onkeydown=!1,this.$store.commit("toggleNoScroll"),this.forceNoTouchMove=!1,this.heightTrigger=!1},mounted:function(){var t=this;this.keyPress(),this.$store.commit("toggleNoScroll"),this.forceNoTouchMove=!0,this.$nextTick(function(){t.heightTrigger=!0})}},u=h,g=(i("6c9f"),i("b73b"),i("2877")),m=Object(g["a"])(u,a,s,!1,null,"e5b42162",null);m.options.__file="Image.vue";e["default"]=m.exports}}]);
//# sourceMappingURL=image.e1342caa.js.map