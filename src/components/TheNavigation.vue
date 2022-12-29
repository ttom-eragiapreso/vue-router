<template>

  <div class="nav">
    <router-link to="/">Pokémon Starters</router-link>
    <div class="link-container">
      <router-link v-for="pokemon in sourceData"
      :key="pokemon.id"
      :to="{name : 'pokemon.show', params: {id: pokemon.id}}"
      >{{ pokemon.name }}</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.nav {
  height: 75px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  a {
    text-decoration: none;
    color: rgb(215, 215, 215);
    font-size: 1.7rem;
    &:hover {
      color: black;
    }
  }
  .link-container a {
    padding: 0 1rem;
  }
  .r-active-link {
    color: black;
  }
}



</style>

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