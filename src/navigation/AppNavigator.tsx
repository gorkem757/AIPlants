import React, { Suspense } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import PaywallNavigator from '~features/paywall/navigation/PaywallNavigator';
import { useAppSelector } from '~store/hooks';
import PaywallScreen from '~modules/Paywall/navigation/PaywallScreen/PaywallScreen';

const Stack = createNativeStackNavigator();

const OnboardingStack = React.lazy(
  () => import('./OnboardingStack/OnboardingStack')
);
const MainTabs = React.lazy(() => import('./MainTabs/MainTabs'));

const AppNavigator = () => {
  //#region hooks

  const { onboardingComplete } = useAppSelector(state => state.appInit);

  //#endregion hooks

  return (
    // todo: fix splash
    <Suspense fallback={<></>}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!onboardingComplete ? (
          <Stack.Screen name="Onboarding" component={OnboardingStack} />
        ) : (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        )}
        <Stack.Screen
          name="Paywall"
          component={PaywallScreen}
          options={{ presentation: 'fullScreenModal' }}
        />
      </Stack.Navigator>
    </Suspense>
  );
};

export default AppNavigator;
