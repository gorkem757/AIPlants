import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth } from '~helpers/responsiveHelpers';

export const styles = StyleSheet.create({
  container: {
    width: calcWidth(240),
    height: calcHeight(164),
    borderRadius: 12,
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '##13231B',
    marginBottom: 16,
    marginHorizontal: 24,
  },
  image: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: '50%',
  },
});
