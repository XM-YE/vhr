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
        <el-table :data="StaPers" border stripe size="mini">
            <el-table-column prop="workID" label="员工号" width="130px" align="left"></el-table-column>
            <el-table-column prop="name" label="姓名" width="130px" align="left"></el-table-column>
            <el-table-column prop="gender" label="性别" width="130px" align="left"></el-table-column>
            <el-table-column prop="tiptopDegree" label="学历" width="130px" align="left"></el-table-column>
            <el-table-column prop="specialty" label="专业" width="130px" align="left"></el-table-column>
            <el-table-column prop="school" label="毕业院校" width="130px" align="left"></el-table-column>
            <el-table-column prop="remark" label="备注" width="130px" align="left"></el-table-column>
            <el-table-column
                    fixed="right"
                    width="200"
                    label="操作" align="center">
                <template slot-scope="scope">
                    <el-button @click="editStapers(scope.row)" style="padding: 10px" size="mini">编辑</el-button>
                    <el-button @click="deleteStapers(scope.row)" style="padding: 10px" size="mini" type="danger">删除</el-button>
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
        name: "StaPers",
        data(){
            return{
                StaPers:[],
                keyword:'',
                total:0,
                page:1,
                size:10,
            }
        },
        methods:{
            selectByDep(){
                    this.getKeyValueRequest('/statistics/personnel/?'+'&keyword='+this.keyword).then(resp=>{
                    if(resp){
                        this.StaPers=resp.data;
                        this.total=resp.total;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>