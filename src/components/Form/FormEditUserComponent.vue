<template>
  <form class="w-full rounded-2xl bg-gray-600 p-10" @submit.prevent="update">
    <DangerAlert
      :status="error_status"
      @cleanErrors="cleanErrors"
      message="Ha ocurrido un error vuelva a intentarlo"
    />
    <SuccessAlert
      :status="error_status"
      @cleanErrors="cleanErrors"
      message="Actualización exitosa, se redirigira al perfil"
    />
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
          for="name"
        >
          Nombre
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          :class="
            error_data.errors.name && error_data.errors.name.length > 0
              ? 'border border-pink-500'
              : ''
          "
          id="name"
          type="text"
          placeholder="Nombre"
          v-model="name"
        />
        <p
          v-if="error_data.errors.name && error_data.errors.name.length > 0"
          class="text-pink-500 text-xs italic"
        >
          {{ error_data.errors.name[0] }}
        </p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
          for="email"
        >
          Correo electronico
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          :class="
            error_data.errors.email && error_data.errors.email.length > 0
              ? 'border border-pink-500'
              : ''
          "
          id="email"
          type="email"
          placeholder="correo@correo.com"
          v-model="email"
        />
        <p
          v-if="error_data.errors.email && error_data.errors.email.length > 0"
          class="text-pink-500 text-xs italic"
        >
          {{ error_data.errors.email[0] }}
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
          for="description"
        >
          Descripción
        </label>
        <textarea
          id="description"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          :class="
            error_data.errors.description &&
            error_data.errors.description.length > 0
              ? 'border border-pink-500'
              : ''
          "
          placeholder="Escribe tu descripción"
          v-model="description"
        ></textarea>
        <p
          v-if="
            error_data.errors.description &&
            error_data.errors.description.length > 0
          "
          class="text-pink-500 text-xs italic"
        >
          {{ error_data.errors.description[0] }}
        </p>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Registrese
      </button>
    </div>
  </form>
</template>

<script>
import user from "@/logic/user";
import DangerAlert from "../Alerts/DangerAlert.vue";
import SuccessAlert from "../Alerts/SuccessAlert.vue";

export default {
  name: "FormEditUser",
  components: {
    DangerAlert,
    SuccessAlert,
  },
  data: () => ({
    email: "",
    name: "",
    description: "",
    error: false,
    error_data: {
      message: "",
      errors: {
        email: [],
        name: [],
        description: [],
      },
    },
    error_status: 201,
  }),
  async mounted() {
    try {
      const res = await user.getUser();
      const userData = res.data.user;
      this.email = userData.email;
      this.name = userData.name;
      this.description = userData.description;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async update() {
      try {
        const data = {
          email: this.email,
          name: this.name,
          description: this.description,
        };
        await user.updateUser(data);
        this.error_status = 200;
        setTimeout(() => {
          this.cleanErrors();
          this.$router.push("/user");
        }, 5000);
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          this.error = true;
          this.error_data = data;
          this.error_status = status;
        } else {
            console.log(error);
        }
      }
    },
    cleanData() {
      this.email = "";
      this.name = "";
      this.description = "";
    },
    cleanErrors() {
      this.error = false;
      this.error_data = {
        message: "",
        errors: {
          email: [],
          name: [],
          description: [],
          password: [],
          password_confirmation: [],
        },
      };
      this.error_status = 201;
    },
  },
};
</script>