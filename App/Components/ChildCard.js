import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import styles from './Styles/ChildCardStyle'
import { Images } from '../Themes'

export default class ChildCard extends React.Component {

  getText () {
    const buttonText = this.props.text
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Image source={''}/>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}

ChildCard.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func.isRequired,
  imageURL: React.PropTypes.string
}
