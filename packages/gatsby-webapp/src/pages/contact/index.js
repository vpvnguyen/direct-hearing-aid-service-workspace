import React from "react";
import { ContentContainer } from "@layouts";
import Metadata from "@components/Metadata";
import GoogleMapsEmbed from "@components/GoogleMapsEmbed";
import FacebookEmbed from "@components/FacebookEmbed";
import YelpEmbed from "@components/YelpEmbed";
import Hero from "@components/Hero";
import { useSiteMetadata } from "@components/Metadata/useSiteMetadata";

const Contact = () => {
  const { siteMetadata } = useSiteMetadata();
  console.log(`DEBUG`, siteMetadata);
  const { address, businessHours } = siteMetadata;
  return (
    <>
      <Hero fileName="banner-3" alt="banner" styles={{ width: "100vw" }}>
        <h1
          css={(theme) => ({
            color: "white",
            fontSize: "3rem",
            letterSpacing: "0.25rem",
          })}
        >
          Contact Us
        </h1>
      </Hero>
      <ContentContainer>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          })}
        >
          <h1>Our Location</h1>
          <div
            css={(theme) => ({
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            })}
          >
            <div>
              <p>{address?.line1}</p>
              <p>{address?.line2}</p>
            </div>
            <div>
              <p>{businessHours}</p>
            </div>
          </div>
          <GoogleMapsEmbed style={{ width: "100%" }} />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
          })}
        >
          <h1>Our Social</h1>
          <FacebookEmbed />
          <YelpEmbed />
        </div>
      </ContentContainer>
    </>
  );
};

export const Head = ({ location }) => {
  return (
    <>
      <Metadata location={location} />
    </>
  );
};

export default Contact;
