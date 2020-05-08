import axios, { AxiosRequestConfig } from "axios";
import { apiConfig } from './api.config';

export class Axios {

    [x:string]: any;

    public constructor (config: AxiosRequestConfig=apiConfig) {
        return axios.create(config);
    }
}
