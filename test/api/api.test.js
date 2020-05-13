"use strict"

const  chai = require("chai")
const chaiHttp = require("chai-http")
require("mocha");
const qs = require("qs")
const Api  = require("../../lib/index").Api;
chai.use(chaiHttp)

const { expect } = chai

const app = new Api({
    withCredentials: true,
    timeout: 20000,
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    },
    paramsSerializer: params => qs.stringify(params, { indices: false })
});

describe("Api class http request methods", () => {
    it("GET: should respond with HTTP 200 status", () => {
        return app
            .get("/users")
            .then(res => {
                expect(res.status).to.be.equal(200);
            })
    })
    it("GET: should respond with a data array", () => {
        return app
            .get("/users")
            .then(res => {
                expect(res.data).to.be.instanceof(Array);
            })
    })

    it("POST: should respond with a status code 201", () => {
        return app
            .post("/todos",{
                    "userId": 1,
                    "title": "delectus aut autem",
                    "completed": false
            })
            .then(res => {
                expect(res.status).to.be.equal(201);
            })
    })

    it("DELETE: should respond with a status text OK", () => {
        return app
            .delete("/users/1",{
                    "userId": 1,
                    "title": "delectus aut autem",
                    "completed": false
            })
            .then(res => {
               expect(res.statusText).to.be.equal("OK")
            })
    });

    it("PUT: should respond with a status text OK", () => {
        return app
            .put("/todos/1",{
                    "userId": 1,
                    "id":1,
                    "title": "delectus aut autem",
                    "completed": false
            })
            .then(res => {
               expect(res.statusText).to.be.equal("OK")
            })
    });

    it("PATCH: should respond with a status text OK", () => {
        return app
            .patch("/todos/1",{
                    "userId": 1,
                    "id":1,
                    "title": "delectus aut autem",
                    "completed": false
            })
            .then(res => {
               expect(res.statusText).to.be.equal("OK")
            })
    });


})
