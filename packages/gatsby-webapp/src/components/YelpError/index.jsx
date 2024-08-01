import React from "react";
import { css } from "@emotion/react";
import YelpErrorSvg from './yelp-error.svg'

const YelpError = () => {
  return (
    <img
      src={YelpErrorSvg}
      alt="Yelp error"
      css={css`
        max-width: 100%;
      `}
    ></img>
  );
};

export default YelpError;
