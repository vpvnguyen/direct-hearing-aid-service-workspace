import React from "react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import DesktopLayout from "./Desktop";
import MobileLayout from "./Mobile";
import ContentContainer from "./Content";
import { useSiteMetadata } from "@components/Metadata/useSiteMetadata";

const Layout = (props) => {
  const breakpoints = useBreakpoint();
  const { siteMetadata } = useSiteMetadata();
  console.log(`DEBUG Layout`, { props, siteMetadata });
  return breakpoints.md ? (
    <MobileLayout
      {...props}
      siteMetadata={siteMetadata}
    />
  ) : (
    <DesktopLayout
      {...props}
      siteMetadata={siteMetadata}
    />
  );
};

export default Layout;
export { ContentContainer };
