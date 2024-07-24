import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import { FaYelp } from "@react-icons/all-files/fa/FaYelp";
import "@styles/reset.joshwcomeau.css";
import Footer from "@layouts/Footer";

const DesktopLayout = ({ children, siteMetadata = {} }) => {
  const { yelpUrl } = siteMetadata;
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
            alignItems: "center",
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
              {siteMetadata?.phone?.primaryDescription}
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
              {siteMetadata?.phone?.secondaryDescription}
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
          <a
            href={yelpUrl}
            target="_blank"
            rel="noreferrer"
            css={(theme) => css`
              text-decoration: none;
              color: ${theme.colors.yelpRed};
              &:hover {
                color: white;
              }
            `}
          >
            <FaYelp size="1.5rem" />
          </a>
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
              fontSize: "1.25rem",
              fontWeight: 600,
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

export default DesktopLayout;
