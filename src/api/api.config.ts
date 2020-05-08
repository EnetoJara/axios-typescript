import { AxiosRequestConfig } from 'axios';
import * as qs from "qs";

export const API_TIMEOUT = Number(process.env.API_TIMEOUT) || 10000;
export const API_BASE_URL = process.env.API_BASE_URL || "";

export const apiConfig: AxiosRequestConfig = {
    withCredentials: true,
    timeout: API_TIMEOUT,
    baseURL: API_BASE_URL,
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    },
    paramsSerializer: (params: string) => qs.stringify(params, { indices: false }),
};
