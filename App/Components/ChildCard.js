import React from 'react'
import { TouchableHighlight, Text, Image, View } from 'react-native'
import styles from './Styles/ChildCardStyle'
import { Images, Colors } from '../Themes'

export default class ChildCard extends React.Component {

  getText () {
    const buttonText = this.props.text
    return buttonText.toUpperCase()
  }

  render () {
    return (
    <View>
            <TouchableHighlight style={styles.card} onPress={this.props.onPress} underlayColor={Colors.background}>
               
                    <Image style={styles.image} source={Images[this.props.imageURL]}/>
               
            </TouchableHighlight>
      </View>
    )
  }
}

ChildCard.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func.isRequired,
  imageURL: React.PropTypes.string
}



                    // <Text style={styles.buttonText}>{this.getText()}</Text>