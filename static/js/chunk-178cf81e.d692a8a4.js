(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-178cf81e"],{"493d":function(t,e,n){"use strict"},8324:function(t,e,n){"use strict";n("493d")},"88b0":function(t,e,n){"use strict";var i=n("947e"),r=n.n(i);r.a},"947e":function(t,e,n){},a030:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{staticClass:"attachment"},[i("el-form-item",{attrs:{label:"附件"}},[i("el-row",t._l(this.file_list,(function(e){return i("el-col",{attrs:{span:8}},[i("div",{staticClass:"avatar-uploader"},[i("img",{attrs:{width:"40",height:"40",src:n("d284")("./"+t.matchType(e.filename)+".png")}}),t._v(" "),i("p",[t._v(t._s(e.filename))])]),t._v(" "),i("div",{staticClass:"mask"},[i("a",{attrs:{target:"_blank",title:"点击预览"},on:{click:function(n){return t.previewer(e.uuid)}}},[i("i",{staticClass:"el-icon-zoom-in"})])])])})),1)],1)],1)},r=[],a=(n("28a5"),n("8324"),n("5f87")),s={data:function(){return{user:{},isShowPdf:!1,PdfViewer:"javascript:;",file_list:[]}},mounted:function(){this.getUser()},methods:{getUser:function(){var t=this,e=this;a["a"]._gets(e.$route.params.id).then((function(n){e.nodeid=n["nodeid"],null!=e.nodeid&&(t.getFileName(),t.getFileLink("fileone"))}),(function(t){console.log(t)}))},previewer:function(t){window.open("http://47.111.234.116:8080/api/u/fdb/task/content/"+t,"_blank")},getFileLink:function(t){switch(this.filePath="/api/u/fdb/task/"+this.nodeid+"/content",t){case"fileone":this.PdfViewer=this.filePath;break;case"filetwo":this.PdfViewerTwo=this.filePath;break}},getFileName:function(){var t=this;a["a"]._getFileName(this.nodeid).then((function(e){t.file_list=e,t.isShowPdf=!0}))},matchType:function(t){var e="",n="";try{var i=t.split(".");e=i[i.length-1]}catch(d){e=""}if(!e)return n=!1,n;var r=["png","jpg","jpeg","gif"];if(n=r.some((function(t){return t===e})),n)return n="image",n;var a=["txt"];if(n=a.some((function(t){return t===e})),n)return n="txt",n;var s=["pdf"];if(n=s.some((function(t){return t===e})),n)return n="pdf",n;var o=["doc"];if(n=o.some((function(t){return t===e})),n)return n="doc",n;var u=["ppt"];if(n=u.some((function(t){return t===e})),n)return n="ppt",n;var f=["zip","rar"];if(n=f.some((function(t){return t===e})),n)return n="zip",n;var c=["mp4"];if(n=c.some((function(t){return t===e})),n)return n="mp4",n;var l=["xls","xlsx"];return n=l.some((function(t){return t===e})),n?(n="xls",n):void 0}}},o=s,u=(n("88b0"),n("2877")),f=Object(u["a"])(o,i,r,!1,null,null,null);e["default"]=f.exports}}]);