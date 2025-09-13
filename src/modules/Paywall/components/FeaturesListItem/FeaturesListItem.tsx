import React from 'react';
import { Text, View } from 'react-native';
import { IPaywallFeature } from '~modules/Paywall/config/paywallConfig';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const FeaturesListItem: React.FC<{ feature: IPaywallFeature }> = ({
  feature,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons
          name={feature.icon}
          size={18}
          color="#fff"
        />
      </View>
      <View>
        <Text style={styles.title}>{feature.title}</Text>
        <Text style={styles.description}>{feature.description}</Text>
      </View>
    </View>
  );
};

export default FeaturesListItem;
