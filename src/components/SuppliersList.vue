<template>
    <div>
        <h1>Liste des Fournisseurs</h1>ds

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
    import Supplier from "./Supplier";
    import axios from 'axios';
    import {format, render, cancel, register} from 'timeago.js';

    Vue.use(VueRouter);
    export default {
        name: "SuppliersList",
        components: {
            Supplier
        },
        data: function () {
            return {
                suppliers: [],
                loading: false,
                error: null,
            }

        },
        created() {

            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => {
                    this.suppliers = response.data;
                    this.suppliers.checkedAt = format(this.suppliers.checkedAt).toLocaleString();
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                    this.error = true
                })
                .finally(() => this.loading = false)

        }

    }
</script>

<style scoped>
    .rouge {
        color: red;
    }
</style>