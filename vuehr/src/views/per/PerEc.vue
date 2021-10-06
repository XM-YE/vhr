<template>
    <div>
        <el-input placeholder="请输入关键字进行搜索..." prefix-icon="el-icon-search"
                  clearable
                  @clear="initEmployeeecs"
                  style="width: 350px;margin-right: 10px" v-model="keyword"
                  @keydown.enter.native="initEmployeeecs" :disabled="showAdvanceSearchView"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="initEmployeeecs" :disabled="showAdvanceSearchView">
            搜索
        </el-button>
        <div style="margin-top: 10px">
            <el-table :data='employeeecs' border stripe size="mini">
                <el-table-column type="selection" align="left" width="55"></el-table-column>
                <el-table-column prop="id" label="序号"  width="100px" align="left"></el-table-column>
                <el-table-column prop="eid" label="员工编号"  width="100px" align="left"></el-table-column>
                <el-table-column prop="ecdate" label="奖罚日期" width="100px" align="left"></el-table-column>
                <el-table-column prop="ecreason" label="奖罚原因" width="100px" align="left"></el-table-column>
                <el-table-column prop="ecpoint" label="奖罚分" width="100px" align="left"></el-table-column>
                <el-table-column prop="ectype" label="奖罚类别" width="100px" align="left"></el-table-column>
                <el-table-column prop="remark" label="备注" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="showEditempecView(scope.row)" >编辑</el-button>
                        <el-button @click="deleteEmpec(scope.row)"  type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="display: flex;justify-content: flex-end">
                <el-pagination
                        background
                        @current-change="currentChange"
                        @size-change="sizeChange"
                        layout="sizes, prev, pager, next, jumper, ->, total, slot"
                        :total="total">
                </el-pagination>
            </div>
        </div>
        <el-dialog :title="title"
                   :visible.sync="dialogVisible"
                   width="80%">
                     <div>
                         <el-form :model="empec">
                             <el-row>
                                 <el-form-item label="序号:" prop="id">
                                     <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empec.id"
                                               placeholder="请输入序号"></el-input>
                                 </el-form-item>
                             </el-row>
                             <el-row>
                                 <el-form-item label="工号:" prop="eid">
                                     <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empec.eid"
                                               placeholder="请输入员工号"></el-input>
                                 </el-form-item>
                             </el-row>
                             <el-row>
                                 <el-form-item label="日期:" prop="ecdate">
                                         <el-date-picker
                                             size="mini"
                                             type="date"
                                             v-model="empec.ecdate"
                                             value-format="yyyy-MM-dd"
                                             placeholder="请输入日期"
                                             style="width: 130px;"></el-date-picker>
                                 </el-form-item>
                             </el-row>
                             <el-row>
                                 <el-form-item label="奖罚原因:" prop="ecreason">
                                     <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empec.ecreason"
                                               placeholder="请输入"></el-input>
                                 </el-form-item>
                             </el-row>
                             <el-row>
                                 <el-form-item label="奖罚分:" prop="ecpoint">
                                     <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empec.ecpoint"
                                               placeholder="请输入"></el-input>
                                 </el-form-item>
                             </el-row>
                             <el-row>
                                 <el-form-item label="奖罚类型:" prop="ectype">
                                     <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empec.ectype"
                                               placeholder="请输入"></el-input>
                                 </el-form-item>
                             </el-row>
                         </el-form>
                     </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doUpdateEmpec">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "PerEc",
        data(){
            return {
                employeeecs:[],
                total: 0,
                page: 1,
                size:10,
                title: '',
                keyword:'',
                dialogVisible: false,
                empec:{
                    id:'',
                    eid:'',
                    ecdate:'',
                    ecreason:'',
                    ecpoint:'',
                    ectype:''
                }
            }
        },
        mounted() {
            this.initEmployeeecs();
        },
        methods:{

            showEditempecView(data){
                this.title = '编辑员工奖惩信息';
                this.empec = data;
                this.dialogVisible = true;
            },
            deleteEmpec(data){
                this.$confirm('此操作将删除工号【' + data.eid + '】奖惩记录，是否继续？', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                }).then(() => {
                    this.deleteRequest("/personnel/ec/" + data.id).then(resp => {
                        if (resp) {
                            this.initEmployeeecs();
                        }
                    })
                }).catch(() => {
                        this.$message.info("取消删除!");
                  })
            },
            currentChange(currentSize){
                this.size=currentSize;
                this.initEmployeeecs()
            },
            sizeChange(currentPage){
                this.page=currentPage;
                this.initEmployeeecs()
            },
            initEmployeeecs() {
                //let url = '/personnel/ec/?page=' + this.page + '&size=' + this.size;
                this.getRequest('/personnel/ec/').then(resp => {
                    if (resp) {
                        this.employeeecs = resp;
                        //this.total = resp.total;
                    }
                })
            },
            doUpdateEmpec(){
                this.putRequest('/personnel/ec/',this.empec).then(resp =>{
                    if(resp){
                        this.initEmployeeecs();
                        this.dialogVisible=false;
                    }
                })
            }

        }
    }
</script>

<style scoped>

</style>