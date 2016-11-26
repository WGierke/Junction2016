import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
      flex: 1,
      backgroundColor: '#f3f2f2',
      marginTop: 30
  },
  item: {
      flexDirection: 'row',
  },
  line: {
      flex: 1,
      height: 0.3,
      backgroundColor: 'darkgray',
  }
});
