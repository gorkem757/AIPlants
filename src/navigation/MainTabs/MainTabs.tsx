import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { MainTabParamList } from './types';
import CustomTabbarButton from './components/CustomTabbarButton/CustomTabbarButton';
import HomeStack from './components/HomeStack/HomeStack';
import DiagnoseStack from './components/DiagnoseStack/DiagnoseStack';
import MyGardenStack from './components/MyGardenStack/MyGardenStack';
import ProfileStack from './components/ProfileStack/ProfileStack';
import ScanStack from './components/ScanStack/ScanStack';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          display: 'flex',
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Diagnose" component={DiagnoseStack} />
      <Tab.Screen
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? 'blue' : 'gray' }}>Homexsax</Text>
          ),
          tabBarButton: props => <CustomTabbarButton {...props} />,
        }}
        name="Scan"
        component={ScanStack}
      />
      <Tab.Screen name="MyGarden" component={MyGardenStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default MainTabs;
