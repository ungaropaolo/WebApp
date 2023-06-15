export interface User {
    name: string,
    surname: string,
    operation: string
}

export class user implements User{
    name = "";
    surname = "";
    operation = "";
}