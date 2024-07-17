import React from "react";
import { FcAssistant } from "@react-icons/all-files/fc/FcAssistant";
import ContentContainer from "@layouts/Content";
import { useSiteMetadata } from '@components/Metadata/useSiteMetadata'

const Footer = () => {
  const { siteMetadata } = useSiteMetadata()
  const { email, phone } = siteMetadata || {}
  return (
    <ContentContainer>
      <div
        css={(theme) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          background: "#2c2a49",
          boxShadow: "0 20px 60px rgba(62,84,141,.1)",
          // marginBottom: "40px",
          textAlign: "center",
          padding: "3rem 1rem",
        })}
      >
        <h2
          css={(theme) => ({
            color: "white",
          })}
        >
          Do You Need Any{" "}
          <span css={(theme) => ({ color: theme.colors.accent })}>Help?</span>
        </h2>
        <FcAssistant size="3rem" />
        <div
          css={(theme) => ({
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            border: "2px dashed hsla(0,0%,100%,.2)",
          })}
        >
          <p css={(theme) => ({ color: "white" })}>{email}</p>
          <p css={(theme) => ({ color: theme.colors.accent })}>
            {phone?.primaryDescription}
          </p>
          <p css={(theme) => ({ color: theme.colors.accent })}>
            {phone?.secondaryDescription}
          </p>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Footer;
