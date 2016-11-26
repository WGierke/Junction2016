import React, { PropTypes } from 'react'
import { ListView, Text, View, TouchableHighlight, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar } from '../Reducers/action'

// Styles
import styles from './Styles/ParentOverviewSceneStyle'
import { Scenes } from '../Constants'
import { Metrics, Colors } from '../Themes'

class IconCell extends React.Component {
  render() {
    return (
      <View style={[styles.gridCell, , { backgroundColor: this.props.backgroundColor }]}>
        <Text style={styles.iconCellText}>{this.props.description}</Text>
        <Icon name={this.props.iconName} style={[styles.iconCellIcon]} />
      </View>
    )
  }
}

class Grid extends React.Component {

  clickHandler (scene) {
    this.props.clickHandler(scene)
  }

  render() {
    return <View style={[styles.container, { flexDirection: 'column' }]}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableHighlight onPress={() => this.props.clickHandler(Scenes.treatment)} style={styles.matrixInner}>
          <View>
            <IconCell iconName='ios-pulse' description='Live Updates' backgroundColor={Colors.googleGreen} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.clickHandler(Scenes.enterId)} style={styles.matrixInner}>
          <View>
            <IconCell iconName='ios-medical' description='Treatment' backgroundColor={Colors.googleBlue} />
          </View>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableHighlight onPress={() => this.props.clickHandler(Scenes.packingList)} style={styles.matrixInner}>
          <View>
            <IconCell iconName='ios-medkit-outline' description='Packing list' backgroundColor={Colors.googleRed} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.clickHandler(Scenes.registrationForm)} style={styles.matrixInner}>
          <View>
            <IconCell iconName='ios-clipboard' description='Patient Data' backgroundColor={Colors.googleYellow} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  }
}

class SummaryListView extends React.Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'Complete forms', 'Watch learning videos'
      ])
    };
  }

  _renderRow(data) {
    return <View style={styles.row}><Text style={{ height: 40, borderWidth: 1 }}>{data}</Text></View>
  }


  render() {
    return (
      <ListView
        style={[styles.flowWrapper, { flex: 0.5, flexShrink: 3, padding: 5, marginTop: 5 }]}
        dataSource={this.state.dataSource}
        renderRow={(data) => this._renderRow(data)}
        />
    );
  }
}

class ParentOverviewScene extends React.Component {
  componentWillMount() {
    // this.props.hideNavbar()
  }

  componentDidMount() {
  }

  renderNavbar() {
    return false
  }

  clickHandler (name) {
    this.props.changeScene(name, false)
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Grid clickHandler={(sceneName) => this.clickHandler(sceneName) } style={[styles.flowWrapper, { flex: 0.5}]} />
        <SummaryListView/>
      </View>
    )
  }
}

ParentOverviewScene.PropTypes = {
  changeScene: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScene: (name, showNavbar = true) => {
      dispatch(changeScene({ name }))
      if (!showNavbar) hideNavbar()
    },
    hideNavbar: () => {
      dispatch(hideNavbar())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentOverviewScene)
