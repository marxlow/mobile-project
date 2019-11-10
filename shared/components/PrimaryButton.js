import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@ant-design/react-native';

const PrimaryButton = ({onClick, title, wrapperStyle}) => {
  return (
    <View style={wrapperStyle}>
      <Button
        onClick={onClick}
        style={{alignSelf: 'stretch', ...wrapperStyle}}
        size="large">
        <Text>{title}</Text>
      </Button>
    </View>
  );
};

export default PrimaryButton;
