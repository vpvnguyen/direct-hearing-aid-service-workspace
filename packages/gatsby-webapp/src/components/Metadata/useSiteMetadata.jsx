import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query siteMetaData {
      site {
        host
        pathPrefix
        port
        buildTime
        siteMetadata {
          siteUrl
          title
          description
          keywords
          email
          businessHours
          address {
            city
            full
            line1
            line2
            state
            street
            zip
          }
          phone {
            primary
            primaryDescription
            secondary
            secondaryDescription
          }
        }
      }
    }
  `);

  const { host, port, buildTime, pathPrefix, siteMetadata } = site;

  return {
    host,
    port,
    buildTime,
    pathPrefix,
    siteMetadata: {
      ...siteMetadata,
    },
  };
};
