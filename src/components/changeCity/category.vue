<template>
	<div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index"><a :href="'#city-' + item">{{item}}</a></dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :key="index" :id="'city-' + index">
      <dt>{{index}}</dt>
      <dd>
       <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
  import api from '../../api/index'
	export default {
		name: "category",
    data(){
		  return {
		    list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        cityList: [],
        cityGroup: {},
      }
    },
    created() {
		  api.getCityList().then((res) => {                   //请求数据 获得城市列表
        var obj = {};
        res.data.data.forEach((item, index) => {
          if(!obj[item.firstChar.toUpperCase()]) {            //获得城市的首字母，大写
            obj[item.firstChar.toUpperCase()] = [];
          }
          obj[item.firstChar.toUpperCase()].push(item);
        });

        this.cityGroup=  obj;
      })


    },
    methods: {
		  changeCity(item) {
		    this.$store.dispatch('setPosition', item);        //改变当前位置
		    this.$router.push({name:'index'})                      // 跳转
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../../assets/css/changecity/categroy.scss";
</style>
