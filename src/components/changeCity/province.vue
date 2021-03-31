<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select :list="provinceList"
              title="省份"
              :value="province"
              :showWrapperActive="provinceActive"
              @change_active="changeProvinceActive"
              @change="changeProvince"
              className="province"
    />
    <m-select :list="cityList"
              title="城市"
              :value="city"
              :showWrapperActive="cityActive"
              @change_active="changeCityActive"
              @change="changeCity"
              :disabled="cityDisabled"
              className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  import MSelect from './select.vue'
  import api from  '../../api/index'
  export default {
    name: "province",
    data() {
      return {
        provinceList: [],
        province: '省份',
        cityList: [],
        city: '城市',
        cityActive: false,
        provinceActive: false,
        searchList: ['万州','忠县','梁平','武隆','长寿'],
        searchWord: '',
        loading: false,
        cityDisabled:true
      }
    },
    components: {
      MSelect
    },
    created() {
      api.getProvinceList().then((res) => {                    //请求数据 成功回调
        this.provinceList = res.data.data.map((item) => {       //获取列表信息
          item.name = item.provinceName;                         //填入
          return item
        });
        // console.log(this.provinceList)
      })
    },
    methods: {
      changeProvinceActive(flag){
        this.provinceActive = flag;
        if(flag){
          this.cityActive = false;
        }
      },
      changeCityActive(flag){
        this.cityActive = flag;
        if(flag){
          this.provinceActive = false;
        }
      },
      changeProvince(item){
        this.province = item.name;                      //改变省份
        this.cityDisabled=false;                         //选择省份后，才能点击选择城市
        this.cityList = item.cityInfoList                //cityInfoList 存储城市信息
      },
      changeCity(item){
        this.city = item.name;                          //改变城市
        this.$store.dispatch('setPosition',item)    //改变城市后，设置当前位置
        this.$router.push({name:'index'})                 //跳转到主页
      },
      remoteMethod(val){
        //请求后端接口
      }

    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/changecity/iselect.scss";
</style>
