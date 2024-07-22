import path from "path";

const createPagesMdx = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query allMdx {
      allMdx(
        sort: { frontmatter: { slug: ASC } }
        filter: { frontmatter: { slug: { regex: "/service/" } } }
      ) {
        totalCount
        nodes {
          id
          excerpt(pruneLength: 100)
          tableOfContents
          body
          frontmatter {
            slug
            title
            description
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

  // you'll call `createPage` for each result
  result.data.allMdx.nodes.forEach((node) => {
    console.log(`gatsby-node: createPagesMdx`, { path: node.frontmatter.slug });
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: node.frontmatter.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      // component: node.internal.contentFilePath,
      component: path.resolve("./src/templates/ServiceTemplate.js"),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        title: node.frontmatter.title,
        description: node?.frontmatter?.description,
        excerpt: node?.excerpt,
        data: node?.body,
        tableOfContents: node?.tableOfContents,
        breadcrumbs: [
          { name: "Services", path: "/services" },
          { name: node.frontmatter.title, path: node.frontmatter.slug },
        ],
      },
    });
  });
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
export const createPages = async ({ graphql, actions, reporter }) => {
  await createPagesMdx({ graphql, actions, reporter });
};
