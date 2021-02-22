import axios from '../axios.js'

var api = {
  searchHotWords(params) {
    return axios.get('/api/meituan/header/searchHotWords.json',params)
  },
  getSearchWords(){
    return axios.get('/api/meituan/header/search.json',)
  },
  getMenuList(){
    return axios.get('/api/meituan/index/nav.json',)
  },
  resultsByKeyWords(){
    return axios.get('/api/meituan/index/resultsByKeywords.json',)
  },
}
export  default api;
