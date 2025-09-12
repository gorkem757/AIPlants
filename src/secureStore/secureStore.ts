import * as SecureStore from 'expo-secure-store';

export const ONBOARDING_KEY = "onboarding_complete";

export const setOnboardingComplete = async (value: boolean): Promise<void> => {
  await SecureStore.setItemAsync(ONBOARDING_KEY, JSON.stringify(value));
};

export const getOnboardingComplete = async (): Promise<boolean> => {
  const stored = await SecureStore.getItemAsync(ONBOARDING_KEY);
  return stored ? JSON.parse(stored) : false;
};
