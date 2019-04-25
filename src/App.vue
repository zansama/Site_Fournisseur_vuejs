<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li><button v-on:click="onSuppliersListClick">Carte des fournisseurs</button></li>
      <li><button v-on:click="onMapClick">Liste des fournisseur</button></li>
    </ul>
    <suppliers-list></suppliers-list>
    <suppliers-map></suppliers-map>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SuppliersList from './components/SuppliersList'
import SuppliersMap from './components/SuppliersMap'

export default {
  name: 'app',
  components: {
    HelloWorld,
    SuppliersMap,
    SuppliersList,
  },
  methods: {
    onMapClick: function () {
      window.alert('vous avez cliquer sur la carte')
    },
    onSuppliersListClick: function () {
      window.alert('vous avez cliquer sur la liste des fournisseurs')
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  color: #42b983;
}


</style>
