import { StyleSheet } from 'react-native';
import { calcWidth } from '~helpers/responsiveHelpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: calcWidth(327),
    marginHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#28AF6E',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: -0.24,
  },
  infoText: {
    marginTop: 17,
    textAlign: 'center',
    color: '#597165B2',
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.07,
    marginHorizontal: 88,
  },
  underlinedInfoText: {
    textDecorationLine: 'underline',
  },
  progressIndicator: {
    marginTop: 32,
    alignSelf: 'center',
  },
});
