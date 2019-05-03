<template>
    <div class="perso" id="supplier">
        <h1>{{name}}</h1>
        <h3 v-if="!status" class="red">A du Stock ? NO</h3>
        <h3 v-else class="green">A du Stock ? YES</h3>
        <h5>Date de dernière relevé des stocks : {{checkedAt}} </h5>
        <button class="mb-3"><router-link :to="{ name: 'Page2', params: { id }}">Modifier/Supprimer</router-link></button>

    </div>
</template>

<script>
    export default {
        name: "Supplier",
        props: {
            id: String,
            name: String,
            status: Boolean,
            checkedAt: String
        }
    }
</script>

<style scoped>
    .perso {
        margin-top: 5px;
        border: 2px solid grey;
    }
    .red {
        color: red;
    }
    .green {
        color: greenyellow;
    }
</style>