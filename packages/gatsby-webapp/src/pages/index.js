import * as React from "react";
// import { graphql } from "gatsby";
import Lorem from "../components/Lorem";
import Animate from "@components/Animate";
import Hero from "../components/Hero";
import { ContentContainer } from "@layouts";
import { ContentCard } from "@components/Card";
import Button from "@components/Button";
import { css } from "@emotion/react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const IndexPage = (props) => {
  console.log(`DEBUG IndexPage`, { props });
  const breakpoints = useBreakpoint();
  return (
    <div>
      <Hero fileName="banner-1" alt="banner">
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
          })}
        >
          <Animate>
            <h1
              css={(theme) => ({
                color: "white",
                fontSize: "3rem",
                letterSpacing: "0.5rem",
              })}
            >
              Welcome
            </h1>
          </Animate>

          <Animate transition={{ duration: 1 }}>
            <ul>
              <li>20+ years of experience in hearing aid services</li>
              <li>Factory trained & certified technicians</li>
              <li>Quality and timely repairs</li>
            </ul>
          </Animate>
        </div>
      </Hero>
      <ContentContainer>
        <Animate>
          <h1>Home Page</h1>
        </Animate>
        <br />
        <br />
        <div
          id="home-content"
          css={(theme) => ({
            display: `${breakpoints?.md ? "flex" : "grid"}`,
            gridTemplateColumns: "1fr 1fr 1fr min-content",
            gap: "1rem",
            minHeight: "25vh",
          })}
        >
          <ContentCard fileName="image-1" alt="image">
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
            <Button beforeText="Service 1" afterText="Read More"></Button>
          </ContentCard>
          <ContentCard fileName="image-2" alt="image">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
            <Button beforeText="Service 2" afterText="Read More"></Button>
          </ContentCard>
          <ContentCard fileName="image-3" alt="image">
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
            <Button beforeText="Service 3" afterText="Read More"></Button>
          </ContentCard>
        </div>
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
            Re-casing available on ALL custom models to extend the life of your
            Hearing Aid.
          </li>
          <li>
            Extended "Worry-Free" Warranty on our hearing aid repair service
            available for an additional six months - $129.99
          </li>
        </ul>
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
