import axios from "axios";
import {requestInterceptor} from "./interceptors/request";
import {responseInterceptor} from "./interceptors/response";
import {errorInterceptor} from "./interceptors/error";

const PrivateAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
})

PrivateAxios.interceptors.request.use(requestInterceptor, errorInterceptor);
PrivateAxios.interceptors.response.use(responseInterceptor, errorInterceptor);

export default PrivateAxios;