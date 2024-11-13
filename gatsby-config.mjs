/* eslint-disable */
import remarkGfm from "remark-gfm";

export default ({
  contentAuthors = "content/authors",
  contentPosts = "content/posts",
  pathPrefix = ""
}) => ({
  pathPrefix,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        setup: ({
          query: {
            site: { siteMetadata }
          },
          ...rest
        }) => {
          siteMetadata.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
          siteMetadata.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;
          const siteMetadataModified = siteMetadata;
          siteMetadataModified.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
          siteMetadataModified.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;

          return {
            ...siteMetadataModified,
            ...rest
          };
        },
        feeds: [
          {
            title: "blog-feed",
            serialize: ({ query: { site, allArticle } }) => {
              return allArticle.edges
                .filter(edge => !edge.node.secret)
                .map(edge => {
                  return {
                    ...edge.node,
                    description: edge.node.excerpt,
                    date: edge.node.date,
                    url: `${site.siteMetadata.siteUrl}${edge.node.slug}`,
                    guid: `${site.siteMetadata.siteUrl}${edge.node.slug}`,
                    author: edge.node.author
                  };
                });
            },
            query: `{
                allArticle(sort: {date: DESC}) {
                  edges {
                    node {
                      body
                      excerpt
                      date
                      slug
                      title
                      author
                      secret
                    }
                  }
                }
              }`,
            output: "/rss.xml"
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPosts,
        name: contentPosts
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentAuthors,
        name: contentAuthors
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true
            }
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: ["oembed", "video"],
              providers: {
                include: ["Twitter", "Instagram"]
              }
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 680,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`
                }
              ]
            }
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer"
            }
          },
          {
            resolve: `@sudaraka94/gatsby-remark-link-unfurl`,
            options: {
              processedUrlsFile: `${process.cwd()}/link-cache/cache.json`
            }
          }
        ],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [{ resolve: "rehype-slug" }]
        }
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        autoLabel: "dev-only"
      }
    }
  ]
});
