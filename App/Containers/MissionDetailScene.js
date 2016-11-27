import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, TextInput, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar, addPatientId } from '../Reducers/action'
import TreatmentScene from './TreatmentScene'

// Styles
import styles from './Styles/MissionDetailSceneStyle'
import { Scenes } from '../Constants'
import { Metrics, Colors, Images } from '../Themes'


class MissionDetail extends React.Component {
  componentWillMount () {
    this.props.hideNavbar()

    this.clickHandler = this.clickHandler.bind(this)
    this.wayPoint = this.props.journey.filter( (waypoint) => {
      return waypoint.id == this.props.wayPointId
    })[0]
  }

  componentDidMount () {
  }

  clickHandler (name) {
  }

  renderNavbar() {
    return false
  }

  render() {
    return (
        <View style={styles.introView}>
          <View style={styles.coverWrapper}>
            <Image style={styles.cover} source={Images[this.wayPoint.image]}/>
            <Text style={styles.dialogText}>{this.wayPoint.description}</Text>
            <View style={styles.buttonWrapper}>
              <TouchableHighlight style={styles.touch}>
                <View style={styles.execute}>
                  <Icon
                    name={'ios-checkmark'}
                    style={styles.icon}
                    />
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              resizeMode='contain'
              source={Images.bear}
              />
          </View>
        </View>
    )
  }
}

MissionDetail.PropTypes = {
  changeScene: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    journey: state.patient.journey
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionDetail)
