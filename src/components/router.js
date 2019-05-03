import Vue from "vue";
import VueRouter from "vue-router";
import SuppliersMap from "./SuppliersMap.vue";
import SuppliersList from "./SuppliersList.vue";
import Supplier from "./Supplier.vue";
import AddSupplier from "./AddSupplier";
import UpdateSupplier from "./UpdateSupplier";

Vue.use(VueRouter);

const routes = [
    {path: '/mapSuppliers', component: SuppliersMap},
    {path: '/listSuppliers', component: SuppliersList},
    {path: '/updateSupplier/:id', component: UpdateSupplier, name: 'Page2'},
    {path: '/supplier', component: Supplier},
    {path: '/addSupplier', component: AddSupplier},

];

export const router = new VueRouter({
    routes // raccourci pour `routes: routes`
});
