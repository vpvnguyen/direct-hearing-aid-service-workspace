import React from "react";
import GoogleFonts from "@components/Helmet/GoogleFonts";
import Seo from "@components/Helmet/SEO";
import { YelpScript } from "@components/YelpEmbed";
import { useSiteMetadata } from "@utils/useSiteMetadata";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";

const Helmet = ({ title, location, children }) => {
  const { siteMetadata, buildTime } = useSiteMetadata();

  const getTitleByPathname = ({ location }) => {
    const { pathname = "/" } = location || {};
    const name = pathname
      ?.split("/")
      ?.filter((value) => value)
      ?.map((value) =>
        value ? `${capitalizeFirstLetter({ string: value })} | ` : ""
      );
    return name;
  };

  return (
    <>
      <GoogleFonts />
      <Seo />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta buildversion={buildTime} />
      <html lang="en" />
      <body className="body" />
      <title>
        {title ? `${title} | ` : getTitleByPathname({ location })}
        {siteMetadata?.title}
      </title>
      <YelpScript />
      {children}
    </>
  );
};

export default Helmet;
