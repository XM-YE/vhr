<template>
    <div>
    <el-input placeholder="请输入关键字进行搜索..." prefix-icon="el-icon-search"
              clearable
              @clear="selectByDep"
              style="width: 350px;margin-right: 10px" v-model="keyword"
              @keydown.enter.native="selectByDep" :disabled="showAdvanceSearchView"></el-input>
    <el-button icon="el-icon-search" type="primary" @click="selectByDep" :disabled="showAdvanceSearchView">
        搜索
    </el-button>
    <div style="margin-top: 10px">
        <el-table :data="StaRecord" border stripe size="mini">
            <el-table-column prop="workID" label="员工号" width="130px" align="left"></el-table-column>
            <el-table-column prop="name" label="姓名" width="130px" align="left"></el-table-column>
            <el-table-column prop="gender" label="性别" width="130px" align="left"></el-table-column>
            <el-table-column prop="jobLevel.name" label="职称" width="130px" align="left"></el-table-column>
            <el-table-column prop="position.name" label="职位" width="130px" align="left"></el-table-column>
            <el-table-column prop="employeeec.ecPoint" label="积分" width="130px" align="left"></el-table-column>
            <el-table-column prop="remark" label="备注" width="130px" align="left"></el-table-column>
            <el-table-column
                    fixed="right"
                    width="200"
                    label="操作" align="center">
                <template slot-scope="scope">
                    <el-button @click="showeditStarecord(scope.row)">编辑</el-button>
                    <el-button @click="deleteStarecord(scope.row)" type="danger">删除</el-button>
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
    </div>
</template>

<script>
    export default {
        name: "StaRecord",
        data(){
            return{
                keyword:'',
                StaRecord:[],
                total:0,
                page:1,
                size:10,
            }
        },
        methods:{
            currentChange(currentPage){
                this.page=currentPage;
            },
            sizeChange(currentSize){
                this.size=currentSize;
            },
            showeditStarecord(){

            },
            deleteStarecord(){

            },
            selectByDep(){
                this.getKeyValueRequest('/statistics/record/?'+'&keyword='+this.keyword).then(resp=>{
                    if(resp){
                        this.StaRecord=resp.data;
                        this.total=resp.total;
                    }
                })
            }

        }

    }
</script>

<style scoped>

</style>