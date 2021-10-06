<template>
    <div>
        <el-input placeholder="请输入关键字进行搜索..." prefix-icon="el-icon-search"
                  clearable
                  @clear="initempsal"
                  style="width: 350px;margin-right: 10px" v-model="keyword"
                  @keydown.enter.native="initempsal" :disabled="showAdvanceSearchView"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="initempsal" :disabled="showAdvanceSearchView">
            搜索
        </el-button>
        <div style="margin-top: 10px;">
            <el-table :data="empsal" border stripe size="mini">
                <el-table-column type="selection" align="left" width="55"></el-table-column>
                <el-table-column prop="id" label="序号" width="100px" align="left"></el-table-column>
                <el-table-column prop="eid" label="员工编号" width="100px" align="left"></el-table-column>
                <el-table-column prop="asdate" label="调薪日期" width="100px" align="left"></el-table-column>
                <el-table-column prop="beforesalary" label="调薪前" width="100px" align="left"></el-table-column>
                <el-table-column prop="aftersalary" label="调薪后" width="100px" align="left"></el-table-column>
                <el-table-column prop="reason" label="调薪原因" width="100px" align="left"></el-table-column>
                <el-table-column prop="remake" label="备注" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="editEmpadsal(scope.row)" >编辑</el-button>
                        <el-button @click="deleteEmpeadsal(scope.row)"  type="danger">删除</el-button>
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
                <el-form :model="empsalary">
                    <el-row>
                        <el-form-item label="序号:" prop="id">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empsalary.id"
                                      placeholder="请输入序号"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="工号:" prop="eid">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empsalary.eid"
                                      placeholder="请输入员工号"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="调薪日期:" prop="asdate">
                            <el-date-picker
                                    size="mini"
                                    type="date"
                                    v-model="empsalary.asdate"
                                    value-format="yyyy-MM-dd"
                                    placeholder="请输入日期"
                                    style="width: 130px;"></el-date-picker>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="调薪前:" prop="beforesal">
                            <el-input size="mini" style="width:160px" prefix-icon="el-icon-edit" v-model="empsalary.beforesal"
                                      placeholder="请输入调薪前的薪水"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="调薪后:" prop="aftersal">
                            <el-input size="mini" style="width:160px" prefix-icon="el-icon-edit" v-model="empsalary.aftersal"
                                      placeholder="请输入调薪后的薪水"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="调薪原因:" prop="reason">
                            <el-input size="mini" style="width:150px" prefix-icon="el-icon-edit" v-model="empsalary.reason"
                                      placeholder="请输入调薪的原因"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="备注:" prop="remark">
                            <el-input size="mini" style="width:150px" prefix-icon="el-icon-edit" v-model="empsalary.remark"
                                      placeholder="请输入备注"></el-input>
                        </el-form-item>
                    </el-row>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doUpdateEmpadsal">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "PerSalary",
        data(){
            return{
                empsal:[],
                size:10,
                page:1,
                total:0,
                title:'',
                keyword:'',
                dialogVisible:false,
                empsalary:{
                    id:'',
                    eid:'',
                    asdate:'',
                    beforesal:'',
                    aftersal:'',
                    reason:'',
                    remark:''
                }
            }
        },
        mounted() {
            this.initempsal();
        },
        methods:{
            initempsal(){
                this.getRequest('/personnel/salary/').then(resp=>{
                    if(resp){
                        this.empsal=resp;
                    }
                })
            },
            editEmpadsal(data){
                this.title='编辑调薪信息';
                this.dialogVisible=true;
                this.empsal=data;
            },
            deleteEmpeadsal(data){
                this.$confirm('此操作将删除工号【' + data.eid + '】调薪记录，是否继续？', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                }).then(() => {
                    this.deleteRequest("/personnel/salary/" + data.id).then(resp => {
                        if (resp) {
                            this.initempsal();
                        }
                    })
                }).catch(() => {
                    this.$message.info("取消删除!");
                })
            },
            doUpdateEmpadsal(){
                this.putRequest('/personnel/salary/', this.empsalary).then(resp => {
                    if (resp) {
                        this.initempsal();
                        this.dialogVisible = false;
                    }
                })
            },
            currentChange(CurrentSize){
                this.size=CurrentSize;
                this.initempsal()
            },
            sizeChange(CurrentPage){
                this.page=CurrentPage;
                this.initempsal()
            }
        }
    }
</script>

<style scoped>

</style>