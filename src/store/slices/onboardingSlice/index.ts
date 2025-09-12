import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { onboardingSteps } from "~modules/Onboarding/config/onboardingConfig";
import { RootState } from "~store/types/types";

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStepIndex < onboardingSteps.length - 1) {
        state.currentStepIndex += 1;
      } else {
        state.completed = true;
      }
    },
    prevStep: (state) => {
      if (state.currentStepIndex > 0) {
        state.currentStepIndex -= 1;
      }
    },
    resetOnboarding: (state) => {
      state.currentStepIndex = 0;
      state.completed = false;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStepIndex = action.payload;
    },
  },
});

export const { nextStep, prevStep, resetOnboarding, setStep } = onboardingSlice.actions;
export const selectCurrentStepIndex = (state: RootState) => state.onboarding.currentStepIndex;
export const selectOnboardingCompleted = (state: RootState) => state.onboarding.completed;

export default onboardingSlice.reducer;