import React from "react";
import "@styles/reset.joshwcomeau.css";
import MobileNavbar from "@layouts/Mobile/MobileNavbar";

const MobileLayout = ({ children, siteMetadata, buildTime = null }) => {
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
      <footer
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
        <small>Build: {buildTime}</small>
      </footer>
    </div>
  );
};

export default MobileLayout;