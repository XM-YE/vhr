(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-319362c8"],{1937:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入员工名或工号进行搜索，按回车搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:t.showAdvanceSearchView},on:{clear:t.searchSal},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchSal(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:t.showAdvanceSearchView},on:{click:t.searchSal}},[t._v("\n        搜索\n    ")]),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{attrs:{data:t.salsearch,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{prop:"workID",label:"员工号",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"name",label:"员工姓名",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.basicSalary",label:"基本工资",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.bonus",label:"奖金",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"",label:"加班",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"",label:"出勤天数",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"",label:"五险一金",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.allSalary",label:"工资",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"",label:"备注",width:"100px",align:"left"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){}}])})],1)],1)],1)},i=[],n={name:"SalSearch",data:function(){return{salsearch:[],keyword:""}},mounted:function(){},methods:{searchSal:function(){var t=this;this.getKeyValueRequest("/salary/search/?&keyword="+this.keyword).then((function(e){e&&(t.salsearch=e.data)}))}}},r=n,s=a("2877"),o=Object(s["a"])(r,l,i,!1,null,"01fdadba",null);e["default"]=o.exports},"21c7":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",[a("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入员工名或工号进行搜索，按回车搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:t.showAdvanceSearchView},on:{clear:t.searchSal},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchSal(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:t.showAdvanceSearchView},on:{click:t.searchSal}},[t._v("\n            搜索\n            ")])],1),a("div",[a("el-upload",{staticStyle:{display:"inline-flex","margin-right":"8px"},attrs:{"show-file-list":!1,"before-upload":t.beforeUpload,"on-success":t.onSuccess,"on-error":t.onError,disabled:t.importDataDisabled,action:"/employee/basic/import"}},[a("el-button",{attrs:{disabled:t.importDataDisabled,type:"success",icon:t.importDataBtnIcon}},[t._v("\n               "+t._s(t.importDataBtnText)+"\n           ")])],1),a("el-button",{attrs:{type:"success",icon:"el-icon-download"},on:{click:t.exportData}},[t._v("\n              导出数据\n          ")])],1)]),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{attrs:{data:t.saltable,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),a("el-table-column",{attrs:{prop:"workID",label:"员工号",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"name",label:"员工姓名",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.basicSalary",label:"基本工资",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.trafficSalary",label:"交通补助",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.lunchSalary",label:"午餐补助",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.bonus",label:"奖金",width:"100px",align:"left"}}),a("el-table-column",{attrs:{label:"养老金",align:"center"}},[a("el-table-column",{attrs:{prop:"salary.pensionPer",label:"比率",width:"70px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.pensionBase",label:"基数",width:"70px",align:"left"}})],1),a("el-table-column",{attrs:{label:"医疗保险",align:"center"}},[a("el-table-column",{attrs:{prop:"salary.medicalPer",label:"比率",width:"70px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.medicalBase",label:"基数",width:"70px",align:"left"}})],1),a("el-table-column",{attrs:{label:"公积金",align:"center"}},[a("el-table-column",{attrs:{prop:"salary.accumulationFundPer",label:"比率",width:"70px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.accumulationFundBase",label:"基数",width:"70px",align:"left"}})],1),a("el-table-column",{attrs:{prop:"salary.allSalary",label:"合计金额",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.allSalary",label:"实发金额",width:"100px",align:"left"}}),a("el-table-column",{attrs:{prop:"remake",label:"备注",width:"100px",align:"left"}}),a("el-table-column",{attrs:{fixed:"right",width:"200",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){return t.showeditSaltable(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleteSaltable(e.row)}}},[t._v("删除")])]}}])})],1)],1),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:t.total},on:{"current-change":t.currentChange,"size-change":t.sizeChange}})],1),a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[a("el-form",{attrs:{model:t.saltab}},[a("el-row",[a("el-form-item",{attrs:{label:"基本工资:",prop:"basicSalary"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入基本工资"},model:{value:t.saltab.basicSalary,callback:function(e){t.$set(t.saltab,"basicSalary",e)},expression:"saltab.basicSalary"}})],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"交通补助:",prop:"trafficSalary"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入交通补助"},model:{value:t.saltab.trafficSalary,callback:function(e){t.$set(t.saltab,"trafficSalary",e)},expression:"saltab.trafficSalary"}})],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"午餐补助:",prop:"lunchSalary"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入午餐补助"},model:{value:t.saltab.lunchSalary,callback:function(e){t.$set(t.saltab,"lunchSalary",e)},expression:"saltab.lunchSalary"}})],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"奖金:",prop:"bonus"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入奖金"},model:{value:t.saltab.bonus,callback:function(e){t.$set(t.saltab,"bonus",e)},expression:"saltab.bonus"}})],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.doUpdatesalarytable}},[t._v("确 定")])],1)])],1)},i=[],n={name:"SalTable",data:function(){return{importDataBtnText:"导入数据",importDataBtnIcon:"el-icon-upload2",importDataDisabled:!1,saltable:[],total:0,page:1,size:10,keyword:"",title:"",dialogVisible:!1,saltab:{basicSalary:"",trafficSalary:"",lunchSalary:"",bonus:""}}},mounted:function(){this.initsaltable()},methods:{onError:function(t,e,a){this.importDataBtnText="导入数据",this.importDataBtnIcon="el-icon-upload2",this.importDataDisabled=!1},onSuccess:function(t,e,a){this.importDataBtnText="导入数据",this.importDataBtnIcon="el-icon-upload2",this.importDataDisabled=!1,this.initEmps()},beforeUpload:function(){this.importDataBtnText="正在导入",this.importDataBtnIcon="el-icon-loading",this.importDataDisabled=!0},currentChange:function(t){this.page=t,this.initsaltable()},sizeChange:function(t){this.size=t,this.initsaltable()},exportData:function(){window.open("/salary/table/export","_parent")},showeditSaltable:function(t){this.title="编辑员工资",this.saltab=t,this.dialogVisible=!0},deleteSaltable:function(t){var e=this;this.$confirm("此操作将删除工号【"+t.workID+"】工资记录，是否继续？","提示",{cancelButtonText:"取消",confirmButtonText:"确定"}).then((function(){e.deleteRequest("/salary/table/"+t.id).then((function(t){t&&e.initsaltable()}))})).catch((function(){e.$message.info("取消删除!")}))},initsaltable:function(){var t=this;this.getRequest("/salary/table/?page"+this.page+"&size="+this.size).then((function(e){e&&(t.saltable=e.data,t.total=e.total)}))},doUpdatesalarytable:function(){var t=this;this.postRequest("/salary/table/",this.saltab).then((function(e){e&&(t.initsaltable(),t.dialogVisible=!1)}))}}},r=n,s=a("2877"),o=Object(s["a"])(r,l,i,!1,null,"499ba611",null);e["default"]=o.exports},"2bc5":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:t.showAddSalaryView}},[t._v("添加工资账套")]),a("el-button",{attrs:{icon:"el-icon-refresh",type:"success"},on:{click:t.initSalaries}})],1),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{attrs:{data:t.salaries,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{width:"120",prop:"name",label:"账套名称"}}),a("el-table-column",{attrs:{width:"70",prop:"basicSalary",label:"基本工资"}}),a("el-table-column",{attrs:{width:"70",prop:"trafficSalary",label:"交通补助"}}),a("el-table-column",{attrs:{width:"70",prop:"lunchSalary",label:"午餐补助"}}),a("el-table-column",{attrs:{width:"70",prop:"bonus",label:"奖金"}}),a("el-table-column",{attrs:{width:"100",prop:"createDate",label:"启用时间"}}),a("el-table-column",{attrs:{label:"养老金",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"pensionPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"pensionBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"医疗保险",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"medicalPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"medicalBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"公积金",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"accumulationFundPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"accumulationFundBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){return t.showEditSalaryView(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleteSalary(e.row)}}},[t._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticStyle:{display:"flex","justify-content":"space-around","align-items":"center"}},[a("el-steps",{attrs:{direction:"vertical",active:t.activeItemIndex}},t._l(t.salaryItemName,(function(t,e){return a("el-step",{key:e,attrs:{title:t}})})),1),t._l(t.salary,(function(e,l,i){return a("el-input",{directives:[{name:"show",rawName:"v-show",value:t.activeItemIndex===i,expression:"activeItemIndex===index"}],key:i,staticStyle:{width:"200px"},attrs:{placeholder:"请输入"+t.salaryItemName[i]+"..."},model:{value:t.salary[l],callback:function(e){t.$set(t.salary,l,e)},expression:"salary[title]"}})}))],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.preStep}},[t._v(t._s(10===t.activeItemIndex?"取消":"上一步"))]),a("el-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v(t._s(10===t.activeItemIndex?"完成":"下一步"))])],1)])],1)},i=[],n=(a("7f7f"),{name:"SalSob",data:function(){return{dialogVisible:!1,dialogTitle:"添加工资账套",salaries:[],activeItemIndex:0,salaryItemName:["基本工资","交通补助","午餐补助","奖金","养老金比率","养老金基数","医疗保险比率","医疗保险基数","公积金比率","公积金基数","账套名称"],salary:{basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0,name:""}}},mounted:function(){this.initSalaries()},methods:{showEditSalaryView:function(t){this.dialogTitle="修改工资账套",this.dialogVisible=!0,this.salary.basicSalary=t.basicSalary,this.salary.trafficSalary=t.trafficSalary,this.salary.lunchSalary=t.lunchSalary,this.salary.bonus=t.bonus,this.salary.pensionPer=t.pensionPer,this.salary.pensionBase=t.pensionBase,this.salary.medicalPer=t.medicalPer,this.salary.medicalBase=t.medicalBase,this.salary.accumulationFundPer=t.accumulationFundPer,this.salary.accumulationFundBase=t.accumulationFundBase,this.salary.name=t.name,this.salary.id=t.id},deleteSalary:function(t){var e=this;this.$confirm("此操作将删除【"+t.name+"】账套，是否继续？","提示",{cancelButtonText:"取消",confirmButtonText:"确定"}).then((function(){e.deleteRequest("/salary/sob/"+t.id).then((function(t){t&&e.initSalaries()}))})).catch((function(){e.$message.info("取消删除!")}))},preStep:function(){0!==this.activeItemIndex&&(10!==this.activeItemIndex?this.activeItemIndex--:this.dialogVisible=!1)},nextStep:function(){var t=this;10!==this.activeItemIndex?this.activeItemIndex++:this.salary.id?this.putRequest("/salary/sob/",this.salary).then((function(e){e&&(t.initSalaries(),t.dialogVisible=!1)})):this.postRequest("/salary/sob/",this.salary).then((function(e){e&&(t.initSalaries(),t.dialogVisible=!1)}))},showAddSalaryView:function(){this.salary={basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0},this.dialogTitle="添加工资账套",this.activeItemIndex=0,this.dialogVisible=!0},initSalaries:function(){var t=this;this.getRequest("/salary/sob/").then((function(e){e&&(t.salaries=e)}))}}}),r=n,s=a("2877"),o=Object(s["a"])(r,l,i,!1,null,"28e23a35",null);e["default"]=o.exports},"6ac9":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{attrs:{data:t.emps,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",fixed:"",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"workID",label:"工号",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"email",label:"电子邮件",width:"200",align:"left"}}),a("el-table-column",{attrs:{prop:"phone",label:"电话号码",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"department.name",label:"所属部门",width:"120",align:"left"}}),a("el-table-column",{attrs:{label:"所属部门",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.salary?a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("table",[a("tr",[a("td",[t._v("基本工资")]),a("td",[t._v(t._s(e.row.salary.basicSalary))])]),a("tr",[a("td",[t._v("交通补助")]),a("td",[t._v(t._s(e.row.salary.trafficSalary))])]),a("tr",[a("td",[t._v("午餐补助")]),a("td",[t._v(t._s(e.row.salary.lunchSalary))])]),a("tr",[a("td",[t._v("奖金")]),a("td",[t._v(t._s(e.row.salary.bonus))])]),a("tr",[a("td",[t._v("养老金比率")]),a("td",[t._v(t._s(e.row.salary.pensionPer))])]),a("tr",[a("td",[t._v("养老金基数")]),a("td",[t._v(t._s(e.row.salary.pensionBase))])]),a("tr",[a("td",[t._v("医疗保险比率")]),a("td",[t._v(t._s(e.row.salary.medicalPer))])]),a("tr",[a("td",[t._v("医疗保险基数")]),a("td",[t._v(t._s(e.row.salary.medicalBase))])]),a("tr",[a("td",[t._v("公积金比率")]),a("td",[t._v(t._s(e.row.salary.accumulationFundPer))])]),a("tr",[a("td",[t._v("公积金基数")]),a("td",[t._v(t._s(e.row.salary.accumulationFundBase))])]),a("tr",[a("td",[t._v("启用时间")]),a("td",[t._v(t._s(e.row.salary.createDate))])])])]),a("el-tag",[t._v(t._s(e.row.salary.name))])],1):a("el-tag",[t._v("暂未设置")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"left",title:"修改工资账套",width:"200",trigger:"click"},on:{show:function(a){return t.showPop(e.row.salary)},hide:function(a){return t.hidePop(e.row)}}},[a("div",[a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.currentSalary,callback:function(e){t.currentSalary=e},expression:"currentSalary"}},t._l(t.salaries,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[t._v("修改工资账套")])],1)]}}])})],1),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:t.total},on:{"size-change":t.sizeChange,"current-change":t.currentChange}})],1)],1)])},i=[],n={name:"SalSobCfg",data:function(){return{emps:[],total:0,currentPage:1,currentSize:10,currentSalary:null,salaries:[]}},mounted:function(){this.initEmps(),this.initSalaries()},methods:{sizeChange:function(t){this.currentSize=t,this.initEmps()},currentChange:function(t){this.currentPage=t,this.initEmps()},hidePop:function(t){var e=this;this.currentSalary&&this.putRequest("/salary/sobcfg/?eid="+t.id+"&sid="+this.currentSalary).then((function(t){t&&e.initEmps()}))},showPop:function(t){this.currentSalary=t?t.id:null},initSalaries:function(){var t=this;this.getRequest("/salary/sobcfg/salaries").then((function(e){e&&(t.salaries=e)}))},initEmps:function(){var t=this;this.getRequest("/salary/sobcfg/?page="+this.currentPage+"&size="+this.currentSize).then((function(e){e&&(t.emps=e.data,t.total=e.total)}))}}},r=n,s=a("2877"),o=Object(s["a"])(r,l,i,!1,null,"45b7448f",null);e["default"]=o.exports},fbac:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入关键字进行搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:t.showAdvanceSearchView},on:{clear:t.initsalmonth},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.initsalmonth(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:t.showAdvanceSearchView},on:{click:t.initsalmonth}},[t._v("\n        搜索\n    ")]),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{attrs:{data:t.salmonth,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{prop:"workID",label:"员工号",width:"130px",align:"left"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"130px",align:"left"}}),a("el-table-column",{attrs:{prop:"department.name",label:"部门",width:"130px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.createDate",label:"日期",width:"130px",align:"left"}}),a("el-table-column",{attrs:{prop:"salary.allSalary",label:"工资",width:"130px",align:"left"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"130px",align:"left"}}),a("el-table-column",{attrs:{fixed:"right",width:"200px",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){return t.showeditSalmonth(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleteSalmonth(e.row)}}},[t._v("删除")])]}}])})],1)],1),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:t.total},on:{"current-change":t.currentChange,"size-change":t.sizeChange}})],1),a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div"),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.doUpdatesalmonth}},[t._v("确 定")])],1)])],1)},i=[],n=(a("7f7f"),{name:"SalMonth",data:function(){return{salmonth:[],page:1,size:10,total:0,keyword:"",title:"",dialogVisible:!1}},mounted:function(){this.initsalmonth()},methods:{currentChange:function(t){this.page=t,this.initsalmonth()},sizeChange:function(t){this.size=t,this.initsalmonth()},deleteSalmonth:function(t){var e=this;this.$confirm("此操作将删除工号【"+t.name+"】工资记录，是否继续？","提示",{cancelButtonText:"取消",confirmButtonText:"确定"}).then((function(){e.deleteRequest("/salary/month/"+t.workID).then((function(t){t&&e.initEmployeeecs()}))})).catch((function(){e.$message.info("取消删除!")}))},showeditSalmonth:function(t){this.title="编辑月末信息",this.dialogVisible=!0},doUpdatesalmonth:function(){var t=this;this.postRequest("/salary/month/").then((function(e){e&&(t.initsalmonth(),t.dialogVisible=!1)}))},initsalmonth:function(){var t=this;this.getRequest("/salary/month/?page"+this.page+"&size="+this.size).then((function(e){e&&(t.salmonth=e.data,t.total=e.total)}))}}}),r=n,s=a("2877"),o=Object(s["a"])(r,l,i,!1,null,"5175aef7",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-319362c8.755afca6.js.map