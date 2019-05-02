<template>
    <div class="container">
        <h1>Créer un nouveau fournisseur</h1>
        <form action="" method="post">
            <div class="form-group">
                <label for="name">Nom : </label>
                <input class="form-control" type="text" id="name" ref="name" name="supplier_name">
            </div>
            <div class="form-group">
                <label for="checkedAt">checkedAt : </label>
                <input class="form-control" type="date" id="checkedAt" ref="checkedAt" name="supplier_checkedAt">
            </div>
            <div class="form-group">
                <label for="status">Status : </label>
                <select class="form-control" id="status" ref="status" name="supplier_status">
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </div>
            <div class="form-group">
                <label for="latitude">latitude : </label>
                <input class="form-control" type="text" id="latitude" ref="latitude" name="supplier_latitude">
            </div>
            <div class="form-group">
                <label for="longitude">longitude : </label>
                <input class="form-control" type="text" id="longitude" ref="longitude" name="supplier_longitude">
            </div>
            <button @click.prevent="getFormValues()" type="submit" class="btn btn-primary mb-5">Créer</button>
        </form>
        Output: {{ output }}
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import axios from 'axios'
//    import VueAxios from 'vue-axios'

    export default {
        name: "AddSupplier",
        computed: Vuex.mapState(['suppliers', 'loading']),
        data: function () {
            return {
                output: {
                    name: '',
                    checkedAt: '',
                    status: '',
                    latitude: '',
                    longitude: ''
                }
            }
        },
        methods: {
            getFormValues() {
                this.output.name = this.$refs.name.value;
                this.output.checkedAt = this.$refs.checkedAt.value;
                if (this.$refs.status.value === '1') {
                    this.output.status = true

                } else {
                    this.output.status = false
                }
                this.output.latitude = this.$refs.latitude.value;
                this.output.longitude = this.$refs.longitude.value;
                axios.post('https://api-suppliers.herokuapp.com/api/suppliers',
                    this.output)
                    .then(res => console.log(res.request.response))
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
    label {
        font-weight: bold;
    }

    .form-group {
        text-align: left;
    }
</style>