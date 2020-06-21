"use strict";

var axios = require("axios");

/**
 * @class
 * @requires axios
 * @param {import("axios").AxiosRequestConfig} config - Axios request config object.
 * @returns {import("axios").AxiosStatic} an axios instance.
 */
function Axios (config) {
    return axios.create(config);
}

exports.Axios = Axios;
