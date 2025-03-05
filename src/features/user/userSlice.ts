import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { IUser, IUserAccount, IUserSlice } from './userTypes';

const initialState: IUserSlice = {
  account: null,
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.account = action.payload.account;
      state.id = action.payload.id;
    },
    setUserAccount: (state, action: PayloadAction<IUserAccount>) => {
      state.account = action.payload;
    },

    resetUserState: (_) => initialState,
  },
});

const userReducer = userSlice.reducer;

export const { setUser, setUserAccount, resetUserState } = userSlice.actions;

export const selectUserId = (state: RootState): string => state.user.id;
export const selectUserAccount = (state: RootState): IUserAccount | null =>
  state.user.account;

export { userReducer };
