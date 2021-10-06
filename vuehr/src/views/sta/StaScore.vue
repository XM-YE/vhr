<template>
    <div>
    <el-input placeholder="请输入关键字进行搜索..." prefix-icon="el-icon-search"
              clearable
              @clear="StaScore"
              style="width: 350px;margin-right: 10px" v-model="keyword"
              @keydown.enter.native="StaScore" :disabled="showAdvanceSearchView"></el-input>
    <el-button icon="el-icon-search" type="primary" @click="StaScore" :disabled="showAdvanceSearchView">
        搜索
    </el-button>
    <div style="margin-top: 10px">
        <el-table :data="stascore" border stripe size="mini">
            <el-table-column prop="workID" label="员工号" width="100px" align="left"></el-table-column>
            <el-table-column prop="name" label="姓名" width="100px" align="left"></el-table-column>
            <el-table-column prop="gender" label="性别" width="100px" align="left"></el-table-column>
            <el-table-column prop="department.name" label="部门" width="100px" align="left"></el-table-column>
            <el-table-column prop="position.name" label="职位" width="100px" align="left"></el-table-column>
            <el-table-column prop="employeeec.ecDate" label="日期" width="100px" align="left"></el-table-column>
            <el-table-column prop="employeeec.ecPoint" label="积分情况" width="100px" align="left"></el-table-column>
            <el-table-column prop="remark" label="备注" width="100px" align="left"></el-table-column>
            <el-table-column
                    fixed="right"
                    width="200"
                    label="操作" align="center">
                <template slot-scope="scope">
                    <el-button @click="showeditStascore(scope.row)" >编辑</el-button>
                    <el-button @click="deleteScore(scope.row)" type="danger">删除</el-button>
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
                <el-form :model="statistics">
                    <el-row>
                        <el-form-item label="日期:" prop="id">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="statistics.id"
                                      placeholder="请输入日期"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="积分:" prop="eid">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="statistics.eid"
                                      placeholder="请输入员积分"></el-input>
                        </el-form-item>
                    </el-row>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doUpdatesatscore">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "StaScore",
        data(){
            return{
                stascore:[],
                toatal:0,
                page:1,
                size:10,
                keyword:'',
                statistics:{
                    ecDate:'',
                    ecPoint:'',
                },
                title:'',
                dialogVisible:false,
            }
        },
       mounted() {
            this.initstascore();
        },
        methods:{
            currentChange(CurrentPage){
                this.page=CurrentPage;
                this.initstascore();
            },
            sizeChange(CurrentSize){
                this.size=CurrentSize;
                this.initstascore();
            },
            deleteScore(data){
                this.$confirm('此操作将删除工号【' + data.workID + '】积分信息，是否继续？', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                }).then(() => {
                    this.deleteRequest("/statistics/score/" + data.id).then(resp => {
                        if (resp) {
                            this.initEmployeeecs();
                        }
                    })
                }).catch(() => {
                    this.$message.info("取消删除!");
                })
            },
            doUpdatesatscore(){
              this.postRequest("/statistics/score/").then(resp=>{
                  if(resp){
                      this.initstascore();
                      this.dialogVisible=false;
                  }
              })
            },
            showeditStascore(data){
                this.title='编辑员工积分信息';
                this.statistics=data;
                this.dialogVisible=true;
            },
            initstascore(){
                this.getRequest('/statistics/score/?page'+this.page+'&size'+this.size).then(resp=>{
                    if(resp){
                        this.stascore=resp.data;
                        this.total=resp.total;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>