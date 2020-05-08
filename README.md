# axios-es6-class

[![npm version](https://img.shields.io/npm/v/axios-es6-class.svg?style=flat-square)](https://www.npmjs.org/package/axios-es6-class)
[![install size](https://packagephobia.now.sh/badge?p=axios-es6-class)](https://packagephobia.now.sh/result?p=axios-es6-class-es6-class)
[![npm downloads](https://img.shields.io/npm/dm/axios-es6-class.svg?style=flat-square)](http://npm-stat.com/charts.html?package=axios-es6-class)

[axios](https://github.com/axios/axios) es6 class is a typescript module that implements axios to use it as a "modern" JavaScript TypeScript class.

first we need to install it:

```shell
$ npm i axios-es6-class
```

for the baseUrl and for the timeout. we recommend to set on your `.env` file

```
...
NODE_ENV=development
API_BASE_URL=https://www.domain.com
API_TIMEOUT=15000
PORT=3001
...
```
**`API_BASE_URL:`** baseUrl from axios request config.
**`API_TIMEOUT:`** milliseconds the api should wait before *throwing* an Timeout exception

<br />

### NOTE: you need to bind your APIs endpoint in the constructor of your controller

[example](./examples/userApi.ts)
