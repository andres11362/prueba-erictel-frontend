import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

/**
 * Store para el manejo de datos de vuex
 * Se usa la libreria vuex-persistedstate
 * para mantener persistencia.
 */
export default createStore({
    state: {
        isLoggedIn: false, // Inicialmente no autenticado
        user: null, // Objeto con información del usuario autenticado
    },
    mutations: {
        login(state, user) {
            state.isLoggedIn = true;
            state.user = user;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
    plugins: [createPersistedState({
        paths: ['isLoggedIn', 'user']
    })],
});
