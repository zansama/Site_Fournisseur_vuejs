<template>
    <div>
        <h1>Liste des Fournisseurs</h1>
        <router-link to="/supplier"></router-link>
        <div v-for="supplier of suppliers" :key="supplier.id">
            <Supplier v-bind:name="supplier.name" v-bind:status="supplier.status" v-bind:checked-at="supplier.checkedAt"></Supplier>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import Supplier from "./Supplier";

    Vue.use(VueRouter);
    export default {
        name: "SuppliersList",
        components: {
            Supplier
        },
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1 ?",
                        status: true,
                        checkedAt: new Date()
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: new Date()
                    }
                ]
        }

        }


    }
</script>

<style scoped>

</style>