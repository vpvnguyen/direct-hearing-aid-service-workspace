import React from "react";
import { Link } from "gatsby";
import "../../../styles/reset.joshwcomeau.css";
import logo from "../../../images/direct-hearing-aid-services-logo.jpeg";

const DesktopLayout = ({ children }) => {
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
            Open Hours:
            <span
              css={(theme) => ({
                color: theme.colors.white,
                paddingLeft: "0.75rem",
              })}
            >
              Mon-Fri 8:00 am-6:00 pm
            </span>
          </p>
          <p css={(theme) => ({ color: theme.colors.indigoLight })}>
            Phone:
            <span
              css={(theme) => ({
                color: theme.colors.white,
                paddingLeft: "0.75rem",
              })}
            >
              +91-213-666-0027
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
              info@example.com
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
          <img src={logo} alt="logo" />

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
          padding: "2rem",
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

export default DesktopLayout;
