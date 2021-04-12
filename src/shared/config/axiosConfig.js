import axios from "axios";
import {
    BACKEND_URL,
    HOME_URL,
    LOGIN_URL
} from "./constant/urlConstants";
import {
    toast
} from 'react-toastify';
import {
    logout
} from "./logOut";


export const axiosToken = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem("token")
    }
});

export const axiosExpiredToken = axiosToken.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    switch (error.response.status) {
        case 403:
            toast.warn("Please authenticate yourself ! ", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(function () {
                logout();
                window.location.replace(LOGIN_URL);
            }, 2100);
            break;
        default:
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(function () {
                window.location.replace(HOME_URL);
            }, 2100);
            break;
    }
    return Promise.reject(error);
});

export const axiosErrorHandler = axios.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    switch (error.response.status) {
        case 403:
            toast.warn("Please authenticate yourself ! ", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(function () {
                logout();
                window.location.replace(LOGIN_URL);
            }, 2100);
            break;
        case 400:
            toast.info(error.response.data, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        default:
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(function () {
                window.location.replace(HOME_URL);
            }, 2100);
            break;
    }
    return Promise.reject(error);
});