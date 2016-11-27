import React, { PropTypes } from 'react'
import { ListView, Text, View, TouchableHighlight, Alert, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from 'react-native-check-box'
import Toast from 'react-native-easy-toast'

import { connect } from 'react-redux'
import { changeScene, hideNavbar } from '../Reducers/action'
import checklistItems from './checklistItems.json'

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
        <TouchableHighlight onPress={() => this.props.clickHandler(Scenes.treatment)} underlayColor={Colors.background} style={styles.matrixInner}>
          <View>
            <IconCell iconName='ios-pulse' description='Live Updates' backgroundColor={Colors.googleGreen} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.clickHandler(Scenes.treatmentplan)} underlayColor={Colors.background} style={styles.matrixInner}>
          <View>
            <IconCell iconName='ios-medical' description='Treatment' backgroundColor={Colors.googleRed} />
          </View>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableHighlight onPress={() => this.props.clickHandler(Scenes.packingList)} underlayColor={Colors.background} style={styles.matrixInner}>
          <View>
            <IconCell iconName='ios-medkit-outline' description='Packing list' backgroundColor={Colors.googleBlue} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.clickHandler(Scenes.registrationForm)} underlayColor={Colors.background} style={styles.matrixInner}>
          <View>
            <IconCell iconName='ios-clipboard-outline' description='Patient Data' backgroundColor={Colors.googleYellow} />
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
  }

  componentWillMount() {
      this.loadData();
  }

  loadData() {
      this.setState({
          dataArray: checklistItems
      })
  }

  onClick(data) {
      data.checked = !data.checked;
      let msg=data.checked? 'You checked ':'You unchecked '
      this.toast.show(msg+data.name);
  }

  renderView() {
      if (!this.state.dataArray || this.state.dataArray.length === 0) return;
      var len = this.state.dataArray.length;
      var views = [];
      for (var i = 0; i < len; i ++) {
        views.push(
            <View key={i}>
              <View style={styles.item}>
                <Icon name={this.state.dataArray[i].icon} style={styles.ListIcons} />
                {this.renderCheckBox(this.state.dataArray[i])}
              </View>
            </View>
        )
      }
      return views;
  }

  renderCheckBox(data) {
      var leftText = data.name;
      return (
          <CheckBox
              style={{flex: 1, padding: 10}}
              onClick={()=>this.onClick(data)}
              isChecked={data.checked}
              leftText={leftText}
              leftTextStyle={{fontWeight:"100"}}
          />);
  }

  render() {
    return (
        <View style={[styles.checklistContainer, { flex: 0.5, flexShrink: 3, padding: 5, marginTop: 5 }]}>
          <Text style={ { fontSize: 20, fontWeight: '100' } }>CHECKLIST</Text>
          <ScrollView>
            {this.renderView()}
          </ScrollView>
          <Toast ref={e=>{this.toast=e}}/>
        </View>
    )
  }
}

class ParentOverviewScene extends React.Component {
  componentWillMount() {
    // this.props.hideNavbar()
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
  }

  renderNavbar() {
    return false
  }

  clickHandler (name) {
    this.props.changeScene({name, title: name==Scenes.treatment ? this.props.treatment : ''}, false)
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
    treatment: state.patient.treatment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScene: (scene, showNavbar = true) => {
      dispatch(changeScene(scene))
      if (!showNavbar) hideNavbar()
    },
    hideNavbar: () => {
      dispatch(hideNavbar())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentOverviewScene)
