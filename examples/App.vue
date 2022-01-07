<template>
  <div id="app">
    <player></player>
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
}
</style>
