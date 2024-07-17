import React from "react";
import { ContentContainer } from "@layouts";
import Metadata from "@components/Metadata";
import GoogleMapsEmbed from "@components/GoogleMapsEmbed";
import FacebookEmbed from "@components/FacebookEmbed";
import YelpEmbed from "@components/YelpEmbed";
import Hero from "@components/Hero";

const Contact = () => {
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
            alignItems: "center",
            gap: '2rem'
          })}
        >
          <FacebookEmbed />
          <GoogleMapsEmbed />
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
