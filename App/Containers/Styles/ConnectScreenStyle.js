import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  view: {
    backgroundColor: Colors.background,
    flex: 1
  },
  listItem: {
    padding: 15,
    paddingLeft: 20,
    flex: 1,
    flexDirection: 'row'
  },
  listItemIcon: {
    marginRight: 10
  },
  listItemText: {
    fontSize: Metrics.text.tiny,
    lineHeight: Metrics.icons.small
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
})
