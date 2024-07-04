import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ fileName, alt, loading, ...rest }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query allImages {
      allImageSharp {
        nodes {
          gatsbyImageData
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);

  const image = allImageSharp?.nodes?.find(
    (node) => node?.parent?.name === fileName
  )?.gatsbyImageData;

  if (!image) return null;

  return <GatsbyImage image={image} alt={alt} loading={loading} {...rest} />;
};

export default Image;
