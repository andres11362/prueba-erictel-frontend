<!-- Componente formulario que maneja el inicio de sesión del usuario -->
<template>
  <div class="rounded-2xl w-full max-w-md bg-gray-600">
    <DangerAlert
      :status="error_status"
      @cleanErrors="cleanErrors"
      message="Ha ocurrido un error vuelva a intentarlo"
    />
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="loginUser"
    >
      <div class="mb-4">
        <label
          class="block text-gray-300 text-sm font-bold mb-2"
          for="username"
        >
          Correo Electronico
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="
            error_data.errors.email && error_data.errors.email.length > 0
              ? 'border border-pink-200'
              : ''
          "
          id="email"
          type="text"
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
      <div class="mb-6">
        <label
          class="block text-gray-300 text-sm font-bold mb-2"
          for="password"
        >
          Contraseña
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          :class="
            error_data.errors.password && error_data.errors.password.length > 0
              ? 'border border-pink-200'
              : ''
          "
          id="password"
          type="password"
          placeholder="******************"
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
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import auth from "@/logic/auth";
import DangerAlert from "../Alerts/DangerAlert.vue";
import { mapMutations } from "vuex";

export default {
  name: "FormLogin",
  // Llamados de componente de alertas
  components: {
    DangerAlert,
  },
  // Manejo de información (models) para el formulario.
  data: () => ({
    email: "",
    password: "",
    error: false,
    error_data: {
      message: "",
      errors: {
        email: [],
        name: [],
      },
    },
    error_status: 201,
  }),
  methods: {
    // se accede al mutador del store de vuex para modificarlo en caso de un acceso correcto
    ...mapMutations(["login"]),
    /**
     *  Metodo para iniciar sesión con datos del usuario.
     *  Se envia la información al endpoint de login
     *  en caso de ser correcto redirige al inicio de la 
     *  aplicación y setea las variables con vuex.
     * 
     *  En caso contrario alertara al usuario.
     **/
    async loginUser() {
      try {
        const user = {
          email: this.email,
          password: this.password,
        };
        const res = await auth.login(user);
        const { data } = res;
        auth.setUserToken(data.token);
        this.$router.push("/");
        this.login(data);
      } catch (error) {
        this.error = true;
        if (error.response) {
          const { data, status } = error.response;
          if (status === 422) {
            this.error_data = data;
          }
          this.error_status = status;
        } else if (error) {
          console.log(error);
        } else {
          console.log(error.message);
        }
      }
    },
    cleanData() {
      this.email = "";
      this.name = "";
    },
    cleanErrors() {
      this.error = false;
      this.error_data = {
        message: "",
        errors: {
          email: [],
          name: [],
        },
      };
      this.error_status = 201;
    },
  },
};
</script>