import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// TODO: implement second step image and stylings

const TITLE = 'Take a photo to identify the plant!';

const StepTwo: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{TITLE}</Text>
      </View>
      <Image
        source={require('assets/OBStarter.png')}
        style={styles.image}
        resizeMode="contain"
        accessible
        accessibilityLabel="Onboarding Step two Image"
      />
    </View>
  );
};

export default StepTwo;
