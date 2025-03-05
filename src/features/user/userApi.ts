import { api } from 'store/api';
import { IUpdateUserAccountReq, IUserAccount } from './userTypes';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateUserAccount: build.mutation<IUserAccount, IUpdateUserAccountReq>({
      query: ({ accountFormData, userId }) => ({
        url: `user/${userId}`,
        method: 'PATCH',
        body: accountFormData,
      }),
    }),
  }),
});

export const { useUpdateUserAccountMutation } = userApi;
