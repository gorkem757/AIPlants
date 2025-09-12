import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';



const CustomTabbarButton: React.FC<BottomTabBarButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabbarButton;
