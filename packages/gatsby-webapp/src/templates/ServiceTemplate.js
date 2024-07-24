import React from "react";
import { Link } from "gatsby";
import { ContentContainer } from "@layouts";
import Metadata from "@components/Metadata";
import Breadcrumbs from "@components/Breadcrumbs";
import RepairForm from "@components/RepairForm";

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
        <div>
          <h3>Ready to get started?</h3>
          <ul>
            <li>
              <span css={(theme) => ({ display: "flex", gap: "0.25rem" })}>
                Download and fill out our repair form: <RepairForm />
              </span>
            </li>
            <li>Postage mail or email us the repair form</li>
            <li>
              Lost?{" "}
              <Link
                to="/contact"
                css={(theme) => ({ textDecoration: "underline !important" })}
              >
                Contact us
              </Link>{" "}
              and we will help you out!
            </li>
          </ul>
        </div>
      </div>
    </ContentContainer>
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
