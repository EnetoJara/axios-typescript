"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Axios = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

class Axios {
    constructor(config) {
        return _axios.default.create(config);
    }
}

exports.Axios = Axios;
