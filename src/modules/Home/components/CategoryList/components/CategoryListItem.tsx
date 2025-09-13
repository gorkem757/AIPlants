import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { ICategory } from '~services/CategoriesService/interfaces';
import { styles } from './styles';

type CategoryListItemProps = {
  category: ICategory;
  onPress: () => void;
};
const CategoryListItem: React.FC<CategoryListItemProps> = ({
  category,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}>
      <ImageBackground src={category.image.url} style={styles.imageBackground}>
        <Text style={styles.categoryName}>{category.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default CategoryListItem;
