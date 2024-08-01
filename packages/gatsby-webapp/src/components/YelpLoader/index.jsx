import React from "react";
import { css, keyframes } from "@emotion/react";

const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const strokeAnimation = keyframes`
  0% {
    stroke-dasharray: 1,150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -35;
  }
  90% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -124;
  }
  100% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -124;
  }
`;

const YelpLoader = ({ height = "60px", width = "60px" }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      css={css`
        -webkit-animation: ${spinAnimation} 1.5s linear infinite;
        animation: ${spinAnimation} 1.5s linear infinite;
        display: block;
        height: ${height};
        width: ${width};
      `}
    >
      <title>Loading</title>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        css={css`
          -webkit-animation: ${strokeAnimation} 1.5s ease-in-out infinite;
          animation: ${strokeAnimation} 1.5s ease-in-out infinite;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          stroke-linecap: round;
          stroke: rgba(224, 7, 7, 1);
        `}
      ></circle>
    </svg>
  );
};

export default YelpLoader;
