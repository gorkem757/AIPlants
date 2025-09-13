import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { RootStackScreenProps } from '~navigation/types';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import FeaturesList from '~modules/Paywall/components/FeaturesList/FeaturesList';
import {
  FEATURES,
  PAYWALL_PACKAGES,
} from '~modules/Paywall/config/paywallConfig';
import PackageList from '~modules/Paywall/components/PackageList/PackageList';

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
    <View style={[styles.container]}>
      <Image
        source={require('assets/PaywallBGImage.png')}
        style={styles.image}
        // resizeMode="contain"
      />
      {/* Close button */}
      <View style={[styles.header, { marginTop: insets.top }]}>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image
          source={require('assets/PaywallCameraLine.png')}
          style={styles.cameraLineImage}
          // resizeMode="contain"
        />
        {/* Header */}
        <Text style={styles.title}>
          <Text style={styles.highlightedTitle}>PlantApp</Text> Premium
        </Text>
        <Text style={styles.subtitle}>Access All Features</Text>

        <FeaturesList features={FEATURES} />
        <View style={styles.divider} />
        <View style={{ flexShrink: 1 }}>
          <PackageList paywallPackages={PAYWALL_PACKAGES} />
        </View>
        <View style={styles.divider} />

        {/* Buttons */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            onPress={handleSubscribe}
            style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Start Free Trial</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={[styles.footer, { marginBottom: insets.bottom + 10 }]}>
          <Text style={styles.footerText}>
            7-day free trial, then $4.99/month. Cancel anytime.
          </Text>
          <Text style={styles.footerText}>
            Terms of Service • Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaywallScreen;
