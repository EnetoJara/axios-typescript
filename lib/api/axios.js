"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var Axios = /** @class */ (function () {
    function Axios(config) {
        return axios_1.default.create(config);
    }
    return Axios;
}());
exports.Axios = Axios;
//# sourceMappingURL=axios.js.map