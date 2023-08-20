<template>
  <div>
    <Navbar />
    <div class="container mx-auto px-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navigation/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
  body {
    background-color:rgb(38, 37, 37);
  }
</style>
