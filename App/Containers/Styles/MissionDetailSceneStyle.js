import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  introView: {
    flex: 1,
  },
  avatar: {
    height: Metrics.screenHeight / 2,
    right: -50,
    bottom: 20
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  dialog: {
    paddingLeft: Metrics.baseMargin,
    // backgroundColor: 'blue',
    flexDirection: 'column',
  },
  dialogText: {
    width: Metrics.screenWidth * 0.5,
    paddingLeft: Metrics.baseMargin,
    marginTop: Metrics.doubleBaseMargin,
    fontFamily: 'Courier New',
    fontSize: Metrics.text.small,
    flexWrap: 'wrap'
  },
  coverWrapper: {
    height: 50,
    width: 50
  },
  cover: {
    height: 250,
    width: Metrics.screenWidth,
    resizeMode: 'stretch',
  },
  buttonWrapper: {
    width: Metrics.screenWidth * 0.5,
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 70
  },
  touch: {
  },
  execute: {
    width: 70,
    height: 70,
    backgroundColor: Colors.googleGreen,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: "white",
    fontSize: 60
  }
}
