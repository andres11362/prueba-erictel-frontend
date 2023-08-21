<!-- Componente principal de criptomonedas que muestra una moneda en especifico -->
<!-- en el API -->
<template>
  <LoaderComponent v-if="loading" />
  <div v-else class="m-10 grid grid-cols-1 content-center">
    <div class="w-4">
      <button
        type="button"
        class="text-gray-300 hover:text-white border border-gray-600 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        @click="$router.go(-1)"
      >
        Atras
      </button>
    </div>
    <div class="my-10 mx-5">
      <h1 class="text-3xl text-gray-200 font-bold">Datos importantes</h1>
    </div>
    <div
      class="w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div class="bg-gray-700 text-gray-300 text-lg px-6 py-4">
        {{ data.name }}
      </div>

      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Slug: </strong>
          <p>{{ data.slug }}</p>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Suministro de circulacion: </strong>
          <p>{{ data.circulating_supply }}</p>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Suministro de total: </strong>
          <p>{{ data.total_supply }}</p>
        </div>
      </div>

      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Porcentaje de cambio semanal: </strong>
          <p>{{ `${data?.quote?.USD?.percent_change_7d.toFixed(2)}%` }}</p>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Precio: </strong>
          <p>{{ `${data?.quote?.USD?.price.toFixed(2)} USD` }}</p>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Volumen diario: </strong>
          <p>{{ `${data?.quote?.USD?.volume_24h.toFixed(2)}` }}</p>
        </div>
      </div>

      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Volumen de cambio diario: </strong>
          <p>{{ `${data?.quote?.USD?.volume_change_24h.toFixed(2)}` }}</p>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Numero de pares en el mercado: </strong>
          <p>{{ data.num_market_pairs }}</p>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          <strong>Ranking CMC: </strong>
          <p>{{ data.cmc_rank }}</p>
        </div>
      </div>

      <div class="bg-gray-700 px-6 py-4">
        <div class="flex items-center pt-3">
          <div
            class="w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white"
          >
            <img src="../../assets/img/Bitcoin.svg" />
          </div>
          <div class="ml-4">
            <p class="font-bold text-gray-500">Tags:</p>
            <ul class="grid grid-cols-4">
              <li class="text-gray-500" v-for="item in data.tags" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import crypto from "@/logic/crypto";
import { useRoute } from "vue-router";
import LoaderComponent from "../Loader/LoaderComponent.vue";

export default {
  name: "IndivualComponent",
  components: {
    LoaderComponent,
  },
  // Datos a cargar data, si es necesario mostrar los datos, y manejo de errores
  data: () => ({
    data: {},
    loading: false,
    error: false,
    error_status: 201,
  }),
  /**
   * Se hace el llamado al endpoint de una moneda
   * por medio del parametro del id de la ruta
   * En caso de ser correcto el llamado se devuelve la data
   **/
  async mounted() {
    try {
      this.loading = true;
      const route = useRoute();
      const id = route.params.id;
      const res = await crypto.getOne(id);
      const { data } = res.data;
      this.data = Object.values(data)[0];
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>