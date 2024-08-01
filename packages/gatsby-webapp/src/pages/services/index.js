import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { css } from "@emotion/react";
import { ContentContainer } from "@layouts";
import Hero from "@components/Hero";
import Link from "@components/Link";
import Helmet from "@components/Helmet";
import RepairForm from "@components/RepairForm";

const Services = ({ data }) => {
  return (
    <>
      <Hero fileName="banner-2" alt="banner">
        <h1
          css={(theme) => ({
            color: "white",
            fontSize: "3rem",
            letterSpacing: "0.25rem",
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
            padding: "3rem",
          })}
        >
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
      </ContentContainer>
      <ContentContainer>
        <div>
          <h1 css={(theme) => ({ paddingBottom: "2rem" })}>
            Ready to get started?
          </h1>
          <ul>
            <li>
              <span
                css={(theme) => ({
                  display: "flex",
                  gap: "0.25rem",
                  flexWrap: "wrap",
                })}
              >
                Download and fill out our repair form: <RepairForm />
              </span>
            </li>
            <li>Postage mail or email us the repair form</li>
            <li>
              Lost?{" "}
              <GatsbyLink
                to="/contact"
                css={(theme) => ({ textDecoration: "underline !important" })}
              >
                Contact us
              </GatsbyLink>{" "}
              and we will help you out!
            </li>
          </ul>
        </div>
      </ContentContainer>
      <ContentContainer>
        <h1 css={(theme) => ({ paddingBottom: "2rem" })}>
          What You Can Expect
        </h1>
        <ul type="disc">
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

export const query = graphql`
  query allServices {
    allMdx(
      sort: { frontmatter: { slug: ASC } }
      filter: { frontmatter: { slug: { regex: "/service/" } } }
    ) {
      totalCount
      nodes {
        id
        excerpt
        tableOfContents
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
