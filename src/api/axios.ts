import axios, { AxiosRequestConfig } from "axios";

export class Axios {

    [x:string]: any;

    public constructor (config: AxiosRequestConfig) {
        return axios.create(config);
    }
}
