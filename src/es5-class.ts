import { AxiosInstance, AxiosRequestConfig } from 'axios';

const axios = require("axios");

export interface IApi {
    api: AxiosInstance;
    setApi: (config?: AxiosRequestConfig) => void;
    getApi: () => ApiConstructor;

}

export interface ApiConstructor {
    new(): IApi;
}

const Api = function (this: IApi) {
    this.setApi();
} as any as ApiConstructor;

Api.prototype.getApi = function () {
    return this.api;
}

Api.prototype.setApi = function (config: AxiosRequestConfig = undefined) {
    return this.api = axios.create(config);
}

const api = new Api();
api.getApi()
