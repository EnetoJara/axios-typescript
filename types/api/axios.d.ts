import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from "axios";
export declare class Axios {
    interceptors: {
        /**
         * The **Request** interceptor will be call rigth before the `http request`
         * @summary
         * This a useful method especially if you need to send a token on each request.
         */
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        /**
         * The **Response** interceptor will be call rigth before the `http request` is received.
         * @summary
         * This a useful method especially if you need to send a token on each request.
         */
        response: AxiosInterceptorManager<AxiosResponse>;
    };
    constructor(config: AxiosRequestConfig);
}
//# sourceMappingURL=axios.d.ts.map