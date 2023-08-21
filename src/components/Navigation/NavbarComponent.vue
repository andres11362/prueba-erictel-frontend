<template>
  <div>
    <div class="bg-gray-900">
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-100 md:text-2xl hover:text-blue-400"
            >Prueba Erictel
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <router-link
            to="/"
            class="text-sm font-bold text-gray-200 hover:text-blue-400"
          >
            Home
          </router-link>
          <router-link
            to="/user"
            class="text-sm font-bold text-gray-200 hover:text-blue-400"
          >
            Perfil
          </router-link>
          <button
            @click="logout"
            class="text-sm font-bold text-gray-200 hover:text-blue-400"
          >
            Cerrar sesión
          </button>
        </ul>
        <!-- <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
          v-else
        >
          <router-link
            to="/register"
            class="text-sm font-bold text-gray-200 hover:text-blue-400"
          >
            Registrarse
          </router-link>
        </ul> -->
      </nav>
    </div>
  </div>
</template>
<script>
import auth from "@/logic/auth";
// import { onMounted, onUpdated } from 'vue';
// import { mapState, mapMutations } from "vuex";

export default {
  data: () => ({
    showMenu: false,
  }),
  // computed: {
  //   ...mapState(["isLoggedIn"]),
  // },
  methods: {
    // ...mapMutations(["login"]),
    async logout() {
      try {
        await auth.logout();
        auth.deleteUserToken();
        this.$router.push("/login");
      } catch (error) {
        // console.log(error);
      }
    },
  },
};
</script>