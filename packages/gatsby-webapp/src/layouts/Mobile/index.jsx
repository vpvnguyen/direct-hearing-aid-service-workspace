import React from "react";
import "@styles/reset.joshwcomeau.css";
import Navbar from "@components/Navbar/Navbar";

const MobileLayout = ({ children }) => {
  return (
    <div
      id="mobile-layout"
      css={(theme) => ({ fontFamily: theme.fonts.fontFamily, margin: 0 })}
    >
      <Navbar />
      <main
        css={(theme) => ({
          minHeight: "100vh",
          padding: "150px 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <div css={(theme) => ({ maxWidth: "900px" })}>{children}</div>
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
      </footer>
    </div>
  );
};

export default MobileLayout;
