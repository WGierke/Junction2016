import React, { PropTypes } from 'react'
import { View, Text, ListView, Image, ActivityIndicator, TouchableHighlight } from 'react-native'

import { connect } from 'react-redux'
import { scan } from '../Reducers/action'

import Icon from 'react-native-vector-icons/Ionicons'


// Styles
import styles from './Styles/ConnectScreenStyle'
import { Metrics, Images } from '../Themes'

class EnterIDScene extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  render () {
    return (
      <Text>Hallo</Text>
    )
  }
}

EnterIDScene.PropTypes = {
  devices: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = (state) => {
  return {
    devices: state.bluetooth.devices,
    scanning: state.bluetooth.scanning,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterIDScene)
