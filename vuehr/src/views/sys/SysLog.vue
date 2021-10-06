<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item :data="LogMessage" timestamp="" placement="top" v-for="(logmessage,index) in LogMessage" :key="index">
                <el-card class="showcard">
                    <h4>{{logmessage.name}}</h4>
                    <el-button style="float: right; padding: 3px 0;color: #e30007;" type="text"
                               icon="el-icon-delete" @click="deletesomeonelogmessage(logmessage)"></el-button>
                    <p>{{logmessage.oplog.operate}}  {{logmessage.oplog.adddate}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
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
                this.$confirm('您确定要删除'+ logmessage.name +'的操作信息吗？','提示',
                {
                    cancelButtonText:'取消',
                    confirmButtonText:'确定',
                    type:"warning",
                }).then(()=>{
                    this.deleteRequest('/system/log/'+ logmessage.oplog.hrid).then(resp=>{
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
                 this.getRequest('/system/log/').then(resp=>{
                       if(resp){
                           this.LogMessage=resp;
                       }
                   })
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