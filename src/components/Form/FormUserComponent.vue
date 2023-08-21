<!-- Componente formulario que maneja el registro del usuario -->
<template>
  <form class="w-full rounded-2xl bg-gray-600 p-10" @submit.prevent="register">
    <DangerAlert
      :status="error_status"
      @cleanErrors="cleanErrors"
      message="Ha ocurrido un error vuelva a intentarlo"
    />
    <SuccessAlert
      :status="error_status"
      @cleanErrors="cleanErrors"
      message="Registro exitoso, se redirigira al login"
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
          class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
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
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
          for="password"
        >
          Contraseña
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          :class="
            error_data.errors.password && error_data.errors.password.length > 0
              ? 'border border-pink-200'
              : ''
          "
          id="password"
          type="password"
          placeholder="*************"
          v-model="password"
        />
        <p
          v-if="
            error_data.errors.password && error_data.errors.password.length > 0
          "
          class="text-pink-200 text-xs italic"
        >
          {{ error_data.errors.password[0] }}
        </p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
          for="password_confirmation"
        >
          Confirmar contraseña
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password_confirmation"
          type="password"
          placeholder="*************"
          v-model="password_confirmation"
        />
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
      >
        Registrese
      </button>
    </div>
  </form>
</template>

<script>
import auth from "@/logic/auth";
import DangerAlert from "../Alerts/DangerAlert.vue";
import SuccessAlert from "../Alerts/SuccessAlert.vue";

export default {
  name: "FormRegister",
  // Llamados de componente de alertas
  components: {
    DangerAlert,
    SuccessAlert,
  },
  /**
   *  Metodo para iniciar sesión con datos del usuario.
   *  Se envia la información al endpoint de login
   *  en caso de ser correcto redirige al inicio de la
   *  aplicación y setea las variables con vuex.
   *
   *  En caso contrario alertara al usuario.
   **/
  data: () => ({
    email: "",
    name: "",
    description: "",
    password: "",
    password_confirmation: "",
    error: false,
    error_data: {
      message: "",
      errors: {
        email: [],
        name: [],
        description: [],
        password: [],
        password_confirmation: [],
      },
    },
    error_status: 201,
  }),
  methods: {
    /**
     *  Metodo para registrase con datos del usuario.
     *  Se envia la información al endpoint de registro
     *  en caso de ser correcto redirige al login.
     *
     *  En caso contrario alertara al usuario.
     **/
    async register() {
      try {
        const data = {
          email: this.email,
          name: this.name,
          description: this.description,
          password: this.password,
          password_confirmation: this.password_confirmation,
        };
        await auth.register(data);
        this.cleanData();
        this.error_status = 200;
        setTimeout(() => {
          this.cleanErrors();
          this.$router.push("/login");
        }, 5000);
      } catch (error) {
        const { data, status } = error.response;
        this.error = true;
        if (status === 422) {
          this.error_data = data;
        }
        this.error_status = status;
      }
    },
    cleanData() {
      this.email = "";
      this.name = "";
      this.description = "";
      this.password = "";
      this.password_confirmation = "";
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