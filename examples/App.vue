<template>
  <div id="app">
    <player base-url="http://localhost:3000"></player>
  </div>
</template>

<script>
import player from "../player.vue";
export default {
  name: "App",
  components: { player },
  data: function () {
    return { message: "hello" };
  },
};
</script>

<style>
#app {
  background-color: rgb(11, 208, 235);
  width: 100vh;
  height: 100vh;
}
</style>
