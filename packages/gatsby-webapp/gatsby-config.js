const path = require("path");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/direct-hearing-aid-service-workspace",
  siteMetadata: {
    title: `Direct Hearing Aid Services`,
    siteUrl: "https://vincentnguyen.dev/",
  },
  // flags: {
  //   DEV_SSR: true
  // },
  plugins: [
    "gatsby-plugin-emotion",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          xs: "(max-width: 320px)",
          sm: "(max-width: 720px)",
          md: "(max-width: 1024px)",
          l: "(max-width: 1536px)",
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": path.resolve(__dirname, "src/components"),
          "@layouts": path.resolve(__dirname, "src/layouts"),
          "@pages": "src/pages",
          "@styles": "src/styles",
        },
        extensions: ["js", "jsx", "css"],
      },
    },
  ],
};
