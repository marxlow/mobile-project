/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

class DashboardScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          margin: 20,
        }}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

export default DashboardScreen;
