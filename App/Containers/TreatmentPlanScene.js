import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Accordion from 'react-native-collapsible/Accordion';

import { connect } from 'react-redux'
import { changeScene, hideNavbar } from '../Reducers/action'

// Styles
import styles from './Styles/TreatmentPlanStyle'
import { Scenes } from '../Constants'
import { Metrics, Colors } from '../Themes'

const SECTIONS = [
  {
    title: 'Diagnosis and Admission',
    content: ['Talk with your doctor', 'Xray of broken leg', 'Receive your ID bracelet']
  },
  {
    title: 'Operation preparition',
    content: ['Blood sample examination', 'ECG', 'Lung function test', 'Narcosis consultation', 'Anxiety Medications', 'Receive OP Cloth'],
  },
  {
    title: 'Operation',
    content: ['Prep room: anesthesia', 'Operating room: surgery'],
  },
  {
    title: 'Aftercare',
    content: ['Remove redon drainage', 'Follow-up examination', 'Physical therapy'],
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
          <Text style={styles.headerText} underlayColor={Colors.background}>{section.title}</Text>
        </View>
      );
    }

    _renderContent(section) {
      var len = section.content.length;
      var views = [];
      for (var i = 0; i < len; i ++) {
        views.push(
          <View style={styles.content}>
            <Text style={styles.contentText}>{section.content[i]}</Text>
          </View>
        )
      }
      return views;
    }

    render() {
        return (
            <View style={styles.container}>
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
