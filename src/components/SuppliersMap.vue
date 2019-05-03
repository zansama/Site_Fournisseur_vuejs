<template>
    <div>
        <h1>Carte des Fournisseurs</h1>
        <GmapMap class="gmap"
                 geo = navigator.geolocation
                 :center="{lat:currentLocation.lat, lng:currentLocation.lng}"
                 :zoom="17"
                 :options="{disableDefaultUI:true}"

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
                currentLocation : { lat : 0, lng : 0},
                searchAddressInput: ''
            }
        },
        mounted : function() {
            this.geolocation();
            this.$store.dispatch('loadData'); // dispatch loading


        },
        methods: {
            geolocation : function() {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            }
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