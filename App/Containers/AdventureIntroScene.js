import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, TextInput, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar, addPatientId } from '../Reducers/action'
import TreatmentScene from './TreatmentScene'

// Styles
import styles from './Styles/AdventureIntroSceneStyle'
import { Scenes } from '../Constants'
import { Metrics, Colors, Images } from '../Themes'

require('../Images/Bear.png')

class AdventureIntro extends React.Component {
  componentWillMount () {
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount () {
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    this.props.changeScene({name: Scenes.childOverview, title: 'Overview'}, false)
  }

  renderNavbar() {
    return false
  }

  render() {
    const dismissKeyboard = require('dismissKeyboard')
    return (
        <View style={styles.introView}>        
          <View style={styles.dialog}>
            <Text style={styles.dialogText}>Hello there!</Text>
            <Text style={styles.dialogTextRight}>Seems like we both are going to spend some time together.</Text>
            <Text style={styles.dialogText}>It's going to be an interesting adventure...</Text>
            <Text style={styles.dialogTextRight}>Lets do it! :)</Text>
          </View>
          <View style={styles.avatarWrapper}>
            <TouchableHighlight onPress={this.clickHandler} underlayColor={Colors.background}>
              <Image
                style={styles.avatar}
                resizeMode='contain'
                source={Images.bear}
                />
            </TouchableHighlight>
          </View>
        </View>
    )
  }
}

AdventureIntro.PropTypes = {
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
    },
    hideNavbar: () => {
      dispatch(hideNavbar())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdventureIntro)
