import axios from "axios"
import { responseInterceptor } from "./interceptors/response"
import { errorInterceptor } from "./interceptors/error"

const PublicAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
})

PublicAxios.interceptors.response.use(responseInterceptor, errorInterceptor);

export default PublicAxios;