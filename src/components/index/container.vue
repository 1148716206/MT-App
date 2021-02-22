<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item, index) in nav.list"
          :key="index" :class="{active: kind === item.tab}"
          :data-type="item.tab">
        {{item.text}}
      </dd>


    </dl>
    <ul class="tbody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image"
               class="image">

          <div class="footers">
            <div class="title" :title="item.title">{{item.title}}</div>
<!--            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>-->
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol price">￥</span>
                <span class="current-price price">{{item.price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
              </span>
            </div>
            <!--<div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol price">￥</span>
                <span class="current-price price">抢光了</span>
              </span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.units}}均</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>-->
          </div>
        </el-card>
      </li>
    </ul>

  </div>
</template>

<script>
  import api from '../../api/index.js'
export default {
  name: "container",
  data() {
    return {
      kind: 'all',
      resultsData: {},
    }
  },
  props: [
    'nav'
  ],
  created(){
    api.resultsByKeyWords().then(res => {
      console.log(res);
      this.resultsData = res.data.data;

    })
  },
  methods: {
    over(e) {
      console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      // console.log(tagName);
      if (tagName !== 'dd') {
        return false;
      }
      this.kind = dom.getAttribute('data-type');
      //动态获取数据 Ajax请求
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/index/artistic.scss";
</style>
