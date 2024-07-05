import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "@styles/reset.joshwcomeau.css";

const DesktopLayout = ({ children, siteMetadata, buildTime = null }) => {
  return (
    <div
      id="desktop-layout"
      style={{ lineHeight: "2rem" }}
      css={(theme) => ({ fontFamily: theme.fonts.fontFamily, margin: 0 })}
    >
      <header
        style={{
          minHeight: "50px",
          boxShadow: "0 0 15px rgba(0,0,0,.1)",
          transition: "top .3s ease",
        }}
      >
        <div
          css={(theme) => ({
            backgroundColor: theme.colors.indigo,
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
          })}
        >
          <p css={(theme) => ({ color: theme.colors.indigoLight })}>
            Call:
            <span
              css={(theme) => ({
                color: theme.colors.white,
                paddingLeft: "0.75rem",
              })}
            >
              {siteMetadata?.primaryPhoneNumber}
            </span>
          </p>
          <p css={(theme) => ({ color: theme.colors.indigoLight })}>
            Call:
            <span
              css={(theme) => ({
                color: theme.colors.white,
                paddingLeft: "0.75rem",
              })}
            >
              {siteMetadata?.secondaryPhoneNumber}
            </span>
          </p>
          <p css={(theme) => ({ color: theme.colors.indigoLight })}>
            Email:
            <span
              css={(theme) => ({
                color: theme.colors.white,
                paddingLeft: "0.75rem",
              })}
            >
              {siteMetadata?.email}
            </span>
          </p>
        </div>
        <div
          css={(theme) => ({
            display: "flex",
            justifyContent: "space-around",
            padding: "0rem 6rem",
          })}
        >
          <Link to="/">
            <StaticImage
              src="../../images/direct-hearing-aid-services-logo.jpeg"
              alt="logo"
              placeholder="blurred"
              layout="fixed"
            />
          </Link>
          <nav
            css={(theme) => ({
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "6rem",
            })}
          >
            <Link
              to="/"
              css={(theme) => ({
                color: theme.colors.indigo,
                "&:hover": {
                  color: theme.colors.accent,
                },
              })}
            >
              Home
            </Link>
            <Link
              to="/services"
              css={(theme) => ({
                color: theme.colors.indigo,
                "&:hover": {
                  color: theme.colors.accent,
                },
              })}
            >
              Services
            </Link>
            <Link
              to="/contact"
              css={(theme) => ({
                color: theme.colors.indigo,
                "&:hover": {
                  color: theme.colors.accent,
                },
              })}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
      <main
        css={(theme) => ({
          minHeight: "100vh",
          // padding: "2rem",
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

export default DesktopLayout;