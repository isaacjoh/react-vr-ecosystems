/* Button.js */
import React from 'react';
import {
  asset,
  Image,
  Text,
  View,
  VrButton,
} from 'react-vr';

class Button extends React.Component {
  onButtonClick = () => {
    this.props.onClick();
  }

  render () {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0.0125,
          width: 1,
        }}
      >
        <VrButton
          onClick={this.onButtonClick}
        >
        <Text
          style={{
            fontSize: 0.1,
            fontWeight: '400',
            paddingLeft: 0,
            paddingRight: 0,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0.05, 0]}],
          }}>
          {this.props.title}
        </Text>
          <Image
            style={{
              width: 1,
              height: 0.7,
            }}
            source={asset(this.props.src)}
          >
          </Image>
        </VrButton>
      </View>
    );
  }
};

export default Button;