import type { AxiosResponse } from 'axios'

export const responseInterceptor = (response: AxiosResponse) => {
    const { data } = response

    if (data && typeof data === 'object' && 'data' in data) {
        return data.data
    }

    return data;
}