<template>
    <div>
        <h1>Carte des Fournisseurs</h1>
        <GmapMap class="gmap"
                 :center="{lat:10, lng:10}"
                 :zoom="7"

        >
            <GmapMarker

                    v-for="supplier of suppliers" v-bind:key="supplier.id"
                    :position="{lat:parseFloat(supplier.latitude), lng:parseFloat(supplier.longitude)}"
                    :clickable="true"
                    :draggable="true"
                    @click="center={lat:supplier.latitude, lng:supplier.longitude}"
            />
        </GmapMap>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "SuppliersMap",
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
                    this.suppliers = response.data
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
    .gmap {
        margin: auto;
        width: 80%;
        height: 800px
    }
</style>