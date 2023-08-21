<!-- Componente para visualización de datos del usuario -->
<template>
  <LoaderComponent v-if="loading" />
  <div v-else>
    <div class="my-10 mx-5">
      <h1 class="text-3xl text-gray-200 font-bold">Datos del usuario</h1>
    </div>
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug"
      >
        <img
          v-if="imgTmp !== ''"
          class="object-cover w-full h-full"
          :src="imgTmp"
        />
        <img
          v-else
          class="object-cover w-full h-full"
          src="../../assets/img/image-user.jpg"
        />
      </div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <div class="text-gray-400 font-bold text-xl mb-2">
            {{ user.name }}
          </div>
          <p class="text-gray-300 text-base">
            {{ user.description }}
          </p>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <p class="text-gray-100 leading-none">{{ user.email }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-6 flex items-center">
      <div>
        <button
          type="button"
          class="text-gray-300 hover:text-white border border-gray-600 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          @click="handleShowForm"
        >
          {{ !showForm ? "Subir Imagen" : "Ocultar Formulario" }}
        </button>

        <router-link
          to="/edit-user"
          class="text-red-300 hover:text-white border border-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-red-400 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
          >Editar perfil</router-link
        >
      </div>
    </div>
    <form v-if="showForm" @submit.prevent="upload">
      <DangerAlert
        :status="error_status"
        @cleanErrors="cleanErrors"
        message="Ha ocurrido un error vuelva a intentarlo"
      />
      <SuccessAlert
        :status="error_status"
        @cleanErrors="cleanErrors"
        message="Imagen subida, correctamente"
      />
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
          for="file_input"
          >Subir Imagen</label
        >
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          @change="getFile"
          :disabled="isDisabled"
        />
        <br />
        <button
          type="submit"
          class="text-green-300 hover:text-white border border-green-600 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          :disabled="isDisabled"
        >
          Subir Imagen
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
  name: "UserComponent",
  // Llamados de componente de alertas y loader
  components: {
    DangerAlert,
    SuccessAlert,
    LoaderComponent,
  },
  // Manejo de información (models) para el formulario de subida de imagenes.
  data: () => ({
    user: {},
    image: "",
    imgTmp: "",
    imgTmp2: "",
    error: false,
    showForm: false,
    error_data: {
      message: "",
      errors: {
        image: [],
      },
    },
    error_status: 201,
    loading: false,
    isDisabled: false,
  }),
  /**
   * Cuando el componente se monta se carga la información del mismo
   * Ademas si trae una imagen se carga desde el servidor.
   **/
  async mounted() {
    try {
      this.loading = true;
      const res = await user.getUser();
      const { user: userData } = res.data;
      this.user = userData;
      this.image = userData.image
        ? `${process.env.VUE_APP_TEST_ERICTE_STG}/${userData.image}`
        : "";
      this.imgTmp = userData.image
        ? `${process.env.VUE_APP_TEST_ERICTE_STG}/${userData.image}`
        : "";
      this.imgTmp2 = userData.image
        ? `${process.env.VUE_APP_TEST_ERICTE_STG}/${userData.image}`
        : "";
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    // Metodo optener la imagen temporal del usuario.
    async getFile(event) {
      const file = event.target.files[0];
      this.imgTmp = URL.createObjectURL(file);
      this.image = file;
    },
    /**
     * Metodo para cargar la imagen al servidor, por medio del api
     * ademas retornamos la ruta para que haga la carga final de imagen.
     **/
    async upload() {
      try {
        this.isDisabled = true;
        const res = await user.uploadImageUser(this.image);
        this.error_status = 200;
        this.image = `${process.env.VUE_APP_TEST_ERICTE_STG}/${res.data.route}`;
        setTimeout(() => {
          this.showForm = false;
          this.error_status = 201;
          this.isDisabled = false;
        }, 2000);
      } catch (error) {
        this.isDisabled = false;
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
    handleShowForm() {
      this.showForm = !this.showForm;
      this.imgTmp = this.imgTmp2;
      this.isDisabled = false;
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