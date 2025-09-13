import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth } from '~helpers/responsiveHelpers';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#F4F6F6',
    backgroundColor: '#ffff',
    width: calcWidth(158),
    height: calcHeight(152),
    overflow: 'hidden',
  },
  listContentContainer: {
    paddingLeft: 24,
    columnGap: 16,
  },
  categoryName: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#13231B',
    marginBottom: 16,
    marginHorizontal: 24,
  },
  imageBackground: {
    width: calcWidth(158),
    height: calcHeight(152),
    borderRadius: 12,
    overflow: 'hidden',
    paddingLeft: 16,
    paddingTop: 16,
  },
});
