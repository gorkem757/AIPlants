import React from 'react';
import { StepOne, StepThree, StepTwo } from '../components/steps';

export interface OnboardingStep {
  id: string;
  component: React.FC;
}

export const onboardingSteps: OnboardingStep[] = [
  { id: 'step-1', component: StepOne },
  { id: 'step-2', component: StepTwo },
  { id: 'step-3', component: StepThree },
];

export const isOBPaywallEnabled = true; // Example condition
