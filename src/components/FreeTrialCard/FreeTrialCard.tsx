import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '~navigation/types';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

const FreeTrialCard: React.FC<Props> = ({ containerStyle }) => {
  //#region hooks
  const navigation = useNavigation<NavigationProp>();
  //#endregion

  //#region handlers

  const onPress = () => {
    // TODO: create free trial paywall / offer screen and navigate to that
    navigation.navigate('Paywall', {});
  };

  //#endregion

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.7}
      onPress={onPress}>
      {/* TODO: update icon */}
      <Ionicons name="mail" size={24} color="rgba(217, 168, 70, 1)" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          <Text style={styles.highlightedTitle}>FREE</Text> Premium Available
        </Text>
        <Text style={styles.description}>Tap to upgrade your account!</Text>
      </View>
      <Ionicons
        name="chevron-forward"
        size={24}
        color="rgba(255, 255, 255, 0.7)"
      />
    </TouchableOpacity>
  );
};

export default FreeTrialCard;
