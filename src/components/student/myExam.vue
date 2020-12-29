// 我的试卷页面
<template>
  <div id="myExam">
    <div class="wrapper">
      <ul class="top">
        <li class="order">试卷列表</li>
      </ul>
      <ul class="paper" v-if="loading">
                <li class="item" v-for="(item,index) in pagination" :key="index">
                  <h4 @click="toExamMsg(item.examCode)">{{item.source}}</h4>
                  <p class="name">{{item.source}}-{{item.description}}</p>
                  <div class="info">
                    <i class="el-icon-loading"></i><span>{{item.examDate.substr(0,10)}}</span>
                    <i class="iconfont icon-icon-time"></i><span v-if="item.totalTime != null">限时{{item.totalTime}}分钟</span>
                    <i class="iconfont icon-fenshu"></i><span>满分{{item.totalScore}}分</span>
                  </div>
                </li>
      </ul>
            <div class="pagination">
              <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page="pagination.current"
                  :page-sizes="[6]"
                  :page-size="pagination.size"
                  layout="prev, pager, next, jumper"
                  :total="pagination.total">
              </el-pagination>
            </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'myExam'
  data() {
    return {
      loading: false,
      key: null, //搜索关键字
      allExam: null, //所有考试信息
      pagination: { //分页后的考试信息
        current: 1, //当前页
        total: null, //记录条数
      }
    }
  },
  created() {
    this.loading = false
    this.getExamInfo()

  },
  // watch: {

  // },
  methods: {
    //获取当前所有考试信息
    getExamInfo() {
      this.$axios({
        url: `/api/exams/${this.pagination.current}/${6}`,
        method: "GET"
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
      console.log(this.pagination.size);
      this.getExamInfo()
    },
    //跳转到试卷详情页
    toExamMsg(examCode) {
      this.$router.push({path: '/examMsg', query: {examCode: examCode}})
      console.log(examCode)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  padding: 20px 0px 30px 0px;
  .el-pagination {
    display: flex;
    justify-content: center;
  }
}
.paper {
  h4 {
    cursor: pointer;
  }
}
.paper .item a {
  color: #000;
}
.wrapper .top .order {
  cursor: pointer;
}
.wrapper .top .order:hover {
  color: #0195ff;
  border-bottom: 2px solid #0195ff;
}
.wrapper .top .order:visited {
  color: #0195ff;
  border-bottom: 2px solid #0195ff;
}
.item .info i {
  margin-right: 5px;
  color: #0195ff;
}
.item .info span {
  margin-right: 14px;
}
.paper .item {
  width: 380px;
  height: 280px;
  border-radius: 4px;
  padding: 20px 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 4px 2px rgba(217,222,234,0.3);
  transition: all 0.6s ease;
}
.paper .item:hover {
  box-shadow: 0 0 4px 2px rgba(140, 193, 248, 0.45);
  transform: scale(1.03);
}
.paper .item .info {
  font-size: 14px;
  color: #88949b;
}
.paper .item .name {
  font-size: 14px;
  color: #88949b;
}
.paper * {
  margin: 20px 0;
}
.wrapper .paper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.wrapper .top {
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.top li {
  display: flex;
  align-items: center;
}

.wrapper .top {
  display: flex;
}
.wrapper .top li {
  margin: 20px;
}
#myExam {
  width: 980px;
  margin: 0 auto;
}

#myExam .wrapper {
  background-color: #fff;
}
</style>
