/**
 * Created by yanlli on 2017/7/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'Authorization': 'Bearer ' + localStorage.token
};
axios.defaults.baseURL = process.env.API_ROOT;
export default new Vuex.Store({
  actions:{
    login(context){
      axios.post('/login.php')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
})
