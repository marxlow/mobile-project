import React from 'react';
import {View, Text} from 'react-native';

class LoginScreen extends React.Component {
  state = {
    isLoading: false,
  };

  render() {
    const {isLoading} = this.state;
    return (
      <View>
        <Text>Hello world!</Text>
        <Text>{isLoading}</Text>
      </View>
    );
  }
}

export default LoginScreen;
