
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Axios } from './axios';

/**
 * ES6 Axios Class.
 *
 * @class Api
 * @extends {Axios}
 * @example
 * class UserApi extends Api {
 *   public constructor (config) {
 *     super(config);
 *
 *     this.login=this.login.bind(this);
 *   }
 *
 *   public login (user: User) {
 *     return this.post<string, User, AxiosResponse<User>>("https://www.domain/login", {name: user.name, pass: user.pass})
 *        .then((res: AxiosResponse<string>) => res.data);
 *   }
 * }
 */
export class Api extends Axios {

    /**
     * Creates an instance of Api.
     *
     * @param {import("axios").AxiosRequestConfig} config - axios configuration.
     * @memberof Api
     */
    public constructor (config: AxiosRequestConfig) {
        super(config);

        // this middleware is been called right before the http request is made.
        this.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param,
        }));

        // this middleware is been called right before the response is get it by the method that triggers the request
        this.interceptors.response.use((param: AxiosResponse) => ({
            ...param
        }));

        this.getUri = this.getUri.bind(this);
        this.request = this.request.bind(this);
        this.get = this.get.bind(this);
        this.delete = this.delete.bind(this);
        this.head = this.head.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.patch = this.patch.bind(this);
    }

    /**
     * Get Uri
     *
     * @param {AxiosRequestConfig} [config]
     * @returns {string}
     * @memberof Api
     */
    public getUri (config?: AxiosRequestConfig): string {
        return this.getUri(config);
    }

    /**
     * Generic request.
     *
     * @access public
     * @template T - [TYPE]: expected object.
     * @template R - [RESPONSE]: expected object inside a axios response format.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP axios response payload.
     * @memberof Api
     *
     * @example
     * api.request({
     *   method: "GET|POST|DELETE|PUT|PATCH"
     *   baseUrl: "http://www.domain.com",
     *   url: "/api/v1/users",
     *   headers: {
     *     "Content-Type": "application/json"
     *  }
     * }).then((response: AxiosResponse<User>) => response.data)
     *
     */
    public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
        return this.request(config);
    }

    /**
     * HTTP GET method, used to fetch data [statusCode]: 200.
     *
     * @access public
     * @template T - [TYPE]: expected object.
     * @template R - [RESPONSE]: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.get(url, config);
    }

    /**
     * HTTP DELETE method, [statusCode]: 204 No Content.
     *
     * @access public
     * @template T - [TYPE]: expected object.
     * @template R - [RESPONSE]: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.delete(url, config);
    }

    /**
     * HTTP HEAD method.
     *
     * @access public
     * @template T - [TYPE]: expected object.
     * @template R - [RESPONSE]: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public head<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.head(url, config);
    }

    /**
     * HTTP POST method [statusCode]: 201 Created.
     *
     * @access public
     * @template T - [TYPE]: expected object.
     * @template B - [BODY]: body request object.
     * @template R - [RESPONSE]: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public post<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.post(url, data, config);
    }

    /**
     * HTTP PUT method.
     *
     * @access public
     * @template T - [TYPE]: expected object.
     * @template B - [BODY]: body request object.
     * @template R - [RESPONSE]: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public put<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.put(url, data, config);
    }

   /**
     * HTTP PATCH method.
     *
     * @access public
     * @template T - [TYPE]: expected object.
     * @template B - [BODY]: body request object.
     * @template R - [RESPONSE]: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public patch<T, B, R = AxiosResponse<T>> (url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.patch(url, data, config);
    }
}
