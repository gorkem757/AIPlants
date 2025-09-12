import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { initializeApp } from '~store/slices/appInitSlice';

type Props = {
  children: React.ReactNode;
};

export default function AppInitializer({ children }: Props) {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(state => state.appInit.isInitialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!isInitialized) {
    return (
      // TODO: implement splash screen
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
