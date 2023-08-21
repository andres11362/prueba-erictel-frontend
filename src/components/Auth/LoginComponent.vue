<!-- Componente principal del login -->
<template>
  <div class="my-10 mx-5 text-center">
    <h1 class="text-3xl text-gray-200 font-bold">Bienvenido</h1>
  </div>
  <div class="grid m-10 justify-center">
    <FormLogin />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import FormLogin from "../Form/FormLogin.vue";

/**
 * Se hace el llamado del componente FormLogin para la visualización
 * del formulario
 **/
export default {
  name: "LoginComponent",
  setup() {
    const router = useRouter();
    router.push("/login");
  },
  components: {
    FormLogin,
  },
  props: {},
};
</script>