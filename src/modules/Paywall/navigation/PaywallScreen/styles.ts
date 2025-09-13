import { Dimensions, StyleSheet } from 'react-native';
import { calcHeight } from '~helpers/responsiveHelpers';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#111E17',
  },
  image: {
    position: 'absolute',
    height: calcHeight(490),
    resizeMode: 'cover',
    top: 0,
    left: 0,
  },
  cameraLineImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: calcHeight(490),
    resizeMode: 'contain',
    top: 0,
    left: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000000c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  content: {    
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'condensedBold',
    color: 'white',
    marginLeft: 24,
  },
  highlightedTitle: {
    fontWeight: 'bold',
  },
  subtitle: {
    marginLeft: 24,
    fontSize: 17,
    fontWeight: 'light',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  featuresSection: {
    marginTop: 12,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 15,
    width: 30,
  },
  featureText: {
    fontSize: 16,
    color: '#2d3436',
    flex: 1,
  },
  pricingSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  priceCard: {
    backgroundColor: '#00b894',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    minWidth: 200,
  },
  priceTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  priceSubtext: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  buttonSection: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  subscribeButton: {
    backgroundColor: '#00b894',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  skipButton: {
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'transparent',
  },
  skipButtonText: {
    color: '#636e72',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#95a5a6',
    textAlign: 'center',
    marginBottom: 5,
    lineHeight: 16,
  },
  divider: {
    height: calcHeight(19),
  },
});
