import React, { Component } from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
export default class Loading extends Component {
  render() {
    return (
      <Modal visible={true} transparent={true} animationType={'fade'} activeOpacity={0.7}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}
        >
          <ActivityIndicator size="large" color={'#0057B8'} style={{}} />
        </View>
      </Modal>
    );
  }
}
