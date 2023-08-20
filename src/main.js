import { createApp } from 'vue'
import App from './App.vue'

// añadimos tailwind css
import "@/assets/css/tailwind.css";

//Importacion del vue-router
import * as VueRouter from "vue-router";

//importacion de rutas;
import routes from './routes';


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes.routes
})

createApp(App).use(router).mount('#app')
