// import React, { PropTypes, Component } from 'react'
// import { View, Button, TextInput, Alert, TouchableHighlight, Text, StyleSheet } from 'react-native'

'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  Alert,
  Button,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight
} = ReactNative;

const { PropTypes, Component} = React;

import { connect } from 'react-redux'

// Styles
import styles from './Styles/EnterIdSceneStyle'
import { Metrics, Colors } from '../Themes'


class EnterIDScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  componentDidMount () {
console.log("########patientid##################" + this.props.patientid)
  }

  render () {
    
    return (
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({ text })}
          placeholder={this.state.text}
        />
    )
  }
}

EnterIDScene.PropTypes = {
  devices: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = (state) => {
  return {
    patientid: state.patient.id,
    devices: state.bluetooth.devices,
    scanning: state.bluetooth.scanning
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterIDScene)
