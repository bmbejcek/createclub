module.exports = {
  siteMetadata: {
    title: "createmoreartclub",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Create More Art Club",
        short_name: "ArtClub",
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.gif", // This path is relative to the root of the site.
      },
    },
  ],
};
