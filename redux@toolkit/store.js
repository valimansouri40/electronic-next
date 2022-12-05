import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
// import 
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER
// } from 'redux-persist';

//  import cartReducer from '@/features/cart/cartSlice';
import gamereducer from './slices/Game'
// import authReducer from '@/features/auth/authSlice';
// import notificationReducer from '@/features/notification/notificationSlice';

// import { apiSlice } from './services/apiSlice';
// import { shopApi } from "@/app/services/shopApi";

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: [apiSlice.reducerPath],
// };

const reducers = combineReducers({
//   cart: cartReducer,
    game: gamereducer
//   auth: authReducer,
//   notification: notificationReducer,
//   [apiSlice.reducerPath]: apiSlice.reducer,
//   [shopApi.reducerPath]: shopApi.reducer,
});

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//       }
//     }).concat(apiSlice.middleware).concat(shopApi.middleware),
});

setupListeners(store.dispatch);
