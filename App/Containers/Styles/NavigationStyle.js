import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  topBarLeft: {
    color: "white"
  },
  topBarRight: {
    color: 'white'
  },
  applicationView: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  nav: {
    backgroundColor: Colors.googleRed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
}
