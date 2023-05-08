// src/pages/index.js
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="Hengineer.tech" description="Hengineer's blog" />
      <Hero />
      {data.allContentfulBlog.edges.map(edge =>
          <PostLink key={edge.node.slug} post={edge.node} />
        )}
    </Layout>
  )
}

export const query = graphql`
query allContentfulBlog {
  allContentfulBlog {
    edges {
      node {
        title
        slug
        createdAt(locale: "ja-JP", formatString: "YYYY/MM/DD")
        updatedAt(locale: "ja-JP", formatString: "YYYY/MM/DD")
        eyecatch {
          url
          title
        }
        markdown {
          childMarkdownRemark {
            excerpt(format: PLAIN, pruneLength: 100)
          }
        }
      }
    }
  }
}
`