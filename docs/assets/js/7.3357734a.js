(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{532:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return l})),i.d(e,"d",(function(){return u})),i.d(e,"e",(function(){return h}));const r=/#.*$/,a=/\.(md|html)$/,s=/\/$/,n=/^[a-z]+:/i;async function l(t){const e=await fetch(t);return await e.json()}function o(t){return decodeURI(t).replace(r,"").replace(a,"")}function c(t){return n.test(t)}function d(t){if(c(t))return t;const e=t.match(r),i=e?e[0]:"",a=o(t);return s.test(a)?t:a+".html"+i}function u(t,e,i){if(c(e))return{type:"external",path:e};i&&(e=function(t,e,i){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const a=e.split("/");i&&a[a.length-1]||a.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?a.pop():"."!==e&&a.push(e)}""!==a[0]&&a.unshift("");return a.join("/")}(e,i));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:d(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,i,r){const{pages:a,themeConfig:s}=i,n=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||n.sidebar||s.sidebar))return f(t);const l=n.sidebar||s.sidebar;if(l){const{base:i,config:r}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var i;return{}}(e,l);return"auto"===r?f(t):r?r.map(t=>function t(e,i,r,a=1){if("string"==typeof e)return u(i,e,r);if(Array.isArray(e))return Object.assign(u(i,e[0],r),{title:e[1]});{const s=e.children||[];return 0===s.length&&e.path?Object.assign(u(i,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map(e=>t(e,i,r,a+1)),collapsable:!1!==e.collapsable}}}(t,a,i)):[]}return[]}function f(t){const e=function(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}},559:function(t,e,i){},601:function(t,e,i){"use strict";i(559)},613:function(t,e,i){"use strict";i.r(e);var r=i(532),a={data:()=>({lengthHead:8,headList:[],cardList:[],dialog:{visible:!1,type:"",index:""},form:{title:"",url:"",image:"",color:""},rules:{url:[{required:!0,type:"url",message:"请输入完整url地址",trigger:"blur"}],title:[{required:!0,min:2,max:20,message:"请输入长度在 2-20 个字符",trigger:"blur"}]}}),created(){this.getBookmarkJson()},methods:{getBookmarkJson(){try{this.headList=JSON.parse(localStorage.getItem("headList")),this.cardList=JSON.parse(localStorage.getItem("cardList"))}catch{Object(r.b)("./data/bookmark.json").then(t=>{console.log("getJson",t),this.headList=t.headList,this.cardList=t.cardList;let e=this.headList.length;e<this.lengthHead&&(this.headList.length=this.lengthHead),this.headList.fill(this.form,e,this.lengthHead),localStorage.setItem("headList",JSON.stringify(this.headList)),localStorage.setItem("cardList",JSON.stringify(this.cardList))}).then(t=>{console.error(t)})}},editCard(t,e){t==this.dialog.index&&e==this.dialog.type||("head"==e?Object.assign(this.form,this.headList[t]):"add"==e?(Object.assign(this.form,this.$options.data().form),t=this.cardList.length):"edit"==e&&Object.assign(this.form,this.cardList[t])),this.dialog={index:t,type:e,visible:!0}},delCard(t){this.$confirm("确认删除该书签?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.form=this.$options.data().form,"head"!=this.dialog.type&&(this.dialog.type="del"),this.submitCard()})},submitCard(){this.$refs.ruleForm.validate(t=>{(t||"del"==this.dialog.type)&&("head"==this.dialog.type?(Object.assign(this.headList[this.dialog.index],this.form),localStorage.headList=JSON.stringify(this.headList)):("add"==this.dialog.type?this.cardList.push(this.form):"edit"==this.dialog.type?Object.assign(this.cardList[this.dialog.index],this.form):"del"==this.dialog.type&&this.cardList.splice(this.dialog.index,1),localStorage.cardList=JSON.stringify(this.cardList)),this.dialog.visible=!1)})}}},s=(i(601),i(14)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex column between",attrs:{role:"main",id:"bookmark"}},[i("div",{staticClass:"head-list flex between"},[t._l(t.headList,(function(e,r){return[e.url?i("a",{key:r,staticClass:"card",style:{"background-color":e.color,"background-image":"url("+e.image+")"},attrs:{href:e.url,target:"_blank"},on:{contextmenu:function(e){return e.preventDefault(),t.editCard(r,"head")}}},[i("img",{staticClass:"hidden",attrs:{src:e.image},on:{error:function(t){e.image=""}}}),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:!e.image,expression:"!head.image"}],staticClass:"desc text-aline"},[t._v(t._s(e.title))])]):i("div",{key:r,staticClass:"card add",on:{click:function(e){return t.editCard(r,"head")},contextmenu:function(e){return e.preventDefault(),t.editCard(r,"head")}}})]}))],2),t._v(" "),i("div",{staticClass:"card-list flex between"},[t._l(t.cardList,(function(e,r){return i("a",{key:r,staticClass:"card",style:{"background-color":e.color,"background-image":"url("+e.image+")"},attrs:{href:e.url,target:"_blank"},on:{contextmenu:function(e){return e.preventDefault(),t.editCard(r,"edit")}}},[i("img",{staticClass:"hidden",attrs:{src:e.image},on:{error:function(t){e.image=""}}}),t._v(" "),i("p",{class:{"text-aline":!0,desc:!e.image,title:e.image}},[t._v(t._s(e.title))])])})),t._v(" "),i("div",{staticClass:"card add",on:{click:function(e){return t.editCard(null,"add")},contextmenu:function(e){return e.preventDefault(),t.editCard(null,"add")}}})],2),t._v(" "),i("el-dialog",{attrs:{title:"书签",visible:t.dialog.visible,width:"720px","close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)}}},[i("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-width":"70px"}},[i("el-form-item",{attrs:{label:"网 址",prop:"url",required:""}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"网址*"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"标 题",prop:"title",required:""}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"封面图址"}},[i("el-input",{attrs:{type:"textarea",placeholder:"封面图址"},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"背景颜色"}},[i("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["edit"==t.dialog.type||"head"==t.dialog.type&&t.headList[t.dialog.index].url?i("el-button",{staticClass:"fl-l",attrs:{type:"warning"},on:{click:t.delCard}},[t._v(" 删 除 ")]):t._e(),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.submitCard}},[t._v(" 确 定 ")])],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);