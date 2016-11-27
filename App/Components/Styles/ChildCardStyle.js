'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  card: {
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    justifyContent: 'space-between',
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
    margin: 5,
    padding: 5,
    justifyContent: 'flex-start',
    
    flexWrap: 'wrap'
  }
})
