import React from 'react';
import { ReactComponent as MinecraftSvg } from '../../../Assets/Icons/minecraft-icon.svg';

const MinecraftIcon = ({ size = 24, className, style, ...props }) => (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        ...style,
      }}
    >
      <MinecraftSvg
        width="100%"
        height="100%"
        style={{
          fill: 'currentColor',
          stroke: 'currentColor',
        }}
        {...props}
      />
    </div>
  );
  
  export default MinecraftIcon;