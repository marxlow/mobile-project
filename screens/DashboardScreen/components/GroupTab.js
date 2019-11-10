/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const GroupTab = ({spacingSize}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#e4e5e7', padding: spacingSize}}>
        <Text>Group content here!</Text>
      </View>
      <View style={{flex: 6, paddingHorizontal: spacingSize}}>
        <Text>Group stuff</Text>
      </View>
    </>
  );
};

export default GroupTab;
