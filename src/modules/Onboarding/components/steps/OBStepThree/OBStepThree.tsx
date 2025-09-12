// src/features/onboarding/steps/StepThree.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepThree: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started!</Text>
      <Text style={styles.subtitle}>You are ready to explore the app now.</Text>
    </View>
  );
};

export default StepThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center' },
});
