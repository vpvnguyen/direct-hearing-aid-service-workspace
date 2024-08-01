import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";

const Breadcrumbs = ({ breadcrumbs = [] }) => {
  if (!breadcrumbs?.length) return null;
  return (
    <div
      css={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      })}
    >
      {breadcrumbs.map(({ name, path }, index) => (
        <div
          key={path}
          css={(theme) => ({
            display: "flex",
            gap: "1rem",
          })}
        >
          <Link
            to={path}
            css={css`
              &:hover {
                border-bottom: 1px solid black;
              }
            `}
          >
            {name}
          </Link>
          {breadcrumbs?.length > index + 1 ? (
            <span css={(theme) => ({ fontSize: "1.25rem" })}>{">"}</span>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
