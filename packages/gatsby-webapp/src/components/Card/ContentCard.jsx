import * as React from "react";
import Image from "@components/Image";

const ContentCard = ({ children, fileName, alt }) => {
  return (
    <div
      css={(theme) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // flex: '1 1 0px',
        // // display: "flex",
        // // flexDirection: "column",
        // // alignItems: "center",
        // display: 'grid'
        // WebkitFlex: "1 1 0px",
        // MsFlex: "1 1 0px",
        // flex: "1 1 0px",
        // display: "flex",
        // flexDirection: 'column',
        // alignContent: "stretch",
        // alignItems: "start",
        // justifyItems: "stretch",
        // justifyContent: "center",
      })}
    >
      <Image
        fileName={fileName}
        alt={alt}
        style={
          {
            // gridArea: "1/1/2/2",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
            // flex: '1 1 0px'
          }
        }
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
      />

      {children}
    </div>
  );
};

export default ContentCard;
