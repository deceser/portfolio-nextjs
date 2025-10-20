import React from 'react';

const NextImage = ({ src, alt, fill, ...props }: any) => {
  // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
  return <img src={src} alt={alt} data-fill={fill} {...props} />;
};

export default NextImage;
