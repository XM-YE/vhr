<template>
    <div>
        <el-input placeholder="请输入关键字进行搜索..." prefix-icon="el-icon-search"
                  clearable
                  @clear="initsalmonth"
                  style="width: 350px;margin-right: 10px" v-model="keyword"
                  @keydown.enter.native="initsalmonth" :disabled="showAdvanceSearchView"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="initsalmonth" :disabled="showAdvanceSearchView">
            搜索
        </el-button>
        <div style="margin-top: 10px">
        <el-table :data="salmonth" border stripe size="mini">
            <el-table-column prop="workID" label="员工号" width="130px" align="left"></el-table-column>
            <el-table-column prop="name" label="姓名" width="130px" align="left"></el-table-column>
            <el-table-column prop="department.name" label="部门" width="130px" align="left"></el-table-column>
            <el-table-column prop="salary.createDate" label="日期" width="130px" align="left"></el-table-column>
            <el-table-column prop="salary.allSalary" label="工资" width="130px" align="left"></el-table-column>
            <el-table-column prop="remark" label="备注" width="130px" align="left"></el-table-column>
            <el-table-column
                    fixed="right"
                    width="200px"
                    label="操作" align="center">
                <template slot-scope="scope">
                    <el-button @click="showeditSalmonth(scope.row)" >编辑</el-button>
                    <el-button @click="deleteSalmonth(scope.row)" type="danger">删除</el-button>
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
        <el-dialog
                :title="title"
                :visible.sync="dialogVisible"
                width="80%">
            <div>

            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doUpdatesalmonth">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "SalMonth",
        data(){
            return{
                salmonth:[],
                page:1,
                size:10,
                total:0,
                keyword:'',
                title:'',
                dialogVisible:false,

            }
        },
        mounted() {
            this.initsalmonth()
        },
        methods:{
            currentChange(currentPage){
                this.page=currentPage;
                this.initsalmonth();
            },
            sizeChange(currentSize){
                this.size=currentSize;
                this.initsalmonth();
            },
            deleteSalmonth(data){
                this.$confirm('此操作将删除工号【' + data.name +'】工资记录，是否继续？', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                }).then(() => {
                    this.deleteRequest("/salary/month/" + data.workID).then(resp => {
                        if (resp) {
                            this.initEmployeeecs();
                        }
                    })
                }).catch(() => {
                    this.$message.info("取消删除!");
                })
            },
            showeditSalmonth(data){
              this.title='编辑月末信息';
              this.dialogVisible=true;
            },
            doUpdatesalmonth(){
                this.postRequest('/salary/month/').then(resp=>{
                    if(resp){
                        this.initsalmonth();
                        this.dialogVisible=false;
                    }
                })
            },
            initsalmonth(){
                this.getRequest('/salary/month/?page' + this.page + '&size=' + this.size).then(resp=>{
                    if(resp){
                        this.salmonth=resp.data;
                        this.total=resp.total;

                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>