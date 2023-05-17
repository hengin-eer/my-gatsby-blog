// gatsby-node.js
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	const result = await graphql(
		`
		{
			allContentfulBlog {
				edges {
					node {
						title
						slug
						updatedAt(locale: "ja-JP", formatString: "YYYY/MM/DD")
						eyecatch {
							url
							title
						}
						markdown {
							childMdx {
								body
								excerpt(pruneLength: 100)
								tableOfContents(maxDepth: 3)
							}
						}
					}
				}
			}
		}
    `
	)

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	const { edges } = result.data.allContentfulBlog

	edges.forEach(edge => {
		createPage({
			path: `/post/${edge.node.slug}/`,
			component: path.resolve("./src/templates/post.jsx"),
			context: { post: edge.node }
		})
	});
}