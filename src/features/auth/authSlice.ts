import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthSlice } from 'features/auth';

import { RootState } from 'store';

const initialState: IAuthSlice = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    resetAuthState: (_) => initialState,
  },
});

const authReducer = authSlice.reducer;

export const { setAuthData, resetAuthState } = authSlice.actions;

export const selectAuthToken = (state: RootState): string => state.auth.token;

export { authReducer };
