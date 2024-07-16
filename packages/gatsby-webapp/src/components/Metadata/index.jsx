import React from "react";
import GoogleFonts from "@components/Metadata/GoogleFonts";
import SEO from "@components/Metadata/SEO";
import { useSiteMetadata } from "@components/Metadata/useSiteMetadata";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";

const Metadata = ({ title, location, children }) => {
  const { siteMetadata } = useSiteMetadata();

  const getTitleByPathname = ({ location }) => {
    const { pathname = "/" } = location || {};
    const name = pathname
      ?.split("/")
      ?.filter((value) => value)
      ?.map((value) => (value ? `${capitalizeFirstLetter({ string: value })} | ` : ""));
    return name;
  };

  return (
    <>
      <GoogleFonts />
      <SEO />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang="en" />
      <body className="body" />
      <title>
        {title ? `${title} | ` : getTitleByPathname({ location })}
        {siteMetadata?.title}
      </title>
      {children}
    </>
  );
};

export default Metadata;
