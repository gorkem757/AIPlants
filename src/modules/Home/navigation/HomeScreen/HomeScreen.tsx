import React from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch } from '~store/hooks';
import { setOnboardingCompleteAction } from '~store/slices/appInitSlice';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          dispatch(setOnboardingCompleteAction(false));
        }}>
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
