// src/components/post-link.js
import React from "react"
import "../styles/post-link.css"
import { Link } from "gatsby"


export default function PostLink({ post }) {
	const { title, updatedAt, eyecatch } = post;
	const pageLink = `/post/${post.slug}/`
	const body = post.markdown.childMarkdownRemark;

	return (
		<Link to={pageLink} className="post-link-anchor">
			<div className="post-link">
			<div>
				<img src={eyecatch.url} className="post-link-image" alt="post-cover"></img>
			</div>
			<div className="post-link-text">
				<h2>{title}</h2>
				<p className="post-link-body">{body.excerpt}</p>
				<p className="post-link-date">{updatedAt}</p>
			</div>
		</div>
		</Link>
	)
}