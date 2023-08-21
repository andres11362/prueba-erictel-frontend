import axios from "axios";
import { registerUser, loginUser, logOutUser } from "@/api/endpoints";


export default {
    register(data) {
        return axios.post(registerUser, data);
    },
    login(data) {
        return axios.post(loginUser, data);
    },
    setUserToken(token) {
        localStorage.setItem('token', token);
    },
    getUserToken() {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        return token;
    },
    validateSession() {
        const is_auth = localStorage.getItem('token') ? true : false;
        return is_auth;
    },
    deleteUserToken() {
        localStorage.removeItem('token');
    },
    headerBearer(token) {
        return {
            Authorization: `Bearer ${token} `,
        }
    },
    logout() {
        const token = this.getUserToken();
        const data = {
            token
        };
        const config = { headers: this.headerBearer(token) }
        return axios.post(logOutUser, data, config);
    },

}