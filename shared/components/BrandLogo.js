import React from 'react';
import {Image} from 'react-native';

const BrandLogo = () => {
  return (
    <Image
      style={{width: 250, height: 250}}
      source={{
        uri:
          'https://icon-library.net/images/piggy-bank-icon-png/piggy-bank-icon-png-9.jpg',
      }}
    />
  );
};

export default BrandLogo;
