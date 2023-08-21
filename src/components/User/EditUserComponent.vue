<template>
  <div class="my-10 mx-5 text-center">
    <h1 class="text-3xl text-gray-200 font-bold">Editar usuario</h1>
  </div>
  <div class="grid m-10 justify-center">
    <FormEditUserComponent />
  </div>
</template>

<script>
import FormEditUserComponent from "../Form/FormEditUserComponent.vue";

export default {
  name: "EditUserComponent",
  components: {
    FormEditUserComponent,
  },
  props: {},
};
</script>