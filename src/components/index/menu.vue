<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>


      <dd><i class="homestay"></i>民宿 <span class="arrow"></span></dd>
      <dd><i class="movie"></i>猫眼电影 <span class="arrow"></span></dd>
      <dd><i class="airport"></i>机票/火车票 <span class="arrow"></span></dd>
      <dd><i class="ktv"></i>休闲娱乐/KTV <span class="arrow"></span></dd>
      <dd><i class="hair"></i>丽人 / 美发 / 医学美容 <span class="arrow"></span></dd>
      <dd><i class="marry"></i>结婚 / 婚纱摄影 / 婚宴 <span class="arrow"></span></dd>
      <dd><i class="offspring"></i>亲子 / 儿童乐园 / 幼教 <span class="arrow"></span></dd>
      <dd><i class="sport"></i>运动健身 / 健身中心 <span class="arrow"></span></dd>
      <dd><i class="furniture"></i>家装 / 建材 / 家居 <span class="arrow"></span></dd>
      <dd><i class="study"></i>学习培训 / 音乐培训 <span class="arrow"></span></dd>
      <dd><i class="health"></i>医疗健康 / 宠物 / 爱车 <span class="arrow"></span></dd>
      <dd><i class="bar"></i>酒吧 / 密室逃脱 <span class="arrow"></span></dd>
    </dl>
    <dl>
      <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template v-for="(item, index) in curDetail.items">
          <h2 :key="index">{{item.title}}</h2>
          <span v-for="(v, i) in item.items" :key="v + '_' + i">{{v}}</span>


        </template>
      </div>
    </dl>
  </div>
</template>

<script>
  import api from '../../api/index.js'
  export default {

    data() {
      return {
        curDetail: null,
        menuList: []
      }
    },
    created(){

      api.getMenuList().then(res => {
        this.menuList = res.data.data;
      })
    },
    methods: {
      menuEnter(item) {

        this.curDetail = item;
      },
      menuLeave() {
        let self = this;
        this.timer = setTimeout(function () {
          self.curDetail = null;
        }, 200)

      },
      detailEnter() {
        clearTimeout(this.timer);
      },
      detailLeave() {
        this.curDetail = null;
      }
    }
  }
</script>

<style scoped>

</style>
