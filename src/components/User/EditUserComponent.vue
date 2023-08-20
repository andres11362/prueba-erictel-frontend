<template>
  <div class="my-10 mx-5 text-center">
    <h1 class="text-3xl text-gray-200 font-bold">Editar usuario</h1>
  </div>
  <div class="grid m-10 justify-center">
    <FormUserComponent />
  </div>
</template>

<script>
import { useRouter } from "vue-router";

import FormUserComponent from '../Form/FormUserComponent.vue'

export default {
  name: "EditUserComponent",
  setup() {
    const router = useRouter();
    router.push("/edit-user");
  },
    components: {
      FormUserComponent,
    },
  props: {},
};
</script>