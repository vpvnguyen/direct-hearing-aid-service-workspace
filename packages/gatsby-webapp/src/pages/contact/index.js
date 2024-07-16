import React from "react";
import { ContentContainer } from "@layouts";
import Metadata from "@components/Metadata";
import Lorem from "../../components/Lorem";

const Contact = () => {
  return (
    <>
      <ContentContainer>
        <h1>Contact Us</h1>
        <Lorem />
      </ContentContainer>
    </>
  );
};

export const Head = ({ location }) => {
  return (
    <>
      <Metadata location={location} />
    </>
  );
};


export default Contact;
