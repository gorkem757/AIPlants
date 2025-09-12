import React, { useMemo } from 'react';
import { View, Button } from 'react-native';
import { setOnboardingComplete } from '~secureStore/secureStore';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { setOnboardingCompleteAction } from '~store/slices/appInitSlice';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '~navigation/types';
import {
  nextStep,
  resetOnboarding,
  selectCurrentStepIndex,
  selectOnboardingCompleted,
} from '~store/slices/onboardingSlice';
import { onboardingSteps } from '~modules/Onboarding/config/onboardingConfig';

const OnboardingScreen: React.FC = () => {
  //#region hooks

  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const currentStepIndex = useAppSelector(selectCurrentStepIndex);
  const completed = useAppSelector(selectOnboardingCompleted);

  //#endregion

  //#region variables

  const buttonTitle = useMemo(() => {
    return currentStepIndex === onboardingSteps.length - 1 ? 'Finish' : 'Next';
  }, [currentStepIndex]);

  const CurrentStepComponent = useMemo(
    () => onboardingSteps[currentStepIndex].component,
    [currentStepIndex]
  );

  //#endregion

  //#region handlers

  const handleOnboardingComplete = () => {
    dispatch(setOnboardingCompleteAction(true));
    setOnboardingComplete(true);
  };

  const handleNext = () => {
    dispatch(nextStep());
    if (completed) {
      navigation.navigate('Paywall', {
        onClosePaywall: handleOnboardingComplete,
      });
      setTimeout(() => {
        dispatch(resetOnboarding());
      }, 500);
    }
  };

  //#endregion

  return (
    <View style={{ flex: 1 }}>
      <CurrentStepComponent />
      <Button title={buttonTitle} onPress={handleNext} />
    </View>
  );
};

export default OnboardingScreen;
