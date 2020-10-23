import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ButtonCustom from './components/ButtonCustom.vue'
import Home from './components/pages/Home.vue'
import Career from './components/pages/Career.vue'
import SlotsExample from './components/pages/SlotsExample'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/my-career/:userId', component: Career },
    { path: '/button-custom', component: ButtonCustom },
    { path: '/slots', component: SlotsExample }
  ]
})

window.store = {
  cart: [{}, {}, {}],
  actions: {
    addValue(value) {
      store.cart.push(value)
    }
  }
};

new Vue({
  data: store,
  router,
  render: h => h(App)
}).$mount('#app')
