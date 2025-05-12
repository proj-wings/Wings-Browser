import type { AxiosError } from "axios"
import Cookie from "src/libs/cookies"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/token/token.constants"

export const errorInterceptor = (error: AxiosError) => {
    const status = error.response?.status

    if (status === 401) {
        Cookie.deleteCookie(ACCESS_TOKEN)
        Cookie.deleteCookie(REFRESH_TOKEN)
        window.location.href = "/login"
    }

    // 기타 에러 핸들링 지점
    return Promise.reject(error)
}