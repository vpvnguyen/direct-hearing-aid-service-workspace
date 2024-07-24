import React from "react";
import { ContentContainer } from "@layouts";
import { graphql } from "gatsby";
import Hero from "@components/Hero";
import Link from "@components/Link";
import { css } from "@emotion/react";
import Metadata from "@components/Metadata";

const Services = ({ data }) => {
  console.log(`DEBUG Services`, data);
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
            padding: "40px",
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
        <h1>What You Can Expect</h1>
        <ul type="disc" css={(theme) => ({ paddingTop: "1rem" })}>
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
  console.log(`DEBUG head context`, location);
  return (
    <>
      <Metadata location={location} />
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
