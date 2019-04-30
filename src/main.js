import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SuppliersMap from "./components/SuppliersMap.vue";
import SuppliersList from "./components/SuppliersList.vue";
import Supplier from "./components/Supplier.vue";
import * as VueGoogleMaps from 'vue2-google-maps';
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.use(Vuex);
const URL = 'https://api-suppliers.herokuapp.com/api/suppliers';

const store = new Vuex.Store({
    state: {
        suppliers: [],
        loading: true
    },
    actions: {
        loadData({
                     commit
                 }) {
            axios.get(URL).then((response) => {
                // console.log(response.data, this)
                commit('updateSuppliers', response.data)
                commit('changeLoadingState', false)
            })
        }
    },
    mutations: {
        updateSuppliers(state, suppliers) {
            state.suppliers = suppliers
        },
        changeLoadingState(state, loading) {
            state.loading = loading
        }
    }

});

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB_rUFcZii_mHfRgddtI0e_lgK6cQj7fG4\n',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
})
Vue.use(VueRouter);

const routes = [
    {path: '/mapSuppliers', component: SuppliersMap},
    {path: '/listSuppliers', component: SuppliersList},
    {path: '/supplier', component: Supplier}
];

const router = new VueRouter({
    routes // raccourci pour `routes: routes`
});

Vue.config.productionTip = false;

new Vue({

    router,
    store,
    created() {
        //  console.log(this.$store)
        this.$store.dispatch('loadData') // dispatch loading
    },
    render: h => h(App),

}).$mount('#app')
