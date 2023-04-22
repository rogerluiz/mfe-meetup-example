/// <reference types="react-scripts" />

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGAElement>>;
  const src: any;
  export default src;
}
