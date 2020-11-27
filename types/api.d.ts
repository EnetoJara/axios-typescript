import { Axios } from "./axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
/**
 * @class Api Class is a fancy es6 wrapper class for axios.
 *
 * @param {import("axios").AxiosRequestConfig} config - axios Request Config.
 * @link [AxiosRequestConfig](https://github.com/axios/axios#request-config)
 */
export declare class Api extends Axios {
    private token;
    /**
     * Gets Token.
     *
     * @returns {string} token.
     * @memberof Api
     */
    getToken(): string;
    /**
     * Sets Token.
     *
     * @param {string} token - token.
     * @memberof Api
     */
    setToken(token: string): void;
    /**
     * Get Uri
     *
     * @param {import("axios").AxiosRequestConfig} [config]
     * @returns {string}
     * @memberof Api
     */
    getUri(config?: AxiosRequestConfig): string;
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
    request<R>(config: AxiosRequestConfig): Promise<AxiosResponse<R>>;
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
    get<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
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
    options<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
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
    delete<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
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
    head<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
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
    post<B, R>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
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
    put<B, R>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
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
    patch<B, R>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
    /**
     *
     * @template T - type.
     * @param {import("axios").AxiosResponse<T>} response - axios response.
     * @returns {T} - expected object.
     * @memberof Api
     */
    success<T>(response: AxiosResponse<T>): T;
    /**
     *
     *
     * @template T type.
     * @param {AxiosError<T>} error
     * @memberof Api
     */
    error<T>(error: AxiosError<T>): void;
}
//# sourceMappingURL=api.d.ts.map