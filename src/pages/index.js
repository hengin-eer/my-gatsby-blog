// src/pages/index.js
import React from "react"
import LOGO_IMG from "../../static/logo-bg-white.png"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="Hengineer.tech" description="Hengineer's blog" eyecatch={LOGO_IMG} type="website" />
      <Hero />
      {data.allContentfulBlog.edges.map(edge =>
          <PostLink key={edge.node.contentKey} post={edge.node} />
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
        contentKey
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