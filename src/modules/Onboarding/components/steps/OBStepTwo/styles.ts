import { StyleSheet } from 'react-native';
import { calcHeight } from '~helpers/responsiveHelpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  headerWrapper: {
    marginLeft: 24,
    marginRight: 51,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    letterSpacing: 0.07,
    //TODO: move color to colors.ts
    color: '#13231B',
  },
  highlight: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.07,
    color: '#13231BB2',
  },
  image: {
    marginTop: 24,
    aspectRatio: 290 / 499,
    alignSelf:'center',
    height: calcHeight(500),
  },
});
