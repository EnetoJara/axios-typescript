"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = void 0;
var axios_1 = __importDefault(require("axios"));
var Axios = /** @class */ (function () {
    function Axios(props) {
        return axios_1.default.create(props);
    }
    return Axios;
}());
exports.Axios = Axios;
//# sourceMappingURL=axios.js.map