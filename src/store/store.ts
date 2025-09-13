import { configureStore } from '@reduxjs/toolkit';
import appInitReducer from './slices/appInitSlice';
import onboardingReducer from './slices/onboardingSlice';
import { baseApi } from '~services/BaseApiService';

export const store = configureStore({
  reducer: {
    appInit: appInitReducer,
    onboarding: onboardingReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});
