import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, ScrollView, ListView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ChildCard from '../Components/ChildCard'

import { connect } from 'react-redux'
import { changeScene, hideNavbar, setCurrentStep } from '../Reducers/action'


// Styles
import styles from './Styles/ChildOverviewSceneStyle'
import { Scenes } from '../Constants'
import { Metrics, Colors, Images } from '../Themes'

class ChildOverviewScene extends React.Component {
 
 componentWillMount () {
    this.clickHandler2 = this.clickHandler2.bind(this)
  }

  componentDidMount () {
    this.clickHandler2 = this.clickHandler2.bind(this)
  }


clickHandler2 () {
  this.props.changeScene({name: Scenes.missionDetail, wayPointId: 2, title: 'Suitability'}, false)
}

render() {
    return (
        <ScrollView style={[styles.container, { flex: 1 }]} contentContainerStyle={styles.containerContent} ref='scrollView'>
            <Text style={styles.separator}>Preparation</Text>
            {
                this.props.journey.filter((waypoint) => { return waypoint.section === 'Preparation' }).map((waypoint) => (
                    <TouchableHighlight key={waypoint.title} onPress={this.clickHandler2 } underlayColor={Colors.background} style={styles.childCard}>
                        <Image style={styles.image} source={Images[waypoint.image]} />
                    </TouchableHighlight>
                ))
            }
            <Text style={styles.separator}>Mission</Text>
            {
                this.props.journey.filter((waypoint) => { return waypoint.section === 'Mission' }).map((waypoint) => (
                    <TouchableHighlight key={waypoint.title} onPress={this.clickHandler2} underlayColor={Colors.background} style={styles.childCard}>
                        <Image style={styles.image} source={Images[waypoint.image]} />
                    </TouchableHighlight>
                ))
            }
        </ScrollView>

    )
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