<!-- Componente formulario que maneja las actualizaciones de un usuario -->
<template>
  <LoaderComponent v-if="loading" />
  <div v-else>
    <div class="w-4">
      <button
        type="button"
        class="text-gray-300 hover:text-white border border-gray-600 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        @click="$router.go(-1)"
      >
        Atras
      </button>
    </div>
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
                ? 'border border-pink-200'
                : ''
            "
            id="name"
            type="text"
            placeholder="Nombre"
            v-model="name"
            :disabled="isDisabled"
          />
          <p
            v-if="error_data.errors.name && error_data.errors.name.length > 0"
            class="text-pink-200 text-xs italic"
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
                ? 'border border-pink-200'
                : ''
            "
            id="email"
            type="email"
            placeholder="correo@correo.com"
            v-model="email"
            :disabled="isDisabled"
          />
          <p
            v-if="error_data.errors.email && error_data.errors.email.length > 0"
            class="text-pink-200 text-xs italic"
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
                ? 'border border-pink-200'
                : ''
            "
            placeholder="Escribe tu descripción"
            v-model="description"
            :disabled="isDisabled"
          ></textarea>
          <p
            v-if="
              error_data.errors.description &&
              error_data.errors.description.length > 0
            "
            class="text-pink-200 text-xs italic"
          >
            {{ error_data.errors.description[0] }}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          :disabled="isDisabled"
        >
          Registrese
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import user from "@/logic/user";
import DangerAlert from "../Alerts/DangerAlert.vue";
import SuccessAlert from "../Alerts/SuccessAlert.vue";
import LoaderComponent from "../Loader/LoaderComponent.vue";

export default {
  name: "FormEditUser",
  // Llamados de componente de alertas y loader
  components: {
    DangerAlert,
    SuccessAlert,
    LoaderComponent,
  },
  // Manejo de información (models) para el formulario.
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
    loading: false,
    isDisabled: false,
  }),
  /**
   *  Cuando se monta el componente se traen los datos
   *  del usuario por medio del API
   **/
  async mounted() {
    try {
      this.loading = true;
      const res = await user.getUser();
      const userData = res.data.user;
      this.email = userData.email;
      this.name = userData.name;
      this.description = userData.description;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    /**
     *  Metodo para actualizar los datos del usuario.
     *  Se envia la información al endpoint de actualización
     *  en caso de ser correcto limpia el formulario y retorna
     *  a la pagina de perfil del usuario, en caso contrario
     *  alertara al usuario.
     **/
    async update() {
      try {
        this.isDisabled = true;
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
        this.isDisabled = false;
        if (error.response) {
          const { data, status } = error.response;
          this.error = true;
          if (status === 422) {
            this.error_data = data;
          }
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