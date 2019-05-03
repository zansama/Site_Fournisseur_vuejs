<template>
    <div>
        <h1>Liste des Fournisseurs</h1>
        <select v-model="selected">
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
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
                <div v-if="selected === 'A'">
                    <Supplier v-if="supplier.status === true"
                              v-bind:id="supplier.id" v-bind:name="supplier.name" v-bind:status="supplier.status"
                              v-bind:checked-at="supplier.checkedAt">
                    </Supplier>


                </div>
                <div v-else-if="selected === 'B'">
                    <Supplier v-if="supplier.status === false"
                              v-bind:id="supplier.id" v-bind:name="supplier.name" v-bind:status="supplier.status"
                              v-bind:checked-at="supplier.checkedAt">

                    </Supplier>
                </div>
                <div v-else-if="selected === 'C'">
                    <Supplier
                            v-bind:id="supplier.id" v-bind:name="supplier.name" v-bind:status="supplier.status"
                            v-bind:checked-at="supplier.checkedAt">
                    </Supplier>


                </div>
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
            Supplier,
        },
        data: function () {
            return {
                error: null,
                selected: 'A',
                options: [
                    {text: 'Stock : yes', value: 'A'},
                    {text: 'Stock : no', value: 'B'},
                    {text: 'Stock : yes/no', value: 'C'}
                ],
                supplierSort: {
                    name: '',
                    checkedAt: '',
                    status: ''
                }
            }
        },
        created() {
            this.$store.dispatch('loadData') // dispatch loading
        },
    }
</script>

<style scoped>
    .rouge {
        color: red;
    }
</style>