// src/pages/404.js
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NOT_FOUND_IMG from "../../static/404.jpg"
import "../styles/404.css"

export default function NotFound() {
	return (
		<Layout>
			<Seo title="404 Not Found" description="該当するページが無いようですね、悲しみ🥹" />
			<div className="not-found-message">
				<h1>404 Not Found</h1>
				<Link to="/">トップページへ</Link>
			</div>
			<img src={NOT_FOUND_IMG} className="not-found-image" alt="not found" />
		</Layout>
	)
}