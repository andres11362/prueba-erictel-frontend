import axios from "axios";
import { getAllCurrencies, getSpecCurrency } from "@/api/endpoints";

/**
 * Metodos de endpoints relacionados a la visualización de monedas
 */
export default {
    // Obtener el token
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
    // Obtener todas la monedas
    getAll() {
        const token = this.getUserToken();

        const config = {
            headers: this.headerBearer(token)
        }
        return axios.get(getAllCurrencies, config);
    },
    // Obtener una sola moneda
    getOne(id) {

        const token = this.getUserToken();

        const config = {
            headers: this.headerBearer(token)
        }

        return axios.get(`${getSpecCurrency}/${id}`, config);
    },
}
