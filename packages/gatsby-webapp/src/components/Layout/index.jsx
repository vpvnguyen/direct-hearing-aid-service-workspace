import React from "react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import DesktopLayout from "./Desktop";
import MobileLayout from "./Mobile";

const Layout = (props) => {
  const breakpoints = useBreakpoint();
  return breakpoints.md ? (
    <MobileLayout {...props} />
  ) : (
    <DesktopLayout {...props} />
  );
};

export default Layout;
