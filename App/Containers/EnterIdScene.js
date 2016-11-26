import React, { PropTypes } from 'react'
import { Text } from 'react-native'

import { connect } from 'react-redux'

// Styles

class EnterIDScene extends React.Component {

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
    scanning: state.bluetooth.scanning
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterIDScene)
