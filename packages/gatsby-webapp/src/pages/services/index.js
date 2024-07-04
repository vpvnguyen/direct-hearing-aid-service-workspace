import React from "react";
import Lorem from "../../components/Lorem";
import { ContentContainer } from "@layouts";

const Services = () => {
  return (
    <>
      <ContentContainer>
        <h1>Services Page</h1>
        <Lorem />
      </ContentContainer>
    </>
  );
};

export const Head = () => <title>Services</title>;

export default Services;
