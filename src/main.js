import { createApp } from 'vue'
import App from './App.vue'

// Importacion de tailwind css
import "@/assets/css/tailwind.css";

// Manejo de promesas para Vuex
import 'es6-promise/auto'

// Importacion del vue-router
import * as VueRouter from "vue-router";

// Importacion de rutas;
import routes from './routes';

//importacion del metodos del logout
import auth from './logic/auth';

//importacion del store para vuex
import store from './store';

//Configuración del router de vue
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes.routes
})

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {

    /**
     * Se valida si una ruta esta protegida o no.
     * Ciertos parametros de validacion hacen que si 
     * el usuario esta autenticado lo envie al home 
     * y si no al login
     */
    const is_auth = auth.validateSession();
    const protected_route = to.matched.some((record) => record.meta.requiresAuth)

    if (protected_route && !is_auth) {
        next({ name: 'Login' });
    } else if (!protected_route && is_auth) {
        next({ name: 'Crypto' });
    } else {
        next();
    }
});

createApp(App).use(router).use(store).mount('#app')
