import React from 'react';
import { SVGStyledStroke } from './SVG.styled';

export const Round = () => {
  return (
    <SVGStyledStroke
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z"
        stroke=""
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </SVGStyledStroke>
  );
};
