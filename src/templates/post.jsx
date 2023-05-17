// src/templates/post.js
import React from "react"
import "../styles/post.css"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react"
import FollowMe from "../components/follow-me";

export default function Post({ pageContext }) {
	const { title, updatedAt, eyecatch } = pageContext.post;
	const body = pageContext.post.markdown.childMdx;
	
	const mdxComponent = { FollowMe }

	return (
		<Layout>
			<Seo title={title} description={body.excerpt} />
			<div className="post-header">
				<h1>{title}</h1>
				<p className="post-date">{updatedAt}</p>
			</div>
			<img src={eyecatch.url} className="post-image" alt={eyecatch.title}></img>
			{/* <div dangerouslySetInnerHTML={{ __html: body.html }} className="post-body" /> */}
			<div className="post-body">
				<MDXProvider components={mdxComponent}>
					<MDXRenderer>{body.body}</MDXRenderer>
				</MDXProvider>
			</div>
		</Layout>
	)
}