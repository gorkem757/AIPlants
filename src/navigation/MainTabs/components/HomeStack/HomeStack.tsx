import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamList } from "~navigation/types";
import HomeScreen from "~modules/Home/navigation/HomeScreen/HomeScreen";

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
