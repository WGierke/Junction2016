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
    fontSize: 100,
    textAlign: 'center',
    color: Colors.googleRed,
    marginBottom: 80,
    justifyContent: 'flex-start'
  },
  green: {
    backgroundColor: Colors.googleGreen
  },
  blue: {
    backgroundColor: Colors.googleBlue
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
  },
  textInput: {
    textAlign:'center',
    alignItems: 'center',
    height: 40,
    margin: Metrics.baseMargin,
    flex:1,
    borderColor: 'gray',
    borderBottomWidth: 2,
  }
}
