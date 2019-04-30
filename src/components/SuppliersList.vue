<template>
    <div>
        <h1>Liste des Fournisseurs</h1>

        <div v-if="error">
            <p class="rouge">Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le
                moment. Veuillez réessayer ultérieurement.</p>
        </div>
        <div
                v-else>
            <div v-if="loading">
                <p>CHARGEMENT EN COURS</p>
            </div>
            <div
                    v-else
                    v-for="supplier of suppliers" :key="supplier.id">
                <Supplier v-bind:name="supplier.name" v-bind:status="supplier.status"
                          v-bind:checked-at="supplier.checkedAt"></Supplier>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import Supplier from './Supplier'
    import Vuex from 'vuex'

    Vue.use(VueRouter);

    export default {
        name: "SuppliersList",
        computed: Vuex.mapState(['suppliers', 'loading']),
        components: {
            Supplier
        },
        data: function () {
            return {
                error: null,
            }
        },
    }
</script>

<style scoped>
    .rouge {
        color: red;
    }
</style>