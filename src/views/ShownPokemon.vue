<script>
import sourceData from '../sourceData.json'
export default {
  data(){
    return {
      sourceData
    }
  },
  computed: {
    pokemonId(){
      return parseInt(this.$route.params.id)
    },

    pokemon(){
      return sourceData.find(pokemon => pokemon.id === this.pokemonId)
    }
  }
}
</script>

<template>

<div class="card">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.img" :alt="pokemon.name">
    <p>{{ pokemon.description }}</p>
</div>

  
</template>

<style lang="scss" scoped>
  .card {
    height: 35%;
    width: 50%;
    text-align: center;
    margin: 0 auto;
  }
</style>