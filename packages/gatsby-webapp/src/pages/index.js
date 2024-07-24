import * as React from "react";
import { graphql } from "gatsby";
import Animate from "@components/Animate";
import Hero from "@components/Hero";
import { ContentContainer } from "@layouts";
import Link from "@components/Link";
import Metadata from "@components/Metadata";
import YelpEmbed from "@components/YelpEmbed";

const IndexPage = ({ data }) => {
  return (
    <div>
      <Hero fileName="banner-1" alt="banner" styles={{ height: "60vh" }}>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          })}
        >
          <Animate>
            <h1
              css={(theme) => ({
                color: "white",
                fontSize: "3rem",
                letterSpacing: "0.25rem",
              })}
            >
              Welcome
            </h1>
          </Animate>

          <Animate transition={{ duration: 1 }}>
            <ul>
              <li>
                We have over 20 years of experience in hearing aid services
              </li>
              <li>Factory trained & certified technicians</li>
              <li>Quality and timely repairs</li>
            </ul>
          </Animate>
          <Animate transition={{ duration: 1.5 }}>
            <Link to="/contact">Make An Appointment</Link>
          </Animate>
        </div>
      </Hero>
      <ContentContainer>
        <Animate>
          <h1>What To Know</h1>
        </Animate>
        <Animate transition={{ duration: 1.5 }}>
          <ul css={(theme) => ({ paddingTop: "1rem" })}>
            <li>
              Most Hearing Aids can be repaired regardless of age to save you
              money.
            </li>
            <li>
              Offers 48-hour "in-house" turnaround on most hearing aid repair so
              you can get your Hearing back faster.
            </li>
            <li>Provides new faceplates and upgrades on most custom models.</li>
            <li>
              Re-casing available on ALL custom models to extend the life of
              your Hearing Aid.
            </li>
            <li>
              Extended "Worry-Free" Warranty on our hearing aid repair service
              available for an additional six months - <b>$129.99</b>
            </li>
          </ul>
        </Animate>
      </ContentContainer>
      <ContentContainer>
        <Animate>
          <h1 css={(theme) => ({ paddingBottom: "2rem" })}>What We Offer</h1>
        </Animate>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          })}
        >
          {data &&
            data?.allMdx?.nodes?.map(({ frontmatter }, index) => (
              <Animate key={frontmatter?.slug} transition={{ duration: index / 3 }}>
                <Link
                  to={frontmatter?.slug}
                  css={(theme) => ({
                    display: "flex",
                    flexDirection: "column",
                  })}
                >
                  <p>{frontmatter?.title}</p>
                </Link>
              </Animate>
            ))}
        </div>
      </ContentContainer>
      <ContentContainer>
        <Animate>
          <h1 css={(theme) => ({ paddingBottom: "2rem" })}>
            What Our Customers Think
          </h1>
        </Animate>
        <Animate transition={{ duration: 1.5 }}>
          <div
            css={(theme) => ({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            })}
          >
            <YelpEmbed />
          </div>
        </Animate>
      </ContentContainer>
    </div>
  );
};

export default IndexPage;

export const Head = ({ location }) => {
  return <Metadata location={location} />;
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
