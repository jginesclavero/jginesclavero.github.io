const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: config.siteUrl,
          site_name: 'Jonatan Gines (jginesclavero) personal web',
          description: 'Jonatan Gines (jginesclavero) personal web',
          profile: {
            firstName: 'Jonatan',
            lastName: 'Gines',
            username: 'jginesclavero',
          },
          images: [
            {
              url: 'https://jginesclavero.github.io/static/avatar-fb2a276bae6234f6c716105f396c892a.png',
              width: 640,
              height: 640
            }
          ],
        },
        twitter: {
          handle: '@Jonatan_Gines',
          site: '@Jonatan_Gines',
          cardType: 'summary_large_image',
        },
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
