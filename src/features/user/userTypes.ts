// redux slice

export interface IUserAccount {
  name: string;
  email: string;
  imgUrl?: string;
  role: {
    index: number;
    name: string;
  };
}

export interface IUser {
  id: string;
  account: IUserAccount;
}

export interface IUserSlice {
  id: string;
  account: IUserAccount | null;
}

// api

export interface IUpdateUserAccountReq {
  accountFormData: FormData;
  userId: string;
}
