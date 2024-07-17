import * as React from "react";
import Lorem from "../components/Lorem";
import Animate from "@components/Animate";
import Hero from "../components/Hero";
import { ContentContainer } from "@layouts";
import { ContentCard } from "@components/Card";
import Button from "@components/Button";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Metadata from "@components/Metadata";
import YelpEmbed from "@components/YelpEmbed";

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
        </div>
      </Hero>
      <ContentContainer>
        {/* <Animate>
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
        </div> */}
        <Animate>
          <h1>What To Know</h1>
        </Animate>
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
            available for an additional six months - <b>$129.99</b>
          </li>
        </ul>
      </ContentContainer>
      <ContentContainer>
        <Animate>
          <h1 css={(theme) => ({ paddingBottom: "2rem" })}>
            What Our Customers Think
          </h1>
        </Animate>
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
      </ContentContainer>
    </div>
  );
};

export default IndexPage;

export const Head = ({ location }) => {
  return <Metadata location={location} />;
};
