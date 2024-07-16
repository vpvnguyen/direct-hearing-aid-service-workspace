import React from "react";
import { ContentContainer } from "@layouts";
import { graphql } from "gatsby";
import Hero from "@components/Hero";
import Link from "@components/Link";
import Lorem from "@components/Lorem";
import { css } from "@emotion/react";
import { FcAssistant } from "@react-icons/all-files/fc/FcAssistant";
import Metadata from "@components/Metadata";
import { useSiteMetadata } from '@components/Metadata/useSiteMetadata'

const Services = ({ data }) => {
  console.log(`DEBUG Services`, data);
  const { siteMetadata } = useSiteMetadata()
  const { email, phone } = siteMetadata || {}
  return (
    <>
      <Hero fileName="banner-2" alt="banner">
        <h1
          css={(theme) => ({
            color: "white",
            fontSize: "3rem",
            letterSpacing: "0.5rem",
          })}
        >
          Services
        </h1>
      </Hero>
      <ContentContainer>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            background: "#fff",
            border: "1px solid #e5e5e5",
            padding: "40px",
          })}
        >
          <h1
            css={(theme) => ({
              textAlign: "center",
            })}
          >
            All Services
          </h1>
          {data?.allMdx?.nodes?.map(({ frontmatter }) => (
            <div key={frontmatter?.slug}>
              <Link
                to={frontmatter?.slug}
                css={(theme) => css`
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  &:hover {
                    &:after {
                      content: ">";
                      font-size: 2rem;
                    }
                  }
                `}
              >
                {frontmatter?.title}
              </Link>
            </div>
          ))}
        </div>
        <ul type="disc" css={(theme) => ({ paddingTop: "3rem" })}>
          <li>24-48 hour turnaround on most repairs</li>
          <li>
            Factory trained &amp; certified technicians with 20+ years of
            experience in hearing aid repair service
          </li>
          <li>
            Support services to help our customers make sure they are getting
            fit for their needs
          </li>
          <li>Quality and timely repairs</li>
          <li>Same-day pick-up for the Los Angeles and Orange County areas</li>
          <li>Custom Re-Shell</li>
          <li>Custom Re-casing</li>
          <li>Circuit Upgrades from analog to digital</li>
          <li>Circuit repair</li>
          <li>Walk-in cleaning and maintenance check</li>
          <li>Direct shipping</li>
        </ul>

        <Lorem />
      </ContentContainer>
      <ContentContainer>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            background: "#2c2a49",
            boxShadow: "0 20px 60px rgba(62,84,141,.1)",
            marginBottom: "40px",
            textAlign: "center",
            padding: "3rem 1rem",
          })}
        >
          <h2
            css={(theme) => ({
              color: "white",
            })}
          >
            Do You Need Any{" "}
            <span css={(theme) => ({ color: theme.colors.accent })}>Help?</span>
          </h2>
          <FcAssistant size="3rem" />
          <div
            css={(theme) => ({
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem",
              border: "2px dashed hsla(0,0%,100%,.2)",
            })}
          >
            <p css={(theme) => ({ color: "white" })}>{email}</p>
            <p css={(theme) => ({ color: theme.colors.accent })}>
              {phone?.primaryDescription}
            </p>
            <p css={(theme) => ({ color: theme.colors.accent })}>
              {phone?.secondaryDescription}
            </p>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export const Head = ({ location }) => {  
  console.log(`DEBUG head context`, location)
  return (
    <>
      <Metadata location={location} />
    </>
  );
};

export const query = graphql`
  query servicesPage {
    allMdx(filter: { frontmatter: { slug: { regex: "/services/" } } }) {
      nodes {
        frontmatter {
          slug
          title
          description
        }
      }
    }
  }
`;
export default Services;
