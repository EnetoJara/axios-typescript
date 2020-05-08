import { AxiosRequestConfig } from 'axios';
import * as qs from "qs";

export const apiConfig = (baseUrl: string, timeout: number): AxiosRequestConfig => ({
    withCredentials: true,
    timeout: timeout,
    baseURL: baseUrl,
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    },
    paramsSerializer: (params: string) => qs.stringify(params, { indices: false }),
})
