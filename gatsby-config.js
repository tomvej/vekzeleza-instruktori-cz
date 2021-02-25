const sass = require('sass');

module.exports = {
    siteMetadata: {
        title: 'Věk železa',
        description: 'TBD',
        author: 'Tvrz',
        lang: 'cs',
    },
    plugins: [
        'gatsby-plugin-typegen',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-fontawesome-css',
        /*{
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'images',
            path: '${__dirname}/src/images',
          },
        },*/
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        /*{
          resolve: 'gatsby-plugin-manifest',
          options: {
            name: 'Tvrz 2021',
            short_name: 'Tvrz',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
          },
        },*/
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                implementation: sass,
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: ['remark-czech-preprocessor'],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'text',
                path: `${__dirname}/src/text`,
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Proza Libre',
                    'Fondamento',
                ],
                display: 'swap',
            }
        },
    ],
};
