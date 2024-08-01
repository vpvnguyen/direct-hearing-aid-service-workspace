import React from "react";
import { FiMapPin } from "@react-icons/all-files/fi/FiMapPin";
import { MdAccessTime } from "@react-icons/all-files/md/MdAccessTime";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { ContentContainer } from "@layouts";
import Helmet from "@components/Helmet";
import GoogleMapsEmbed from "@components/GoogleMapsEmbed";
import FacebookEmbed from "@components/FacebookEmbed";
import YelpEmbed from "@components/YelpEmbed";
import Hero from "@components/Hero";
import TelephoneLink from "@components/TelephoneLink";
import EmailLink from "@components/EmailLink";
import { useSiteMetadata } from "@utils/useSiteMetadata";
import { theme } from "@styles/theme";

const Contact = () => {
  const { siteMetadata } = useSiteMetadata();
  const { address, businessHours, email, phone } = siteMetadata;

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
            gap: "3rem",
          })}
        >
          <h1>Our Location</h1>
          <div
            css={(theme) => ({
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            })}
          >
            <div
              css={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              })}
            >
              <div
                css={(theme) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                })}
              >
                <FiMapPin size="2rem" color={theme.colors.accent} />
                <div>
                  <p>{address?.line1}</p>
                  <p>{address?.line2}</p>
                </div>
              </div>
              <hr
                css={(theme) => ({
                  borderStyle: "dashed",
                  borderWidth: "0.5px",
                  width: "75%",
                  margin: "auto",
                })}
              />
              <div
                css={(theme) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                })}
              >
                <MdAccessTime size="2rem" color={theme.colors.accent} />
                <div>
                  <p>{businessHours}</p>
                  <p>Saturday by appointment</p>
                </div>
              </div>
              <hr
                css={(theme) => ({
                  borderStyle: "dashed",
                  borderWidth: "0.5px",
                  width: "75%",
                  margin: "auto",
                })}
              />
              <div
                css={(theme) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                })}
              >
                <BiSupport size="2rem" color={theme.colors.accent} />
                <div>
                  <p>
                    Email: <EmailLink email={email} />
                  </p>
                  <p>
                    Call:{" "}
                    <TelephoneLink number={phone?.primary}>
                      {phone?.primaryDescription}
                    </TelephoneLink>
                  </p>
                  <p>
                    Call:{" "}
                    <TelephoneLink number={phone?.primary}>
                      {phone?.secondaryDescription}
                    </TelephoneLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <GoogleMapsEmbed style={{ width: "100%" }} />
        </div>
      </ContentContainer>
      <br />
      <ContentContainer>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "3rem",
          })}
        >
          <h1>Our Social</h1>
          <div
            css={(theme) => ({
              display: "flex",
              flexDirection: "column",
            })}
          >
            <b css={(theme) => ({ paddingBottom: "0.5rem" })}>Facebook:</b>
            <FacebookEmbed />
          </div>
          <div
            css={(theme) => ({
              display: "flex",
              flexDirection: "column",
            })}
          >
            <b css={(theme) => ({ paddingBottom: "0.5rem" })}>Yelp Reviews:</b>
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
      <Helmet location={location} />
    </>
  );
};

export default Contact;
