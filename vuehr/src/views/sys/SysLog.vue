<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item :data="LogMessage" timestamp="" placement="top" v-for="(logmessage,index) in LogMessage" :key="index">
                <el-card class="showcard">
                    <h4>{{logmessage.hr.name}}</h4>
                    <el-button style="float: right; padding: 3px 0;color: #e30007;" type="text"
                               icon="el-icon-delete" @click="deletesomeonelogmessage(logmessage)"></el-button>
                    <p>操作：{{logmessage.operate}}  时间：{{logmessage.adddate}}</p>
                    <p>后台执行方法：{{logmessage.operatemethod}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
        <div style="display: flex;justify-content: flex-end">
            <el-pagination
                    background
                    @current-change="currentChange"
                    @size-change="sizeChange"
                    layout="sizes, prev, pager, next, jumper, ->, total, slot"
                    :total="total">
            </el-pagination>
        </div>
        <!--template slot-scope="scope"-->
            <!--el-button @click="deleteLogMessage(scope.row)" type="danger">删除</el-button-->
        <!--/template-->
    </div>
</template>

<script>
    export default {
        name: "SysLog",
        data(){
            return{
                total:0,
                page:1,
                size:10,
                LogMessage:[
                    {
                        id:'',
                        name:'',
                        phone:'',
                        telephone:'',
                        address:'',
                        username:'',
                        password:'',
                        userface:'',
                        remark:'',
                        roles:'',
                        oplog:{
                            id:'',
                            adddate:'',
                            operate:'',
                            operatemethod:'',
                            hrid:''
                        },
                        accountNonLocked:'',
                        accountNonExpired:'',
                        credentialsNonExpired:''
                    },

                ],
            }
        },
        mounted() {
             this.initlogmessage();
        },
        methods:{
            deletesomeonelogmessage(logmessage){
                this.$confirm('您确定要删除'+ logmessage.hr.name +'的操作信息吗？','提示',
                {
                    cancelButtonText:'取消',
                    confirmButtonText:'确定',
                    type:"warning",
                }).then(()=>{
                    this.deleteRequest('/system/log/'+ logmessage.id).then(resp=>{
                        if(resp){
                            this.initlogmessage();
                        }
                    })
                }).catch(()=>{
                    this.$message({
                        type:'info',
                        message:'已取消操作',
                    })
                })
            },
               initlogmessage(){
                let url='/system/log/?page='+ this.page +'&size='+this.size;
                 this.getRequest(url).then(resp=>{
                       if(resp){
                           this.LogMessage=resp.data;
                           this.total=resp.total;
                       }
                   })
               },
            currentChange(currentPage){
                this.page=currentPage;
                this.initlogmessage();
            },
            sizeChange(currentSize){
                this.size=currentSize;
                this.initlogmessage();
            }

        }
    }
</script>

<style>
.showcard{
    width: 60%;
    background-color:#b3d4fc;
}
</style>