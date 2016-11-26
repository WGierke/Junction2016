import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar } from '../Reducers/action'

// Styles
import styles from './Styles/RoleSelectSceneStyle'
import { Scenes } from '../Constants'
import { Metrics } from '../Themes'

class TreatmentScene extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var val = []
    for(var i=0; i<10000;i++){
      val.push("-------- Row  " + i)
    }
    this.state = {
      dataSource: ds.cloneWithRows(val),
    };
  }

  componentDidMount(){
    setTimeout( () => {
    this.listView.scrollTo({
      animated: true,
      y: 1000
    })}, 1000)
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}
        ref={(listview) => this.listView = listview}
      />
    );
  }
}

TreatmentScene.PropTypes = {
  changeScene: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeScene: (name, showNavbar=true) => {
      dispatch(changeScene({name, showNavbar}))
    },
    hideNavbar: () => {
      dispatch(hideNavbar())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentScene)
