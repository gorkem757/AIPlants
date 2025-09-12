import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileStackParamList } from "~navigation/types";
// TODO: Replace with ProfileStackHome when available
import HomeScreen from "~modules/Home/navigation/HomeScreen/HomeScreen";

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileStackHome" component={HomeScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
