import { AccountModel } from "../models/account-model";

type AuthenticationParams = {
  email: string;
  password: string;
};

//Metodo auth vai receber AuthenticationParams e como é uma função assíncrona vai retornar uma Promise que retorna os dados do usuário AccountModel
export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}

// Quem implementar essa interface precisa de um metodo auth que recebe os parametros AuthenticationParams e retorna um AccountModel de forma assíncrona
