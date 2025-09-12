import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DiagnoseStackParamList } from "~navigation/types";
// TODO: Replace with DiagnoseScreen when available
import HomeScreen from "~modules/Home/navigation/HomeScreen/HomeScreen";

const Stack = createStackNavigator<DiagnoseStackParamList>();

const DiagnoseStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DiagnoseHome" component={HomeScreen} />
  </Stack.Navigator>
);

export default DiagnoseStack;
