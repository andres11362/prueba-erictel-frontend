<!-- Componente principal del registro -->
<template>
  <div class="my-10 mx-5 text-center">
    <h1 class="text-3xl text-gray-200 font-bold">Registrese</h1>
  </div>
  <div class="grid m-10 justify-center">
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