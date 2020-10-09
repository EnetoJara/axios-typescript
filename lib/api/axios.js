"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = void 0;
const tslib_1 = require("tslib");
const axios = tslib_1.__importStar(require("axios"));
class Axios {
    constructor(config) {
        // @ts-ignore
        return axios.create(config);
    }
}
exports.Axios = Axios;
//# sourceMappingURL=axios.js.map