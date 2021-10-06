<template>
    <div>
        <el-input placeholder="请输入关键字进行搜索..." prefix-icon="el-icon-search"
                  clearable
                  @clear="initempremove"
                  style="width: 350px;margin-right: 10px" v-model="keyword"
                  @keydown.enter.native="initempremove" :disabled="showAdvanceSearchView"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="initempremove" :disabled="showAdvanceSearchView">
            搜索
        </el-button>
        <div style="margin-top: 10px">
            <el-table :data="empermove" border stripe size="mini">
                <el-table-column type="selection" align="left" width="55"></el-table-column>
                <el-table-column prop="id" label="序号"  width="100px" align="left"></el-table-column>
                <el-table-column prop="eid" label="员工编号" width="100px" align="left"></el-table-column>
                <el-table-column prop="afterdepid" label="调动后部门" width="100px" align="left"></el-table-column>
                <el-table-column prop="afterjobid" label="调动后职位" width="100px" align="left"></el-table-column>
                <el-table-column prop="removedate" label="调动日期" width="100px" align="left"></el-table-column>
                <el-table-column prop="reason" label="调动原因" width="100px" align="left"></el-table-column>
                <el-table-column prop="remake" label="备注" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button @click="editempremove(scope.row)" >编辑</el-button>
                    <el-button @click="deleteempremove(scope.row)"  type="danger">删除</el-button>
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
                <el-form :model="empmove">
                    <el-row>
                        <el-form-item label="序号:" prop="id">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empmove.id"
                                      placeholder="请输入序号"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="工号:" prop="eid">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="empmove.eid"
                                      placeholder="请输入员工号"></el-input>
                        </el-form-item>
                    </el-row>

                    <el-row>
                        <el-form-item label="调动后部门:" prop="afterdepid">
                            <el-input size="mini" style="width:160px" prefix-icon="el-icon-edit" v-model="empmove.afterdepid"
                                      placeholder="请输入调动后的部门"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="调动后职位:" prop="afterjobid">
                            <el-input size="mini" style="width:130px" prefix-icon="el-icon-edit" v-model="empmove.afterjobid"
                                      placeholder="请输入调动后的职位"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                    <el-form-item label="调动日期:" prop="movedate">
                        <el-date-picker
                                size="mini"
                                type="date"
                                v-model="empmove.movedate"
                                value-format="yyyy-MM-dd"
                                placeholder="请输入日期"
                                style="width: 130px;"></el-date-picker>
                    </el-form-item>
                </el-row>
                    <el-row>
                        <el-form-item label="调动原因:" prop="reason">
                            <el-input size="mini" style="width:150px" prefix-icon="el-icon-edit" v-model="empmove.reason"
                                      placeholder="请输入调薪的原因"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="备注:" prop="remark">
                            <el-input size="mini" style="width:150px" prefix-icon="el-icon-edit" v-model="empmove.remark"
                                      placeholder="请输入备注"></el-input>
                        </el-form-item>
                    </el-row>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doUpdateEmpmove">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "PerMv",
        data(){
            return {
                empermove:[],
                total:0,
                size:10,
                page:1,
                title:'',
                keyword:'',
                dialogVisible:false,
                empmove:{
                    id:'',
                    eid:'',
                    afterdepid:'',
                    afterjobid:'',
                    movedate:'',
                    reason:'',
                    remark:''
                }
            }
        },
        mounted() {
            this.initempremove();
        },
        methods:{
            initempremove(){
                this.getRequest('/personnel/remove/').then(resp=>{
                    if(resp){
                        this.empermove=resp;
                    }
                })
            },
            editempremove(data){
                this.title='编辑员工调动信息';
                this.dialogVisible=true;
                this.empermove=data;
            },
            deleteempremove(data){
                this.$confirm('此操作将删除工号【' + data.eid + '】调动记录，是否继续？', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                }).then(() => {
                    this.deleteRequest("/personnel/remove/" + data.id).then(resp => {
                        if (resp) {
                            this.initempremove();
                        }
                    })
                }).catch(() => {
                    this.$message.info("取消删除!");
                })
            },
            doUpdateEmpmove(){
                this.putRequest('/personnel/remove/', this.empmove).then(resp => {
                    if (resp) {
                        this.initempremove();
                        this.dialogVisible = false;
                    }
                })
            },
            currentChange(CurrentPage){
                this.page=CurrentPage;
                this.initempremove();
            },
            sizeChange(CurrentSize){
                this.size=CurrentSize;
                this.initempremove();
            }
        }
    }
</script>

<style scoped>

</style>