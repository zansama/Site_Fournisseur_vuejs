<template>
    <div class="container">
        <h1>Modifier un fournisseur</h1>
        <form>
            <div class="form-group">
                <label for="name">Nom : </label>
                <input class="form-control" type="text" id="name" ref="name" name="supplier_name" :value="output.name">
            </div>
            <div class="form-group">
                <label for="checkedAt">checkedAt : </label>
                <input class="form-control" type="text" id="checkedAt" ref="checkedAt" name="supplier_checkedAt"
                       :value="output.checkedAt">
            </div>
            <div class="form-group">
                <label>Status : </label>
                <select v-model="selected" class="form-control" id="status" ref="status" name="supplier_status">
                    <option v-for="option in options" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="latitude">latitude : </label>
                <input class="form-control" type="text" id="latitude" ref="latitude" name="supplier_latitude"
                       :value="output.latitude">
            </div>
            <div class="form-group">
                <label for="longitude">longitude : </label>
                <input class="form-control" type="text" id="longitude" ref="longitude" name="supplier_longitude"
                       v-bind:value="output.longitude">
            </div>
            <button @click.prevent="getFormValues()" class="btn btn-primary mb-5 mr-2">modifier</button>
            <button @click.prevent="removeSupplier()" class="btn btn-danger mb-5">supprimer</button>

        </form>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import axios from 'axios'
    import supplier from "vue2-google-maps/src/components/cluster";

    export default {
        name: "UpdateSupplier",
        components: {},
        data: function () {
            return {
                current_id: '',
                selected: 'A',
                options: [
                    {text: 'Stock : yes', value: '1'},
                    {text: 'Stock : no', value: '2'},
                ], output: {
                    id: '',
                    name: '',
                    checkedAt: '',
                    status: '',
                    latitude: '',
                    longitude: ''
                }


            }
        },
        computed: Vuex.mapState(['suppliers']),
        created() {
            this.current_id = this.$route.params.id;

            axios.get(`https://api-suppliers.herokuapp.com/api/suppliers/${encodeURIComponent(this.current_id)}`)
                .then(response => {
                    if (this.current_id === response.data.id) {
                        this.output.name = response.data.name;
                        this.output.checkedAt = response.data.checkedAt
                        this.output.status = response.data.status;
                        this.output.latitude = response.data.latitude;
                        this.output.longitude = response.data.longitude;

                    }
                })
                .catch(error => console.log(error));
            // eslint-disable-next-line no-undef


        },
        methods: {
            getFormValues() {
                this.output.id = this.current_id;
                this.output.name = this.$refs.name.value;
                this.output.checkedAt = this.$refs.checkedAt.value;
                if (this.$refs.status.value === '1') {
                    this.output.status = true

                } else {
                    this.output.status = false
                }
                this.output.latitude = this.$refs.latitude.value;
                this.output.longitude = this.$refs.longitude.value;
                console.log(this.output);
                axios.put(`https://api-suppliers.herokuapp.com/api/suppliers/${encodeURIComponent(this.output.id)}`,
                    this.output)
                    .then(res =>
                    console.log(res)
                    )
                    .catch(error => console.log(error))
            },
        removeSupplier() {
            axios.delete(`https://api-suppliers.herokuapp.com/api/suppliers/${encodeURIComponent(this.current_id)}`,
                this.output)
                .then(res => {
                 if (res.status === 204) {
                     this.$router.push('/listSuppliers');
                 }
                    }

                )
                .catch(error => console.log(error))
        }

    }
    }

</script>

<style scoped>

</style>