import React from "react";

const ContentContainer = ({ children, css = {} }) => (
  <section css={(theme) => ({ width: '100%', maxWidth: theme.breakpoints.md, margin: "0 auto", padding: "3rem 1rem", ...css })}>{children}</section>
);

export default ContentContainer;
