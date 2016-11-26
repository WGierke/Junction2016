import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    justifyContent: 'center',
    // marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    borderColor: Colors.googleBlue,
    borderWidth: 1,
    borderRadius: Metrics.buttonRadius,
    margin: Metrics.baseMargin,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }  
});
