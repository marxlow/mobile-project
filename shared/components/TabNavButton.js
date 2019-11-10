/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const TabNavButton = ({
  originalTitle,
  onPress,
  buttonStyle,
  isActive = false,
}) => {
  const title = originalTitle.toUpperCase();
  const opacity = isActive ? 1 : 0.7;
  const activeStyle = isActive
    ? {borderBottomWidth: 2, borderBottomColor: 'white'}
    : {borderBottomWidth: 2, borderBottomColor: 'transparent'};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...buttonStyle, ...activeStyle}}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: '600',
          fontSize: 15,
          opacity,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabNavButton;
