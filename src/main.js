import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps';
import { store } from "./components/store.js"
import { router } from "./components/router.js"

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB_rUFcZii_mHfRgddtI0e_lgK6cQj7fG4\n',
        libraries: 'places'
    }
})

Vue.config.productionTip = false;

new Vue({

    router,
    store,
    render: h => h(App),

}).$mount('#app')
