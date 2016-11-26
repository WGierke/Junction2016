'use strict'

import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, ScrollView, AppRegistry, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { connect } from 'react-redux'
import { changeScene, hideNavbar } from '../Reducers/action'

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

// Styles
import styles from './Styles/RegistrationFormStyle'
import { Scenes } from '../Constants'
import { Metrics, Colors } from '../Themes'

class RegistrationFormScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    }
  }

  componentDidMount () {
    this.props.route.onPress = () => {Alert.alert('Fooo')}
  }


  render() {
    return (
      <Form style={{flex: 1}}>
      <ScrollView keyboardShouldPersistTaps={true} style={{paddingLeft:10,paddingRight:10, height:200}}>
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        >
        <Separator label='Personal Information' />
        <InputField ref='first_name' placeholder='First Name' value='Carl' />
        <InputField ref='last_name' placeholder='Last Name' value='Fredricksen' />
        <Separator />
        <PickerField style={{ textAlign: 'center' }} ref='gender'
          label='Gender'
          value='male'
          options={{
            "": '',
            male: 'Male',
            female: 'Female'
          }} />
        <DatePickerField ref='birthday'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()}
          placeholder='Birthday'
          mode="date"
          date={new Date('7/4/2008')} />
      </Form>
      </ScrollView>
      <TouchableHighlight underlayColor={Colors.background} style={styles.button} onPress={() => Alert.alert('Fo')}>
        <View>
          <Text style={styles.content}>Save</Text>
        </View>
      </TouchableHighlight>
      </Form>
    );
  }


  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
  }

}

RegistrationFormScene.PropTypes = {
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormScene)
