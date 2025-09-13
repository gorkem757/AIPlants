import { StyleSheet } from 'react-native';
import { calcHeight } from '~helpers/responsiveHelpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    borderBottomWidth: 0.2,
  },
  helloText: { marginBottom: 6 },
  greetingsText: { fontWeight: 'bold' },
  searchInput: {
    height: calcHeight(44),
    marginVertical: 12,
    borderWidth: 0.2,
    borderRadius: 12,
    padding: 10,
    borderColor: 'rgba(60, 60, 67, 0.25)',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
  },
});
