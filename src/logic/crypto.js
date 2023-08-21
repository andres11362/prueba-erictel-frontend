import axios from "axios";
import { getAllCurrencies, getSpecCurrency } from "@/api/endpoints";


export default {
    getUserToken() {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        return token;
    },
    headerBearer(token) {
        return {
            Authorization: `Bearer ${token}`,
        }
    },
    getAll() {
        const token = this.getUserToken();

        const config = {
            headers: this.headerBearer(token)
        }
        return axios.get(getAllCurrencies, config);
    },
    getOne(id) {

        const token = this.getUserToken();

        const config = {
            headers: this.headerBearer(token)
        }

        return axios.get(`${getSpecCurrency}/${id}`, config);
    },
}
