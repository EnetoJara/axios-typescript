import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Credentials, Token, User } from "./interfaces";
import {Api} from "../src/api";
/**
 * Example class
 *
 * @export
 * @class UserApi
 * @extends {Api}
 *
 * @example
 * const config = {
 *  baseUrl: "www.domain.com"
 * }
 * const api = new UserApi(config);
 *  */
export class UserApi extends Api {

    public constructor(config: AxiosRequestConfig) {
        super(config);

        // this middleware is been called right before the http request is made.
        this.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param
        }));

        // this middleware is been called right before the response is get it by the method that triggers the request
        this.interceptors.response.use((param: AxiosResponse) => ({
            ...param
        }));

        this.userLogin = this.userLogin.bind(this);
        this.userRegister = this.userRegister.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getById = this.getById.bind(this);
    }

    public userLogin(credentials: Credentials): Promise<Token> {
        return this.post<string, Credentials, AxiosResponse<string>>("domain/login", credentials).then(this.success);
    }

    public userRegister(user: User): Promise<number> {
        return this.post<number, User, AxiosResponse<number>>("domain/register", user)
            .then(this.success)
            .catch((error: AxiosError<Error>) => {
                throw error;
            });
    }

    public async getAllUsers(): Promise<User[]> {
        try {
            const res: AxiosResponse<User[]> = await this.get<User, AxiosResponse<User[]>>("domain/register");

            return this.success(res);
        } catch (error) {
            throw error;
        }
    }

    public getById(id: number): Promise<User> {
        return this.get<User, AxiosResponse<User>>(`domain/users/${id}`).then(this.success);
    }
}
