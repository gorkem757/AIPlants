import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { ICategory } from '~services/CategoriesService/interfaces';
import CategoryListItem from './components/CategoryListItem';
import { styles } from './styles';
import { calcHeight } from '~helpers/responsiveHelpers';

const ITEM_HEIGHT = calcHeight(152);
const ColGap = 16;

type CategoryListProps = {
  data?: ICategory[];
  isLoading: boolean;
  hasError: FetchBaseQueryError | SerializedError | undefined;
  isFetchingMore?: boolean; // For pagination spinner purposes
};
const keyExtractor = (item: ICategory) => item.title;

const CategoryList: React.FC<CategoryListProps> = ({
  data,
  isLoading,
  hasError,
}) => {
  const onCategoryPress = () => {
    // todo: implement later
  };

  const renderItem = useCallback(
    ({ item }: { item: ICategory }) => (
      <CategoryListItem category={item} onPress={onCategoryPress} />
    ),
    [onCategoryPress]
  );

  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.container}
      getItemLayout={(_, index) => ({
        length: ITEM_HEIGHT,
        offset: (ITEM_HEIGHT + ColGap) * index,
        index,
      })}
      numColumns={2}
      contentContainerStyle={styles.listContentContainer}
    />
  );
};
export default CategoryList;
