import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Navigation from './Navigation'

// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
  componentDidMount () {
  }

// <StatusBar barStyle='light-content' />
  render () {
    return (

      <View style={styles.applicationView}>
        <Navigation />
      </View>
    )
  }
}

const mapStateToDispatch = dispatch => ({
  // startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapStateToDispatch)(RootContainer)
