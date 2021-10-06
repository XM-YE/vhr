<template>
    <div>
        <div style="display: flex;justify-content: space-between">
            <div>
              <el-input placeholder="请输入员工名或工号进行搜索，按回车搜索..." prefix-icon="el-icon-search"
                  clearable
                  @clear="searchSal"
                  style="width: 350px;margin-right: 10px" v-model="keyword"
                  @keydown.enter.native="searchSal" :disabled="showAdvanceSearchView">
              </el-input>
                <el-button icon="el-icon-search" type="primary" @click="searchSal" :disabled="showAdvanceSearchView">
                搜索
                </el-button>
            </div>
            <div>
             <el-upload
                :show-file-list="false"
                :before-upload="beforeUpload"
                :on-success="onSuccess"
                :on-error="onError"
                :disabled="importDataDisabled"
                style="display: inline-flex;margin-right: 8px"
                action="/employee/basic/import">
               <el-button :disabled="importDataDisabled" type="success" :icon="importDataBtnIcon">
                   {{importDataBtnText}}
               </el-button>
             </el-upload>
              <el-button type="success" @click="exportData" icon="el-icon-download">
                  导出数据
              </el-button>
            </div>
        </div>
        <div style="margin-top: 10px">
            <el-table :data="saltable" border stripe size="mini">
                <el-table-column type="selection" align="left" width="55"></el-table-column>
                <el-table-column prop="workID" label="员工号" width="100px" align="left"></el-table-column>
                <el-table-column prop="name" label="员工姓名" width="100px" align="left"></el-table-column>
                <el-table-column prop="salary.basicSalary" label="基本工资" width="100px" align="left"></el-table-column>
                <el-table-column prop="salary.trafficSalary" label="交通补助" width="100px" align="left"></el-table-column>
                <el-table-column prop="salary.lunchSalary" label="午餐补助" width="100px" align="left"></el-table-column>
                <el-table-column prop="salary.bonus" label="奖金" width="100px" align="left"></el-table-column>
                <el-table-column label="养老金" align="center">
                <el-table-column prop="salary.pensionPer" label="比率" width="70px" align="left"></el-table-column>
                <el-table-column prop="salary.pensionBase" label="基数" width="70px" align="left"></el-table-column>
                </el-table-column>
                <el-table-column label="医疗保险" align="center">
                <el-table-column prop="salary.medicalPer" label="比率" width="70px" align="left"></el-table-column>
                <el-table-column prop="salary.medicalBase" label="基数" width="70px" align="left"></el-table-column>
                </el-table-column>
                <el-table-column label="公积金" align="center">
                <el-table-column prop="salary.accumulationFundPer" label="比率" width="70px" align="left"></el-table-column>
                <el-table-column prop="salary.accumulationFundBase" label="基数" width="70px" align="left"></el-table-column>
                </el-table-column>
                <el-table-column prop="salary.allSalary" label="合计金额" width="100px" align="left"></el-table-column>
                <el-table-column prop="salary.allSalary" label="实发金额" width="100px" align="left"></el-table-column>
                <el-table-column prop="remake" label="备注" width="100px" align="left"></el-table-column>
                <el-table-column
                        fixed="right"
                        width="200"
                        label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="showeditSaltable(scope.row)" >编辑</el-button>
                        <el-button @click="deleteSaltable(scope.row)" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div style="display: flex;justify-content: flex-end">
            <el-pagination
                    background
                    @current-change="currentChange"
                    @size-change="sizeChange"
                    layout="sizes, prev, pager, next, jumper, ->, total, slot"
                    :total="total">
            </el-pagination>
        </div>
        <el-dialog :title="title"
                   :visible.sync="dialogVisible"
                   width="80%">
            <div>
                <el-form :model="saltab">
                    <el-row>
                        <el-form-item label="基本工资:" prop="basicSalary">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="saltab.basicSalary"
                                      placeholder="请输入基本工资"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="交通补助:" prop="trafficSalary">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="saltab.trafficSalary"
                                      placeholder="请输入交通补助"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="午餐补助:" prop="lunchSalary">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="saltab.lunchSalary"
                                      placeholder="请输入午餐补助"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="奖金:" prop="bonus">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="saltab.bonus"
                                      placeholder="请输入奖金"></el-input>
                        </el-form-item>
                    </el-row>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doUpdatesalarytable">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "SalTable",
        data(){
            return {
                importDataBtnText: '导入数据',
                importDataBtnIcon: 'el-icon-upload2',
                importDataDisabled: false,
                saltable:[],
                total:0,
                page:1,
                size:10,
                keyword:'',
                title:'',
                dialogVisible:false,
                saltab:{
                    basicSalary:'',
                    trafficSalary:'',
                    lunchSalary:'',
                    bonus:''
                }

            }
        },
        mounted() {
            this.initsaltable()
        },
        methods: {
            onError(err, file, fileList) {
                this.importDataBtnText = '导入数据';
                this.importDataBtnIcon = 'el-icon-upload2';
                this.importDataDisabled = false;
            },
            onSuccess(response, file, fileList) {
                this.importDataBtnText = '导入数据';
                this.importDataBtnIcon = 'el-icon-upload2';
                this.importDataDisabled = false;
                this.initEmps();
            },
            beforeUpload() {
                /*
                  *上传前，判断格式
                 */
                this.importDataBtnText = '正在导入';
                this.importDataBtnIcon = 'el-icon-loading';
                this.importDataDisabled = true;
            },
            currentChange(currentPage){
                this.page=currentPage;
                this.initsaltable();
            },
            sizeChange(currentSize){
                this.size=currentSize;
                this.initsaltable();
            },
            exportData() {
                window.open('/salary/table/export', '_parent');
            },
            showeditSaltable(data){
                this.title='编辑员工资';
                this.saltab=data;
                this.dialogVisible=true;
            },
            deleteSaltable(data){
                this.$confirm('此操作将删除工号【' + data.workID + '】工资记录，是否继续？', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                }).then(() => {
                    this.deleteRequest("/salary/table/" + data.id).then(resp => {
                        if (resp) {
                            this.initsaltable();
                        }
                    })
                }).catch(() => {
                    this.$message.info("取消删除!");
                })
            },
            initsaltable(){
                this.getRequest('/salary/table/?page' + this.page + '&size=' + this.size).then(resp=>{
                    if(resp){
                        this.saltable=resp.data;
                        this.total=resp.total;
                    }
                })
            },
            doUpdatesalarytable(){
                this.postRequest('/salary/table/',this.saltab).then(resp=>{
                    if (resp){
                        this.initsaltable();
                        this.dialogVisible=false;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>