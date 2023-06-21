import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from "./filterClice";
import { contactsSlice } from "./contactClice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfig = {
  key: 'contacts',
  storage,
};

export const reducerContact = persistReducer(
  persistConfig,
  contactsSlice.reducer,
  filterSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: reducerContact,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);