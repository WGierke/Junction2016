import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from 'react-native-check-box'
import Toast from 'react-native-easy-toast'

import { connect } from 'react-redux'
import { changeScene, hideNavbar } from '../Reducers/action'
import packlistItems from './packlistItems.json'

// Styles
import styles from './Styles/PackingListStyle'
import { Scenes } from '../Constants'
import { Metrics } from '../Themes'

class PackingList extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row1']),
      };
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        this.setState({
            dataArray: packlistItems
        })
    }

    onClick(data) {
        data.checked = !data.checked;
        let msg=data.checked? 'You checked ':'You unchecked '
        this.toast.show(msg+data.name);
    }

    renderRow(data) {
        return (
          <View style={{flexDirection: 'row'}}>
            <Text>{'\u2022'}</Text>
            <Text style={{flex: 1, paddingLeft: 8, paddingBottom: 5}}>{data}</Text>
          </View>
        );
      }

    renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0) return;
        var len = this.state.dataArray.length;
        var views = [];
        for (var i = 0; i < len; i ++) {
          var detailedItems = this.state.dataArray[i].details;

          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          let source = ds.cloneWithRows(detailedItems);
          views.push(
              <View key={i}>
                <View style={styles.item}>
                  <Icon name={this.state.dataArray[i].icon} style={styles.ListIcons} />
                  {this.renderCheckBox(this.state.dataArray[i])}
                </View>
                <ListView
                  style={{marginLeft: 20}}
                  dataSource={source}
                  renderRow={this.renderRow}
                />
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
            />);
    }

    render() {
        return (
            <View style={styles.container}>
              <ScrollView>
                  {this.renderView()}
              </ScrollView>
              <Toast ref={e=>{this.toast=e}}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    devices: state.bluetooth.devices,
    scanning: state.bluetooth.scanning
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingList)
