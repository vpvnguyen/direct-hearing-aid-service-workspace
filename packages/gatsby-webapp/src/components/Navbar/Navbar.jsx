/* eslint-disable */
import React, { useState } from "react";
import { Link } from "gatsby";
import { IoClose, IoMenu } from "react-icons/io5";
import { StaticImage } from "gatsby-plugin-image";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header
      className="header"
      style={{
        minHeight: "50px",
        boxShadow: "0 0 15px rgba(0,0,0,.1)",
        transition: "top .3s ease",
        backgroundColor: 'white'
      }}
    >
      <nav className="nav container">
        <div css={(theme) => ({ display: "flex", alignItems: "center", gap: '0.5rem' })}>
          <Link to="/" className="nav__logo">
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
              // backgroundColor: theme.colors.indigo,
              color: theme.colors.indigo,
              display: "flex",
              flexDirection: "column",
              // padding: "0rem 1rem",
              fontSize: '0.75rem',
              gap: '2px'
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
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          // css={theme => ({ backgroundColor: theme.colors.accent, opacity: 0.2 })}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
