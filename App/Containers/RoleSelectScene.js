import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar, addPatientId } from '../Reducers/action'

// Styles
import styles from './Styles/RoleSelectSceneStyle'
import { Scenes } from '../Constants'
import { Metrics } from '../Themes'

class RoleSelectScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Enter patient ID',
    };
  }
  componentWillMount () {
    this.props.hideNavbar()
  }

  componentDidMount () {
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (name) {
    this.props.addPatientId(this.state.text)
    this.props.changeScene(name, false)
  }

  renderNavbar() {
    return false
  }

  render() {
    const dismissKeyboard = require('dismissKeyboard')
    let viewStyles = (color) => {
      // return styles[color]
      return {
        ...styles.viewHalf,
        // ...styles[color]
      }
    }
    return (
      <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
        <View>
          <Icon
            name={'ios-heart'}
            style={styles.headIcon}
            />
          <View style={styles.flowWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ text })}
              placeholder={this.state.text}
              keyboardType='numeric'
              autoFocus={true}
              />
            <Text style={styles.head}>Continue as</Text>
            <TouchableHighlight style={viewStyles('green')} onPress={() => this.clickHandler(Scenes.enterId)}>
              <View>
                <Text style={styles.content}>Child</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={viewStyles('blue')} onPress={() => this.clickHandler(Scenes.parentOverview)}>
              <View>
                <Text style={styles.content}>Parent</Text>
              </View>
            </TouchableHighlight>
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

RoleSelectScene.PropTypes = {
  changeScene: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScene: (name, showNavbar=true) => {
      dispatch(changeScene({name}))
      if (!showNavbar) hideNavbar()
    },
    hideNavbar: () => {
      dispatch(hideNavbar())
    },
    addPatientId: (patientID) => {
      dispatch(addPatientId(patientID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleSelectScene)
