import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
    border: none;
    appearance: none;
    transition: .5s ease;
    position: relative;
    display: inline-flex;
    overflow: hidden;
    
    justify-content: center;
    padding: 0.5rem 0rem


    text-align: center;
    z-index: 1;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: ${(props) => props?.theme?.colors?.accent};
    color: white;
    cursor: pointer;

    &:before {
        content: '${(props) => (!props?.children ? props?.beforeText : null)}';
    }

    &:hover {
      text-decoration: none;
      outline: none;
      border: none;
      transition: .3s;
      background-color: ${(props) => props?.theme?.colors?.indigo};
      &:before {
        content: '';
      }
      &:after {
        content: '${props => !props?.children ? props?.afterText : null}';
      }
    }
  `;

export default Button;
