module.exports = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type PluginOptions {
      basePath: String
      rootPath: String
    }
    type SitePlugin implements Node {
      pluginOptions: PluginOptions
    }
    type Article implements Node {
      id: ID!
      slug: String!
      title: String!
      date: Date! @dateformat
      author: String!
      excerpt(pruneLength: Int = 140): String!
      body: String!
      hero: File @fileByRelativePath
      timeToRead: String
      canonical_url: String
      secret: Boolean
      subscription: Boolean
      content_file_path: String!
    }
  `;

  createTypes(typeDefs);
};
