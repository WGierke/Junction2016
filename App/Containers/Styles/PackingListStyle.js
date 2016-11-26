import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
      flex: 1,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20
  },
  item: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
  },
  line: {
      flex: 1,
      height: 0.3,
      backgroundColor: 'darkgray',
  },
  ListIcons: {
    fontSize: 25,
    color: Colors.googleBlue,
  }
});
