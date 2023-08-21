import { createStore } from 'vuex';

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
});
