// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/
import * as React from "react";
import { useSiteMetadata } from "@components/Metadata/useSiteMetadata";
// import { useAllFavicons } from "@components/Metadata/useAllFavicons";

export const SEO = () => {
  const { siteMetadata } = useSiteMetadata();
  // const favicons = useAllFavicons();
  const { description, keywords } = siteMetadata || {};
  console.log(`DEBUG SEO`, { siteMetadata });

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
      {/* {favicons?.length &&
        favicons?.map(({ name, absolutePath, internal }) => (
          <link
            key={`${name}-FAVICONZ`}
            rel="icon"
            type={internal?.mediaType}
            href={absolutePath}
          />
        ))} */}
    </>
  );
};

export default SEO;