<template>
  <div id="login">
    <div class="bg"></div>
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top">
          <i class="iconfont icon-kaoshi"></i><span class="title">在线考试系统</span>
        </div>
        <div class="bottom">
          <div class="container">
            <p class="title">账号登录</p>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="用户名">
                <el-input v-model.number="formLabelAlign.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="formLabelAlign.password" placeholder="请输入密码" type='password'></el-input>
              </el-form-item>
              <div class="submit">
                <el-button type="primary" class="row-login" @click="login()">登录</el-button>
              </div>
              <!-- <div class="options">
                <p class="find"><a href="javascript:;">找回密码</a></p>
                <div class="register">
                  <span>没有账号?</span>
                  <span><a href="javascript:;">去注册</a></span>
                </div>
              </div> -->
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <el-col>
        <p class="msg2">版权所有 ©2020 保留所有权利 </p>
      </el-col>
    </el-row>
    <section class="remind">
      <span>管理员账号：9527</span>
      <span>教师账号：20081001</span>
      <span>密码都是：123456</span>
    </section>
  </div>
</template>


<script>
import store from '@/vuex'
import {mapState} from 'vuex'

export default {
  store,
  name: "login",
  data() {
    return {
      role: 2,
      labelPosition: 'left',
      formLabelAlign: {
        username: '20154084',
        password: '123456'
      }
    }
  },
  methods: {
    //用户登录请求后台处理
    login() {
      console.log("登录操作执行-------");
      this.$router.push({path: '/teacher'}) //跳转到首页
      /*this.$axios({
        url: '/api/login',
        method: 'post',
        data: {
          ...this.formLabelAlign
        }
      }).then(res => {
        let resData = res.data.data
        if (resData != null) {
          switch (resData.role) {
            /!*case "0":  //管理员
              this.$cookies.set("cname", resData.adminName)
              this.$cookies.set("cid", resData.adminId)
              this.$cookies.set("role", 0)
              this.$router.push({path: '/index'}) //跳转到首页
              break*!/
            // case "1": //教师
            //   this.$cookies.set("cname", resData.teacherName)
            //   this.$cookies.set("cid", resData.teacherId)
            //   this.$cookies.set("role", 1)
            //   this.$router.push({path: '/index'}) //跳转到教师用户
            //   break
            // case "2": //学生
            //   this.$cookies.set("cname", resData.studentName)
            //   this.$cookies.set("cid", resData.studentId)
            //   this.$router.push({path: '/student'})
            //   break
          }
        }
        if (resData == null) { //错误提示
          this.$message({
            showClose: true,
            type: 'error',
            message: '用户名或者密码错误'
          })
        }
      })*/
    },
    clickTag(key) {
      this.role = key
    }
  },
  computed: mapState(["userInfo"]),
  mounted() {

  }
}
</script>
<style scoped>


</style>