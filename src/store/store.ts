import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { api } from './api';
import { uiReducer } from 'store/ui';
import { authReducer } from 'features/auth';
import { codeReducer } from 'features/code';
import { userReducer } from 'features/user';
import { persistConfig } from './persistConfig';

const rootReducer = combineReducers({
  auth: authReducer,
  code: codeReducer,
  ui: uiReducer,
  user: userReducer,

  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  // configureStore could automatically create the root reducer
  // by passing reducers object to the Redux combineReducers utility
  reducer: persistReducer(persistConfig, rootReducer),

  // configureStore will automatically pass those to applyMiddleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),

  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>; // returns type `any`
export type RootState = ReturnType<typeof rootReducer>;

export { store };
