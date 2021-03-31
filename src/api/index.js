import axios from '../axios.js'

var api = {
  searchHotWords(params) {               //查询最近热门搜索
    return axios.get('/api/meituan/header/searchHotWords.json',params)
  },
  getSearchWords(){                       //搜索框列表数据获取
    return axios.get('/api/meituan/header/search.json',)
  },
  getMenuList(){                          //首页左侧导航条 导航数据
    return axios.get('/api/meituan/index/nav.json',)
  },
  resultsByKeyWords(){                    //首页下方（有格调内容区数据获取
    return axios.get('/api/meituan/index/resultsByKeywords.json',)
  },
  getProductsList(){                      //产品展示列表数据获取
    return axios.get('/api/meituan/list/goodsList.json',)
  },
  getHotCity(){                           //获取热门城市
    return axios.get('/api/meituan/city/hot.json',)
  },
  getRecentCity(){                        //最近搜索城市
    return axios.get('/api/meituan/city/recents.json',)
  },
  getProvinceList(){                      //获取省份列表
    return axios.get('/api/meituan/city/province.json',)
  },
  getCurPosition(){                      //获取当前位置信息
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList(){                          //获取城市列表接口
    return axios.get('/api/meituan/city/cityList.json')
  },
  getClassify(){                          //获取分类列表
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList(){                          //获取区域列表
    return axios.get('/api/meituan/list/areaList.json')
  },
  login(params){                          //用户登录接口
    return axios.get('/api/meituan/login',params)
  },
  register(params) {                      //用户注册接口
    return axios.get('/api/meituan/register',params)
  }


}
export default api;
