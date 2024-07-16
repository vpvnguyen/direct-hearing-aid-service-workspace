import { graphql, useStaticQuery } from "gatsby";

export const useAllFavicons = () => {
  const { allFiles } = useStaticQuery(graphql`
    query allFavicons {
      allFile(filter: { ext: { in: [".png", ".ico"] } }) {
        nodes {
          name
          publicURL
          absolutePath
          relativePath
          ext
          internal {
            mediaType
          }
        }
      }
    }
  `);

  console.log(`DEBUG useAllFavicons`, { allFiles });

  //   {
  //     "name": "android-chrome-192x192",
  //     "publicURL": "/static/47ee8d2302afe3e4eafa729ca5de047e/android-chrome-192x192.png",
  //     "absolutePath": "/Users/vincentnguyen/dev/direct-hearing-aid-service-workspace/packages/gatsby-webapp/src/images/favicon/android-chrome-192x192.png",
  //     "relativePath": "favicon/android-chrome-192x192.png",
  //     "ext": ".png",
  //     "internal": {
  //         "mediaType": "image/png"
  //     }
  // }

  const favicons = allFiles?.nodes || [];

  return {
    ...favicons,
  };
};
