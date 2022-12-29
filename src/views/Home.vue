<template>
  <h1>Pokémon Starters</h1>

  <div class="img-container">
    <router-link v-for="pokemon in sourceData"
    :key="pokemon.id"
    :to="{name: 'pokemon.show', params: {id: pokemon.id}}"
    >
    <img :src="pokemon.img" :alt="pokemon.name">
    </router-link>
      
  </div>

</template>

<script>
import sourceData from '../sourceData.json'
export default {
  data(){
    return {
      sourceData
    }
  }
}

</script>

<style lang="scss" scoped>

  .img-container {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    img {
      transition: all .2s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

</style>