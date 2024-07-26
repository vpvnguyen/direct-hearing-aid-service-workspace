import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import "@styles/reset.joshwcomeau.css";
import Footer from "@layouts/Footer";
import TelephoneLink from "@components/TelephoneLink";
import EmailLink from "@components/EmailLink";

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
              <TelephoneLink
                number={siteMetadata?.phone?.primary}
                css={(theme) => ({
                  all: "unset",
                })}
              >
                {siteMetadata?.phone?.primaryDescription}
              </TelephoneLink>
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
              <TelephoneLink
                number={siteMetadata?.phone?.secondary}
                css={(theme) => ({
                  all: "unset",
                })}
              >
                {siteMetadata?.phone?.secondaryDescription}
              </TelephoneLink>
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
              <EmailLink
                email={siteMetadata?.email}
                css={(theme) => ({
                  all: "unset",
                })}
              />
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
            <StaticImage
              src="../../images/yelp-logo.png"
              alt="yelp logo"
              placeholder="blurred"
              layout="fixed"
              height={30}
            />
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
