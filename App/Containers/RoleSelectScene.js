import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { connect } from 'react-redux'
import { changeScene } from '../Reducers/action'

// Styles
import styles from './Styles/RoleSelectSceneStyle'
import { Scenes } from '../Constants'

class RoleSelectScene extends React.Component {
  componentDidMount () {
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (name) {
    console.log('############### ', name)
    this.props.changeScene(name)
  }

  render () {
    let viewStyles = (color) => {
      // return styles[color]
      return {
        ...styles.viewHalf,
        // ...styles[color]
      }
    }
    return (
      <View>
        <Icon
            name={'ios-heart'}
            size={Metrics.icons.xl}
            style={styles.headIcon}
          />
        <View style={styles.flowWrapper}>        
          <Text style={styles.head}>Continue as</Text>
          <TouchableHighlight style={ viewStyles('green') } onPress={() => this.clickHandler(Scenes.enterId) }>
            <View>
              <Text style={styles.content}>Child</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={viewStyles('blue')} onPress={ () => this.clickHandler(Scenes.enterId)}>
            <View>
              <Text style={styles.content}>Parent</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
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
    changeScene: (name) => {
      dispatch(changeScene(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleSelectScene)
