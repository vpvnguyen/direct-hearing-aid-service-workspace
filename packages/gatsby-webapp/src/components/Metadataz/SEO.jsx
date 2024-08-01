// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/
import * as React from "react";
import { useSiteMetadata } from "@utils/useSiteMetadata";

export const SEO = () => {
  const { siteMetadata } = useSiteMetadata();
  const { description, keywords } = siteMetadata || {};

  return (
    <>
      {/* robots */}
      <meta name="robots" content="index,follow" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="3 DAYS" />

      {/* google */}
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="googlebot" content="notranslate"></meta>
      <meta
        name="google-site-verification"
        content="r_wrSAcOp7jHb_SGTdSQ50S5BQXwECFbBZ8Ga8kV72Q"
      />
      <meta
        name="msvalidate.01"
        content="916B5A827674DA335F37275EAA93991D"
      ></meta>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default SEO;
