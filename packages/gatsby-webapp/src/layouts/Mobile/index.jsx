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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {children}
      </main>
      <Footer />
      {/* <footer
        css={(theme) => ({
          minHeight: "250px",
          padding: "1rem",
          backgroundColor: theme.colors.indigo,
          color: theme.colors.white,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        <div css={(theme) => ({ maxWidth: "900px" })}>FOOTER</div>
      </footer> */}
    </div>
  );
};

export default MobileLayout;
