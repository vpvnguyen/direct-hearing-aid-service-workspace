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
  const { address, businessHours, email, phone } = siteMetadata;
  
  const convertToTelephoneNumber = (phone) => {
    let parsed = phone;
    try {
      const convertedNumber = phone?.split("-").join("");
      parsed = convertedNumber;
    } catch (error) {
      console.error(`Error converting phone number: ${phone}`);
    }
    return parsed;
  };

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
              <p>{businessHours}</p>
              <p>Saturday by appointment</p>
            </div>
            <div>
              <p>
                Email: <a href={`mailto:${email}`}>{email}</a>
              </p>
              <p>
                Call:{" "}
                <a href={`tel:${convertToTelephoneNumber(phone?.primary)}`}>
                  {phone?.primaryDescription}
                </a>{" "}
              </p>
              <p>
                Call:{" "}
                <a href={`tel:${convertToTelephoneNumber(phone?.secondary)}`}>
                  {phone?.secondaryDescription}
                </a>{" "}
              </p>
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
          <div>
            <h3 css={(theme) => ({ paddingBottom: "0.5rem" })}>Facebook:</h3>
            <FacebookEmbed />
          </div>
          <div>
            <h3 css={(theme) => ({ paddingBottom: "0.5rem" })}>
              Yelp Reviews:
            </h3>
            <YelpEmbed />
          </div>
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
