// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/
import * as React from "react";
import { useSiteMetadata } from "./useSiteMetadata";

export const SEO = ({ title, description, pathname, children }) => {
  const { siteMetadata } = useSiteMetadata();
  const {title, description, keywords } = siteMetadata || {}

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* site */}
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* robots */}
      <meta name="robots" content="index,follow" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="3 DAYS" />

      {/* google */}
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="googlebot" content="notranslate"></meta>
      <meta name="google-site-verification" content="r_wrSAcOp7jHb_SGTdSQ50S5BQXwECFbBZ8Ga8kV72Q" />
      <meta name="msvalidate.01" content="916B5A827674DA335F37275EAA93991D"></meta>

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};

export default SEO;
