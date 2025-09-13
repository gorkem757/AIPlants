import { StyleSheet } from 'react-native';
import { calcWidth } from '~helpers/responsiveHelpers';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(17, 30, 23,0.8)",
    borderRadius: 14,
    padding: 16,
    height: 130,
    width: calcWidth(156),
  },
  iconWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    width: 36,
    height: 36,
  },
  title: {
    marginTop: 16,
    marginBottom: 4,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.15,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
