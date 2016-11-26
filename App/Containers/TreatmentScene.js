import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar, setCurrentStep } from '../Reducers/action'

// Styles
import styles from './Styles/TreatmentSceneStyle'
import { Scenes } from '../Constants'
import { Metrics } from '../Themes'

class TreatmentScene extends React.Component {
  constructor(props) {
    super(props);

    this.datasource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.data = this.datasource.cloneWithRows(this.props.routine.steps)
  }

  componentWillReceiveProps(nextProps) {
    this.data = this.datasource.cloneWithRows(nextProps.routine.steps)
  }

  componentDidMount() {
    // setTimeout( () => {
    // this.listView.scrollTo({
    //   animated: true,
    //   y: 1000
    // })}, 1000)
    setTimeout(() => {
      this.props.setCurrentStep(3)
    }, 2000)
  }

  _renderRow(data, selectedId) {
    let statusStyle = () => {
      let state = null
      if (selectedId > data.id) {
        state = 'success'
      } else if (selectedId == data.id) {
        state = 'inWork'
      }
      if (state) {
        return {
          ...styles.statusIndicator,
          ...styles[state]
        }
      }else{
        return styles.statusIndicator
      }
    }
    let itemStyle = () => {
      let style = {
        ...styles.listItem
      }
      if (data.id == selectedId) {
        style = {
                ...style,
                ...styles.selectedItem
        }
      }
      return style
    }
let contentStyle = (small) => {
  if (data.id == selectedId) {
    return {
          ...styles.selectedContent
        }
      } else {
  return {
          ...styles.content
  }
}
    }
let subcontentStyle = () => {
  let style = styles.subcontent
  if (data.id == selectedId) {
    style = {
          ...style,
          ...styles.subcontentSelected,
        }
      }
return style
    }

    return (
      <View style={itemStyle()}>
        <View style={
            {justifyContent: 'center',
            marginRight: Metrics.baseMargin,
            flex: 1}}>
          <View style={statusStyle()}></View>
        </View>
        <View style={styles.status}>
          <Text style={contentStyle()}>{data.name.toUpperCase()}</Text>
          <Text style={subcontentStyle()}>{data.description}</Text>
        </View>
      </View>
    )
  }

render() {
  return (
    <ListView
      style={styles.container}
      dataSource={this.data}
      renderRow={(data) => this._renderRow(data, this.props.routine.currentStep)}
      ref={(listview) => this.listView = listview}
      />
  );
}
}

TreatmentScene.PropTypes = {
  changeScene: PropTypes.func,
  hideNavbar: PropTypes.func,
  routine: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    routine: state.routine
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

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentScene)
