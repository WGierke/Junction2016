import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar, addPatientId } from '../Reducers/action'
import TreatmentScene from './TreatmentScene'

// Styles
import styles from './Styles/RoleSelectSceneStyle'
import { Scenes } from '../Constants'
import { Metrics, Colors } from '../Themes'

class RoleSelectScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  componentWillMount () {
    // this.props.hideNavbar()
  }

  componentDidMount () {
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (name) {
    let title = 'Jouko (' + this.state.text + ')'
    this.props.addPatientId(this.state.text)
    this.props.changeScene({name, title}, false)
  }

  renderNavbar() {
    return false
  }

  render() {
    const dismissKeyboard = require('dismissKeyboard')
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
              placeholder='Enter patient ID'
              keyboardType='numeric'
              autoFocus={true}
              />
            <Text style={styles.head}>Continue as</Text>
            <TouchableHighlight underlayColor={Colors.background} style={styles.viewHalf} onPress={() => this.clickHandler(Scenes.enterId)}>
              <View>
                <Text style={styles.content}>Child</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={Colors.background} style={styles.viewHalf} onPress={() => this.clickHandler(Scenes.parentOverview)}>
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
    changeScene: (props, showNavbar=true) => {
      dispatch(changeScene(props))
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
