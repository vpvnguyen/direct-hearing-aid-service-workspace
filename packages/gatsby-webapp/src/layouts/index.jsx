import React from "react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import DesktopLayout from "./Desktop";
import MobileLayout from "./Mobile";
import ContentContainer from "./Content";
import { useSiteMetadata } from "@components/Seo/useSiteMetadata";

const Layout = (props) => {
  const breakpoints = useBreakpoint();
  const { buildTime, siteMetadata } = useSiteMetadata();
  console.log(`DEBUG Layout`, { props, buildTime });
  return breakpoints.md ? (
    <MobileLayout
      {...props}
      buildTime={buildTime}
      siteMetadata={siteMetadata}
    />
  ) : (
    <DesktopLayout
      {...props}
      buildTime={buildTime}
      siteMetadata={siteMetadata}
    />
  );
};

export default Layout;
export { ContentContainer };
