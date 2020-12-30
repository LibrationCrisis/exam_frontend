//获取试卷并跳转到添加题库
<template>
  <div class="exam" v-if="loading">
    <el-table :data="pagination" border>
      <el-table-column prop="source" label="试卷名称" width="180"></el-table-column>
      <el-table-column prop="description" label="介绍" width="200"></el-table-column>
      <el-table-column prop="institute" label="所属学院" width="120"></el-table-column>
      <el-table-column prop="major" label="所属专业" width="200"></el-table-column>
      <el-table-column prop="grade" label="年级" width="100"></el-table-column>
      <el-table-column prop="examDate" label="考试日期" width="120"></el-table-column>
      <el-table-column prop="totalTime" label="持续时间" width="120"></el-table-column>
      <el-table-column prop="totalScore" label="总分" width="120"></el-table-column>
      <el-table-column prop="type" label="试卷类型" width="120"></el-table-column>
      <el-table-column prop="tips" label="考生提示" width="400"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="add(scope.row.paperId,scope.row.source)" type="primary" size="small">增加题库</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pagination.current"
        :page-sizes="[10]"
        :page-size="pagination.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total" class="page">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {}, //保存点击以后当前试卷的信息
      pagination: { //分页后的考试信息
        current: 1, //当前页
        total: null, //记录条数
        size: 4 //每页条数
      },
    }
  },
  created() {
    this.getExamInfo()
  },
  methods: {
    getExamInfo() { //分页查询所有试卷信息
      this.$axios({
        url: `/api/exams/${this.pagination.current}/${10}`,
        method: "GET",
      }).then(res => {
        this.pagination = res.data
        this.loading = true
        console.log(this.pagination)
      }).catch(error => {
        console.log(error)
      })
    },
    //改变当前页码，重新发送请求
    handleCurrentChange(val) {
      this.pagination.current = val
      this.getExamInfo()
    },
    add(paperId, source) { //增加题库
      this.$router.push({path: '/addAnswerChildren', query: {paperId: paperId, subject: source}})
    }
  },
};
</script>
<style lang="scss" scoped>
.exam {
  padding: 0 40px;

  .page {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .edit {
    margin-left: 20px;
  }
}
</style>
