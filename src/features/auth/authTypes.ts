import { IUser } from 'features/user';

// redux slice

export interface IAuthSlice {
  token: string;
}

// form
export interface IBaseAuth {
  email: string;
  password: string;
}

export interface ILoginFormData extends IBaseAuth {}

export interface ISignupFormData extends ILoginFormData {
  name?: string;
}

// api

export interface ILoginReqData extends IBaseAuth {}

export interface ISignupReqData {
  name?: string;
}

// export interface IAuthResData {
//   token: string;
//   user: IUser;
// }

export interface IAuthResData {
  token: string;
  user: IUser;
}
