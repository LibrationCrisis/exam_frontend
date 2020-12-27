//查询所有题库
<template>
  <div class="exam">
    <h2>选择题</h2>
    <el-table :data="multiQuestion" border :row-class-name="tableRowClassName">
      <el-table-column prop="subject" label="试卷名称" width="180"></el-table-column>
      <el-table-column prop="question" label="题目信息" width="490"></el-table-column>
      <el-table-column prop="section" label="所属章节" width="200"></el-table-column>
      <el-table-column prop="score" label="试题分数" width="150"></el-table-column>
      <el-table-column prop="level" label="难度等级" width="133"></el-table-column>
    </el-table>
    <el-pagination
        @size-change="multiQuestionHandleSizeChange"
        @current-change="multiQuestionHandleCurrentChange"
        :current-page="multiQuestion.current"
        :page-sizes="[6, 10]"
        :page-size="multiQuestion.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="multiQuestion.total"
        class="page"
    ></el-pagination>
    <h2>填空题</h2>
    <el-table :data="fillQuestion" border :row-class-name="tableRowClassName">
      <el-table-column prop="subject" label="试卷名称" width="180"></el-table-column>
      <el-table-column prop="question" label="题目信息" width="490"></el-table-column>
      <el-table-column prop="section" label="所属章节" width="200"></el-table-column>
      <el-table-column prop="score" label="试题分数" width="150"></el-table-column>
      <el-table-column prop="level" label="难度等级" width="133"></el-table-column>
    </el-table>
    <el-pagination
        @size-change="fillQuestionHandleSizeChange"
        @current-change="fillQuestionHandleCurrentChange"
        :current-page="fillQuestion.current"
        :page-sizes="[6, 10]"
        :page-size="fillQuestion.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="fillQuestion.total"
        class="page"
    ></el-pagination>
    <h2>判断题</h2>
    <el-table :data="judgeQuestion" border :row-class-name="tableRowClassName">
      <el-table-column prop="subject" label="试卷名称" width="180"></el-table-column>
      <el-table-column prop="question" label="题目信息" width="490"></el-table-column>
      <el-table-column prop="section" label="所属章节" width="200"></el-table-column>
      <el-table-column prop="score" label="试题分数" width="150"></el-table-column>
      <el-table-column prop="level" label="难度等级" width="133"></el-table-column>
    </el-table>
    <el-pagination
        @size-change="judgeQuestionHandleSizeChange"
        @current-change="judgeQuestionHandleCurrentChange"
        :current-page="judgeQuestion.current"
        :page-sizes="[6, 10]"
        :page-size="judgeQuestion.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="judgeQuestion.total"
        class="page"
    ></el-pagination>
  </div>
</template>

<script>

export default {
  data() {
    return {
      multiQuestion: {
        //分页后的考试信息
        current: 1, //当前页
        total: null, //记录条数
        size: 6 //每页条数
      },
      fillQuestion: {
        //分页后的考试信息
        current: 1, //当前页
        total: null, //记录条数
        size: 6 //每页条数
      },
      judgeQuestion: {
        //分页后的考试信息
        current: 1, //当前页
        total: null, //记录条数
        size: 6 //每页条数
      }
    };
  },
  created() {
    this.getMultiQuestionInfo();
    this.getFillQuestionInfo();
    this.getJudgeQuestionInfo();
  },
  methods: {
    getMultiQuestionInfo() {
      //分页查询选择题试卷信息
      this.$axios({
        url: `/api/multi-question/${this.multiQuestion.current}/${this.multiQuestion.size}`,
        method: 'GET'
      }).then(res => {
        this.multiQuestion = res.data;
        console.log(res);
      })
    },
    getFillQuestionInfo() {
      //分页查询填空题试卷信息
      this.$axios({
        url: `/api/fill-question/${this.fillQuestion.current}/${this.fillQuestion.size}`,
        method: 'GET'
      }).then(res => {
        this.fillQuestion = res.data;
        console.log(res);
      })
    },
    getJudgeQuestionInfo() {
      //分页查询判断题试卷信息
      this.$axios({
        url: `/api/judge-question/${this.judgeQuestion.current}/${this.judgeQuestion.size}`,
        method: 'GET'
      }).then(res => {
        this.judgeQuestion = res.data;
        console.log(res);
      })
    },
    //改变当前记录条数
    multiQuestionHandleSizeChange(val) {
      this.multiQuestion.size = val;
      this.getMultiQuestionInfo();
    },
    //改变当前页码，重新发送请求
    multiQuestionHandleCurrentChange(val) {
      this.multiQuestion.current = val;
      this.getMultiQuestionInfo();
    },
    //改变当前记录条数
    fillQuestionHandleSizeChange(val) {
      this.fillQuestion.size = val;
      this.getFillQuestionInfo();
    },
    //改变当前页码，重新发送请求
    fillQuestionHandleCurrentChange(val) {
      this.fillQuestion.current = val;
      this.getFillQuestionInfo();
    },
    //改变当前记录条数
    judgeQuestionHandleSizeChange(val) {
      this.fillQuestion.size = val;
      this.getFillQuestionInfo();
    },
    //改变当前页码，重新发送请求
    judgeQuestionHandleCurrentChange(val) {
      this.fillQuestion.current = val;
      this.getFillQuestionInfo();
    },

    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.exam {
  padding: 0px 40px;

  .page {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .edit {
    margin-left: 20px;
  }

  .el-table tr {
    background-color: #DD5862 !important;
  }
}

.el-table .warning-row {
  background: #000 !important;

}

.el-table .success-row {
  background: #DD5862;
}

</style>
