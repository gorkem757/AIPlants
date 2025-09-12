import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { MainTabParamList } from './types';
import { useAppDispatch } from '~store/hooks';
import { setOnboardingCompleteAction } from '~store/slices/appInitSlice';

// Dummy screens for now
const HomeScreen = () => {
   const dispatch = useAppDispatch();
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text onPress={()=>{
      dispatch(setOnboardingCompleteAction(false))
    }}>Home Screen</Text>
  </View>
)};

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
