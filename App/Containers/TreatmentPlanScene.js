import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from 'react-native-check-box'
import Accordion from 'react-native-collapsible/Accordion';

import { connect } from 'react-redux'
import { changeScene, hideNavbar } from '../Reducers/action'

// Styles
import styles from './Styles/TreatmentPlanStyle'
import { Scenes } from '../Constants'
import { Metrics } from '../Themes'

const SECTIONS = [
  {
    title: 'Diagnosis and Admission',
    content: ['Talk with doctor', 'Xray broken leg', 'Receive id bracelet'],
  },
  {
    title: 'Operation preparition',
    content: [' Blood sample examination', 'ECG', 'Lung function test', 'Narcosis consultation'],
  }
];

class TreatmentPlan extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
    }

    _renderHeader(section) {
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
      );
    }

    _renderContent(section) {
      return (
        <View style={styles.content}>
          <Text>{section.content[0]}</Text>
        </View>
      );
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={ { fontSize: 20, textDecorationLine: 'underline' } }>Treatment Plan</Text>
              <Accordion
                sections={SECTIONS}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
              />
            </View>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentPlan)
