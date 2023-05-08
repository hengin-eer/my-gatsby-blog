/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: "Hengineer.tech",
		description: "Hengineerのポートフォリオ & ブログ",
		author: "Engineer X"
	},
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
				accessToken: process.env.GATSBY_CONTENTFUL_API_KEY
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				commonmark: true,
				footnotes: true,
				pedantic: true,
				gfm: true,
				plugins: [],
			},
		},
		`gatsby-plugin-image`,
	],
}
