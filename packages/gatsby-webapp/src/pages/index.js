import * as React from "react";
import Lorem from "../components/Lorem";
// import Animate from "../components/Animate";
import Animate from '@components/Animate'
import Hero from "../components/Hero";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <div>
      <Hero
        image={
          <StaticImage
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectRatio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt="landscape"
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src="https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=2589"
            // src="../images/banner-1.jpg"
            formats={["auto", "webp", "avif", "jpg"]}
          />
        }
      >
        <h1>hero</h1>
      </Hero>
      <Animate>
        <h1>Home Page</h1>
      </Animate>
      <Lorem />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
