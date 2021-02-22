<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      重庆
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
      [
      <a href="#">璧山</a>
      <a href="#">北碚</a>
      <a href="#">铜梁</a>
      ]
    </div>
    <div class="m-user">
      <router-link class="login" :to="{name:'login'}">立即登录</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'geo'
  }
</script>

<style scoped>

</style>
