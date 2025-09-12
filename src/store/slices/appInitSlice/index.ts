import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './constants';
import { getOnboardingComplete } from '~secureStore/secureStore';

export const initializeApp = createAsyncThunk(
  'appInit/initialize',
  async () => {
    const onboarding = await getOnboardingComplete();
    return { onboardingComplete: onboarding };
  }
);

const appInitSlice = createSlice({
  name: 'appInit',
  initialState,
  reducers: {
    setOnboardingCompleteAction: (state, action: PayloadAction<boolean>) => {
      state.onboardingComplete = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(initializeApp.fulfilled, (state, action) => {
      state.isInitialized = true;
      state.onboardingComplete = action.payload.onboardingComplete;
    });
  },
});

export const { setOnboardingCompleteAction } = appInitSlice.actions;
export default appInitSlice.reducer;
