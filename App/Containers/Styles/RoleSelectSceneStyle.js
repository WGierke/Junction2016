import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  viewHalf: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: Metrics.baseMargin,
    borderRadius: Metrics.buttonRadius,
    borderWidth: 1,
    borderColor: Colors.googleBlue,
  },
  head: {
    fontSize: Metrics.text.tiny,
    textAlign: 'center'
  },
  headIcon: {
    fontSize: 120,
    textAlign: 'center',
    color: Colors.googleRed,
    marginBottom: 100,
    justifyContent: 'flex-start'
  },
  green: {
    backgroundColor: Colors.googleGreen,
  },
  blue: {
    backgroundColor: Colors.googleBlue,
  },
  content: {
    color: Colors.googleBlue,
    fontSize: Metrics.text.small,
    fontWeight: '200',
    margin: Metrics.baseMargin,
  },
  flowWrapper: {
    flex: 1,
    justifyContent: 'center'
  }
}
