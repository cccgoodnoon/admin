(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b728220c","chunk-13154576"],{"0c8a":function(t,e,i){"use strict";var n=i("f233"),a=i.n(n);a.a},"493d":function(t,e,i){"use strict"},"4c9f":function(t,e,i){},"599a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"first"},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:t.uploadFileURL,"on-change":t.handleChooseFile,data:t.upData,"auto-upload":!1,multiple:""}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])])]),t._v(" "),i("el-button",{staticStyle:{"margin-top":"30px"},attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确认")]),t._v(" "),i("el-button",{staticStyle:{"margin-top":"30px"},attrs:{type:"default"},on:{click:t.cancel}},[t._v("取消")])],1)},a=[],s=(i("a481"),i("7f7f"),i("5530")),o=(i("8324"),i("5f87"),i("2f62")),l=(i("bc3a"),i("61c7"),i("a18c"),{name:"uploader",data:function(){return{fileList:[],uploadFileURL:""}},computed:{upData:function(){return{body:JSON.stringify(this.form)}}},mounted:function(){this.getURL()},methods:Object(s["a"])(Object(s["a"])({},Object(o["c"])({setFileList:"duty/setFileList"})),{},{confirm:function(){this.setFileList(this.fileList),null!=this.$route.query.nodeid?(this.$refs.upload.submit(),this.$router.back()):this.$router.back()},getURL:function(){this.uploadFileURL="http://202.120.167.50:8088/api/u/fdb/task/updatefile/"+this.$route.query.nodeid},cancel:function(){this.$router.back()},handleChooseFile:function(t,e){this.fileList=e},handleExceed:function(t,e){this.$message.warning("当前只能选择上传1 个文件")},handleRemove:function(t,e,i){this.$message.warning("移除当前".concat(t.name,"文件，请重新选择文件上传！")),this.removeFile("fileone")},back:function(){this.$message({message:"返回编辑",type:"success"}),this.$router.replace("/task/edit/".concat(this.$route.params.id))}})}),r=l,c=(i("6ff9"),i("2877")),u=Object(c["a"])(r,n,a,!1,null,null,null);e["default"]=u.exports},"61c7":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("div",{staticClass:"chartLineBox",staticStyle:{height:"50px"}}),t._v(" "),i("el-main",[i("div",{attrs:{id:"user"}},[i("h2",[t._v("上传文件一览")]),t._v(" "),i("el-row",{staticClass:"line-display"},[i("el-col",{attrs:{span:22,offset:1}},[i("div",{staticClass:"grid-content",staticStyle:{"margin-top":"0px",border:"0"}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/u/fdb/task","on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,"on-success":t.upFile,"on-error":t.uploadFalse,multiple:"",limit:3,"auto-upload":!1,"on-exceed":t.handleExceed,"before-upload":t.beforeUpload}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器\n                  ")]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("最多上传3个文件，且文件大小不超过10MB")])],1)],1)],1),t._v(" "),i("el-row",[i("div",{staticClass:"searchWord"},[i("el-input",{staticStyle:{display:"inline-block",width:"300px"},attrs:{placeholder:"输入搜索文件名称"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),t._v(" "),i("el-button",{attrs:{type:"success",size:"small"},on:{click:t.multiDownload}},[t._v("批量下载")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"small"},on:{click:t.multiDelete}},[t._v("批量删除")]),t._v(" "),i("el-col",{staticStyle:{height:"20px"},attrs:{span:24}}),t._v(" "),i("el-table",{ref:"test",staticStyle:{width:"100%"},attrs:{data:t.tables,height:"550",stripe:""}},[i("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),i("el-table-column",{attrs:{prop:"uuid",label:"uuid",sortable:"",width:"200"}}),t._v(" "),i("el-table-column",{attrs:{prop:"curname",label:"文件名称",width:"200"}}),t._v(" "),i("el-table-column",{attrs:{prop:"originname",label:"文件原名",sortable:"",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"upddate",label:"更新时间",sortable:"",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"crtdate",label:"创建时间",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"success",size:"small"},on:{click:function(i){return t.downloadNode(e.$index,e.row)}}},[t._v("下载")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(i){return t.removeNode(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)])],1)],1)])],1)},a=[],s=(i("7f7f"),i("ac6a"),i("456d"),i("386d"),i("2f62"),i("5f87")),o=(i("a0bc"),function(t){var e=document.createElement("iframe");e.style.display="none",e.style.height=0,e.src=t,document.body.appendChild(e),setTimeout((function(){e.remove()}),3e5)}),l={name:"",data:function(){return{activities:[],search:"",filelist:[],filter:{per_page:10,page:1,id:"",description:"",endtime:"",performer:"",state:"",title:"",sorts:""},selected:[]}},mounted:function(){this.getActivities()},computed:{tables:function(){var t=this.search;return t?this.activities.filter((function(e){return Object.keys(e).some((function(i){return String(e[i]).toLowerCase().indexOf(t)>-1}))})):this.activities}},methods:{multiDelete:function(){var t=this,e=function(e){var i=t.tables[e].uuid,n=t.tables[e].curname;s["a"]._removeNode(i).then((function(e){t.$message.success("成功删除了该文件"+n+" !"),t.getActivities()})).catch((function(e){t.getActivities()}))};for(var i in this.$refs.test.selection)e(i)},multiDownload:function(){for(var t in this.$refs.test.selection){var e=this.tables[t].uuid;this.tables[t].curname;o("http://202.120.167.50:8088/api/u/fdb/task/"+e)}},tableSelectionChange:function(t){this.selected=t},pageSizeChange:function(t){console.log("每页 ".concat(t," 条")),this.filter.per_page=t,this.getActivities()},pageCurrentChange:function(t){console.log("当前页: ".concat(t)),this.filter.page=t,this.getActivities()},rowClick:function(t,e){var i=$.inArray(t,this.selected);i<0?(this.selected.push(t),this.$refs.usersTable.toggleRowSelection(t,!0)):(this.selected.splice(i,1),this.$refs.usersTable.toggleRowSelection(t,!1))},getActivities:function(){var t=this;s["a"]._getNode().then((function(e){t.activities=e}),(function(t){console.log(t)}))},removeNode:function(t,e){var i=this;this.$confirm("是否要删除"+e.curname+" ?","提示",{type:"warning"}).then((function(){s["a"]._removeNode(e.uuid).then((function(t){i.$message.success("成功删除了该文件"+e.curname+" !"),i.getActivities()})).catch((function(t){i.getActivities()}))}))},submitUpload:function(){this.$refs.upload.submit(),this.getActivities()},uploadFalse:function(t,e,i){console.log(t),this.$message.error(t.message)},downloadNode:function(t,e){var i="http://202.120.167.50:8088/api/u/fdb/task/"+e.uuid;window.location.href=i,console.log(e,1111)},upFile:function(t,e,i){console.log(t);var n=this;201==t.status&&(n.$message.success("上传成功"),n.getActivities())},handleCurrentChange:function(t){this.currpage=t},handleSizeChange:function(t){this.pagesize=t},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove:function(t,e){return this.$confirm("确定移除 ".concat(t.name,"？"))},beforeUpload:function(t){t.name.substring(t.name.lastIndexOf(".")+1);var e=t.size/1024/1024<100;return e||this.$message({message:"上传文件大小不能超过 10MB!",type:"warning"}),e}}},r=l,c=(i("0c8a"),i("2877"));i.d(e,"downloadFile",(function(){return o}));var u=Object(c["a"])(r,n,a,!1,null,null,null);e["default"]=u.exports},"6ff9":function(t,e,i){"use strict";var n=i("4c9f"),a=i.n(n);a.a},8324:function(t,e,i){"use strict";i("493d")},a0bc:function(t,e,i){"use strict";var n=i("96eb"),a=i.n(n);a.a.mock({"items|10":[{id:"@id",title:"@sentence(10, 20)","status|1":["unfinished","finished"],performer:"name",begintime:"@datetime",endtime:"@datetime",pageviews:"@integer(300, 5000)"}]})},a481:function(t,e,i){"use strict";var n=i("cb7c"),a=i("4bf8"),s=i("9def"),o=i("4588"),l=i("0390"),r=i("5f1b"),c=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};i("214f")("replace",2,(function(t,e,i,v){return[function(n,a){var s=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,s,a):i.call(String(s),n,a)},function(t,e){var a=v(i,t,this,e);if(a.done)return a.value;var d=n(t),f=String(this),h="function"===typeof e;h||(e=String(e));var g=d.global;if(g){var b=d.unicode;d.lastIndex=0}var _=[];while(1){var w=r(d,f);if(null===w)break;if(_.push(w),!g)break;var y=String(w[0]);""===y&&(d.lastIndex=l(f,s(d.lastIndex),b))}for(var $="",k=0,x=0;x<_.length;x++){w=_[x];for(var S=String(w[0]),C=c(u(o(w.index),f.length),0),A=[],F=1;F<w.length;F++)A.push(p(w[F]));var L=w.groups;if(h){var R=[S].concat(A,C,f);void 0!==L&&R.push(L);var z=String(e.apply(void 0,R))}else z=m(S,f,C,A,L,e);C>=k&&($+=f.slice(k,C)+z,k=C+S.length)}return $+f.slice(k)}];function m(t,e,n,s,o,l){var r=n+t.length,c=s.length,u=h;return void 0!==o&&(o=a(o),u=f),i.call(l,u,(function(i,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(r);case"<":l=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return i;if(u>c){var f=d(u/10);return 0===f?i:f<=c?void 0===s[f-1]?a.charAt(1):s[f-1]+a.charAt(1):i}l=s[u-1]}return void 0===l?"":l}))}}))},f233:function(t,e,i){}}]);