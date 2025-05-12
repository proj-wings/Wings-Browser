import type { InternalAxiosRequestConfig } from "axios"
import Cookie from "src/libs/cookies"
import { ACCESS_TOKEN } from "src/constants/token/token.constants"

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = Cookie.getCookie(ACCESS_TOKEN)

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}