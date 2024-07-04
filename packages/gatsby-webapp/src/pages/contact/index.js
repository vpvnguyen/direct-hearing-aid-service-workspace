import React from "react";
import { ContentContainer } from "@layouts";
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

export const Head = () => {
  return (
    <>
      <title>Contact Us</title>
    </>
  );
};

export default Contact;
