import axios from "axios";
import { registerUser, loginUser, logOutUser } from "@/api/endpoints";

/**
 * Metodos de endpoints relacionados a la gestion de autenticacion
 * y autorización de usuarios
 */
export default {
    // Metodo de registro
    register(data) {
        return axios.post(registerUser, data);
    },
    // Metodo de inicio de sesion
    login(data) {
        return axios.post(loginUser, data);
    },
    // Guardado de token de usuario
    setUserToken(token) {
        localStorage.setItem('token', token);
    },
    // Obtener token de usuario
    getUserToken() {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        return token;
    },
    // Metodo para validar sesion dependiendo si existe un token
    validateSession() {
        const is_auth = localStorage.getItem('token') ? true : false;
        return is_auth;
    },
    // Eliminación de token de usuario
    deleteUserToken() {
        localStorage.removeItem('token');
    },
    // Metodo para construir la cabecera de Authorization
    headerBearer(token) {
        return {
            Authorization: `Bearer ${token} `,
        }
    },
    // Metodo para cerrar sesión
    logout() {
        const token = this.getUserToken();
        const data = {
            token
        };
        const config = { headers: this.headerBearer(token) }
        return axios.post(logOutUser, data, config);
    },

}