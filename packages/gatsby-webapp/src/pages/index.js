import * as React from "react";
// import { graphql } from "gatsby";
import Lorem from "../components/Lorem";
// import Animate from "../components/Animate";
import Animate from "@components/Animate";
import Hero from "../components/Hero";
import { ContentContainer } from "@layouts";
import { ContentCard } from "@components/Card";
import Button from "@components/Button";
import { css } from "@emotion/react";

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
        <div
          id="home-content"
          css={(theme) => ({
            display: "grid",
            gridTemplateColumns: '1fr 1fr 1fr min-content',
            gap: "1rem",
          })}
        >
          <ContentCard fileName="image-1" alt="image">
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
            <Button beforeText="Tier 1" afterText="Read More"></Button>
          </ContentCard>
          <ContentCard fileName="image-2" alt="image">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
            <Button beforeText="Tier 2" afterText="Read More"></Button>
          </ContentCard>
          <ContentCard fileName="image-3" alt="image">
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
            <Button beforeText="Tier 3" afterText="Read More"></Button>
          </ContentCard>
        </div>
        <Lorem />
      </ContentContainer>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;

// export const query = graphql`
//   query allImages {
//     allImageSharp {
//       nodes {
//         gatsbyImageData
//         parent {
//           ... on File {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
// `;
