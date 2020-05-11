"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("./axios");
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
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    /**
     * Creates an instance of Api.
     *
     * @param {import("axios").AxiosRequestConfig} [config] - axios configuration.
     * @memberof Api
     */
    function Api(config) {
        var _this = _super.call(this, config) || this;
        _this.token = "";
        _this.baseUrl = "";
        _this.getUri = _this.getUri.bind(_this);
        _this.request = _this.request.bind(_this);
        _this.get = _this.get.bind(_this);
        _this.delete = _this.delete.bind(_this);
        _this.head = _this.head.bind(_this);
        _this.post = _this.post.bind(_this);
        _this.put = _this.put.bind(_this);
        _this.patch = _this.patch.bind(_this);
        return _this;
    }
    /**
     * Gets Token.
     *
     * @returns {string} token.
     * @memberof Api
     */
    Api.prototype.getToken = function () {
        return this.token;
    };
    /**
     * Sets Token.
     *
     * @param {string} token - token.
     * @memberof Api
     */
    Api.prototype.setToken = function (token) {
        this.token = token;
    };
    /**
     * Sets Base Url.
     *
     * @param {string} baseUrl - domanin.
     * @memberof Api
     */
    Api.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    /**
     * Gets base url.
     *
     * @returns {string} `baseUrl`.
     * @memberof Api
     */
    Api.prototype.setBaseUrl = function (baseUrl) {
        this.baseUrl = baseUrl;
    };
    /**
     * Get Uri
     *
     * @param {import("axios").AxiosRequestConfig} [config]
     * @returns {string}
     * @memberof Api
     */
    Api.prototype.getUri = function (config) {
        return this.getUri(config);
    };
    /**
     * Generic request.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
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
    Api.prototype.request = function (config) {
        return this.request(config);
    };
    /**
     * HTTP GET method, used to fetch data `statusCode`: 200.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} HTTP `axios` response payload.
     * @memberof Api
     */
    Api.prototype.get = function (url, config) {
        return this.get(url, config);
    };
    /**
     * HTTP OPTIONS method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} HTTP `axios` response payload.
     * @memberof Api
     */
    Api.prototype.options = function (url, config) {
        return this.options(url, config);
    };
    /**
     * HTTP DELETE method, `statusCode`: 204 No Content.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    Api.prototype.delete = function (url, config) {
        return this.delete(url, config);
    };
    /**
     * HTTP HEAD method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    Api.prototype.head = function (url, config) {
        return this.head(url, config);
    };
    /**
     * HTTP POST method `statusCode`: 201 Created.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    Api.prototype.post = function (url, data, config) {
        return this.post(url, data, config);
    };
    /**
     * HTTP PUT method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    Api.prototype.put = function (url, data, config) {
        return this.put(url, data, config);
    };
    /**
     * HTTP PATCH method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    Api.prototype.patch = function (url, data, config) {
        return this.patch(url, data, config);
    };
    /**
     *
     * @template T - type.
     * @param {import("axios").AxiosResponse<T>} response - axios response.
     * @returns {T} - expected object.
     * @memberof Api
     */
    Api.prototype.success = function (response) {
        return response.data;
    };
    Api.prototype.error = function (error) {
        throw error;
    };
    return Api;
}(axios_1.Axios));
exports.Api = Api;
//# sourceMappingURL=api.js.map