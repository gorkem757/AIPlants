import React, { useCallback, useState } from 'react';
import { IPaywallPackage } from '~modules/Paywall/config/paywallConfig';
import { FlatList } from 'react-native';
import { styles } from './styles';
import PackageItem from '../PackageItem/PackageItem';

const keyExtractor = (item: IPaywallPackage) => item.title;

const PackageList: React.FC<{ paywallPackages: IPaywallPackage[] }> = ({
  paywallPackages,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<
    number | undefined
  >();

  const renderItem = useCallback(
    ({ item }: { item: IPaywallPackage }) => (
      <PackageItem
        onPressItem={handleSelectPackage}
        paywallPackage={item}
        isSelected={item.id === selectedPackageId}
      />
    ),
    [selectedPackageId]
  );

  const handleSelectPackage = (id: number) => {
    if (id !== selectedPackageId) {
      setSelectedPackageId(id);
    }
  };

  if (!paywallPackages || paywallPackages.length === 0) {
    return null;
  }

  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={keyExtractor}
      data={paywallPackages}
       initialNumToRender={paywallPackages.length}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};
export default PackageList;
