// src/features/onboarding/steps/StepTwo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepTwo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Features</Text>
      <Text style={styles.subtitle}>
        Learn how to use the main features of our app.
      </Text>
    </View>
  );
};

export default StepTwo;

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
