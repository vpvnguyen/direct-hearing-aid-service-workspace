/* eslint-disable */
import React, { useState } from "react";
import { Link } from "gatsby";
import { IoClose, IoMenu } from "react-icons/io5";
import { StaticImage } from "gatsby-plugin-image";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const navbarHeight = "70px";

  return (
    <>
      <header
        css={(theme) => ({
          position: "fixed",
          width: "100%",
          top: "0",
          left: "0",
          backgroundColor: "transparent",
          zIndex: 10,
          height: `${navbarHeight}`,
          boxShadow: "0 0 15px rgba(0,0,0,.1)",
          transition: "top .3s ease",
          backgroundColor: "white",
        })}
      >
        <nav
          css={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            height: `${navbarHeight}`,
            margin: "0rem 1rem",
          })}
        >
          <div
            css={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            })}
          >
            <Link
              to="/"
              css={(theme) => ({
                transition: "color 0.4s",
              })}
            >
              <StaticImage
                src="../../images/direct-hearing-aid-services-logo.jpeg"
                alt="logo"
                placeholder="blurred"
                layout="fixed"
                height={50}
                style={{ margin: "0 auto" }}
              />
            </Link>
            <div
              css={(theme) => ({
                color: theme.colors.indigo,
                display: "flex",
                flexDirection: "column",
                fontSize: "0.75rem",
                gap: "2px",
                overflow: 'hidden',
                maxHeight: `${navbarHeight}`,
                textWrap: 'nowrap'
              })}
            >
              <p css={(theme) => ({ color: theme.colors.indigoLight })}>
                <span
                  css={(theme) => ({
                    color: theme.colors.indigo,
                    paddingLeft: "0.75rem",
                  })}
                >
                  Mon-Fri 8:00 am-6:00 pm
                </span>
              </p>
              <p css={(theme) => ({ color: theme.colors.indigoLight })}>
                <span
                  css={(theme) => ({
                    color: theme.colors.indigo,
                    paddingLeft: "0.75rem",
                  })}
                >
                  +91-213-666-0027
                </span>
              </p>
              <p css={(theme) => ({ color: theme.colors.indigoLight })}>
                <span
                  css={(theme) => ({
                    color: theme.colors.indigo,
                    paddingLeft: "0.75rem",
                  })}
                >
                  info@example.com
                </span>
              </p>
            </div>
          </div>
          <div
            id="nav-menu"
            css={(theme) => ({
              position: "fixed",
              top: "0",
              right: `${showMenu ? "0" : "-100%"}`,
              backgroundColor: "rgb(255 117 88 / 30%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              width: "30%",
              height: "100%",
              // padding: "6rem 0rem 0rem 2rem",
              transition: "right 0.4s",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            })}
          >
            <div
              id="nav-close"
              onClick={toggleMenu}
              css={(theme) => ({
                // position: "absolute",
                // top: "2rem",
                // right: "2rem",
                display: "flex",
                flexDirection: "row-reverse",
                padding: "1.5rem",
              })}
            >
              <IoClose />
            </div>
            <ul
              css={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                rowGap: "2.5rem",
                margin: "0",
                padding: "0",
              })}
            >
              <li
                css={(theme) => ({
                  listStyleType: "none",
                  margin: "0",
                  padding: "0",
                })}
              >
                <Link
                  to="/"
                  css={(theme) => ({
                    transition: "color 0.4s",
                  })}
                  onClick={closeMenuOnMobile}
                >
                  Home
                </Link>
              </li>
              <li
                css={(theme) => ({
                  listStyleType: "none",
                  margin: "0",
                  padding: "0",
                })}
              >
                <Link
                  to="/services"
                  css={(theme) => ({
                    transition: "color 0.4s",
                  })}
                  onClick={closeMenuOnMobile}
                >
                  Services
                </Link>
              </li>
              <li
                css={(theme) => ({
                  listStyleType: "none",
                  margin: "0",
                  padding: "0",
                })}
              >
                <Link
                  to="/contact"
                  css={(theme) => ({
                    transition: "color 0.4s",
                  })}
                  onClick={closeMenuOnMobile}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div
            id="nav-toggle"
            onClick={toggleMenu}
            css={(theme) => ({
              fontSize: "1.5rem",
              cursor: "pointer",
            })}
          >
            <IoMenu />
          </div>
        </nav>
      </header>

      <div css={(theme) => ({ height: `${navbarHeight}` })} />
    </>
  );
};

export default MobileNavbar;
