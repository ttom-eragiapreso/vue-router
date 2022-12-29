<script>
import TheNavigation from './components/TheNavigation.vue';
export default {
  components: {
    TheNavigation
  }
}

</script>

<template>
 
  <TheNavigation/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

@use '../src/scss/general.scss' as *;


.nav {
  height: 75px;
  background-color: cadetblue;
  display: flex;
  align-items: center;
}

.container {
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
