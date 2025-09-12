import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TITLE = 'Welcome to ';
const HIGHLIGHT_TITLE = 'PlantApp';
const SUBTITLE = 'Identify more than 3000+ plants and 88% accuracy.';

const StepOne: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
        <View style={styles.headerWrapper}>
      <Text style={styles.title}>
        {TITLE}
        <Text style={styles.highlight}>{HIGHLIGHT_TITLE}</Text>
      </Text>
      <Text style={styles.subtitle}>{SUBTITLE}</Text>
      </View>
      <Image
        source={require("assets/OBStarter.png")}
        style={styles.image}
        resizeMode="contain"
        accessible
        accessibilityLabel="Onboarding Step One Image"
      />
    </View>
  );
};

export default StepOne;
