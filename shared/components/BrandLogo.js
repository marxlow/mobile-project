import React from 'react';
import {Image} from 'react-native';

const getImageDimension = size => {
  if (size === 'sm') {
    return {width: 75, height: 75};
  }

  return {width: 250, height: 250};
};
const BrandLogo = ({size = 'lg'}) => {
  const dimension = getImageDimension(size);
  return (
    <Image
      style={{width: dimension.width, height: dimension.height}}
      source={{
        uri:
          'https://icon-library.net/images/piggy-bank-icon-png/piggy-bank-icon-png-9.jpg',
      }}
    />
  );
};

export default BrandLogo;
