'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  card: {
    borderRadius: Metrics.buttonRadius,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  buttonText: {
    flex: 1,
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: '100',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  },
  image: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    resizeMode: 'contain',
    width: 0.8*Metrics.screenWidth,
    justifyContent: 'center',
    alignSelf: 'center',
    
    flexWrap: 'wrap'
  }
})
