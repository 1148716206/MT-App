<template>
  <div class="page-login">
    <div class="login-header">
      <a href="#" class="logo"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{error}}</h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input :class="{error:error && !userName}" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="el-icon-user"></el-input>
        <el-input :class="{error:error && !password}" v-model="password"  type="password" show-password placeholder="密码" prefix-icon="el-icon-lock"></el-input>
        <div class="foot"><a href="#">忘记密码?</a></div>
      <el-button   class="btn-login" @click="submit" >登录</el-button>
        <p class="reg">还没有账号? <router-link :to="{name:'register'}">免费注册</router-link></p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
          <div class="oauth cf">
            <span class="oauth__link oauth__link--qq third-login-btn" data-href="/account/connect/tencent" target="_blank" id="J-third-tencent"></span>
            <span class="oauth__link oauth__link--weibo third-login-btn" data-href="/account/connect/sina" target="_blank" id="J-third-sina"></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>©2021 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
  import api from '../api/index'
	export default {
		name: "login",
    data(){
		  return{
		    userName: '',
        password: '',
        error:''
      }
    },
    methods: {
		  submit() {                          //登录
		    // console.log(this.userName)
        if(!this.userName){               //不输入用户名 进行提示
          this.error = '请输入账号';
          return false
        }
        if(!this.password){                //不输入密码 进行提示
          this.error = '请输入密码';
          return false
        }
        api.login({                   //axios进行请求 传入参数
          params: {
            userName: this.userName,
            password: this.password
          }
        }).then((res) => {
          // console.log(res)
          if(res.data.status === 'success'){
            this.$router.push({name:'index'})         //成功执行后 跳转到主页
            this.$store.commit('setUserName',this.userName)   //登录、注册消失
          }else {
            this.error = res.data.msg                   //返回失败信息
          }
        })
      }
    }
	}
</script>

<style scoped lang="scss">
@import "../assets/css/login/index";
</style>
