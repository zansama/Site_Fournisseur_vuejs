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
    import Vuex from 'vuex'

    export default {
        name: "SuppliersMap",
        computed: Vuex.mapState(['suppliers', 'loading']),
        data: function () {
            return {
                error: null,
            }
        },
    }
</script>


<style scoped>
    .gmap {
        margin: auto;
        width: 80%;
        height: 800px
    }
</style>