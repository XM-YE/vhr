<template>
    <div>
        <el-input placeholder="请输入关键字进行搜索..." prefix-icon="el-icon-search"
                  clearable
                  @clear="initemptrain"
                  style="width: 350px;margin-right: 10px" v-model="keyword"
                  @keydown.enter.native="initemptrain" :disabled="showAdvanceSearchView"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="initemptrain" :disabled="showAdvanceSearchView">
            搜索
        </el-button>
        <div style="margin-top: 10px">
            <el-table :data="emptrain" border stripe size="mini">
                <el-table-column type="selection" align="left" width="55"></el-table-column>
                <el-table-column prop="id" label="序号" width="130px" align="left"></el-table-column>
                <el-table-column prop="eid" label="员工编号" width="130px" align="left"></el-table-column>
                <el-table-column prop="traindate" label="培训日期" width="130px" align="left"></el-table-column>
                <el-table-column prop="traincontent" label="培训内容" width="130px" align="left"></el-table-column>
                <el-table-column prop="remake" label="备注" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="editemptrainView(scope.row)" >编辑</el-button>
                        <el-button @click="deleteEmptrain(scope.row)"  type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
        <el-dialog :title="title"
                   :visible.sync="dialogVisible"
                   width="80%">
            <div>
                <el-form :model="emptra">
                    <el-row>
                        <el-form-item label="序号:" prop="id">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="emptra.id"
                                      placeholder="请输入序号"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="工号:" prop="eid">
                            <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="emptra.eid"
                                      placeholder="请输入员工号"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="培训日期:" prop="trainDate">
                            <el-date-picker
                                    size="mini"
                                    type="date"
                                    v-model="emptra.trainDate"
                                    value-format="yyyy-MM-dd"
                                    placeholder="请输入日期"
                                    style="width: 130px;"></el-date-picker>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-form-item label="培训内容" prop="trainContent">
                            <el-input size="mini" style="width:150px" prefix-icon="el-icon-edit" v-model="emptra.trainContent"></el-input>
                        </el-form-item>
                    </el-row>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doUpdateEmptra">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "PerTrain",
        data() {
            return {
                emptrain: [],
                total: 0,
                page: 1,
                size: 10,
                title: '',
                keyword:'',
                dialogVisible: false,
                emptra: {
                    id: '',
                    eid: '',
                    trainDate: '',
                    trainContent: ''
                }
            }
        },
        mounted() {
            this.initemptrain();
        },
        methods: {
            editemptrainView(data) {
                this.title = '编辑员工培训信息';
                this.emptra = data;
                this.dialogVisible = true;
            },
            deleteEmptrain(data) {
                this.$confirm('此操作将删除工号【' + data.eid + '】培训记录，是否继续？', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                }).then(() => {
                    this.deleteRequest("/personnel/train/" + data.id).then(resp => {
                        if (resp) {
                            this.initemptrain();
                        }
                    })
                }).catch(() => {
                    this.$message.info("取消删除!");
                })
            },
            currentChange(currentSize) {
                this.size = currentSize;
                this.initemptrain()
            },
            sizeChange(currentPage) {
                this.page = currentPage;
                this.initemptrain()
            },
            initemptrain() {
                this.getRequest('/personnel/train/').then(resp => {
                    if (resp) {
                        this.emptrain = resp;
                    }
                })
            },
            doUpdateEmptra(){
                this.putRequest('/personnel/train/', this.emptra).then(resp => {
                    if (resp) {
                        this.initemptrain();
                        this.dialogVisible = false;
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>