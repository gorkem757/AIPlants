import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import CustomTabbarButton from './components/CustomTabbarButton/CustomTabbarButton';
import HomeStack from './components/HomeStack/HomeStack';
import DiagnoseStack from './components/DiagnoseStack/DiagnoseStack';
import MyGardenStack from './components/MyGardenStack/MyGardenStack';
import ProfileStack from './components/ProfileStack/ProfileStack';
import ScanStack from './components/ScanStack/ScanStack';
import { Ionicons } from '@expo/vector-icons';
import { TAB_COLORS, TAB_ICONS } from './config/tabsConfig';

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderTabBarIcon = (
  name: keyof MainTabParamList,
  focused: boolean,
  tintColor?: string
) => {
  const color =
    tintColor ?? (focused ? TAB_COLORS.focused : TAB_COLORS.unfocused);
  return <Ionicons name={TAB_ICONS[name]} size={25} color={color} />;
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          display: 'flex',
        },
        tabBarInactiveTintColor: TAB_COLORS.unfocused,
        tabBarActiveTintColor: TAB_COLORS.focused,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => renderTabBarIcon('Home', focused),
          tabBarInactiveTintColor: TAB_COLORS.unfocused,
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseStack}
        options={{
          tabBarIcon: ({ focused }) => renderTabBarIcon('Diagnose', focused),
          tabBarInactiveTintColor: TAB_COLORS.unfocused,
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon('Scan', focused, 'white'),
          tabBarButton: props => <CustomTabbarButton {...props} />,
        }}
        name="Scan"
        component={ScanStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => renderTabBarIcon('MyGarden', focused),
          tabBarInactiveTintColor: TAB_COLORS.unfocused,
        }}
        name="MyGarden"
        component={MyGardenStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => renderTabBarIcon('Profile', focused),
          tabBarInactiveTintColor: TAB_COLORS.unfocused,
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
