import axios from "axios";
import { getUser, updateUser, uploadImageUser } from "@/api/endpoints";


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
    getUser() {
        const token = this.getUserToken();

        const config = {
            headers: this.headerBearer(token)
        }
        return axios.get(getUser, config);
    },
    updateUser(data) {
        const token = this.getUserToken();

        const config = {
            headers: this.headerBearer(token)
        }
        return axios.put(updateUser, data, config);
    },
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
