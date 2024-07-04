import React from "react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import DesktopLayout from "./Desktop";
import MobileLayout from "./Mobile";
import ContentContainer from "./Content";

const Layout = (props) => {
  const breakpoints = useBreakpoint();
  return breakpoints.md ? (
    <MobileLayout {...props} />
  ) : (
    <DesktopLayout {...props} />
  );
};

export default Layout;
export { ContentContainer }
