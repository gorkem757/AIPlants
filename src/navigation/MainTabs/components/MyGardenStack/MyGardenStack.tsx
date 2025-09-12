import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MyGardenStackParamList } from "~navigation/types";
// TODO: Replace with MyGardenHome when available
import HomeScreen from "~modules/Home/navigation/HomeScreen/HomeScreen";

const Stack = createStackNavigator<MyGardenStackParamList>();

const MyGardenStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MyGardenHome" component={HomeScreen} />
  </Stack.Navigator>
);

export default MyGardenStack;
