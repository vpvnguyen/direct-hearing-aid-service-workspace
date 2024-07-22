import React from "react";
import { Link } from "gatsby";

const Breadcrumbs = ({ breadcrumbs = [] }) => {
  if (!breadcrumbs?.length) return null;
  return (
    <div
      css={(theme) => ({
        display: "flex",
        gap: "0.5rem",
      })}
    >
      {breadcrumbs.map(({ name, path }, index) => (
        <div
          key={path}
          css={(theme) => ({
            display: "flex",
            gap: "0.5rem",
          })}
        >
          <Link to={path}>{name}</Link>
          {breadcrumbs?.length > index + 1 ? <span>{">"}</span> : null}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
