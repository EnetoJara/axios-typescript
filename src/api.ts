import { Axios } from "./axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

/**
 * @class Api Class is a fancy es6 wrapper class for axios.
 *
 * @param {import("axios").AxiosRequestConfig} config - axios Request Config.
 * @link [AxiosRequestConfig](https://github.com/axios/axios#request-config)
 */
export class Api extends Axios {
    declare private token: string;

    /**
     * Gets Token.
     *
     * @returns {string} token.
     * @memberof Api
     */
    public getToken(): string {
        return this.token;
    }
    /**
     * Sets Token.
     *
     * @param {string} token - token.
     * @memberof Api
     */
    public setToken(token: string): void {
        this.token = token;
    }
    /**
     * Get Uri
     *
     * @param {import("axios").AxiosRequestConfig} [config]
     * @returns {string}
     * @memberof Api
     */
    public getUri(config?: AxiosRequestConfig): string {
        return this.getUri(config);
    }
    /**
     * Generic request.
     *
     * @access public
     * @template R - `RESPONSE`: payload you are going to get from back-end.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<AxiosResponse<R>>} - HTTP axios response payload.
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
    public request<R>(config: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.request(config);
    }
    /**
     * HTTP GET method, used to fetch data `statusCode`: 200.
     *
     * @access public
     * @template R - `RESPONSE`: payload object the back-end return.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<AxiosResponse<R>>} HTTP `axios` response payload.
     * @memberof Api
     */
    public get<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.get(url, config);
    }
    /**
     * HTTP OPTIONS method.
     *
     * @access public
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<AxiosResponse<R>>} HTTP `axios` response payload.
     * @memberof Api
     */
    public options<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.options(url, config);
    }
    /**
     * HTTP DELETE method, `statusCode`: 204 No Content.
     *
     * @access public
     * @template R - `RESPONSE`: expected object/value.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<AxiosResponse<R>>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public delete<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.delete(url, config);
    }
    /**
     * HTTP HEAD method.
     *
     * @access public
     * @template R - `RESPONSE`: expected object/value inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<AxiosResponse<R>>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public head< R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.head(url, config);
    }
    /**
     * HTTP POST method `statusCode`: 201 Created.
     *
     * @access public
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<AxiosResponse<R>>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public post<B, R>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.post(url, data, config);
    }
    /**
     * HTTP PUT method.
     *
     * @access public
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<AxiosResponse<R>>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public put<B, R>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.put(url, data, config);
    }
    /**
     * HTTP PATCH method.
     *
     * @access public
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<AxiosResponse<R>>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public patch<B, R>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.patch(url, data, config);
    }
    /**
     *
     * @template T - type.
     * @param {import("axios").AxiosResponse<T>} response - axios response.
     * @returns {T} - expected object.
     * @memberof Api
     */
    public success<T>(response: AxiosResponse<T>): T {
        return response.data;
    }
    /**
     *
     *
     * @template T type.
     * @param {AxiosError<T>} error
     * @memberof Api
     */
    public error<T>(error: AxiosError<T>) {
        throw error;
    }
}
