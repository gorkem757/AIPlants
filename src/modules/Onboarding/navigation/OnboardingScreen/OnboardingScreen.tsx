import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { setOnboardingComplete } from '~secureStore/secureStore';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { setOnboardingCompleteAction } from '~store/slices/appInitSlice';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '~navigation/types';
import {
  nextStep,
  resetOnboarding,
  selectCurrentStepIndex,
} from '~store/slices/onboardingSlice';
import {
  isOBPaywallEnabled,
  onboardingSteps,
} from '~modules/Onboarding/config/onboardingConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

const TERMS_AND_CONDITIONS_TEXT =
  'By tapping next, you are agreeing to PlantID';
const TERMS = 'Terms of Use';
const AND = ' & ';
const PRIVACY_POLICY = 'Privacy Policy';

const OnboardingScreen: React.FC = () => {
  //#region hooks

  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const currentStepIndex = useAppSelector(selectCurrentStepIndex);
  const insets = useSafeAreaInsets();

  //#endregion

  //#region variables

  const buttonTitle = useMemo(() => {
    if (currentStepIndex === 0) {
      return 'Get Started';
    }
    if (
      currentStepIndex === onboardingSteps.length - 1 &&
      !isOBPaywallEnabled
    ) {
      return 'Begin your journey';
    }

    return 'Continue';
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
    if (currentStepIndex === onboardingSteps.length - 1) {
      // TODO: handle cases where the paywall is not enabled "isOBPaywallEnabled"
      navigation.navigate('Paywall', {
        onClosePaywall: handleOnboardingComplete,
      });
      setTimeout(() => {
        dispatch(resetOnboarding());
      }, 500);
    }
  };

  const onPressTerms = () => {
    // Open a web link
  };
  const onPressPrivacy = () => {
    // Open a web link
  };

  //#endregion

  const dynamicContainerStyle = {
    paddingBottom: insets.bottom + 55,
  };

  return (
    <View style={[styles.container, dynamicContainerStyle]}>
      <CurrentStepComponent />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonTitle}>{buttonTitle}</Text>
      </TouchableOpacity>
      {currentStepIndex === 0 && (
        <Text style={styles.infoText}>
          {TERMS_AND_CONDITIONS_TEXT}{' '}
          <Text onPress={onPressTerms} style={styles.underlinedInfoText}>
            {TERMS}
          </Text>{' '}
          {AND}{' '}
          <Text onPress={onPressPrivacy} style={styles.underlinedInfoText}>
            {PRIVACY_POLICY}
          </Text>
        </Text>
      )}
    </View>
  );
};

export default OnboardingScreen;
