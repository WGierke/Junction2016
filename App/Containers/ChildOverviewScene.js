import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ChildCard from '../Components/ChildCard'

import { connect } from 'react-redux'
import { changeScene, hideNavbar, setCurrentStep } from '../Reducers/action'


// Styles
import styles from './Styles/ChildOverviewSceneStyle'
import { Scenes } from '../Constants'
import { Metrics } from '../Themes'

class ChildOverviewScene extends React.Component {
 
clickHandler () {

}

render() {
  return (
    <ScrollView style={styles.container} ref='scrollView'>
      <Text>Separator</Text>
      <View>
      {
          this.props.journey.filter((waypoint) => { return waypoint.section === 'Preparation' } ).map( (waypoint) => (
              <ChildCard imageURL={waypoint.image} onPress={() => {}} text={waypoint.title}/>
          ))
      }
      </View>
      <Text>Separator</Text>
      <View>
      {
          this.props.journey.filter((waypoint) => { return waypoint.section === 'Mission'} ).map( (waypoint) => (
              <ChildCard imageURL={waypoint.image} onPress={() => {}} text={waypoint.title}/>
          ))
      }
      </View>
    </ScrollView>
  );
}
}

ChildOverviewScene.PropTypes = {
  changeScene: PropTypes.func,
  hideNavbar: PropTypes.func,
  routine: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    routine: state.routine,
    journey: state.patient.journey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScene: (name, showNavbar = true) => {
      dispatch(changeScene({ name, showNavbar }))
    },
    hideNavbar: () => {
      dispatch(hideNavbar())
    },
    setCurrentStep: (id) => {
      dispatch(setCurrentStep(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildOverviewScene)