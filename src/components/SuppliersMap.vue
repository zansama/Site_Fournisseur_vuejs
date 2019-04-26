<template>
    <div>
        <h1>Carte des Fournisseurs</h1>
        <GmapMap class="gmap"
                :center="{lat:10, lng:10}"
                :zoom="7"
                style="width: 80%; height: 800px"
        >
            <GmapMarker

                    v-for="supplier of suppliers"  v-bind:key="supplier.id"
                    :position="{lat:supplier.latitude, lng:supplier.longitude}"
                    :clickable="true"
                    :draggable="true"
                    @click="center={lat:supplier.latitude, lng:supplier.longitude}"
            />
        </GmapMap>
    </div>
</template>

<script>

    export default {
        name: "SuppliersMap",
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        latitude: 10,
                        longitude: 10,
                    },
                    {
                        id: 2,
                        latitude: 11,
                        longitude: 9.6,
                    }
                ]
            }

        }

    }
</script>

<style scoped>
.gmap {
    margin: auto;
}
</style>