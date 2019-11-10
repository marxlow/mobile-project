/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@ant-design/react-native';

const getTheme = type => {
  if (type === 'secondary') {
    return {backgroundColor: 'gray', textColor: 'white'};
  }
  return {backgroundColor: '#57b5a4', textColor: 'white'};
};

const ClickableButton = ({onPress, title, wrapperStyle, type = 'primary'}) => {
  const theme = getTheme(type);
  return (
    <View style={wrapperStyle}>
      <Button
        onPress={onPress}
        style={{
          alignSelf: 'stretch',
          backgroundColor: theme.backgroundColor,
          ...wrapperStyle,
        }}
        size="large">
        <Text style={{color: theme.textColor}}>{title}</Text>
      </Button>
    </View>
  );
};

export default ClickableButton;
