import React from 'react';
import {
  AppRegistry,
  asset,
  NativeModules,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

const Config = [
  {
    key: 0,
    imageSrc: 'ecosystems-home.jpg',
    buttonImageSrc: 'arctic-thumbnail.jpg',
    buttonTitle: 'Arctic',
    externalSrc: 'youtube://www.youtube.com/watch?v=HTq7HkixZGc?autoplay=1'
  },
  {
    key: 1,
    imageSrc: 'ecosystems-home.jpg',
    buttonImageSrc: 'deserts-thumbnail.jpg',
    buttonTitle: 'Desert',
    externalSrc: 'https://askabiologist.asu.edu/sites/default/files/virtual-reality/desert-biome-VR-360/index.html' 
  },
  {
    key: 2,
    imageSrc: 'ecosystems-home.jpg',
    buttonImageSrc: 'grasslands-thumbnail.jpg',
    buttonTitle: 'Grasslands',
    externalSrc: 'youtube://www.youtube.com/watch?v=QImyr9P3jzg?autoplay=1'
  },
  {
    key: 3,
    imageSrc: 'ecosystems-home.jpg',
    buttonImageSrc: 'oceans-thumbnail.jpg',
    buttonTitle: 'Ocean',
    externalSrc: 'youtube://www.youtube.com/watch?v=Q0YVKoYTJ0M?autoplay=1'    
  },
  {
    key: 4,
    imageSrc: 'ecosystems-home.jpg',
    buttonImageSrc: 'rainforests-thumbnail.jpg',
    buttonTitle: 'Rainforest',
    externalSrc: 'https://askabiologist.asu.edu/sites/default/files/virtual-reality/rainforest-biome-VR-360/index.html' 
  }
];

export default class GDVR_REACTVR_SITEPOINT_GALLERY extends React.Component {
  constructor() {
    super();

    this.state = {
      src: 'ecosystems-home.jpg',
      videoUrl: 'rainforest-360.mp4'
    };
  }

  onBtnClick(key) {
    if (Config[key].externalSrc) {
      NativeModules.LinkingManager.openURL(Config[key].externalSrc);
    } else {
      this.setState({src: Config[key].imageSrc});
    }
  }

  render() {
    return (
      <View>
        <Canvas
          src={this.state.src}
        />
        {/* <VideoPano
          source={asset(this.state.videoUrl, {layout: 'SPHERE'})}
        /> */}
        <UI
          buttonConfig={Config}
          onClick={(key)=>{
            this.onBtnClick(key);
          }}
        />
        <Text
          // onClick={() => {
          //   console.log('hi');
          //   this.setState({src: 'ecosystems-home.jpg'});
          // }}
          style={{
            fontSize: 0.6,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, -3]}],
          }}>
          ECOSYSTEMS
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('GDVR_REACTVR_SITEPOINT_GALLERY', () => GDVR_REACTVR_SITEPOINT_GALLERY);
