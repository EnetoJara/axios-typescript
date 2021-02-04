"use strict";

var axios = require("axios");

function Axios (config) {
    return axios.create(config);
}

exports.Axios = Axios;
