import React from "react";
import { Global, css } from "@emotion/react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import DesktopLayout from "./Desktop";
import MobileLayout from "./Mobile";
import ContentContainer from "./Content";
import { useSiteMetadata } from "@utils/useSiteMetadata";

const Layout = (props) => {
  const breakpoints = useBreakpoint();
  const { siteMetadata } = useSiteMetadata();
  console.log(`DEBUG layout`, { props })
  return (
    <>
      <Global
        styles={css`
          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 2.25rem;
          }
          h3 {
            font-size: 2rem;
          }
          h4 {
            font-size: 1.75rem;
          }
          h5 {
            font-size: 1.5rem;
          }
          h6 {
            font-size: 1.25rem;
          }
          b {
            font-size: 1.25rem;
          }
        `}
      />
      {breakpoints.md ? (
        <MobileLayout {...props} siteMetadata={siteMetadata} />
      ) : (
        <DesktopLayout {...props} siteMetadata={siteMetadata} />
      )}
    </>
  );
};

export default Layout;
export { ContentContainer };
