import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Navigator, TouchableHighlight, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Connect from './ConnectScreen'
import EnterID from './EnterIdScene'
import RoleSelect from './RoleSelectScene'

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
    // Navigator.push({
    //   component: EnterID,
    //   passProps: {
    //     // name: name
    //   }
    // })
  }

  componentWillReceiveProps(nextProps) {
    console.log("New Property: " + nextProps.scene)
    // this.
    if(this.navigator){
      console.log("Navigator has instance #####################")
      this.navigator.push({
      component: EnterID,
      passProps: {
        // name: name
      }
    })
    }
  }

  renderScene (route, navigator) {
    console.log("Render Scene +++++++++++++++++++++++++++++++")
    this.navigator = navigator
    switch (this.props.scene) {
      case Scenes.connect:
        this.component = Connect
        return <Connect navigator={navigator} {...route.passProps} />
      case Scenes.enterId:
        this.component = EnterID
        return <EnterID navigator={navigator} {...route.passProps} />
      case Scenes.roleSelect:
        this.component = RoleSelect
        return <RoleSelect navigator={navigator} {...route.passProps} />
      default:
        return <route.component navigator={navigator} route={route} {...route.passProps} />
    }
  }

  navigationRouteMapper () {
    return {
      LeftButton (route, navigator, index, navState) {
        if (index > 0) {
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
        return <Text style={{marginTop: 10}} />
      }
    }
  }

  renderNavBar() {
    if(this.props.showNavbar)
      return <Navigator.NavigationBar
              style={styles.nav}
              routeMapper={this.navigationRouteMapper()} />
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight 
  }

  render () {
    let sceneStyle = () => {
      return {
        paddingTop: Metrics.navBarHeight
      }
    }
    return (
      <Navigator
        configureScene={this.configureScene}
        navigationBar={this.renderNavBar()}
        sceneStyle={sceneStyle()}
        initialRoute={{ component: this.props.scene }}
        renderScene={this.renderScene}
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
  showNavbar: state.navigation.showNavbar
})

export default connect(mapStateToProps, mapStateToDispatch)(Navigation)
