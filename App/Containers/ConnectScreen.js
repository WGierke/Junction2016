import React, { PropTypes } from 'react'
import { View, Text, ListView, Image, ActivityIndicator, TouchableHighlight } from 'react-native'

import { connect } from 'react-redux'
import { scan, changeScene } from '../Reducers/action'

import Icon from 'react-native-vector-icons/Ionicons'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ConnectScreenStyle'
import { Metrics, Images } from '../Themes'
import {Scenes} from '../Constants'

class ConnectScreen extends React.Component {

  constructor (props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    this.datasource = new ListView.DataSource({rowHasChanged})
    this.data = this.datasource.cloneWithRows(this.props.devices)
  }

  componentWillMount () {
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {
    this.data = this.datasource.cloneWithRows(nextProps.devices)
  }

  _renderRow (rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <TouchableHighlight onPress={this.connectToDevice.bind(this)}>
        <View style={styles.listItem}>
          <Icon
            name={'ios-bluetooth'}
            size={Metrics.icons.small}
            style={styles.listItemIcon}
          />
          <Text style={styles.listItemText}>{rowData}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  _noRowData () {
    return this.data.getRowCount() === 0
  }

  renderFooter () {
    return this.props.scanning
          ? <View>
            <ActivityIndicator
              style={[styles.centering]}
              />
          </View>
          : null
  }

  clickHandler () {
    this.props.changeScene(Scenes.enterId)
  }

  render () {
    return (
      <View style={styles.view}>
        <View style={styles.imageWrapper}>
        <TouchableHighlight onPress={this.clickHandler}>
          <Text>Start</Text>
          </TouchableHighlight>
        </View>

        <AlertMessage title='No ILOCKIT device found.' show={this._noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.data}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={{height: 1, backgroundColor: 'black', marginRight: 10, marginLeft: 10}} />}
          renderFooter={this.renderFooter.bind(this)}
        />
      </View>
    )
  }
}

ConnectScreen.PropTypes = {
  devices: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = (state) => {
  return {
    devices: state.bluetooth.devices,
    scanning: state.bluetooth.scanning
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    scanDevices: () => {
      dispatch(scan())
    },
    changeScene: (name) => {
      dispatch(changeScene(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectScreen)
