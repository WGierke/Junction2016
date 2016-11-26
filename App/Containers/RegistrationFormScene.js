'use strict'

import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar } from '../Reducers/action'

// Styles
import styles from './Styles/RegistrationFormStyle'
import { Scenes } from '../Constants'
import { Metrics } from '../Themes'

import t from 'tcomb-form-native'

var Form = t.form.Form;

const Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

var Person = t.struct({
  name: t.String,
  surname: t.String,
  birthday: t.String,
  // gender: Gender,
  street: t.String,
  city: t.String,
  postal: t.String,
  telefon: t.Number,
  mail: t.maybe(t.String)
});

var options={};

class RegistrationFormScene extends React.Component {

  componentDidMount () {
  }

  onPress () {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          {/* display */}
          <Form
            ref="form"
            type={Person}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

RegistrationFormScene.PropTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormScene)
