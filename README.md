# axios-es6-class

[axios](https://github.com/axios/axios) es6 class is a typescript module that implements axios to use it as a "modern" JavaScript TypeScript class.

first we need to install it:

```shell
$ npm i axios-es6-class
```

Once installed we create our `userApi.ts`.

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
