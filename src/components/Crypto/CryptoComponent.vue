<!-- Componente principal de criptomonedas que muestra todas la monedas consultadas -->
<!-- en el API -->
<template>
  <LoaderComponent v-if="loading" />
  <div v-else>
    <div class="my-10 mx-5">
      <h1 class="text-3xl text-gray-200 font-bold">Home</h1>
    </div>
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
    >
      <div class="relative" v-for="item in data" :key="item.id">
        <div class="absolute w-9 left-8 z-10">
          <img class="object-contain" src="../../assets/img/Bitcoin.svg" />
        </div>
        <Card :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./components/Card.vue";
import LoaderComponent from '../Loader/LoaderComponent.vue';
import crypto from "@/logic/crypto";

export default {
  name: "CryptoComponent",
  components: {
    Card,
    LoaderComponent
  },
  // Datos a cargar data, si es necesario mostrar los datos, y manejo de errores
  data: () => ({
    data: {},
    loading: true,
    error: false,
    error_status: 201,
  }),
  /** 
   * Se hace el llamado al endpoint de todas las monedas 
   * En caso de ser correcto el llamado se devuelve la data
   **/
  async mounted() {
    try {
      this.loading = true;
      const res = await crypto.getAll();
      const { data } = res.data;
      this.data = data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
