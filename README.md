# axios-es6-class

[![npm version](https://img.shields.io/npm/v/axios-es6-class.svg?style=flat-square)](https://www.npmjs.org/package/axios-es6-class)
[![install size](https://packagephobia.now.sh/badge?p=axios-es6-class)](https://packagephobia.now.sh/result?p=axios-es6-class)
[![npm downloads](https://img.shields.io/npm/dm/axios-es6-class.svg?style=flat-square)](http://npm-stat.com/charts.html?package=axios-es6-class)

&copy; Apache-2.0 License

**axios es6 class** is a typescript module that implements *[axios](https://github.com/axios/axios)* to use it as a "modern" JavaScript TypeScript class.

### [how-to-use-axios-typescript-like-a-pro](https://medium.com/@enetoOlveda/how-to-use-axios-typescript-like-a-pro-7c882f71e34a)

first we need to install it:

```shell
$ npm i axios-es6-class
```

[detail example](https://github.com/EnetoJara/axios-typescript/blob/master/examples/userApi.ts)

The `class Api` expects an [axios request config object](https://github.com/axios/axios#request-config). We made a small config [example](https://github.com/EnetoJara/axios-typescript/blob/master/examples/api.config.ts). It looks something like this:
```typescript
import {AxiosRequestConfig} from "axios";

// this are the minimun properties the Api class expect
export const apiConfig: AxiosRequestConfig = {
    timeout: 20000,
    baseURL: "https://www.domain.com"
};

export class UserApi extends Api {
    constructor (config) {
        super(config);

        this.login = this.login.bind(this);
    }

    login (credentials) {
        return this.post("/users", credentials)
            .then(this.success)
    }
}

const userApi = new UserApi(apiConfig);
```

### Authtentication
If you need to pass a token on each request. *axios* comes with something call interceptors. which are what the name says they are:
* Request
* Response

Thouse two things should be placed at the constructor of your `api`

```typescript

export class UserApi extends Api {
    constructor (config) {
        super(config);

        // this middleware is been called right before the http request is made.
        this.interceptors.request.use(param => {
            return {
                ...param,
                defaults: {
                    headers: {
                        ...param.headers,
                        "Authorization": `Bearer ${this.getToken()}`
                    },
                }
            }
        });

        // this middleware is been called right before the response is get it by the method that triggers the request
        this.interceptors.response.use((param: AxiosResponse) => ({
            ...param
        }));

        this.login = this.login.bind(this);
    }

    login (credentials) {
        return this.post("/users", credentials)
            .then(response => {
                const {data} = response;
                this.setToken(data);

                return data;
            });
    }
}

```

If by instance on each request your token is updated then you can use also the response interceptor.
The request interceptor gets an [AxiosRequestConfig](https://github.com/axios/axios#request-config) while the response interceptor gets a [AxiosReponse<T>](https://github.com/axios/axios#request-config) where `T` is the type of *Object/Value* youll get. **BUT** if there was an error on any of them. Interceptors have not one, but `two callbacks`

```typescript
....
   // this middleware is been called right before the http request is made.
        this.interceptors.request.use((param) => {
            return {
                ...param,
                defaults: {
                    headers: {
                        ...param.headers,
                        "Authorization": `Bearer ${this.getToken()}`
                    },
                }
            }
        }, (error) => {
            // handling error
        });

        // this middleware is been called right before the response is get it by the method that triggers the request
        this.interceptors.response.use((param) => ({
            ...param
        }, (error) => {
            // handling error
        }));
....
```

There are still some utilities that axios have that I have not add, but you can do almost everything on a es6 fashion way.
