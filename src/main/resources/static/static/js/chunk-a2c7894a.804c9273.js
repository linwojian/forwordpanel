(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2c7894a"],{1148:function(e,t,r){"use strict";var a=r("a691"),i=r("1d80");e.exports="".repeat||function(e){var t=String(i(this)),r="",n=a(e);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},"140a":function(e,t,r){},"408a":function(e,t,r){var a=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},aa22:function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return c}));var a=r("b775");function i(e){return Object(a["a"])({url:"/server/getPage",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/server/getList",method:"get",data:e})}function o(e){return Object(a["a"])({url:"/server/getForwardServerList",method:"get",params:e})}function s(e){return Object(a["a"])({url:"/server/delete",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/server/check",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/server/save",method:"post",data:e})}},b3f0:function(e,t,r){},b680:function(e,t,r){"use strict";var a=r("23e7"),i=r("a691"),n=r("408a"),o=r("1148"),s=r("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,r){return 0===t?r:t%2===1?u(e,t-1,r*e):u(e*e,t/2,r)},d=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,a,s,l=n(this),h=i(e),f=[0,0,0,0,0,0],m="",p="0",g=function(e,t){var r=-1,a=t;while(++r<6)a+=e*f[r],f[r]=a%1e7,a=c(a/1e7)},b=function(e){var t=6,r=0;while(--t>=0)r+=f[t],f[t]=c(r/e),r=r%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var r=String(f[e]);t=""===t?r:t+o.call("0",7-r.length)+r}return t};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(t=d(l*u(2,69,1))-69,r=t<0?l*u(2,-t,1):l/u(2,t,1),r*=4503599627370496,t=52-t,t>0){g(0,r),a=h;while(a>=7)g(1e7,0),a-=7;g(u(10,a,1),0),a=t-1;while(a>=23)b(1<<23),a-=23;b(1<<a),g(1,1),b(2),p=v()}else g(0,r),g(1<<-t,0),p=v()+o.call("0",h);return h>0?(s=p.length,p=m+(s<=h?"0."+o.call("0",h-s)+p:p.slice(0,s-h)+"."+p.slice(s-h))):p=m+p,p}})},cec7:function(e,t,r){"use strict";var a=r("140a"),i=r.n(a);i.a},dcfd:function(e,t,r){"use strict";var a=r("b3f0"),i=r.n(a);i.a},e382:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"searchBody"},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.showAddDialog}},[e._v("开通账号")]),e._m(0)],1),r("div",{staticClass:"item-container"},e._l(e.tableData,(function(t,a){return r("div",{key:a,staticClass:"item-box"},[r("div",{staticClass:"server-status"},[t.disabled?r("span",{staticStyle:{color:"#F56C6C"}},[r("i",{staticClass:"el-icon-warning"}),e._v(" 禁用")]):e._e(),t.disabled?e._e():r("span",{staticStyle:{color:"#67C23A"}},[r("i",{staticClass:"el-icon-success"}),e._v(" 启用")])]),r("div",{staticClass:"box-col"},[r("label",[e._v("用户名:")]),r("span",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[e._v(e._s(t.username))])]),r("div",{staticClass:"box-col"},[r("label",[e._v("TG:")]),e._v(e._s(t.telegram))]),r("div",{staticClass:"box-col"},[r("label",[e._v("用户角色:")]),e._v(e._s(e._f("userTypeFilter")(t.userType)))]),r("div",{staticClass:"box-col"},[r("label",[e._v("流量:")]),e._v(e._s(e.getFlow(t.dataUsage))+"/"+e._s(t.dataLimit)+"(GB)"),r("el-button",{staticClass:"reset",attrs:{type:"text",icon:"el-icon-refresh"},on:{click:function(r){return e.resetFLow(t)}}},[e._v("重置流量")])],1),r("div",{staticClass:"box-col"},[r("label",[e._v("到期时间:")]),e._v(e._s(e._f("parseTime")(t.expireTime,"{y}-{m}-{d}")))]),r("div",{staticClass:"box-trl"},[r("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"mini",title:"编辑"},on:{click:function(r){return e.showEditDialog(t)}}},[e._v("编辑")]),t.disabled?r("el-button",{attrs:{type:"text",icon:"el-icon-caret-top",size:"mini",title:"启用"},on:{click:function(r){return e.handleEnableUser(t)}}},[e._v("启用")]):r("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-caret-bottom",title:"禁用"},on:{click:function(r){return e.handleDisableUser(t)}}},[e._v("禁用")]),r("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-circle-plus",title:"端口分配"},on:{click:function(r){return e.showAssignDialog(t)}}},[e._v("端口分配")]),r("el-button",{attrs:{type:"text",icon:"el-icon-delete",size:"mini",title:"删除"},on:{click:function(r){return e.deleteData(t)}}},[e._v("删除")])],1)])})),0),e.dataTotal/e.searchForm.pageSize>1?r("xd-pager",{attrs:{fixed:"",background:"","page-sizes":[8,16,32],"page-size":e.searchForm.pageSize,"current-page":e.searchForm.pageNum,layout:"total, sizes, prev, pager, next, jumper",total:e.dataTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e(),r("el-dialog",{attrs:{title:"开通账号",visible:e.addDialog,width:"30%"},on:{"update:visible":function(t){e.addDialog=t}}},[r("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.addFormRules,size:"small"}},[r("el-form-item",{attrs:{prop:"userType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini"},model:{value:e.addForm.userType,callback:function(t){e.$set(e.addForm,"userType",t)},expression:"addForm.userType"}},e._l(e.userTypeList,(function(e,t){return r("el-option",{key:e+t,attrs:{label:e.name,value:e.value}})})),1)],1),r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{size:"mini",placeholder:"用户名"},model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"mini",placeholder:"密码"},model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{prop:"expireTime"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{size:"mini",type:"date",placeholder:"请选择到期时间",align:"right"},model:{value:e.addForm.expireTime,callback:function(t){e.$set(e.addForm,"expireTime",t)},expression:"addForm.expireTime"}})],1),r("el-form-item",{attrs:{prop:"userPhone"}},[r("el-input",{attrs:{size:"mini",placeholder:"手机号"},model:{value:e.addForm.userPhone,callback:function(t){e.$set(e.addForm,"userPhone",t)},expression:"addForm.userPhone"}})],1),r("el-form-item",{attrs:{prop:"telegram"}},[r("el-input",{attrs:{size:"mini",placeholder:"TG"},model:{value:e.addForm.telegram,callback:function(t){e.$set(e.addForm,"telegram",t)},expression:"addForm.telegram"}})],1),r("el-form-item",{attrs:{prop:"dataLimit",rules:[{required:!0,message:"必填项"},{type:"number",message:"必须为数字值"}]}},[r("el-input",{attrs:{size:"mini",placeholder:"流量限制(GB),0或负数不限制"},model:{value:e.addForm.dataLimit,callback:function(t){e.$set(e.addForm,"dataLimit",e._n(t))},expression:"addForm.dataLimit"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmAddForm}},[e._v("确 定")])],1)],1),r("el-drawer",{attrs:{title:"查看端口","with-header":!1,visible:e.assignDialog,direction:"rtl",size:e.drawerPercent?e.drawerPercent:"30%"},on:{"update:visible":function(t){e.assignDialog=t}}},[r("div",{staticClass:"drawer-body"},[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.showFreePortDialog}},[e._v("分配端口")]),r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.assignDialog=!1}}},[e._v("取 消")]),r("el-table",{attrs:{data:e.assignData}},[r("el-table-column",{attrs:{property:"serverName",label:"服务器"}}),r("el-table-column",{attrs:{property:"localPort",label:"端口"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(!1===t.row.disabled?"启用":"禁用")+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-row",{staticStyle:{margin:"5px"}},[r("el-button",{attrs:{type:"text",size:"mini",title:"删除"},on:{click:function(r){return e.deleteUserPort(t.row)}}},[e._v("删除")])],1),r("el-row",{staticStyle:{margin:"5px"}},[t.row.disabled?r("el-button",{attrs:{type:"text",size:"mini",title:"启用中转"},on:{click:function(r){return e.enablePort(t.row)}}},[e._v("启用")]):e._e()],1),r("el-row",{staticStyle:{margin:"5px"}},[t.row.disabled?e._e():r("el-button",{attrs:{type:"text",size:"mini",title:"停止中转"},on:{click:function(r){return e.disablePort(t.row)}}},[e._v("禁用")])],1)]}}])})],1),r("div",{staticClass:"block"},[r("el-pagination",{attrs:{background:"","page-sizes":[10,20,50],"page-size":e.userPortSearchForm.pageSize,"current-page":e.userPortSearchForm.pageNum,layout:"total,  prev, next, jumper",total:e.userPortDataTotal},on:{"size-change":e.handleUserPortSizeChange,"current-change":e.handleUserPortCurrentChange}})],1)],1)]),r("el-drawer",{attrs:{title:"选择端口","with-header":!1,visible:e.freePortDialog,direction:"rtl",size:"drawerPercent?drawerPercent:'30%'"},on:{"update:visible":function(t){e.freePortDialog=t}}},[r("div",{staticClass:"drawer-body"},[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.selectPorts}},[e._v("确定")]),r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.checkAll}},[e._v("全选")]),r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.freePortDialog=!1}}},[e._v("取 消")]),r("el-select",{staticClass:"drawer-select",class:{mobile:e.isMobile},attrs:{size:"mini",placeholder:"按服务器筛选"},on:{change:e.handleServerChange},model:{value:e.portSelectForm.serverId,callback:function(t){e.$set(e.portSelectForm,"serverId",t)},expression:"portSelectForm.serverId"}},e._l(e.serverList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.serverName,value:e.id}})})),1),r("el-table",{attrs:{data:e.freePortData},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{property:"serverName",label:"服务器"}}),r("el-table-column",{attrs:{property:"localPort",label:"端口"}})],1),r("div",{staticClass:"block"},[r("el-pagination",{attrs:{background:"","page-sizes":[10,20,50],"page-size":e.freePortSearchForm.pageSize,"current-page":e.freePortSearchForm.pageNum,layout:"total,  prev, next",total:e.freePortDataTotal},on:{"size-change":e.handleFreePortSizeChange,"current-change":e.handleFreePortCurrentChange}})],1)],1)])],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tip"},[r("span",{staticStyle:{"font-size":"12px",color:"#606266"}},[r("i",{staticClass:"el-icon-warning",staticStyle:{"margin-right":"3px"}}),e._v("流量统计有延迟, 5分钟统计一次")])])}];r("99af"),r("4160"),r("b680"),r("159b"),r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("a630"),r("fb6a"),r("b0c0"),r("25f0");function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function o(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=o(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,n=e},f:function(){try{s||null==r["return"]||r["return"]()}finally{if(l)throw n}}}}var l=r("c24f"),c=r("aa22"),u={data:function(){return{tableData:[],assignData:[],freePortData:[],dataTotal:null,freePortDataTotal:null,userPortDataTotal:null,assignUserId:null,searchForm:{pageSize:8,pageNum:1,params:{query:""}},checkboxShow:!0,userTypeList:[{name:"管理员",value:0},{name:"普通用户",value:1}],addForm:{id:null,username:null,addType:"add",password:null,expireTime:null,dataUsage:null,userType:1,dataLimit:null},addFormRules:{host:[{required:!0,trigger:"blur",message:"必需项"}],username:[{required:!0,trigger:"blur",message:"必需项"}],expireTime:[{required:!0,trigger:"blur",message:"必需项"}]},addDialog:!1,selectedRow:null,assignDialog:!1,freePortDialog:!1,multipleSelection:[],serverId:null,serverList:[],portSelectForm:{serverId:null},freePortSearchForm:{pageSize:10,pageNum:1,serverId:null},userPortSearchForm:{pageSize:10,pageNum:1,userId:null}}},mounted:function(){this.getData()},filters:{userTypeFilter:function(e){var t={0:"管理员",1:"普通用户"};return t[e]||e}},methods:{getData:function(){var e=this;Object(l["k"])(this.searchForm).then((function(t){e.tableData=t.data.list,e.dataTotal=t.data.total}))},deleteData:function(e){var t=this;this.$confirm("确认删除?",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["a"])({id:e.id}).then((function(e){t.$notify({message:"删除成功",type:"success"}),t.getData()}))}))},confirmAddForm:function(){var e=this;this.$refs["addForm"].validate((function(t){if(t){if("add"===e.addForm.addType&&!e.addForm.password)return void e.$notify({message:"密码不能为空",type:"warning"});Object(l["t"])(e.addForm).then((function(t){e.$notify({message:"保存成功",type:"success"}),e.addDialog=!1,e.getData()}))}}))},handleSizeChange:function(e){this.searchForm.pageSize=e,this.getData()},handleUserPortSizeChange:function(e){var t=this;this.userPortSearchForm.pageSize=e,Object(l["o"])(this.userPortSearchForm).then((function(e){t.assignData=e.data.list,t.userPortDataTotal=e.data.total}))},handleCurrentChange:function(e){this.searchForm.pageNum=e,this.getData()},handleUserPortCurrentChange:function(e){var t=this;this.userPortSearchForm.pageNum=e,Object(l["o"])(this.userPortSearchForm).then((function(e){t.assignData=e.data.list,t.userPortDataTotal=e.data.total}))},handleFreePortSizeChange:function(e){var t=this;this.freePortSearchForm.pageSize=e,Object(l["h"])(this.freePortSearchForm).then((function(e){t.freePortData=e.data.list,t.freePortDataTotal=e.data.total}))},handleFreePortCurrentChange:function(e){var t=this;this.freePortSearchForm.pageNum=e,Object(l["h"])(this.freePortSearchForm).then((function(e){t.freePortData=e.data.list,t.freePortDataTotal=e.data.total}))},showAddDialog:function(){this.addDialog=!0,this.addForm.addType="add",this.addForm.id=null},showAssignDialog:function(e){var t=this;this.assignUserId=e.id,this.userPortSearchForm.userId=e.id,Object(l["o"])(this.userPortSearchForm).then((function(e){t.assignData=e.data.list,t.userPortDataTotal=e.data.total})),this.assignDialog=!0},showEditDialog:function(e){this.addDialog=!0,this.addForm=e,this.addForm.password=null,this.addForm.addType="edit"},showFreePortDialog:function(){this.getServerList(),this.freePortDialog=!0},handleSelectionChange:function(e){console.log(">>>>>>>",e),this.multipleSelection=e},handleSelect:function(e){this.selectedRow=e},selectPorts:function(){var e=this;if(console.log("multipleSelection",this.multipleSelection),this.multipleSelection.length<=0)this.$notify({message:"请选择端口",type:"warning"});else{var t=[],r=this;this.multipleSelection.forEach((function(e){t.push({portId:e.id,userId:r.assignUserId,serverId:e.serverId})})),console.log(t),Object(l["u"])(t).then((function(t){e.freePortDialog=!1,Object(l["o"])(e.userPortSearchForm).then((function(t){e.assignData=t.data.list,e.userPortDataTotal=t.data.total}))}))}},deleteUserPort:function(e){var t=this;this.$confirm("确认删除?",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["b"])({id:e.id}).then((function(e){t.$notify({message:"删除成功",type:"success"}),Object(l["o"])(t.userPortSearchForm).then((function(e){t.assignData=e.data.list,t.userPortDataTotal=e.data.total}))}))}))},disablePort:function(e){var t=this;Object(l["d"])({id:e.id}).then((function(e){t.$notify({message:"禁用完成",type:"success"}),Object(l["o"])(t.userPortSearchForm).then((function(e){t.assignData=e.data.list,t.userPortDataTotal=e.data.total}))}))},enablePort:function(e){var t=this;Object(l["f"])({id:e.id}).then((function(e){t.$notify({message:"启用完成",type:"success"}),Object(l["o"])(t.userPortSearchForm).then((function(e){t.assignData=e.data.list,t.userPortDataTotal=e.data.total}))}))},handleDisableUser:function(e){var t=this;Object(l["c"])({id:e.id}).then((function(e){t.$notify({message:"禁用完成",type:"success"}),t.getData()}))},handleEnableUser:function(e){var t=this;Object(l["e"])({id:e.id}).then((function(e){t.$notify({message:"启用完成",type:"success"}),t.getData()}))},getFlow:function(e){var t="";if(e/1024<1024)t=(Math.round(e/1024)>0?Math.round(e/1024):0)+"KB";else if(e/1024>=1024&&e/1024/1024<1024)t=(Math.round(e/1024/1024)>0?Math.round(e/1024/1024):0)+"MB";else if(e/1024/1024>=1024){var r=e/1024/1024/1024;t=r.toFixed(3)+"GB"}else t="0KB";return t},resetFLow:function(e){var t=this;this.$confirm("确认重置流量?",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["r"])({id:e.id}).then((function(e){t.$notify({message:"重置成功",type:"success"}),Object(l["o"])(t.userPortSearchForm).then((function(e){t.assignData=e.data.list,t.userPortDataTotal=e.data.total}))}))}))},getServerList:function(){var e=this;Object(c["d"])({}).then((function(t){e.serverList=t.data,e.serverList.length&&(e.portSelectForm.serverId=e.serverList[0].id,e.handleServerChange(e.portSelectForm.serverId))}))},handleServerChange:function(e){var t=this;this.freePortSearchForm.serverId=e,this.checkboxShow=!1,Object(l["h"])(this.freePortSearchForm).then((function(e){t.freePortData=[].concat(e.data.list),t.checkboxShow=!0,t.$forceUpdate(),t.freePortDataTotal=e.data.total}))},checkAll:function(){var e,t=s(this.freePortData);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.checked=!0}}catch(a){t.e(a)}finally{t.f()}this.$forceUpdate()}}},d=u,h=(r("cec7"),r("dcfd"),r("2877")),f=Object(h["a"])(d,a,i,!1,null,"1d9ca9eb",null);t["default"]=f.exports}}]);