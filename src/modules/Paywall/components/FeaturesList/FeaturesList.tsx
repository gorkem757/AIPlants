import React, { useCallback } from 'react';
import FeaturesListItem from '../FeaturesListItem/FeaturesListItem';
import { IPaywallFeature } from '~modules/Paywall/config/paywallConfig';
import { FlatList } from 'react-native';
import { styles } from './styles';

const keyExtractor = (item: IPaywallFeature) => item.title;

const FeaturesList: React.FC<{ features: IPaywallFeature[] }> = ({
  features,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: IPaywallFeature }) => (
      <FeaturesListItem feature={item} />
    ),
    []
  );

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={features}
      renderItem={renderItem}
      horizontal
      initialNumToRender={features.length}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    />
  );
};
export default FeaturesList;
