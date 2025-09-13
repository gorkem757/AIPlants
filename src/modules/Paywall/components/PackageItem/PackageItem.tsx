import Checkbox from 'expo-checkbox';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { IPaywallPackage } from '~modules/Paywall/config/paywallConfig';
import { styles } from './styles';

type Props = {
  paywallPackage: IPaywallPackage;
  onPressItem: (id: number) => void;
  isSelected?: boolean;
};

const mainColor = '#2BAF6E';

const PackageItem: React.FC<Props> = ({
  paywallPackage,
  onPressItem,
  isSelected = false,
}) => {
  const onPress = () => {
    onPressItem(paywallPackage.id);
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isSelected}
        color={isSelected ? mainColor : undefined}
      />
      <View>
        <Text style={styles.title}>{paywallPackage.title}</Text>
        <Text style={styles.description}>{paywallPackage.description}</Text>
      </View>
    </Pressable>
  );
};
export default PackageItem;
