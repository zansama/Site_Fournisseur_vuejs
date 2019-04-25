<template>
    <div class="perso" id="supplier">
        <h1>{{name}}</h1>
        <h3 v-if="!status" class="red">A du Stock ? NO</h3>
        <h3 v-else class="green">A du Stock ? YES</h3>
        <h5>Date de dernière relevé des stocks : {{checkedAt}} </h5>
    </div>
</template>

<script>
    export default {
        name: "Supplier",
        data: function () {
            return {
                name: "Amazon",
                status: false, // est ce qu'il y a du stock
                checkedAt: new Date() // date de la dernière mise à jour du stock
            }

        }

    }
</script>

<style scoped>
    .perso {
        border-bottom: 4px solid grey;
        border-top: 4px solid grey;
    }

    .red {
        color: red;
    }

    .green {
        color: greenyellow;
    }
</style>