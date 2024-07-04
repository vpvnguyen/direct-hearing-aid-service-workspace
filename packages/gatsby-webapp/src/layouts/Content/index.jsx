import React from "react";

const ContentContainer = ({ children, css = {} }) => (
  <section css={(theme) => ({ maxWidth: "900px", margin: "0 auto", padding: "3rem 1rem", ...css })}>{children}</section>
);

export default ContentContainer;
