<template>
  <div>
    <TheHeader 
      v-show="showHeader"
    />
    <button @click="anotacoes = !anotacoes">Ativar e desativar Anotações</button>
    <anotacoes 
      v-show="anotacoes"
    />
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader'
import anotacoes from '../anotacoes.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheHeader,
    anotacoes
  },
  data(){
    return{
      showHeader: true,
      anotacoes: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
