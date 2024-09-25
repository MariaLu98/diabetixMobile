
export class LoginModel implements ILogin {
    email: number;
    password: string;
}

interface ILogin {
    email: number;
    password: string;
}