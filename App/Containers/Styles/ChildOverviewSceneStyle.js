import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
      padding: 5,
      margin: 5,
  },
  containerContent: {
      padding: 5,
      margin: 2,
  },
  childCard: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  separator: {
    fontWeight: "100",
    padding: 5
  },
    card: {
    borderRadius: Metrics.buttonRadius,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  imageText: {
    flex: 1,
    color: Colors.googleRed,
    textAlign: 'center',
    fontWeight: '100',
    fontSize: Fonts.size.medium,
  },
  image: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    resizeMode: 'contain',
    width: 0.9*Metrics.screenWidth,
    justifyContent: 'center',
    alignSelf: 'center',
    
    flexWrap: 'wrap'
  }
})
