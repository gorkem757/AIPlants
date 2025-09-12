import { configureStore } from '@reduxjs/toolkit';
import appInitReducer from './slices/appInitSlice';
import onboardingReducer from './slices/onboardingSlice';

export const store = configureStore({
  reducer: {
    appInit: appInitReducer,
    onboarding: onboardingReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
