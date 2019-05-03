import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import Vuex from "vuex"
Vue.use(VueAxios, axios);
Vue.use(Vuex);
const URL = 'https://api-suppliers.herokuapp.com/api/suppliers';

export const store = new Vuex.Store({
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
                commit('changeLoadingState',
                    false)
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

})
