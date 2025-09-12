import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { RootStackScreenProps } from '~navigation/types';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

type Props = RootStackScreenProps<'Paywall'>;

const PaywallScreen: React.FC = () => {
  const navigation = useNavigation<Props['navigation']>();
  const route = useRoute<Props['route']>();
  const { onClosePaywall } = route.params;
  const insets = useSafeAreaInsets();

  const handleClose = () => {
    onClosePaywall?.();
    navigation.goBack();
  };

  const handleSubscribe = () => {
    // Here you would handle the actual subscription logic
    console.log('Subscribe button pressed');
    // After successful subscription, close paywall
    handleClose();
  };

  const handleSkip = () => {
    // Skip paywall but still complete onboarding
    console.log('Skip button pressed');
    handleClose();
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      {/* Close button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>🌟 Go Premium!</Text>
          <Text style={styles.subtitle}>
            Unlock all features and get the most out of PlantApp
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresSection}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🌱</Text>
            <Text style={styles.featureText}>
              Unlimited plant identification
            </Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📊</Text>
            <Text style={styles.featureText}>
              Advanced plant care analytics
            </Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🔔</Text>
            <Text style={styles.featureText}>Smart watering reminders</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>☁️</Text>
            <Text style={styles.featureText}>Cloud backup & sync</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureText}>
              Personalized plant recommendations
            </Text>
          </View>
        </View>

        {/* Pricing */}
        <View style={styles.pricingSection}>
          <View style={styles.priceCard}>
            <Text style={styles.priceTitle}>Premium Monthly</Text>
            <Text style={styles.price}>$4.99/month</Text>
            <Text style={styles.priceSubtext}>Billed monthly</Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            onPress={handleSubscribe}
            style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Start Free Trial</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>
              Continue with Free Version
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            7-day free trial, then $4.99/month. Cancel anytime.
          </Text>
          <Text style={styles.footerText}>
            Terms of Service • Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaywallScreen;
