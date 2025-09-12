import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type AppStackParamList = {
  Onboarding: undefined;
  MainTabs: undefined;
  Paywall: {
    onClosePaywall?: () => void;
  };
};

export type RootStackScreenProps<Screen extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, Screen>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export type NavigationProp = NativeStackNavigationProp<AppStackParamList>;
