import React from "react";
import YelpContentCardPizzaSvg from './yelp-content-card-pizza.svg'

const YelpContentCard = ({ imageSrc, alt }) => {
  return (
    <img
      src={imageSrc ? imageSrc : YelpContentCardPizzaSvg}
      alt={alt || 'Content Card'}
      class="css-9whsf3"
    ></img>
  );
};

export default YelpContentCard
