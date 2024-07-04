import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BreakpointProvider } from "gatsby-plugin-breakpoints";
import Layout from "./src/layouts";
import { theme } from "./src/styles/theme";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="google-fonts-1"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="google-fonts-2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin={-1}
    />,
    <link
      key="google-fonts-3"
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />,
    <html lang="en" />,
    <body className="body" />,
    <title>Direct Hearing Aid Services</title>,
  ]);
};

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
