(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"01f5":function(t,e,n){"use strict";n.r(e);var i=n("de41"),s=n("4d01");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},"05b2":function(t,e,n){"use strict";var i={uniPopup:n("8663").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0},on:{longpress:t.open,click:t.open}},[n("image",{staticClass:t._$s(1,"sc","bg"),attrs:{_i:1}}),n("view",{staticClass:t._$s(2,"sc","header"),attrs:{_i:2}},[n("view",{staticClass:t._$s(3,"sc","header-title"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.title)))]),n("view",{staticClass:t._$s(4,"sc","header-time"),attrs:{_i:4}},[n("view",[n("text",[t._v(t._$s(6,"t0-0",t._s(t.dateText.year))+t._$s(6,"t0-1",t._s(t.dateText.month))+t._$s(6,"t0-2",t._s(t.dateText.date)))])]),n("view",[n("text",[t._v(t._$s(8,"t0-0",t._s(t.dateText.day)))]),n("text",[t._v(t._$s(9,"t0-0",t._s(t.dateText.time)))])])])]),n("view",{staticClass:t._$s(10,"sc","info"),attrs:{_i:10}},t._l(t._$s(11,"f",{forItems:t.data}),(function(e,i,s,a){return n("view",{key:t._$s(11,"f",{forIndex:s,key:i}),staticClass:t._$s("11-"+a,"sc","info-patient"),attrs:{_i:"11-"+a}},[n("view",{staticClass:t._$s("12-"+a,"sc","room"),attrs:{_i:"12-"+a}},[t._v(t._$s("12-"+a,"t0-0",t._s(e.room)))]),n("view",{staticClass:t._$s("13-"+a,"sc","remark"),attrs:{_i:"13-"+a}},[t._v(t._$s("13-"+a,"t0-0",t._s(e.remark)))]),n("view",{staticClass:t._$s("14-"+a,"sc","doctor"),attrs:{_i:"14-"+a}},[t._v(t._$s("14-"+a,"t0-0",t._s(e.doctor)))]),n("view",{staticClass:t._$s("15-"+a,"sc","number"),attrs:{_i:"15-"+a}},[t._v(t._$s("15-"+a,"t0-0",t._s(e.number)))]),n("view",{staticClass:t._$s("16-"+a,"sc","name"),attrs:{_i:"16-"+a}},[t._v(t._$s("16-"+a,"t0-0",t._s(e.name)))]),n("view",{staticClass:t._$s("17-"+a,"sc","status"),attrs:{_i:"17-"+a}},[t._v(t._$s("17-"+a,"t0-0",t._s(e.status)))])])})),0),n("uni-popup",{ref:"popup",attrs:{type:"center",maskClick:!1,_i:18}},[n("view",{staticClass:t._$s(19,"sc","popup"),attrs:{_i:19}},[n("view",{staticClass:t._$s(20,"sc","popup-header"),attrs:{_i:20}}),n("view",[n("view",{staticClass:t._$s(22,"sc","uni-form-item "),attrs:{_i:22}},[n("view",{staticClass:t._$s(23,"sc","popup-title"),attrs:{_i:23}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.iType,expression:"iType"}],staticClass:t._$s(24,"sc","uni-input"),attrs:{_i:24},domProps:{value:t._$s(24,"v-model",t.iType)},on:{input:function(e){e.target.composing||(t.iType=e.target.value)}}})]),n("view",{staticClass:t._$s(25,"sc","uni-form-item uni-form-btn"),attrs:{_i:25}},[n("button",{staticClass:t._$s(26,"sc","chooseBtn"),attrs:{_i:26},on:{click:function(e){return t.navTo()}}})]),n("view",{staticClass:t._$s(27,"sc","uni-form-item "),attrs:{_i:27}},[n("button",{staticClass:t._$s(28,"sc","popup-btn"),attrs:{_i:28},on:{click:t.close}}),n("button",{staticClass:t._$s(29,"sc","popup-btn"),attrs:{_i:29},on:{click:t.confirm}})])])])])],1)},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"0907":function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view")},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function s(){return"string"===typeof __channelId__&&__channelId__}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(s())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var r=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(s){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),o="";if(r.length>1){var c=r.pop();o=r.join("---COMMA---"),0===c.indexOf(" at ")?o+=c:o+="---COMMA---"+c}else o=r[0];console[a](o)}n.r(e),n.d(e,"log",(function(){return a})),n.d(e,"default",(function(){return r}))},"1fec":function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","popup"),attrs:{_i:1}},[n("view",{staticClass:t._$s(2,"sc","popup-header"),attrs:{_i:2}}),n("view",[n("view",{staticClass:t._$s(4,"sc","uni-form-item "),attrs:{_i:4}},[n("button",{attrs:{_i:5},on:{click:function(e){return t.navTo("../waiting-room/waiting-room")}}})]),n("view",{staticClass:t._$s(6,"sc","uni-form-item "),attrs:{_i:6}},[n("button",{attrs:{_i:7},on:{click:function(e){return t.navTo("../department/department")}}})])])])])},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"213e":function(t,e,n){"use strict";n.r(e);var i=n("9b3f"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},2865:function(t,e,n){"use strict";n.r(e);var i=n("8b4d"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},3722:function(t,e,n){"use strict";n.r(e);var i=n("f595"),s=n("4e5a");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},"3ba5":function(t,e,n){"use strict";var i={uniTransition:n("01f5").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._$s(0,"i",t.showPopup)?n("view",{staticClass:t._$s(0,"sc","uni-popup"),class:t._$s(0,"c",[t.popupstyle]),attrs:{_i:0},on:{touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.clear(e)}}},[t._$s(1,"i",t.maskShow)?n("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans,_i:1},on:{click:t.onTap}}):t._e(),n("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans,_i:2},on:{click:t.onTap}},[n("view",{staticClass:t._$s(3,"sc","uni-popup__wrapper-box"),attrs:{_i:3},on:{click:function(e){return e.stopPropagation(),t.clear(e)}}},[t._t("default",null,{_i:4})],2)])],1):t._e()},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"4d01":function(t,e,n){"use strict";n.r(e);var i=n("e8a3"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"4dc9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={created:function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)},methods:{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}};e.default=i},"4e5a":function(t,e,n){"use strict";n.r(e);var i=n("7a51"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},5381:function(t,e,n){"use strict";n("bc7d");var i=a(n("8bbf")),s=a(n("bb53"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,s.default.mpType="app";var u=new i.default(o({},s.default));u.$mount()},"7a51":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("8663"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s,r=!0,o=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){o=!0,s=t},f:function(){try{r||null==i.return||i.return()}finally{if(o)throw s}}}}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var o={data:function(){return{dateText:{year:"",month:"",date:"",day:"",time:""},title:"\u5185\u79d1",weekday:[],data:[{room:"\u8bca\u5ba41",doctor:"\u5f20\u533b\u751f",wait:{number:"A1002",name:"\u5f20\u65e0\u5fcc"},seeing:{number:"J1003",name:"\u8d75\u654f"}}],cliniqueCode:"",iType:"",popupShow:!1,seqNumber:"",test:"\u6d4b\u8bd5",testNubmer:0}},onLoad:function(){var t=this;this.iType=uni.getStorageSync("iType")||"";var e=new Date;this.weekday=new Array(7),this.weekday[0]="\u661f\u671f\u65e5",this.weekday[1]="\u661f\u671f\u4e00",this.weekday[2]="\u661f\u671f\u4e8c",this.weekday[3]="\u661f\u671f\u4e09",this.weekday[4]="\u661f\u671f\u56db",this.weekday[5]="\u661f\u671f\u4e94",this.weekday[6]="\u661f\u671f\u516d",this.newDate(),setTimeout((function(){t.newDate(),setInterval((function(){t.newDate()}),6e4)}),1e3*e.getSeconds()),this.iType&&this.init()},methods:{navTo:function(){uni.redirectTo({url:"../index/index",success:function(t){uni.setStorageSync("pageSetBoolean",!1)},fail:function(){},complete:function(){}})},newDate:function(){var t=new Date;this.dateText={year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate(),day:this.weekday[t.getDay()],time:t.getHours()+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())}},open:function(){this.$refs.popup.open(),this.popupShow=!0},close:function(){this.$refs.popup.close(),this.popupShow=!1},confirm:function(){""!==this.iType?(uni.showLoading({title:"\u52a0\u8f7d\u4e2d"}),uni.setStorageSync("iType",this.iType),this.popupShow=!1,this.data=[],this.init(),this.$refs.popup.close(),uni.hideLoading()):uni.showToast({title:"\u8bf7\u8f93\u5165\u8bca\u5ba4",icon:"none"})},init:function(){var e=this;if(this.popupShow)return!1;var n={room:"\u8bca\u5ba41",doctor:"\u5f20\u533b\u751f",wait:{number:"A100",name:"\u5f20\u65e0\u5fcc"},seeing:{number:"J1003",name:"\u8d75\u654f"}};if(n.wait.number=n.wait.number+this.testNubmer++,n.doctor){var i=this.hideName(n.wait.name),s=this.hideName(n.seeing.name);this.seqNumber=n.seq_number;var a={room:n.room,doctor:n.doctor,wait:{number:n.wait.number,name:i},seeing:{number:n.seeing.number,name:s}},r=this.chineseNumeral(n.seeing.number+""),o="\u8bf7,".concat(r,"\u53f7,").concat(n.seeing.name,"\u5230,").concat(n.room);t("log",o," at pages/department/department.vue:200"),this.onDone(o),this.data.length<7?this.data=this.data.concat(a):(this.data[6]=a,this.$forceUpdate())}else setTimeout((function(){e.init()}),3e3)},onDone:function(t){var e=this,n=4300;t.length>12&&(n+=300*(t.length-12)),setTimeout((function(){e.init()}),n)},chineseNumeral:function(t){var e,n="",i=s(t);try{for(i.s();!(e=i.n()).done;){var a=e.value;switch(a){case"0":n+="\u96f6";break;case"1":n+="\u4e00";break;case"2":n+="\u4e8c";break;case"3":n+="\u4e09";break;case"4":n+="\u56db";break;case"5":n+="\u4e94";break;case"6":n+="\u516d";break;case"7":n+="\u4e03";break;case"8":n+="\u516b";break;case"9":n+="\u4e5d";break;default:n+=a}}}catch(r){i.e(r)}finally{i.f()}return n},hideName:function(t){return 2==t.length?t="*"+t.slice(1,t.length):t.length>2&&(t=t.slice(0,1)+"*"+t.slice(t.length-1,t.length)),t}}};e.default=o}).call(this,n("0de9")["default"])},8663:function(t,e,n){"use strict";n.r(e);var i=n("3ba5"),s=n("ff22");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"21dec862",null,!1,i["a"],r);e["default"]=c.exports},"89e0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("01f5")),s=a(n("b5e5"));function a(t){return t&&t.__esModule?t:{default:t}}var r={name:"UniPopup",components:{uniTransition:i.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[s.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:function(t){this.mkclick=t}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.mkclick=this.maskClick,this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(e){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){e()}))}),50)})).then((function(e){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var e=this;this.showTrans=!1,this.$nextTick((function(){e.$emit("change",{show:!1,type:e.type}),clearTimeout(e.timer),e.customOpen&&e.customClose(),e.timer=setTimeout((function(){e.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};e.default=r},"8b4d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"8bbf":function(t,e){t.exports=Vue},"9b3f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{}};e.default=i},"9f05":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("8663"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s,r=!0,o=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){o=!0,s=t},f:function(){try{r||null==i.return||i.return()}finally{if(o)throw s}}}}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var o={data:function(){return{dateText:{year:"",month:"",date:"",day:"",time:""},title:"\u53e3\u8154\u79d1\u5019\u8bca\u5ba4",weekday:[],data:[],cliniqueCode:"",iType:"",popupShow:!1,seqNumber:"",test:"\u6d4b\u8bd5",testNubmer:0}},onLoad:function(){var t=this;this.iType=uni.getStorageSync("iType")||"";var e=new Date;this.weekday=new Array(7),this.weekday[0]="\u661f\u671f\u65e5",this.weekday[1]="\u661f\u671f\u4e00",this.weekday[2]="\u661f\u671f\u4e8c",this.weekday[3]="\u661f\u671f\u4e09",this.weekday[4]="\u661f\u671f\u56db",this.weekday[5]="\u661f\u671f\u4e94",this.weekday[6]="\u661f\u671f\u516d",this.newDate(),setTimeout((function(){t.newDate(),setInterval((function(){t.newDate()}),6e4)}),1e3*e.getSeconds()),this.iType&&this.init()},methods:{navTo:function(){uni.redirectTo({url:"../index/index",success:function(t){uni.setStorageSync("pageSetBoolean",!1)},fail:function(){},complete:function(){}})},newDate:function(){var t=new Date;this.dateText={year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate(),day:this.weekday[t.getDay()],time:t.getHours()+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())}},open:function(){t("log",123," at pages/waiting-room/waiting-room.vue:130"),this.$refs.popup.open(),this.popupShow=!0},close:function(){this.$refs.popup.close(),this.popupShow=!1},confirm:function(){""!==this.iType?(uni.showLoading({title:"\u52a0\u8f7d\u4e2d"}),uni.setStorageSync("iType",this.iType),this.popupShow=!1,this.data=[],this.init(),this.$refs.popup.close(),uni.hideLoading()):uni.showToast({title:"\u8bf7\u8f93\u5165\u8bca\u5ba4",icon:"none"})},init:function(){var e=this;if(this.popupShow)return!1;var n={room:"\u8bca\u5ba41",remark:"\u901f\u6765",doctor:"\u5f20\u533b\u751f",number:"K101",name:"\u5f20\u56fd\u946b",status:"\u6b63\u5728\u68c0\u67e5"};if(n.number=n.number+this.testNubmer++,n.name){var i=n.name;2==i.length?i="*"+i.slice(1,i.length):i.length>2&&(i=i.slice(0,1)+"*"+i.slice(i.length-1,i.length)),this.seqNumber=n.seq_number;var s={room:n.room,remark:n.remark,doctor:n.doctor,number:n.number,name:i,status:n.status},a=this.chineseNumeral(s.number+""),r="\u8bf7,".concat(a,"\u53f7,").concat(n.name,"\u5230,").concat(n.room);t("log",r," at pages/waiting-room/waiting-room.vue:192"),this.onDone(r),this.data.length<7?this.data=this.data.concat(s):(this.data[6]=s,this.$forceUpdate())}else setTimeout((function(){e.init()}),3e3)},onDone:function(t){var e=this,n=4300;t.length>12&&(n+=300*(t.length-12)),setTimeout((function(){e.init()}),n)},chineseNumeral:function(t){var e,n="",i=s(t);try{for(i.s();!(e=i.n()).done;){var a=e.value;switch(a){case"0":n+="\u96f6";break;case"1":n+="\u4e00";break;case"2":n+="\u4e8c";break;case"3":n+="\u4e09";break;case"4":n+="\u56db";break;case"5":n+="\u4e94";break;case"6":n+="\u516d";break;case"7":n+="\u4e03";break;case"8":n+="\u516b";break;case"9":n+="\u4e5d";break;default:n+=a}}}catch(r){i.e(r)}finally{i.f()}return n}}};e.default=o}).call(this,n("0de9")["default"])},a862:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{pageSet:"",pageSetBoolean:!0}},onLoad:function(){this.pageSet=uni.getStorageSync("pageSet")||"",this.pageSetBoolean=uni.getStorageSync("pageSetBoolean")||"",this.pageSet&&!this.pageSetBoolean&&this.navTo(this.pageSet)},methods:{navTo:function(t){uni.redirectTo({url:t,success:function(e){uni.setStorageSync("pageSet",t)},fail:function(){},complete:function(){}})}}};e.default=i},b286:function(t,e,n){"use strict";n.r(e);var i=n("1fec"),s=n("e7a5");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},b5e5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("4dc9"));function s(t){return t&&t.__esModule?t:{default:t}}var a={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},r={data:function(){return{config:a}},mixins:[i.default]};e.default=r},b965:function(t,e,n){"use strict";n.r(e);var i=n("9f05"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},bb53:function(t,e,n){"use strict";n.r(e);var i=n("2865");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var a,r,o,c,u=n("f0c5"),f=Object(u["a"])(i["default"],a,r,!1,null,null,null,!1,o,c);e["default"]=f.exports},bc7d:function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("b286").default)})),__definePage("pages/waiting-room/waiting-room",(function(){return Vue.extend(n("cc91").default)})),__definePage("pages/department/department",(function(){return Vue.extend(n("3722").default)})),__definePage("pages/pharmacy/pharmacy",(function(){return Vue.extend(n("d090").default)}))},cc91:function(t,e,n){"use strict";n.r(e);var i=n("05b2"),s=n("b965");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},d090:function(t,e,n){"use strict";n.r(e);var i=n("0907"),s=n("213e");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,o=n("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},de41:function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._$s(0,"i",t.isShow)?n("view",{ref:"ani",staticClass:t._$s(0,"sc","uni-transition"),class:t._$s(0,"c",[t.ani.in]),style:t._$s(0,"s","transform:"+t.transform+";"+t.stylesObject),attrs:{_i:0},on:{click:t.change}},[t._t("default",null,{_i:1})],2):t._e()},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},e7a5:function(t,e,n){"use strict";n.r(e);var i=n("a862"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},e8a3:function(t,e,n){"use strict";function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=s({},this.styles,{"transition-duration":this.duration/1e3+"s"}),e="";for(var n in t){var i=this.toLine(n);e+=i+":"+t[n]+";"}return e}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var e in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===e?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[e]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var e=this,n=this.getTranfrom(t);for(var i in this.transform="",n)"opacity"===i?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(n[i]," ");this.timer=setTimeout((function(){t||(e.isShow=!1),e.$emit("change",{detail:e.isShow})}),this.duration)},getTranfrom:function(t){var e={transform:""};return this.modeClass.forEach((function(n){switch(n){case"fade":e.opacity=t?1:0;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ");break}})),e},_modeClassArr:function(t){var e=this.modeClass;if("string"!==typeof e){var n="";return e.forEach((function(e){n+=e+"-"+t+","})),n.substr(0,n.length-1)}return e+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=r},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,s,a,r,o,c,u){var f,l="function"===typeof t?t.options:t;if(c){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(l.components,p)&&(l.components[p]=c[p])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(l.mixins||(l.mixins=[])).push(u)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=f):s&&(f=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),f)if(l.functional){l._injectStyles=f;var h=l.render;l.render=function(t,e){return f.call(e),h(t,e)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return i}))},f595:function(t,e,n){"use strict";var i={uniPopup:n("8663").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0},on:{longpress:t.open,click:t.open}},[n("image",{staticClass:t._$s(1,"sc","bg"),attrs:{_i:1}}),n("view",{staticClass:t._$s(2,"sc","header"),attrs:{_i:2}},[n("view",{staticClass:t._$s(3,"sc","header-title"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.title)))]),n("view",{staticClass:t._$s(4,"sc","header-time"),attrs:{_i:4}},[n("view",[n("text",[t._v(t._$s(6,"t0-0",t._s(t.dateText.year))+t._$s(6,"t0-1",t._s(t.dateText.month))+t._$s(6,"t0-2",t._s(t.dateText.date)))])]),n("view",[n("text",[t._v(t._$s(8,"t0-0",t._s(t.dateText.day)))]),n("text",[t._v(t._$s(9,"t0-0",t._s(t.dateText.time)))])])])]),n("view",{staticClass:t._$s(10,"sc","info"),attrs:{_i:10}},t._l(t._$s(11,"f",{forItems:t.data}),(function(e,i,s,a){return n("view",{key:t._$s(11,"f",{forIndex:s,key:i}),staticClass:t._$s("11-"+a,"sc","info-patient"),attrs:{_i:"11-"+a}},[n("view",{staticClass:t._$s("12-"+a,"sc","room"),attrs:{_i:"12-"+a}},[t._v(t._$s("12-"+a,"t0-0",t._s(e.room)))]),n("view",{staticClass:t._$s("13-"+a,"sc","doctor"),attrs:{_i:"13-"+a}},[t._v(t._$s("13-"+a,"t0-0",t._s(e.doctor)))]),n("view",{staticClass:t._$s("14-"+a,"sc","seeing"),attrs:{_i:"14-"+a}},[n("text",{staticClass:t._$s("15-"+a,"sc","pr-15"),attrs:{_i:"15-"+a}},[t._v(t._$s("15-"+a,"t0-0",t._s(e.seeing.number)))]),n("text",{staticClass:t._$s("16-"+a,"sc","pl-15"),attrs:{_i:"16-"+a}},[t._v(t._$s("16-"+a,"t0-0",t._s(e.seeing.name)))])]),n("view",{staticClass:t._$s("17-"+a,"sc","seeing"),attrs:{_i:"17-"+a}},[n("text",{staticClass:t._$s("18-"+a,"sc","pr-15"),attrs:{_i:"18-"+a}},[t._v(t._$s("18-"+a,"t0-0",t._s(e.wait.number)))]),n("text",{staticClass:t._$s("19-"+a,"sc","pl-15"),attrs:{_i:"19-"+a}},[t._v(t._$s("19-"+a,"t0-0",t._s(e.wait.name)))])])])})),0),n("uni-popup",{ref:"popup",attrs:{type:"center",maskClick:!1,_i:20}},[n("view",{staticClass:t._$s(21,"sc","popup"),attrs:{_i:21}},[n("view",{staticClass:t._$s(22,"sc","popup-header"),attrs:{_i:22}}),n("view",[n("view",{staticClass:t._$s(24,"sc","uni-form-item "),attrs:{_i:24}},[n("view",{staticClass:t._$s(25,"sc","popup-title"),attrs:{_i:25}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.iType,expression:"iType"}],staticClass:t._$s(26,"sc","uni-input"),attrs:{_i:26},domProps:{value:t._$s(26,"v-model",t.iType)},on:{input:function(e){e.target.composing||(t.iType=e.target.value)}}})]),n("view",{staticClass:t._$s(27,"sc","uni-form-item uni-form-btn"),attrs:{_i:27}},[n("button",{staticClass:t._$s(28,"sc","chooseBtn"),attrs:{_i:28},on:{click:function(e){return t.navTo()}}})]),n("view",{staticClass:t._$s(29,"sc","uni-form-item "),attrs:{_i:29}},[n("button",{staticClass:t._$s(30,"sc","popup-btn"),attrs:{_i:30},on:{click:t.close}}),n("button",{staticClass:t._$s(31,"sc","popup-btn"),attrs:{_i:31},on:{click:t.confirm}})])])])])],1)},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},ff22:function(t,e,n){"use strict";n.r(e);var i=n("89e0"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a}},[["5381","app-config"]]]);