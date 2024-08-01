import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react";
import { GrDocumentPdf } from "@react-icons/all-files/gr/GrDocumentPdf";
import { formatBytes } from "@utils/formatBytes";

const RepairForm = ({ displayName = "" }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        nodes {
          ext
          name
          size
          publicURL
          modifiedTime
          prettySize
          ctime
        }
      }
    }
  `);
  const [repairForm = null] =
    data?.allFile?.nodes?.filter((file) => file) || [];
  const { name, ext, size, publicURL, prettySize, modifiedTime } =
    repairForm || {};

  if (!repairForm) return null;
  return (
    <span css={(theme) => ({ display: "flex", gap: "0.25rem" })}>
      <a
        css={css`
          display: flex;
          gap: 0.25rem;
          &:hover {
            text-decoration: underline !important;
          }
        `}
        href={publicURL}
        data-modifiedtime={modifiedTime}
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
      <span css={(theme) => ({ fontSize: "0.75rem" })}>
        {prettySize ? `(${prettySize})` : `(${formatBytes(size)})`}
      </span>
    </span>
  );
};

export default RepairForm;
