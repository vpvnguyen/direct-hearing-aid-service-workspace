import React from "react";
import { ThemeProvider } from "@emotion/react";
import Layout from "./src/components/Layout";
import { theme } from "./src/styles/theme";

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
};
