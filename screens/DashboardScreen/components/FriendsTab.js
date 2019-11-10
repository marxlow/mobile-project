/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const FriendsTab = ({spacingSize}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#e4e5e7', padding: spacingSize}}>
        <Text>Friends Content here!</Text>
      </View>
      <View style={{flex: 6, paddingHorizontal: spacingSize}}>
        <Text>More friends!!</Text>
      </View>
    </>
  );
};

export default FriendsTab;
