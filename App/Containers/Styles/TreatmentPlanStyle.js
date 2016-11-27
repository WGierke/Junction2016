import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  header: {
    padding: 10
  },
  headerText: {
    fontWeight: '300',
    fontSize: Metrics.text.small
  },
  content: {
    paddingLeft: 20,
  },
  contentText: {
    fontWeight: '100',
    fontSize: Metrics.text.small,
    paddingBot: 10
  },
  container: {
    padding: Metrics.baseMargin,
  }
}
