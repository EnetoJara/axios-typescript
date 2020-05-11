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

The `class Api` expects an [axios request config object](https://github.com/axios/axios#request-config)

```typescript
export class UserApi extends Api {
    constructor (config) {
        // if you DO NOT pass any parameter.
        // make sure to have an API_BASE_URL env variable
        super(config);

        this.login = this.login.bind(this);
    }

    login (credentials) {
        return this.post("/users", credentials)
            .then(this.success)
    }
}
```
