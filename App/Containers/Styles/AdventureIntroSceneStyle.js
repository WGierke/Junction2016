import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  introView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "flex-end"
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
    position: 'absolute',
    paddingLeft: Metrics.baseMargin,
    // backgroundColor: 'blue',
    textAlign: 'left',
    flexDirection: 'column'
  },
  dialogText: {
    marginTop: Metrics.doubleBaseMargin,
    fontFamily: 'Courier New',
    fontSize: Metrics.text.small,
    flexWrap: 'wrap'
  },
  dialogTextRight: {
    marginTop: Metrics.doubleBaseMargin,
    fontFamily: 'Courier New',
    fontSize: Metrics.text.small,
    flexWrap: 'wrap',
    textAlign: 'right'
  }
}
