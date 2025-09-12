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

export type HomeStackParamList = {
  Home: undefined;
};

export type DiagnoseStackParamList = {
  DiagnoseHome: undefined;
};

export type MyGardenStackParamList = {
  MyGardenHome: undefined;
};

export type ProfileStackParamList = {
  ProfileStackHome: undefined;
};

export type ScanStackParamList = {
  ScanStackHome: undefined;
};
