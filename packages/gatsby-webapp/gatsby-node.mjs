// import path from "path";

export const onPreInit = ({ actions }) => {
  console.log(`gatsby-node: onPreInit`, { actions });
};

const createPagesMdx = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `);
    console.log(`gatsby-node: createPagesMdx`, { result });

    if (result.errors) {
      reporter.panicOnBuild("gatsby-node: createPagesMdx Error", result.errors);
    }

    // Create blog post pages.
    const posts = result.data.allMdx.nodes;

    // you'll call `createPage` for each result
    posts.forEach((node) => {
      console.log(`gatsby-node: createPagesMdx`, { path })
      createPage({
        // As mentioned above you could also query something else like frontmatter.title above and use a helper function
        // like slugify to create a slug
        path: node.frontmatter.slug,
        // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
        component: node.internal.contentFilePath,
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      });
    });
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
export const createPages = async ({ graphql, actions, reporter }) => {
  await createPagesMdx({ graphql, actions, reporter })
};

export const onPostBuild = (context) => {
  console.log(`gatsby-node: onPostBuild`);
};
