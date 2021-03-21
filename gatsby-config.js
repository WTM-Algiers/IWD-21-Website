module.exports = {
  siteMetadata: {
    title: `IWD-21`,
    description: `International's Women's Day `,
    author: `@WTM_Algiers`,
    siteUrl: "https://iwd21.wtmalgiers.org",
    keywords: [
      "WTM",
      "IWD",
      "Algiers",
      "Algeria",
      "Dev",
      "Development",
      "Technology",
      "Technologies",
      "Web",
      "Mobile",
      "Machine Learning",
      "Information",
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Cairo", "Open Sans", "Roboto", "Montserrat"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-next-seo`,
    `gatsby-transformer-inline-svg`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/index.css"],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind-styled-components`,
        short_name: `tailwindsc`,
        start_url: `/`,
        background_color: `#191C48`,
        theme_color: `#191C48`,
        display: `standalone`,
        icon: `docs/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:300,400,800`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
