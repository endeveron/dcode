import { api } from 'store/api';
import { IAuthResData, ILoginReqData, ISignupReqData } from './authTypes';
import { Response } from 'common/types/http';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IAuthResData, ILoginReqData>({
      query: (data) => ({
        url: `auth/signin`,
        method: 'POST',
        body: data,
      }),
      transformResponse: (res: Response<IAuthResData>) => res.data,
    }),
    signup: build.mutation<IAuthResData, ISignupReqData>({
      query: (data) => ({
        url: `auth/signup`,
        method: 'POST',
        body: data,
      }),
      transformResponse: (res: Response<IAuthResData>) => res.data,
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
