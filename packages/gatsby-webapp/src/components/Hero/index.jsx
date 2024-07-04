import * as React from "react";

const Hero = ({
  children,
  image = null
}) => {
  return (
    <div style={{ display: "grid" }}>
      {image}
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        {children}
      </div>
    </div>
  );
};

export default Hero;
