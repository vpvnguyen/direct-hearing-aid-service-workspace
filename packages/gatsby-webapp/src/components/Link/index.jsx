import React from "react";
import styled from "@emotion/styled";
import { Link as GatsbyLink } from "gatsby";

const Link = styled(GatsbyLink)`
    transition: .5s ease;
    position: relative;
    display: inline-flex;
    overflow: hidden;
    padding: 17px 35px 16px;
    text-align: center;
    z-index: 1;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: ${props => props?.theme?.colors?.accent};
    color: white;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      outline: none;
      border: none;
      transition: .3s;
      background-color: ${props => props?.theme?.colors?.indigo}
    }
  `

export default Link