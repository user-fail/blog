"use strict";(self["webpackChunkdiary"]=self["webpackChunkdiary"]||[]).push([[7955],{7955:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"article"},[e("p",[t._v("MD5加密")]),e("label",{attrs:{for:"encrypt"}},[t._v("请输入要加密的数据: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.encryptData,expression:"encryptData"}],staticStyle:{width:"270px"},attrs:{type:"text",id:"encrypt",autocomplete:"off",placeholder:"请输入要加密的数据"},domProps:{value:t.encryptData},on:{input:function(e){e.target.composing||(t.encryptData=e.target.value)}}}),e("div",{staticClass:"tool"},[e("button",{on:{click:function(e){return e.stopPropagation(),t.throttle(t.inputEncrypt,1e3)}}},[t._v("加密")]),e("button",{on:{click:function(e){return e.stopPropagation(),t.userValue.apply(null,arguments)}}},[t._v("复制加密结果")]),e("button",{on:{click:function(e){return e.stopPropagation(),t.closeOutput.apply(null,arguments)}}},[t._v("清空结果")]),e("button",{staticClass:"cursor",on:{click:function(e){return e.stopPropagation(),t.gettimes.apply(null,arguments)}}},[t._v("对时间戳加密")]),e("button",{on:{click:function(e){return e.stopPropagation(),t.throttle(1,1e3)}}},[t._v("节流")])]),e("div",[e("textarea",{ref:"inputbar",staticClass:"outputbar",attrs:{cols:"32",rows:"10",readonly:"readonly"}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.timecList,expression:"timecList"}],staticClass:"template_black"},[e("table",{staticClass:"table_style"},[e("thead",[e("tr",[e("th",[t._v("前10s时间戳(前10位)")]),e("th",[t._v("加密结果")]),e("td",{staticClass:"cursor",on:{click:function(e){return t.throttle(t.updata,1e3)}}},[t._v("更新")])])]),t._l(t.timecList,(function(n){return e("tr",{key:n},[e("th",{attrs:{scope:"row"}},[t._v(t._s(n))]),e("td",[t._v(t._s(t.encrypt(n)))]),e("td",{staticClass:"cursor",on:{click:function(e){return e.stopPropagation(),t.copyResult(n)}}},[t._v("复制")])])})),e("tfoot",[e("td"),e("td"),e("td",{staticClass:"close_button cursor",on:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}},[t._v("关闭")])])],2)])])},o=[];n(7658);function r(){let t,e;return function(n,s){let o=+new Date,r=this;clearTimeout(t),e&&o&&o<e+s?t=setTimeout((()=>{e=o,n.apply(r)}),s):(n.apply(r),e=o)}}var a={name:"tool",data(){return{encryptData:"",timecList:""}},computed:{throttle:r},methods:{encrypt(t){return this.$bus.Crypto.MD5(t.toString())},inputEncrypt(){let t=this.encrypt(this.encryptData);this.$refs.inputbar.textContent=t},gettimes(){let t=+new Date,e=[];for(let n=0;n<10;n++)e.push(t.toString().slice(0,10)-n);this.timecList=e},updata(){this.gettimes()},close(){this.timecList=""},userValue(){this.$refs.inputbar.textContent&&this.$bus.Copy(this.$refs.inputbar.textContent)},copyResult(t){this.$bus.Copy(this.encrypt(t))},closeOutput(){this.$refs.inputbar.textContent=""}},mounted(){}},i=a,c=n(1001),u=(0,c.Z)(i,s,o,!1,null,"414accca",null),l=u.exports}}]);
//# sourceMappingURL=7955.ef4c9487.js.map