import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  childCard: {
    borderRadius: Metrics.buttonRadius,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  separator: {
    fontWeight: "100",
  }
})
