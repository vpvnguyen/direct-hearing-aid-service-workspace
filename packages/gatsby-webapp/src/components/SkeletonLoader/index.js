import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ count = 5 }) => {
  return (
    <div
      style={{
        border: "1px solid rgb(204 204 204 / 50%)",
        display: "block",
        lineHeight: 2,
        padding: "1rem",
        marginBottom: "0.5rem",
        width: '100%',
      }}
    >
      <Skeleton count={count} />
    </div>
  );
};

export default SkeletonLoader;
