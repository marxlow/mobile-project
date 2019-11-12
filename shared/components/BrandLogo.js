import React from 'react';
import {Image} from 'react-native';

const getImageDimension = size => {
  if (size === 'xs') {
    return {width: 40, height: 40};
  }
  if (size === 'sm') {
    return {width: 75, height: 75};
  }

  return {width: 250, height: 250};
};

const getRoundedStyle = (rounded, bordered, size) => {
  if (!rounded) {
    return;
  }
  if (!bordered) {
    return {borderRadius: size / 2};
  }
  return {borderRadius: size / 2, borderColor: '#eb5c0de3', borderWidth: 3};
};

const BrandLogo = ({
  size = 'lg',
  rounded = false,
  bordered = false,
  imageSrcUrl,
}) => {
  const dimension = getImageDimension(size);
  const roundedStyle = getRoundedStyle(rounded, bordered, dimension.width);
  const uri =
    imageSrcUrl ||
    'https://icon-library.net/images/piggy-bank-icon-png/piggy-bank-icon-png-9.jpg';
  return <Image style={{...dimension, ...roundedStyle}} source={{uri}} />;
};

export default BrandLogo;
