import { styled } from '../../stitches.config';

import React from 'react';

export interface LxgoProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  width?: string;
}

export const Lxgo = ({ width, ...props }: LxgoProps) => {
  return (
    <>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 30"
        width={width}
        height="30"
        {...props}
      >
        <path
          d="M1.1,22.3c0-2.8,1.2-4.6,5.7-5.4l4.1-0.7c1.6-0.3,2.2-0.7,2.2-1.8c0-1.2-0.7-2-3-2c-2.4,0-3.5,0.9-3.6,2.7H1.5
		c0.1-3.7,3.2-6.3,8.5-6.3c5.3,0,7.9,2.3,7.9,6v7.6c0,1.6,0.1,3,0.3,4.6h-4.5c-0.2-1.2-0.3-2.3-0.3-3.7c-0.8,2.4-2.9,4.2-6.5,4.2
		C3.4,27.4,1.1,25.5,1.1,22.3z M13.2,18.6v-0.8c-0.9,0.6-1.8,0.9-2.9,1.1l-1.5,0.4c-1.9,0.5-2.6,1.1-2.6,2.5c0,1.4,1.1,2.1,2.5,2.1
		C11.4,23.9,13.2,21.9,13.2,18.6z"
        />
        <path d="M28.1,27c-5,0-6.4-2.1-6.4-6.3v-7.3h-3.2v-2.5l3.6-1.5l2.1-4.1h2.6v4.2h5v3.9h-5v9.5h4.6V27H28.1z" />
        <path d="M33.5,27V2.5h5.2V27H33.5z" />
        <path d="M52.1,9.2v5h-1.7c-3.5,0-4.7,1.9-4.7,5.9V27h-5.2V9.5h5v3.7c0.8-2.5,2.4-4,5.4-4H52.1z" />
        <path
          d="M64.3,11c0,3.2-2.6,5.8-5.7,5.8c-3.2,0-5.7-2.6-5.7-5.8c0-3.1,2.5-5.7,5.7-5.7C61.8,5.3,64.3,7.8,64.3,11z M63.1,11
		c0-2.5-2-4.5-4.5-4.5c-2.5,0-4.5,2-4.5,4.5c0,2.5,1.9,4.5,4.5,4.5C61.1,15.5,63.1,13.5,63.1,11z M60,11.1c0.7,0.1,0.9,0.6,0.9,1.3
		v0.5c0,0.4,0.1,0.8,0.1,1.1H60c-0.1-0.3-0.2-0.5-0.2-1v-0.5c0-0.6-0.3-0.9-0.9-0.9h-1.3V14h-1.1V8.1h2.8c1.2,0,1.9,0.6,1.9,1.6
		C61.2,10.4,60.8,11,60,11.1z M59,10.6c0.6,0,0.9-0.3,0.9-0.8c0-0.5-0.3-0.8-0.8-0.8h-1.5v1.6H59z"
        />
        <path d="M59.9,27v-3.1h3.6V27H59.9z" />
        <path
          d="M79.2,2.5H82V27h-2.8v-3.4c-1.2,2.5-3.4,3.9-6.6,3.9c-5.5,0-8-4-8-9.3c0-5.4,2.5-9.3,8-9.3c3.2,0,5.4,1.4,6.6,3.9V2.5z
		 M79.2,18.2c0-4.9-2.3-7-6.1-7c-4,0-5.7,2.3-5.7,7c0,4.7,1.8,7,5.7,7C76.9,25.3,79.2,23.2,79.2,18.2z"
        />
        <path
          d="M86.2,21.1c0.2,2.4,1.5,4.3,5.6,4.3c3.1,0,4.3-1.1,4.3-3c0-1.7-1-2.6-3.2-2.9l-4.1-0.6c-3-0.4-4.8-2-4.8-4.7
		c0-3.3,2.6-5.3,7-5.3c4.6,0,7.2,2.3,7.4,5.6h-2.8C95.6,12.7,94.3,11,91,11c-3,0-4.2,1.2-4.2,2.9c0,1.2,0.6,2.3,2.8,2.6l3.7,0.5
		c4,0.6,5.5,2.3,5.5,5.2c0,3.6-2.5,5.3-7.1,5.3c-5.7,0-8-2.7-8.1-6.4H86.2z"
        />
      </svg>
    </>
  );
};
