import React from "react";
import { ContentContainer } from "@layouts";
import Metadata from "@components/Metadata";
import Breadcrumbs from "@components/Breadcrumbs";

// context: {
//   id: node.id,
//   title: node.frontmatter.title,
//   description: node?.frontmatter?.description,
//   excerpt: node?.excerpt,
//   data: node?.body,
//   tableOfContents: node?.tableOfContents,
//   breadcrumbs: [
//     { name: "Services", path: "/services" },
//     { name: node.frontmatter.title, path: node.frontmatter.slug },
//   ],
// },

const ServiceTemplate = ({ pageContext }) => {
  const {
    id,
    title,
    description,
    excerpt,
    tableOfContents,
    data,
    breadcrumbs,
  } = pageContext || {};
  return (
    <div>
      <ContentContainer>
        <div
          css={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          })}
        >
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </ContentContainer>
    </div>
  );
};

export const Head = ({ location, pageContext: { title } }) => {
  return (
    <>
      <Metadata title={title} location={location} />
    </>
  );
};

export default ServiceTemplate;
