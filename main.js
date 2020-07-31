import Vue from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from 'axios'
Vue.config.productionTip = false

if (sessionStorage.getItem('user')){
  console.log(sessionStorage.getItem('user'))
}
else {
  sessionStorage.setItem('user','fly_boom')
}

Vue.use(VueAxios,axios)
let a = location
console.log(a.search)
new Vue({
  render: h => h(App),
}).$mount('#app')
