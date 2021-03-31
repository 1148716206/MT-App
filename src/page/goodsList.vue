<template>
  <div class="page-product">
    <el-row class="m-crumbs">
<!-- 导航栏-->
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
       <el-row>
<!-- 分类 区域-->
         <categroy />
       </el-row>
       <el-row>
<!-- 商品列表-->
         <list />
       </el-row>
      </el-col>
      <el-col :span="5">
<!-- 右侧地图  猜你喜欢-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import crumbs from '../components/products/crumbs.vue'
  import categroy from '../components/products/categroy.vue'
  import List from '../components/products/list.vue'
  export default {
    name: "goodsList",
    components:{
      crumbs,
      categroy,
      List
    }
  }
</script>

<style  lang="scss">

</style>
