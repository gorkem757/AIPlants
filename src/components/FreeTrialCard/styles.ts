import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(36, 32, 26, 1)',
    borderRadius: 12,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 12,
    paddingVertical: 13,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
    justifyContent: 'center',
    marginLeft: 16,
  },
  title: {
    color: 'rgba(229, 201, 144, 1)',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  highlightedTitle: {
    fontWeight: 'bold',
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
});
