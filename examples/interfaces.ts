export interface User {
    name: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    age: number;
}

export interface Credentials {
    username: string;
    password: string;
}

export type Token = string;
