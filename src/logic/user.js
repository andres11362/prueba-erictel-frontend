import axios from "axios";
import { getUser, updateUser, uploadImageUser } from "@/api/endpoints";

/**
 * Metodos de endpoints relacionados a la gestion de usuarios
 */
export default {
    // Obtener token
    getUserToken() {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        return token;
    },
    // Metodo para construir la cabecera de Authorization
    headerBearer(token) {
        return {
            Authorization: `Bearer ${token}`,
        }
    },
    // Obtener datos del usuario
    getUser() {
        const token = this.getUserToken();

        const config = {
            headers: this.headerBearer(token)
        }
        return axios.get(getUser, config);
    },
    // Actualizar usuario
    updateUser(data) {
        const token = this.getUserToken();

        const config = {
            headers: this.headerBearer(token)
        }
        return axios.put(updateUser, data, config);
    },
    // Subir imagen de usuario
    uploadImageUser(data) {
        console.log(data);

        let formData = new FormData();

        formData.append('image', data);

        const token = this.getUserToken();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }

        return axios.post(uploadImageUser, formData, config);
    }
}
