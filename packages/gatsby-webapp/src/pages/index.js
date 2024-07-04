import * as React from "react";
import { graphql } from "gatsby";
import Lorem from "../components/Lorem";
// import Animate from "../components/Animate";
import Animate from "@components/Animate";
import Hero from "../components/Hero";
import { ContentContainer } from "@layouts";

const IndexPage = ({ data }) => {
  return (
    <div>
      <Hero fileName="banner-1" alt="banner">
        {/* <h1>hero</h1> */}
      </Hero>
      <ContentContainer>
        <Animate>
          <h1>Home Page</h1>
        </Animate>
        <Lorem />
      </ContentContainer>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;

export const query = graphql`
  query allImages {
    allImageSharp {
      nodes {
        gatsbyImageData
        parent {
          ... on File {
            id
            name
          }
        }
      }
    }
  }
`;
