import axios from "axios";
export class Axios {
    constructor(config) {
        return axios.create(config);
    }
}
