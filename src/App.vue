<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
    <ul>
      <li><button><router-link to="/mapSuppliers">Carte des fournisseurs</router-link></button></li>
      <li><button><router-link to="/listSuppliers">Liste des fournisseur</router-link></button></li>
    </ul>
  <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import Vue from 'vue'
//import VueRouter from 'vue-router'


//Vue.use(VueRouter);


export default {
  name: 'app',
  components: {
    HelloWorld

  },


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
