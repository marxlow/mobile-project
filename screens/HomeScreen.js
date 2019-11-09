import React from 'react';

import {View, Text} from 'react-native';

class HomeScreen extends React.Component {
  state = {
    isLoading: false,
  };

  render() {
    const {isLoading} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{`Am I loading?  ${isLoading}`}</Text>
      </View>
    );
  }
}

export default HomeScreen;
