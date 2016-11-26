import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Navigator, TouchableHighlight, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Connect from './ConnectScreen'
import EnterID from './EnterIdScene'
import RegistrationForm from './RegistrationFormScene'
import RoleSelect from './RoleSelectScene'
import Treatment from './TreatmentScene'
import ParentOverview from './ParentOverviewScene'
import Packlist from './PacklistScene'

// Styles
import styles from './Styles/RootContainerStyle'
import {Metrics} from '../Themes'
import {Scenes} from '../Constants/'

class Navigation extends Component {
  componentWillMount () {
    this.renderScene = this.renderScene.bind(this)
    this.renderNavBar = this.renderNavBar.bind(this)
    this.component = RoleSelect
    // this.applyStyle = this.applyStyle.bind(this)

    console.log("Component: ", this.props.scene)
    this.component = RoleSelect
  }

  componentDidMount () {
  }

  componentWillReceiveProps(nextProps) {
    console.log("Receives new Props: ", nextProps.scene)
    this.navigator.push({
        component: nextProps.scene,
        passProps: {
          // title: nextProps.scene.title ? nextProps.scene.title : ''
          ...nextProps.props
        }
      })
  }

  renderScene (route, navigator) {
    console.log("----------------- RENDER SCENE --------------------------", route.component)
    switch (route.component) {
      case Scenes.connect:
        return <Connect navigator={navigator} {...route.passProps} />
      case Scenes.enterId:
        return <EnterID navigator={navigator} {...route.passProps} />
      case Scenes.roleSelect:
        return <RoleSelect navigator={navigator} {...route.passProps} />
      case Scenes.treatment:
        return <Treatment navigator={navigator} {...route.passProps} />
      case Scenes.parentOverview:
        return <ParentOverview navigator={navigator} {...route.passProps} />
      default:
        return <RoleSelect navigator={navigator} {...route.passProps} />
    }
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.HorizontalSwipeJump
  }

  navigationRouteMapper () {
    return {
      LeftButton (route, navigator, index, navState) {
        if (index > 1) {
          return (
            <TouchableHighlight
              underlayColor='transparent'
              onPress={() => { if (index > 0) { navigator.pop() } }}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                <Icon name='ios-arrow-back' size={20} color={'#000000'} style={{marginTop: 2, paddingRight: 5, paddingLeft: 10}} />
                <Text style={styles.topBarLeft}>Back</Text>
              </View>
            </TouchableHighlight>)
        } else {
          return null
        }
      },
      RightButton (route, navigator, index, navState) {
        if (route.onPress) {
          return (
            <TouchableHighlight
              onPress={() => route.onPress()}>
              <Text style={{flexDirection: 'row', alignItems: 'center', marginTop: 8, marginRight: 14}}>
                { route.rightText || 'Right Button' }
              </Text>
            </TouchableHighlight>)
        }
      },
      Title (route, navigator, index, navState) {
        if(route && route.passProps && route.passProps.title)
          return <Text style={{marginTop: 10}}>{route.passProps.title}</Text>
      }
    }
  }

  renderNavBar() {
    let ignore = [Scenes.roleSelect]
    // let stack = this.navigator.getCurrentRoutes()
    // let last = stack[stack.length-1]
    if(ignore.indexOf(this.props.scene) == -1)
      return <Navigator.NavigationBar
              style={styles.nav}
              routeMapper={this.navigationRouteMapper()} />
  }

  render () {
    let initialScene = this.props.scene
    let sceneStyle = () => {
      return {
        paddingTop: Metrics.navBarHeight
      }
    }

    return (
      <Navigator
        configureScene={this.configureScene}
        sceneStyle={sceneStyle()}
        navigationBar={this.renderNavBar()}
        initialRouteStack={[{ component: Scenes.roleSelect }]}
        renderScene={this.renderScene}
        ref={(nav) => this.navigator = nav}
      />
    )
  }
}

Navigation.propTypes = {
  scene: PropTypes.string
}

const mapStateToDispatch = dispatch => ({
  // startup: () => dispatch(StartupActions.startup())
})

const mapStateToProps = (state, _) => ({
  scene: state.navigation.scene,
  props: state.navigation.props,
  showNavbar: state.navigation.showNavbar
})

export default connect(mapStateToProps, mapStateToDispatch)(Navigation)



/**
 * 
  }
 * 
 * 
 * 
 */