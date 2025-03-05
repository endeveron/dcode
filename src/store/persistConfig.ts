import storage from 'redux-persist/lib/storage/session'; // use a SessionStorage

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // blacklist: [productApi.reducerPath], // will not be persisted
};

export { persistConfig };
