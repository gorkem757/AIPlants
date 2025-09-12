import { configureStore } from '@reduxjs/toolkit';
import appInitReducer from './slices/appInitSlice';

export const store = configureStore({
  reducer: {
    appInit: appInitReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
