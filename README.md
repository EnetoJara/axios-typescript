# axios-es6-class

axios es6 class is a typescript module that implements axios to use it as a "modern" JavaScript TypeScript class.

first we need to install it:

```shell
$ npm i axios-es6-class
```

Once installed we create our `userApi.ts`.

<br />
<br />

```javascript
import { Api } from "axios-es6-class";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export class UserApi extends Api {
    public constructor (config: AxiosRequestConfig) {
        super(config);

        this.loginUser=this.loginUser.bind(this);

    }

    public loginUser (url: string, credentials: UserCredentials): Promise<string> {
        return this.post<string, UserCredentials, AxiosResponse<string>>(url, {username: credentials.username, pass: credentials.pass}).then((res: AxiosResponse<string>) => res.data)
    }
}
```
