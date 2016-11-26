import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  view: {
    backgroundColor: Colors.background,
    flex: 1,
    margin: Metrics.baseMargin
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  mapView: {
    flex: 1,
    marginBottom: 10
  },
  boldText: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: Colors.blue,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
