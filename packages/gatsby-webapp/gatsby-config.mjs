import path from "path";
import { fileURLToPath } from "url";
import remarkGfm from "remark-gfm";
import remarkExternalLinks from "remark-external-links";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  // pathPrefix: "/direct-hearing-aid-service-workspace",
  siteMetadata: {
    title: `Direct Hearing Aid Services`,
    description:
      "Direct Hearing Aid Repair Garden Grove is a hearing aid repair and hearing aid services company that provides hearing aid repair service in Garden Grove.",
    keywords:
      "hearing service, hearing aid, hearing aid repair, hearing aid service, hearing aid repair service, hearing aid repair garden grove",
    siteUrl: "https://vincentnguyen.dev/direct-hearing-aid-service-workspace/",
    yelpUrl: "https://www.yelp.com/biz/direct-hearing-aid-services-garden-grove",
    yelpBizId: "3WU_Gnram_RwO3V334eDdQ",
    email: "andyle.dhas@gmail.com",
    businessHours: "Monday - Friday, 10:00am - 4:00pm Pacific",
    phone: {
      primary: "1-888-580-4327",
      primaryDescription: "1-888-580-HEAR (4327)",
      secondary: "1-714-534-3277",
      secondaryDescription: "1-714-534-EARS (3277)",
    },
    address: {
      full: "12312 Euclid St. Garden Grove, CA 92840",
      line1: "12312 Euclid St.",
      line2: "Garden Grove, CA 92840",
      street: "12312 Euclid St.",
      city: "Garden Grove",
      state: "CA",
      zip: "92840",
    },
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-emotion",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#usage
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            remarkGfm,
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            [remarkExternalLinks, { target: false }],
          ],
          rehypePlugins: [
            // Generate heading ids for rehype-autolink-headings
            rehypeSlug,
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            [rehypeAutolinkHeadings, { behavior: `wrap` }],
          ],
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
      __key: "content",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: `${__dirname}/static/`,
      },
      __key: "static",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "utils",
        path: `${__dirname}/src/utils/`,
      },
      __key: "utils",
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
          "@components": `${__dirname}/src/components`,
          "@layouts": `${__dirname}/src/layouts`,
          "@pages": `${__dirname}/src/pages`,
          "@styles": `${__dirname}/src/styles`,
          "@templates": `${__dirname}/src/templates`,
          "@utils": `${__dirname}/src/utils`,
        },
        extensions: ["js", "jsx"],
      },
    },
  ],
};
