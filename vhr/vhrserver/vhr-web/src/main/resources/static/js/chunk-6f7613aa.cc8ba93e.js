(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f7613aa"],{5865:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[i("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入员工名或工号进行搜索，按回车搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.initEmps},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initEmps(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.showAdvanceSearchView},on:{click:e.initEmps}},[e._v("\n                      搜索\n                  ")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showAdvanceSearchView=!e.showAdvanceSearchView}}},[i("i",{class:e.showAdvanceSearchView?"fa fa-angle-double-up":"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}}),e._v("\n                      高级搜索\n                  ")])],1),i("div",[i("el-upload",{staticStyle:{display:"inline-flex","margin-right":"8px"},attrs:{"show-file-list":!1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,"on-error":e.onError,disabled:e.importDataDisabled,action:"/employee/basic/import"}},[i("el-button",{attrs:{disabled:e.importDataDisabled,type:"success",icon:e.importDataBtnIcon}},[e._v("\n                          "+e._s(e.importDataBtnText)+"\n                      ")])],1),i("el-button",{attrs:{type:"success",icon:"el-icon-download"},on:{click:e.exportData}},[e._v("\n                      导出数据\n                  ")]),i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.showAddEmpView}},[e._v("\n                      添加员工\n                  ")])],1)]),i("transition",{attrs:{name:"slide-fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanceSearchView,expression:"showAdvanceSearchView"}],staticStyle:{border:"1px solid #409eff","border-radius":"5px","box-sizing":"border-box",padding:"5px",margin:"10px 0"}},[i("el-row",[i("el-col",{attrs:{span:5}},[e._v("\n                          政治面貌:\n                          "),i("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"政治面貌",size:"mini"},model:{value:e.searchValue.politicId,callback:function(t){e.$set(e.searchValue,"politicId",t)},expression:"searchValue.politicId"}},e._l(e.politicsstatus,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v("\n                          民族:\n                          "),i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"民族",size:"mini"},model:{value:e.searchValue.nationId,callback:function(t){e.$set(e.searchValue,"nationId",t)},expression:"searchValue.nationId"}},e._l(e.nations,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v("\n                          职位:\n                          "),i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"职位",size:"mini"},model:{value:e.searchValue.posId,callback:function(t){e.$set(e.searchValue,"posId",t)},expression:"searchValue.posId"}},e._l(e.positions,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v("\n                          职称:\n                          "),i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"职称",size:"mini"},model:{value:e.searchValue.jobLevelId,callback:function(t){e.$set(e.searchValue,"jobLevelId",t)},expression:"searchValue.jobLevelId"}},e._l(e.joblevels,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:7}},[e._v("\n                          聘用形式:\n                          "),i("el-radio-group",{model:{value:e.searchValue.engageForm,callback:function(t){e.$set(e.searchValue,"engageForm",t)},expression:"searchValue.engageForm"}},[i("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),i("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),i("el-row",{staticStyle:{"margin-top":"10px"}},[i("el-col",{attrs:{span:5}},[e._v("\n                          所属部门:\n                          "),i("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.popVisible,callback:function(t){e.popVisible=t},expression:"popVisible"}},[i("el-tree",{attrs:{"default-expand-all":"",data:e.allDeps,props:e.defaultProps},on:{"node-click":e.searvhViewHandleNodeClick}}),i("div",{staticStyle:{width:"120px",display:"inline-flex","font-size":"13px",border:"1px solid #dedede",height:"26px","border-radius":"5px",cursor:"pointer","align-items":"center","padding-left":"8px","box-sizing":"border-box","margin-left":"3px"},attrs:{slot:"reference"},on:{click:e.showDepView},slot:"reference"},[e._v(e._s(e.inputDepName)+"\n                              ")])],1)],1),i("el-col",{attrs:{span:12}},[e._v("\n                          入职日期:\n                          "),i("el-date-picker",{attrs:{type:"daterange",size:"mini","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchValue.beginDateScope,callback:function(t){e.$set(e.searchValue,"beginDateScope",t)},expression:"searchValue.beginDateScope"}})],1),i("el-col",{attrs:{span:5,offset:2}},[i("el-button",{attrs:{size:"mini"}},[e._v("取消")]),i("el-button",{attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.initEmps("advanced")}}},[e._v("搜索")])],1)],1)],1)])],1),i("div",{staticStyle:{"margin-top":"10px"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.emps,stripe:"",border:"","element-loading-text":"正在加载...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"name",fixed:"",align:"left",label:"姓名",width:"90"}}),i("el-table-column",{attrs:{prop:"workID",label:"工号",align:"left",width:"85"}}),i("el-table-column",{attrs:{prop:"gender",label:"性别",align:"left",width:"85"}}),i("el-table-column",{attrs:{prop:"birthday",width:"95",align:"left",label:"出生日期"}}),i("el-table-column",{attrs:{prop:"idCard",width:"150",align:"left",label:"身份证号码"}}),i("el-table-column",{attrs:{prop:"wedlock",width:"70",label:"婚姻状况"}}),i("el-table-column",{attrs:{prop:"nation.name",width:"50",label:"民族"}}),i("el-table-column",{attrs:{prop:"nativePlace",width:"80",label:"籍贯"}}),i("el-table-column",{attrs:{prop:"politicsstatus.name",label:"政治面貌"}}),i("el-table-column",{attrs:{prop:"email",width:"180",align:"left",label:"电子邮件"}}),i("el-table-column",{attrs:{prop:"phone",width:"100",align:"left",label:"电话号码"}}),i("el-table-column",{attrs:{prop:"address",width:"220",align:"left",label:"联系地址"}}),i("el-table-column",{attrs:{prop:"department.name",width:"100",align:"left",label:"所属部门"}}),i("el-table-column",{attrs:{prop:"position.name",width:"100",label:"职位"}}),i("el-table-column",{attrs:{prop:"jobLevel.name",width:"100",label:"职称"}}),i("el-table-column",{attrs:{prop:"engageForm",width:"100",align:"left",label:"聘用形式"}}),i("el-table-column",{attrs:{prop:"tiptopDegree",width:"80",align:"left",label:"最高学历"}}),i("el-table-column",{attrs:{prop:"specialty",width:"150",align:"left",label:"专业"}}),i("el-table-column",{attrs:{prop:"school",width:"150",align:"left",label:"毕业院校"}}),i("el-table-column",{attrs:{prop:"beginDate",width:"95",align:"left",label:"入职日期"}}),i("el-table-column",{attrs:{prop:"conversionTime",width:"95",align:"left",label:"转正日期"}}),i("el-table-column",{attrs:{prop:"beginContract",width:"95",align:"left",label:"合同起始日期"}}),i("el-table-column",{attrs:{prop:"endContract",width:"95",align:"left",label:"合同截止日期"}}),i("el-table-column",{attrs:{width:"100",align:"left",label:"合同期限"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",[e._v(e._s(t.row.contractTerm))]),e._v("\n                      年\n                  ")]}}])}),i("el-table-column",{attrs:{fixed:"right",width:"200",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini"},on:{click:function(i){return e.showEditEmpView(t.row)}}},[e._v("编辑")]),i("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"primary"}},[e._v("查看高级资料")]),i("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.deleteEmp(t.row)}}},[e._v("删除\n                      ")])]}}])})],1),i("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[i("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)],1),i("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",[i("el-form",{ref:"empForm",attrs:{model:e.emp,rules:e.rules}},[i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入员工姓名"},model:{value:e.emp.name,callback:function(t){e.$set(e.emp,"name",t)},expression:"emp.name"}})],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"性别:",prop:"gender"}},[i("el-radio-group",{model:{value:e.emp.gender,callback:function(t){e.$set(e.emp,"gender",t)},expression:"emp.gender"}},[i("el-radio",{attrs:{label:"男"}},[e._v("男")]),i("el-radio",{attrs:{label:"女"}},[e._v("女")])],1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"出生日期:",prop:"birthday"}},[i("el-date-picker",{staticStyle:{width:"150px"},attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"出生日期"},model:{value:e.emp.birthday,callback:function(t){e.$set(e.emp,"birthday",t)},expression:"emp.birthday"}})],1)],1),i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"政治面貌:",prop:"politicId"}},[i("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"政治面貌",size:"mini"},model:{value:e.emp.politicId,callback:function(t){e.$set(e.emp,"politicId",t)},expression:"emp.politicId"}},e._l(e.politicsstatus,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"民族:",prop:"nationId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"民族",size:"mini"},model:{value:e.emp.nationId,callback:function(t){e.$set(e.emp,"nationId",t)},expression:"emp.nationId"}},e._l(e.nations,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"籍贯:",prop:"nativePlace"}},[i("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入籍贯"},model:{value:e.emp.nativePlace,callback:function(t){e.$set(e.emp,"nativePlace",t)},expression:"emp.nativePlace"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"电子邮箱:",prop:"email"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-message",placeholder:"请输入电子邮箱"},model:{value:e.emp.email,callback:function(t){e.$set(e.emp,"email",t)},expression:"emp.email"}})],1)],1),i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"联系地址:",prop:"address"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入联系地址"},model:{value:e.emp.address,callback:function(t){e.$set(e.emp,"address",t)},expression:"emp.address"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"职位:",prop:"posId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"职位",size:"mini"},model:{value:e.emp.posId,callback:function(t){e.$set(e.emp,"posId",t)},expression:"emp.posId"}},e._l(e.positions,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"职称:",prop:"jobLevelId"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"职称",size:"mini"},model:{value:e.emp.jobLevelId,callback:function(t){e.$set(e.emp,"jobLevelId",t)},expression:"emp.jobLevelId"}},e._l(e.joblevels,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"所属部门:",prop:"departmentId"}},[i("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.popVisible,callback:function(t){e.popVisible=t},expression:"popVisible"}},[i("el-tree",{attrs:{"default-expand-all":"",data:e.allDeps,props:e.defaultProps},on:{"node-click":e.handleNodeClick}}),i("div",{staticStyle:{width:"150px",display:"inline-flex","font-size":"13px",border:"1px solid #dedede",height:"26px","border-radius":"5px",cursor:"pointer","align-items":"center","padding-left":"8px","box-sizing":"border-box"},attrs:{slot:"reference"},on:{click:e.showDepView},slot:"reference"},[e._v(e._s(e.inputDepName)+"\n                                  ")])],1)],1)],1),i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"电话号码:",prop:"phone"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{size:"mini","prefix-icon":"el-icon-phone",placeholder:"电话号码"},model:{value:e.emp.phone,callback:function(t){e.$set(e.emp,"phone",t)},expression:"emp.phone"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"工号:",prop:"workID"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"工号",disabled:""},model:{value:e.emp.workID,callback:function(t){e.$set(e.emp,"workID",t)},expression:"emp.workID"}})],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"学历:",prop:"tiptopDegree"}},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"学历",size:"mini"},model:{value:e.emp.tiptopDegree,callback:function(t){e.$set(e.emp,"tiptopDegree",t)},expression:"emp.tiptopDegree"}},e._l(e.tiptopDegrees,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"毕业院校:",prop:"school"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"毕业院校名称"},model:{value:e.emp.school,callback:function(t){e.$set(e.emp,"school",t)},expression:"emp.school"}})],1)],1),i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"专业名称:",prop:"specialty"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入专业名称"},model:{value:e.emp.specialty,callback:function(t){e.$set(e.emp,"specialty",t)},expression:"emp.specialty"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"入职日期:",prop:"beginDate"}},[i("el-date-picker",{staticStyle:{width:"130px"},attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"入职日期"},model:{value:e.emp.beginDate,callback:function(t){e.$set(e.emp,"beginDate",t)},expression:"emp.beginDate"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"转正日期:",prop:"conversionTime"}},[i("el-date-picker",{staticStyle:{width:"130px"},attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"转正日期"},model:{value:e.emp.conversionTime,callback:function(t){e.$set(e.emp,"conversionTime",t)},expression:"emp.conversionTime"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"合同起始日期:",prop:"beginContract"}},[i("el-date-picker",{staticStyle:{width:"120px"},attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"合同起始日期"},model:{value:e.emp.beginContract,callback:function(t){e.$set(e.emp,"beginContract",t)},expression:"emp.beginContract"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"合同终止日期:",prop:"endContract"}},[i("el-date-picker",{staticStyle:{width:"120px"},attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"合同终止日期"},model:{value:e.emp.endContract,callback:function(t){e.$set(e.emp,"endContract",t)},expression:"emp.endContract"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"身份证号码:",prop:"idCard"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入身份证号码"},model:{value:e.emp.idCard,callback:function(t){e.$set(e.emp,"idCard",t)},expression:"emp.idCard"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"聘用形式:",prop:"engageForm"}},[i("el-radio-group",{model:{value:e.emp.engageForm,callback:function(t){e.$set(e.emp,"engageForm",t)},expression:"emp.engageForm"}},[i("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),i("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"婚姻状况:",prop:"wedlock"}},[i("el-radio-group",{model:{value:e.emp.wedlock,callback:function(t){e.$set(e.emp,"wedlock",t)},expression:"emp.wedlock"}},[i("el-radio",{attrs:{label:"已婚"}},[e._v("已婚")]),i("el-radio",{attrs:{label:"未婚"}},[e._v("未婚")]),i("el-radio",{attrs:{label:"离异"}},[e._v("离异")])],1)],1)],1)],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.doAddEmp}},[e._v("确 定")])],1)])],1)},a=[],n=(i("7f7f"),{name:"PerEmp",data:function(){return{searchValue:{politicId:null,nationId:null,jobLevelId:null,posId:null,engageForm:null,departmentId:null,beginDateScope:null},title:"",importDataBtnText:"导入数据",importDataBtnIcon:"el-icon-upload2",importDataDisabled:!1,showAdvanceSearchView:!1,allDeps:[],emps:[],loading:!1,popVisible:!1,dialogVisible:!1,total:0,page:1,keyword:"",size:10,nations:[],joblevels:[],politicsstatus:[],positions:[],tiptopDegrees:["本科","大专","硕士","博士","高中","初中","小学","其他"],options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],inputDepName:"所属部门",emp:{name:"javaboy",gender:"男",birthday:"1989-12-31",idCard:"610122199001011256",wedlock:"已婚",nationId:1,nativePlace:"陕西",politicId:13,email:"laowang@qq.com",phone:"18565558897",address:"深圳市南山区",departmentId:null,jobLevelId:9,posId:29,engageForm:"劳务合同",tiptopDegree:"本科",specialty:"信息管理与信息系统",school:"深圳大学",beginDate:"2017-12-31",workState:"在职",workID:"00000057",contractTerm:2,conversionTime:"2018-03-31",notworkDate:null,beginContract:"2017-12-31",endContract:"2019-12-31",workAge:null},defaultProps:{children:"children",label:"name"},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],gender:[{required:!0,message:"请输入性别",trigger:"blur"}],birthday:[{required:!0,message:"请输入出生日期",trigger:"blur"}],idCard:[{required:!0,message:"请输入身份证号码",trigger:"blur"},{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message:"身份证号码格式不正确",trigger:"blur"}],wedlock:[{required:!0,message:"请输入婚姻状况",trigger:"blur"}],nationId:[{required:!0,message:"请输入您组",trigger:"blur"}],nativePlace:[{required:!0,message:"请输入籍贯",trigger:"blur"}],politicId:[{required:!0,message:"请输入政治面貌",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],address:[{required:!0,message:"请输入员工地址",trigger:"blur"}],departmentId:[{required:!0,message:"请输入部门名称",trigger:"blur"}],jobLevelId:[{required:!0,message:"请输入职称",trigger:"blur"}],posId:[{required:!0,message:"请输入职位",trigger:"blur"}],engageForm:[{required:!0,message:"请输入聘用形式",trigger:"blur"}],tiptopDegree:[{required:!0,message:"请输入学历",trigger:"blur"}],specialty:[{required:!0,message:"请输入专业",trigger:"blur"}],school:[{required:!0,message:"请输入毕业院校",trigger:"blur"}],beginDate:[{required:!0,message:"请输入入职日期",trigger:"blur"}],workState:[{required:!0,message:"请输入工作状态",trigger:"blur"}],workID:[{required:!0,message:"请输入工号",trigger:"blur"}],contractTerm:[{required:!0,message:"请输入合同期限",trigger:"blur"}],conversionTime:[{required:!0,message:"请输入转正日期",trigger:"blur"}],notworkDate:[{required:!0,message:"请输入离职日期",trigger:"blur"}],beginContract:[{required:!0,message:"请输入合同起始日期",trigger:"blur"}],endContract:[{required:!0,message:"请输入合同结束日期",trigger:"blur"}],workAge:[{required:!0,message:"请输入工龄",trigger:"blur"}]}}},mounted:function(){this.initEmps(),this.initData(),this.initPositions()},methods:{searvhViewHandleNodeClick:function(e){this.inputDepName=e.name,this.searchValue.departmentId=e.id,this.popVisible=!this.popVisible},onError:function(e,t,i){this.importDataBtnText="导入数据",this.importDataBtnIcon="el-icon-upload2",this.importDataDisabled=!1},onSuccess:function(e,t,i){this.importDataBtnText="导入数据",this.importDataBtnIcon="el-icon-upload2",this.importDataDisabled=!1,this.initEmps()},beforeUpload:function(){this.importDataBtnText="正在导入",this.importDataBtnIcon="el-icon-loading",this.importDataDisabled=!0},exportData:function(){window.open("/employee/basic/export","_parent")},emptyEmp:function(){this.emp={name:"",gender:"",birthday:"",idCard:"",wedlock:"",nationId:1,nativePlace:"",politicId:13,email:"",phone:"",address:"",departmentId:null,jobLevelId:9,posId:29,engageForm:"",tiptopDegree:"",specialty:"",school:"",beginDate:"",workID:"",contractTerm:2,conversionTime:"",notworkDate:null,beginContract:"",endContract:"",workAge:null},this.inputDepName=""},showEditEmpView:function(e){this.initPositions(),this.title="编辑员工信息",this.emp=e,this.inputDepName=e.department.name,this.dialogVisible=!0},deleteEmp:function(e){var t=this;this.$confirm("此操作将永久删除【"+e.name+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/employee/basic/"+e.id).then((function(e){e&&t.initEmps()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},doAddEmp:function(){var e=this;this.emp.id?this.$refs["empForm"].validate((function(t){t&&e.putRequest("/employee/basic/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())}))})):this.$refs["empForm"].validate((function(t){t&&e.postRequest("/employee/basic/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())}))}))},handleNodeClick:function(e){this.inputDepName=e.name,this.emp.departmentId=e.id,this.popVisible=!this.popVisible},showDepView:function(){this.popVisible=!this.popVisible},initPositions:function(){var e=this;this.getRequest("/employee/basic/positions").then((function(t){t&&(e.positions=t)}))},getMaxWordID:function(){var e=this;this.getRequest("/employee/basic/maxWorkID").then((function(t){t&&(e.emp.workID=t.obj)}))},initData:function(){var e=this;window.sessionStorage.getItem("nations")?this.nations=JSON.parse(window.sessionStorage.getItem("nations")):this.getRequest("/employee/basic/nations").then((function(t){t&&(e.nations=t,window.sessionStorage.setItem("nations",JSON.stringify(t)))})),window.sessionStorage.getItem("joblevels")?this.joblevels=JSON.parse(window.sessionStorage.getItem("joblevels")):this.getRequest("/employee/basic/joblevels").then((function(t){t&&(e.joblevels=t,window.sessionStorage.setItem("joblevels",JSON.stringify(t)))})),window.sessionStorage.getItem("politicsstatus")?this.politicsstatus=JSON.parse(window.sessionStorage.getItem("politicsstatus")):this.getRequest("/employee/basic/politicsstatus").then((function(t){t&&(e.politicsstatus=t,window.sessionStorage.setItem("politicsstatus",JSON.stringify(t)))})),window.sessionStorage.getItem("deps")?this.allDeps=JSON.parse(window.sessionStorage.getItem("deps")):this.getRequest("/employee/basic/deps").then((function(t){t&&(e.allDeps=t,window.sessionStorage.setItem("deps",JSON.stringify(t)))}))},sizeChange:function(e){this.size=e,this.initEmps()},currentChange:function(e){this.page=e,this.initEmps()},showAddEmpView:function(){this.emptyEmp(),this.title="添加员工",this.getMaxWordID(),this.dialogVisible=!0},initEmps:function(e){var t=this;this.loading=!0;var i="/employee/basic/?page="+this.page+"&size="+this.size;e&&"advanced"===e?(this.searchValue.politicId&&(i+="&politicId="+this.searchValue.politicId),this.searchValue.nationId&&(i+="&nationId="+this.searchValue.nationId),this.searchValue.jobLevelId&&(i+="&jobLevelId="+this.searchValue.jobLevelId),this.searchValue.posId&&(i+="&posId="+this.searchValue.posId),this.searchValue.engageForm&&(i+="&engageForm="+this.searchValue.engageForm),this.searchValue.departmentId&&(i+="&departmentId="+this.searchValue.departmentId),this.searchValue.beginDateScope&&(i+="&beginDateScope="+this.searchValue.beginDateScope)):i+="&name="+this.keyword,this.getRequest(i).then((function(e){t.loading=!1,e&&(t.emps=e.data,t.total=e.total)}))}}}),o=n,r=(i("cd40"),i("2877")),s=Object(r["a"])(o,l,a,!1,null,null,null);t["default"]=s.exports},"5a4a":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入关键字进行搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.PerSalary},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.PerSalary(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.showAdvanceSearchView},on:{click:e.PerSalary}},[e._v("\n        搜索\n    ")]),i("div",{staticStyle:{"margin-top":"10px"}},[i("el-table",{attrs:{data:e.empsal,border:"",stripe:""}},[i("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),i("el-table-column",{attrs:{prop:"id",label:"序号",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"eid",label:"员工编号",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"adjustDate",label:"调薪日期",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"beforesalary",label:"调薪前",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"aftersalary",label:"调薪后",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"adjustReason",label:"调薪原因",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"remake",label:"备注",align:"center"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{on:{click:function(i){return e.editEmpadsal(t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{type:"danger"},on:{click:function(i){return e.deleteEmpeadsal(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)},a=[],n={name:"PerSalary",data:function(){return{empsal:[]}},mounted:function(){this.initempsal()},methods:{initempsal:function(){var e=this;this.getRequest("/personnel/salary/").then((function(t){t&&(e.empsal=t)}))},editEmpadsal:function(){},deleteEmpeadsal:function(){}}},o=n,r=i("2877"),s=Object(r["a"])(o,l,a,!1,null,"0b6e2f59",null);t["default"]=s.exports},"83ed":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入关键字进行搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.PerTrain},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.PerTrain(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.showAdvanceSearchView},on:{click:e.PerTrain}},[e._v("\n        搜索\n    ")]),i("div",{staticStyle:{"margin-top":"10px"}},[i("el-table",{attrs:{data:e.emptrain,border:"",stripe:"",size:"mini"}},[i("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),i("el-table-column",{attrs:{prop:"id",label:"序号",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"eid",label:"员工编号",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"traindate",label:"培训日期",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"traincontent",label:"培训内容",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"remake",label:"备注",align:"center"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{on:{click:function(i){return e.editemptrainView(t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{type:"danger"},on:{click:function(i){return e.deleteEmptrain(t.row)}}},[e._v("删除")])]}}])})],1),i("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[i("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)],1),i("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",[i("el-form",{attrs:{model:e.emptra}},[i("el-row",[i("el-form-item",{attrs:{label:"序号:",prop:"id"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入序号"},model:{value:e.emptra.id,callback:function(t){e.$set(e.emptra,"id",t)},expression:"emptra.id"}})],1)],1),i("el-row",[i("el-form-item",{attrs:{label:"工号:",prop:"eid"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入员工号"},model:{value:e.emptra.eid,callback:function(t){e.$set(e.emptra,"eid",t)},expression:"emptra.eid"}})],1)],1),i("el-row",[i("el-form-item",{attrs:{label:"培训日期:",prop:"trainDate"}},[i("el-date-picker",{staticStyle:{width:"130px"},attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"请输入日期"},model:{value:e.emptra.trainDate,callback:function(t){e.$set(e.emptra,"trainDate",t)},expression:"emptra.trainDate"}})],1)],1),i("el-row",[i("el-form-item",{attrs:{label:"培训内容",prop:"trainContent"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit"},model:{value:e.emptra.trainContent,callback:function(t){e.$set(e.emptra,"trainContent",t)},expression:"emptra.trainContent"}})],1)],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.doUpdateEmptra}},[e._v("确 定")])],1)])],1)},a=[],n={name:"PerTrain",data:function(){return{emptrain:[],total:0,page:1,size:10,title:"",dialogVisible:!1,emptra:{id:"",eid:"",trainDate:"",trainContent:""}}},mounted:function(){this.initemptrain()},methods:{editemptrainView:function(e){this.title="编辑员工培训信息",this.emptra=e,this.dialogVisible=!0},deleteEmptrain:function(e){var t=this;this.$confirm("此操作将删除工号【"+e.eid+"】培训记录，是否继续？","提示",{cancelButtonText:"取消",confirmButtonText:"确定"}).then((function(){t.deleteRequest("/personnel/train/"+e.id).then((function(e){e&&t.initemptrain()}))})).catch((function(){t.$message.info("取消删除!")}))},currentChange:function(e){this.size=e,this.initemptrain()},sizeChange:function(e){this.page=e,this.initemptrain()},initemptrain:function(){var e=this;this.getRequest("/personnel/train/").then((function(t){t&&(e.emptrain=t)}))},doUpdateEmptra:function(){var e=this;this.putRequest("/personnel/train/",this.emptra).then((function(t){t&&(e.initemptrain(),e.dialogVisible=!1)}))}}},o=n,r=i("2877"),s=Object(r["a"])(o,l,a,!1,null,"241905f2",null);t["default"]=s.exports},cd40:function(e,t,i){"use strict";var l=i("ef7f"),a=i.n(l);a.a},cfbb:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入关键字进行搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.PerMv},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.PerMv(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.showAdvanceSearchView},on:{click:e.PerMv}},[e._v("\n        搜索\n    ")]),i("div",{staticStyle:{"margin-top":"10px"}},[i("el-table",{attrs:{data:e.empermove,border:"",stripe:"",size:"mini"}},[i("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),i("el-table-column",{attrs:{prop:"id",label:"序号",fixed:"",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"eid",label:"员工编号",fixed:"",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"afterdepId",label:"调动后部门",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"afterjobId",label:"调动后职位",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"removedate",label:"调动日期",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"removetype",label:"调动原因",width:"",align:"left"}}),i("el-table-column",{attrs:{prop:"remake",label:"备注",align:"center"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{on:{click:function(i){return e.editempremove(t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{type:"danger"},on:{click:function(i){return e.deleteempremove(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)},a=[],n={name:"PerMv",data:function(){return{empermove:[]}},mounted:function(){this.initempremove()},methods:{initempremove:function(){var e=this;this.getRequest("/personnel/remove/").then((function(t){t&&(e.empermove=t)}))}}},o=n,r=i("2877"),s=Object(r["a"])(o,l,a,!1,null,"88d3602c",null);t["default"]=s.exports},d9ac:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-input",{staticStyle:{width:"350px","margin-right":"10px"},attrs:{placeholder:"请输入关键字进行搜索...","prefix-icon":"el-icon-search",clearable:"",disabled:e.showAdvanceSearchView},on:{clear:e.PerEc},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.PerEc(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.showAdvanceSearchView},on:{click:e.PerEc}},[e._v("\n        搜索\n    ")]),i("div",{staticStyle:{"margin-top":"10px"}},[i("el-table",{attrs:{data:e.employeeecs,border:"",stripe:""}},[i("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),i("el-table-column",{attrs:{prop:"id",label:"序号",width:"100px",align:"left"}}),i("el-table-column",{attrs:{prop:"eid",label:"员工编号",width:"100px",align:"left"}}),i("el-table-column",{attrs:{prop:"ecdate",label:"奖罚日期",width:"100px",align:"left"}}),i("el-table-column",{attrs:{prop:"ecreason",label:"奖罚原因",width:"100px",align:"left"}}),i("el-table-column",{attrs:{prop:"ecpoint",label:"奖罚分",width:"100px",align:"left"}}),i("el-table-column",{attrs:{prop:"ectype",label:"奖罚类别",width:"100px",align:"left"}}),i("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{on:{click:function(i){return e.showEditempecView(t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{type:"danger"},on:{click:function(i){return e.deleteEmpec(t.row)}}},[e._v("删除")])]}}])})],1),i("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[i("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)],1),i("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",[i("el-form",{attrs:{model:e.empec}},[i("el-row",[i("el-form-item",{attrs:{label:"序号:",prop:"id"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入序号"},model:{value:e.empec.id,callback:function(t){e.$set(e.empec,"id",t)},expression:"empec.id"}})],1)],1),i("el-row",[i("el-form-item",{attrs:{label:"工号:",prop:"eid"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入员工号"},model:{value:e.empec.eid,callback:function(t){e.$set(e.empec,"eid",t)},expression:"empec.eid"}})],1)],1),i("el-row",[i("el-form-item",{attrs:{label:"日期:",prop:"ecdate"}},[i("el-date-picker",{staticStyle:{width:"130px"},attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"请输入日期"},model:{value:e.empec.ecdate,callback:function(t){e.$set(e.empec,"ecdate",t)},expression:"empec.ecdate"}})],1)],1),i("el-row",[i("el-form-item",{attrs:{label:"奖罚原因:",prop:"ecreason"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入"},model:{value:e.empec.ecreason,callback:function(t){e.$set(e.empec,"ecreason",t)},expression:"empec.ecreason"}})],1)],1),i("el-row",[i("el-form-item",{attrs:{label:"奖罚分:",prop:"ecpoint"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入"},model:{value:e.empec.ecpoint,callback:function(t){e.$set(e.empec,"ecpoint",t)},expression:"empec.ecpoint"}})],1)],1),i("el-row",[i("el-form-item",{attrs:{label:"奖罚类型:",prop:"ectype"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini","prefix-icon":"el-icon-edit",placeholder:"请输入"},model:{value:e.empec.ectype,callback:function(t){e.$set(e.empec,"ectype",t)},expression:"empec.ectype"}})],1)],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.doUpdateEmpec}},[e._v("确 定")])],1)])],1)},a=[],n={name:"PerEc",data:function(){return{employeeecs:[],total:0,page:1,size:10,title:"",dialogVisible:!1,empec:{id:"",eid:"",ecdate:"",ecreason:"",ecpoint:"",ectype:""}}},mounted:function(){this.initEmployeeecs()},methods:{showEditempecView:function(e){this.title="编辑员工奖惩信息",this.empec=e,this.dialogVisible=!0},deleteEmpec:function(e){var t=this;this.$confirm("此操作将删除工号【"+e.eid+"】奖惩记录，是否继续？","提示",{cancelButtonText:"取消",confirmButtonText:"确定"}).then((function(){t.deleteRequest("/personnel/ec/"+e.id).then((function(e){e&&t.initEmployeeecs()}))})).catch((function(){t.$message.info("取消删除!")}))},currentChange:function(e){this.size=e,this.initEmployeeecs()},sizeChange:function(e){this.page=e,this.initEmployeeecs()},initEmployeeecs:function(){var e=this;this.getRequest("/personnel/ec/").then((function(t){t&&(e.employeeecs=t)}))},doUpdateEmpec:function(e){var t=this;this.putRequest("/personnel/ec/",this.empec).then((function(e){e&&(t.initEmployeeecs(),t.dialogVisible=!1)}))}}},o=n,r=i("2877"),s=Object(r["a"])(o,l,a,!1,null,"9c6453b8",null);t["default"]=s.exports},ef7f:function(e,t,i){}}]);
//# sourceMappingURL=chunk-6f7613aa.cc8ba93e.js.map