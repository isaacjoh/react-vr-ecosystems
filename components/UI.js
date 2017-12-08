/* UI.js */
import React from 'react';
import {
  View,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {

  constructor(props) {
    super(props);

    this.buttons = this.props.buttonConfig;
  }

  render () {
    const buttons = this.buttons.map((button) =>
      <Button
        key={button.key}
        onClick={()=>{
          this.props.onClick(button.key);
        }}
        external={button.externalSrc}
        src={button.buttonImageSrc}
        title={button.buttonTitle}
      />
      );

    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          transform: [
            {rotateX: -12},
            {translate: [-2.5, 0, -3]},
          ],
          width: 6,
        }}
      >
        {buttons}
      </View>
    );
  }
};

export default UI;