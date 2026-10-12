import React from 'react';
import dimensions from '../asset-dimensions.json';

interface DesignImageProps {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
}

export const DesignImage: React.FC<DesignImageProps> = ({ name, alt, className, eager = false, sizes = '(max-width: 767px) 90vw, 440px' }) => {
  const small = name === 'heroImage' ? 360 : 240;
  const { width, height } = dimensions[name as keyof typeof dimensions];
  return <img src={`/images/${name}.webp`} srcSet={`/images/${name}-${small}.webp ${small}w, /images/${name}.webp ${width}w`} sizes={sizes} width={width} height={height} alt={alt} className={className} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />;
};
