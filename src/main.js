import { createApp } from 'vue'
import App from './App.vue'

// añadimos tailwind css
import "@/assets/css/tailwind.css";

//Importacion del vue-router
import * as VueRouter from "vue-router";

//importacion de rutas;
import routes from './routes';
import auth from './logic/auth';


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes.routes
})

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {

    const is_auth = auth.validateSession();
    const protected_route = to.matched.some((record) => record.meta.requiresAuth)

    if (protected_route && !is_auth) {
        next({ name: 'Login'});
    } else if(!protected_route && is_auth){
        next({ name: 'Crypto'});
    } else {
        next();
    }
});

createApp(App).use(router).mount('#app')
