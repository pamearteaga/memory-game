import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import authSlice from "./auth/authSlice";
import imagesSlice from "./images/imagesSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({ auth: authSlice, images: imagesSlice });

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)