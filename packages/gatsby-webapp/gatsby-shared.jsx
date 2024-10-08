import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BreakpointProvider } from "gatsby-plugin-breakpoints";
import Layout from "./src/layouts";
import { theme } from "./src/styles/theme";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <BreakpointProvider
      queries={{
        xs: "(max-width: 320px)",
        sm: "(max-width: 720px)",
        md: "(max-width: 1024px)",
        l: "(max-width: 1536px)",
      }}
    >
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </BreakpointProvider>
  );
};
