import React from "react";
import "@styles/reset.joshwcomeau.css";
import MobileNavbar from "@layouts/Mobile/MobileNavbar";
import Footer from '@layouts/Footer'

const MobileLayout = ({ children, siteMetadata }) => {
  return (
    <div
      id="mobile-layout"
      css={(theme) => ({ fontFamily: theme.fonts.fontFamily, margin: 0 })}
    >
      <MobileNavbar siteMetadata={siteMetadata} />
      <main
        css={(theme) => ({
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MobileLayout;
