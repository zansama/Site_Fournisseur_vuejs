import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SuppliersMap from "./components/SuppliersMap.vue";
import SuppliersList from "./components/SuppliersList.vue";
import Supplier from "./components/Supplier.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/mapSuppliers', component: SuppliersMap },
  { path: '/listSuppliers', component: SuppliersList },
  { path: '/supplier', component: Supplier}
]

const router = new VueRouter({
  routes // raccourci pour `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
