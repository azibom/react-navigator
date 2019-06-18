import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

export default class CameraScreen extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CameraScreen !</Text>
      </View>
    );
  }
}
