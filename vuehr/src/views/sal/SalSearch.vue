<template>
    <div>
        <el-input placeholder="请输入员工名或工号进行搜索，按回车搜索..." prefix-icon="el-icon-search"
                  clearable
                  @clear="searchSal"
                  style="width: 350px;margin-right: 10px" v-model="keyword"
                  @keydown.enter.native="searchSal" :disabled="showAdvanceSearchView"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="searchSal" :disabled="showAdvanceSearchView">
            搜索
        </el-button>
        <div style="margin-top: 10px">
          <el-table :data="salsearch" border stripe size="mini">
              <el-table-column prop="workID" label="员工号" width="100px" align="left"></el-table-column>
              <el-table-column prop="name" label="员工姓名" width="100px" align="left"></el-table-column>
              <el-table-column prop="salary.basicSalary" label="基本工资" width="100px" align="left"></el-table-column>
              <el-table-column prop="salary.bonus" label="奖金" width="100px" align="left"></el-table-column>
              <el-table-column prop="" label="加班" width="100px" align="left"></el-table-column>
              <el-table-column prop="" label="出勤天数" width="100px" align="left"></el-table-column>
              <el-table-column prop="" label="五险一金" width="100px" align="left"></el-table-column>
              <el-table-column prop="salary.allSalary" label="工资" width="100px" align="left"></el-table-column>
              <el-table-column prop="" label="备注" width="100px" align="left"></el-table-column>
              <el-table-column label="操作" align="center">
                  <template slot-scope="scope">

                  </template>
              </el-table-column>
          </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SalSearch",
        data(){
            return{
                salsearch:[],
                keyword:''
            }
        },
        mounted() {

        },
        methods:{
            searchSal(){
                this.getKeyValueRequest('/salary/search/?'+'&keyword='+this.keyword).then(resp=>{
                    if(resp){
                        this.salsearch=resp.data;
                    }
                })
            }

        }
    }

</script>

<style scoped>

</style>