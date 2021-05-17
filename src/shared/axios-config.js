import axios from "axios";
import { BACK_END_URL } from "./url-constants";


export const axiosToken = axios.create({
    baseURL: BACK_END_URL,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem("token")
    }
});

