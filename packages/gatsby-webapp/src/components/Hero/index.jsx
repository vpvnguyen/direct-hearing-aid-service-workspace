import * as React from "react";
import Image from "@components/Image";

const Hero = ({ children, fileName, alt }) => {
  return (
    <div style={{ display: "grid" }}>
      <Image
        fileName={fileName}
        alt={alt}
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
          filter: 'brightness(50%)'

        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
          color: 'white'
        }}
      >
        {/* Any content here will be centered in the component */}
        {children}
      </div>
    </div>
  );
};

export default Hero;
