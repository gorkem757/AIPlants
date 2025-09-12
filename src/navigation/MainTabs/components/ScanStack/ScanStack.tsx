import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScanStackParamList } from '~navigation/types';
// TODO: Replace with ScanStackHome when available
import HomeScreen from '~modules/Home/navigation/HomeScreen/HomeScreen';

const Stack = createStackNavigator<ScanStackParamList>();

const ScanStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ScanStackHome" component={HomeScreen} />
  </Stack.Navigator>
);

export default ScanStack;
