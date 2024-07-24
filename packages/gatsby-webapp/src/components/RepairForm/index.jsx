import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GrDocumentPdf } from "@react-icons/all-files/gr/GrDocumentPdf";
import { formatBytes } from "@utils/formatBytes";
import { css } from "@emotion/react";

const RepairForm = ({ displayName = "" }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        nodes {
          ext
          name
          size
          publicURL
        }
      }
    }
  `);
  const [repairForm] =
    data?.allFile?.nodes?.filter((file) => file?.name === "repair-form") || [];
  const { name, ext, size, publicURL } = repairForm || {};

  return (
    <span css={(theme) => ({ display: "flex", gap: "0.25rem" })}>
      <a
        css={(theme) => ({ display: "flex", gap: "0.25rem" })}
        href={publicURL}
        download
      >
        {displayName ? displayName : `${name}${ext}`}{" "}
        <GrDocumentPdf
          css={css`
            path {
              stroke: #c91a17;
            }
          `}
        />
      </a>
      <span css={(theme) => ({ fontSize: "0.75rem" })}>{`(${formatBytes(
        size
      )})`}</span>
    </span>
  );
};

export default RepairForm;
