<template>
  <div class="my-10 mx-5">
    <h1 class="text-3xl text-gray-200 font-bold">Home</h1>
  </div>
  <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    <Card />
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import Card from "./components/Card.vue";

export default {
  name: "CryptoComponent",
  setup () {
    const router = useRouter();
    router.push('/');
  },
  components: {
    Card,
  },
  props: {},
};
</script>
