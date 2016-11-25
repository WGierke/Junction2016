import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  viewHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: Metrics.doubleBaseMargin,
    borderRadius: Metrics.buttonRadius
  },
  head: {
    fontSize: Metrics.text.large,
    textAlign: 'center'
  },
  green: {
    backgroundColor: Colors.googleGreen
  },
  blue: {
    backgroundColor: Colors.googleBlue
  },
  content: {
    color: 'white',
    fontSize: Metrics.text.medium,
    fontWeight: '200'
  },
  flowWrapper: {
    flex: 1
  }
}
