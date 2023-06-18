require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {}
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        sources: {
          local: true,
          //mailchimp: true
        },
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_END_POINT
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        services: {
          mailchimp: true
        }
      }
    },
    //favicon manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Plataforma digital de la construcción',
        short_name: 'Zunicom',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#5a67d8',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {}
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        siteUrl: 'https://zunicom.pe', // Your site URL without trailing slash
        services: {
          graphComment: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        services: {
          algolia: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID'
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {}
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {}
    }

  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    siteUrl: 'https://zunicom.pe',
    title: 'Zunicom',
    name: 'Zunicom',
    description: 'Plataforma digital de la Construcción',
    address: 'Perú',
    email: 'zunicomperu@gmail.com',
    phone: '',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Inicio',
        slug: '/'
      },
      /* {
        name: 'Empresas',
        slug: '/authors'
      }, */
      {
        name: 'Contacto',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
