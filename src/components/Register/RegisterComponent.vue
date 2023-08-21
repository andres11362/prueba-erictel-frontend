<!-- Componente principal del registro -->
<template>
  <div class="my-10 mx-5 text-center">
    <h1 class="text-3xl text-gray-200 font-bold">Registrese</h1>
  </div>

  <div class="grid m-10 justify-center">
    <div class="w-4">
      <button
        type="button"
        class="text-gray-300 hover:text-white border border-gray-600 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        @click="$router.go(-1)"
      >
        Atras
      </button>
    </div>
    <FormUserComponent />
  </div>
</template>

<script>
import { useRouter } from "vue-router";

import FormUserComponent from "../Form/FormUserComponent.vue";

/**
 * Se hace el llamado del componente FormUserComponent para la visualización
 * del formulario
 **/
export default {
  name: "RegisterComponent",
  setup() {
    const router = useRouter();
    router.push("/register");
  },
  components: {
    FormUserComponent,
  },

  props: {},
};
</script>