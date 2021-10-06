<template>
    <div>
        <el-input placeholder="请输入关键字进行搜索..." prefix-icon="el-icon-search"
                  clearable
                  @clear="StaAll"
                  style="width: 350px;margin-right: 10px" v-model="keyword"
                  @keydown.enter.native="StaAll" :disabled="showAdvanceSearchView"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="StaAll" :disabled="showAdvanceSearchView">
            搜索
        </el-button>
        <div style="margin-top: 10px">
        <el-table :data="StaAll" border stripe size="mini">
            <el-table-column prop="workID" label="员工号" width="100px" align="left"></el-table-column>
            <el-table-column prop="name" label="姓名" width="100px" align="left"></el-table-column>
            <el-table-column prop="gender" label="性别" width="100px" align="left"></el-table-column>
            <el-table-column prop="birthday" label="生日" width="100px" align="left"></el-table-column>
            <el-table-column prop="beginDate" label="入职日期" width="100px" align="left"></el-table-column>
            <el-table-column prop="conversionTime" label="转正日期" width="100px" align="left"></el-table-column>
            <el-table-column prop="contractTerm" label="合同期限" width="100px" align="left">
                <template slot-scope="scope">
                    <el-tag>{{scope.row.contractTerm}}</el-tag>
                    年
                </template>
            </el-table-column>
            <el-table-column prop="workState" label="状态" width="100px" align="left"></el-table-column>
            <el-table-column prop="remark" label="备注" width="100px" align="left"></el-table-column>
            <el-table-column
                    fixed="right"
                    width="200"
                    label="操作" align="center">
                <template slot-scope="scope">
                    <el-button @click="showEditStallView(scope.row)">编辑</el-button>
                    <el-button @click="deleteStall(scope.row)" type="danger">删除</el-button>
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
                <el-form :model="statisticsall">
                    <el-row>
                        <el-form-item label="入职日期:" prop="beginDate">
                            <el-date-picker
                                    size="mini"
                                    type="date"
                                    v-model="statisticsall.beginDate"
                                    value-format="yyyy-MM-dd"
                                    placeholder="请输入日期"
                                    style="width: 130px;"></el-date-picker>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="转正日期:" prop="conversionTime">
                            <el-date-picker
                                    size="mini"
                                    type="date"
                                    v-model="statisticsall.conversionTime"
                                    value-format="yyyy-MM-dd"
                                    placeholder="请输入日期"
                                    style="width: 130px;"></el-date-picker>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="合同期限:" prop="contractTerm">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="statisticsall.contractTerm"
                                      placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="状态:" prop="workState">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="statisticsall.workState"
                                      placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-row>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doUpdatestatisticsall">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "StaAll",
        data(){
            return {
                StaAll:[],
                total:0,
                page:1,
                size:10,
                keyword:'',
                statisticsall:{
                    beginDate:'',
                    conversionTime:'',
                    contractTerm:'',
                    workState:''
                },
                dialogVisible:false,
                title:'',
            }
        },
        mounted() {
            this.initstaall();
        },
        methods :{
            showEditStallView(data){
                this.title='编辑综合信息';
                this.statisticsall=data;
                this.dialogVisible=true;
            },
            deleteStall(data){
                this.$confirm('此操作将删除工号【' + data.workID + '】信息记录，是否继续？', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                }).then(() => {
                    this.deleteRequest("/statistics/all/" + data.id).then(resp => {
                        if (resp) {
                            this.initstaall();
                        }
                    })
                }).catch(() => {
                    this.$message.info("取消删除!");
                })
            },
            doUpdatestatisticsall(){
                this.postRequest("/statistics/all",this.statisticsall).then(resp=>{
                    if(resp){
                        this.initstaall();
                        this.dialogVisible=false;
                    }
                })
            },
            currentChange(currentPage){
                this.page=currentPage;
                this.initstaall();
            },
            sizeChange(currentSize){
                this.size=currentSize;
                this.initstaall();
            },
            initstaall(){
                this.getRequest('/statistics/all/?page'+this.page +'&size'+this.size).then(resp=>{
                    if(resp){
                        this.StaAll=resp.data;
                        this.total=resp.total;
                    }
                })
            }
        }


    }
</script>

<style scoped>

</style>