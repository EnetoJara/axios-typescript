"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Api = void 0;

var _axios = require("./axios");

/**
 * Api Class is a wrapper class for axios.
 *
 * @param {import("axios").AxiosRequestConfig} config - axios Request Config.
 * @link [AxiosRequestConfig](https://github.com/axios/axios#request-config)
 */
function Api (config) { Object.assign(this, _axios.Axios(config)); }

Api.prototype = Object.create(_axios.Axios.prototype);
Api.prototype.getToken = function () {return this.token; };
Api.prototype.setToken = function (token) {this.token = token; };
Api.prototype.getBaseUrl = function () { return this.baseUrl; };
Api.prototype.setBaseUrl = function (baseUrl) { this.baseUrl = baseUrl; };
Api.prototype.getUri = function (config) { return this.getUri(config);};
Api.prototype.request = function (config) { return this.request(config);};
Api.prototype.get = function (url, config) { return this.get(url, config);};
Api.prototype.options = function (url, config) { return this.options(url, config);};
Api.prototype.delete = function (url, config) { return this.delete(url, config);};
Api.prototype.head = function (url, config) { return this.head(url, config);};
Api.prototype.post = function (url, data, config) { return this.post(url, data, config);};
Api.prototype.put = function (url, data, config) { return this.put(url, data, config);};
Api.prototype.patch = function (url, data, config) { return this.patch(url, data, config);};
Api.prototype.success = function (response) { return response.data; };
Api.prototype.error = function (error) { throw error; };

exports.Api = Api;
