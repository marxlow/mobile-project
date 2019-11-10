import React from 'react';
import {Image} from 'react-native';

const getImageDimension = size => {
  if (size === 'sm') {
    return {width: 75, height: 75};
  }

  return {width: 250, height: 250};
};

const getRoundedStyle = (rounded, size) => {
  if (!rounded) {
    return;
  }

  return {borderRadius: size / 2};
};

const BrandLogo = ({size = 'lg', rounded = false}) => {
  const dimension = getImageDimension(size);
  const roundedStyle = getRoundedStyle(rounded, dimension.width);
  return (
    <Image
      style={{...dimension, ...roundedStyle}}
      source={{
        uri:
          'https://icon-library.net/images/piggy-bank-icon-png/piggy-bank-icon-png-9.jpg',
      }}
    />
  );
};

export default BrandLogo;
