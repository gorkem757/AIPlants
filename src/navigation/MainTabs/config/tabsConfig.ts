import React from 'react';
import { MainTabParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';

type TabName = keyof MainTabParamList;

export const TAB_COLORS = {
  focused: '#4CAF50',
  unfocused: '#999999',
  scan:"white"
};

export const TAB_ICONS: Record<
  TabName,
  React.ComponentProps<typeof Ionicons>['name']
> = {
  Home: 'home',
  Diagnose: 'medical',
  Scan: 'camera',
  MyGarden: 'leaf',
  Profile: 'person',
};
