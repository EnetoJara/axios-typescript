# axios-es6-class

[![npm version](https://img.shields.io/npm/v/axios-es6-class.svg?style=flat-square)](https://www.npmjs.org/package/axios-es6-class)
[![install size](https://packagephobia.now.sh/badge?p=axios-es6-class)](https://packagephobia.now.sh/result?p=axios-es6-class-es6-class)
[![npm downloads](https://img.shields.io/npm/dm/axios-es6-class.svg?style=flat-square)](http://npm-stat.com/charts.html?package=axios-es6-class)

[axios](https://github.com/axios/axios) es6 class is a typescript module that implements axios to use it as a "modern" JavaScript TypeScript class.

first we need to install it:

```shell
$ npm i axios-es6-class
```

Once installed we create our `userApi.ts`.

<<<<<<< HEAD
[Example](./examples/userApi.ts)
=======
<br />

### NOTE: you need to bind your APIs endpoint in the constructor of your controller

```javascript
import { Api } from "axios-es6-class";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export class UserApi extends Api {
    public constructor (config: AxiosRequestConfig) {
        super(config);

        this.loginUser=this.loginUser.bind(this);

    }

    public loginUser (url: string, credentials: UserCredentials): Promise<string> {
        return this.post<string, UserCredentials, AxiosResponse<string>>(url, credentials)
          .then((res: AxiosResponse<string>) => res.data)
          .catch((error: AxiosError<Error>) => {
             throw error;
           });
    }
}
```
>>>>>>> 652db9651e357761ae2a3fc36d2070621be7b0b3
