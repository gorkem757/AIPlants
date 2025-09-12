import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { setOnboardingComplete } from '~secureStore/secureStore';
import { useAppDispatch } from '~store/hooks';
import { setOnboardingCompleteAction } from '~store/slices/appInitSlice';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '~navigation/types';

const steps = [
  { id: 1, text: 'Welcome to the app 🎉' },
  { id: 2, text: 'Learn how to use PlantApp 🌱' },
  { id: 3, text: 'Get started and explore 🌍' },
];

const OnboardingScreen: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();

  const handleOnboardingComplete =  () => {
    dispatch(setOnboardingCompleteAction(true));
    setOnboardingComplete(true);
  };

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(prev => prev + 1);
    } else {
      navigation.navigate('Paywall', {
        onClosePaywall: handleOnboardingComplete
      });
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{steps[stepIndex].text}</Text>
      <Button
        title={stepIndex === steps.length - 1 ? 'Finish' : 'Next'}
        onPress={handleNext}
      />
    </View>
  );
};

export default OnboardingScreen;
